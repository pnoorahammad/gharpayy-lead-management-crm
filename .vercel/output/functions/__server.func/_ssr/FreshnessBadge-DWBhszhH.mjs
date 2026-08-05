import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Badge, k as Button } from "./router-Brs45mHz.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { l as ShieldCheck, g as TriangleAlert } from "../_libs/lucide-react.mjs";
const KEY = "atc_state_v1";
const EMPTY = { holds: [], freshness: {}, events: [] };
const HOLD_TTL_MS = 2 * 60 * 60 * 1e3;
const FRESH_TTL_MS = 6 * 60 * 60 * 1e3;
const EVT = "atc:change";
function uid(p) {
  return `${p}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}
function load() {
  if (typeof window === "undefined") return EMPTY;
  try {
    const r = localStorage.getItem(KEY);
    return r ? { ...EMPTY, ...JSON.parse(r) } : EMPTY;
  } catch {
    return EMPTY;
  }
}
function save(s) {
  localStorage.setItem(KEY, JSON.stringify(s));
  window.dispatchEvent(new CustomEvent(EVT));
}
function createHold(input) {
  const s = load();
  const now = Date.now();
  const hold = {
    id: uid("hld"),
    leadId: input.leadId,
    leadName: input.leadName,
    propertyId: input.propertyId,
    propertyName: input.propertyName,
    bedRef: input.bedRef,
    amount: input.amount,
    notes: input.notes,
    createdAt: now,
    expiresAt: now + (input.ttlMs ?? HOLD_TTL_MS),
    status: "active",
    teamAck: false,
    ownerAck: false
  };
  s.holds.unshift(hold);
  s.events.unshift({
    id: uid("evt"),
    leadId: input.leadId,
    ts: now,
    kind: "hold-created",
    text: `Hold created · ${input.propertyName}${input.bedRef ? ` · ${input.bedRef}` : ""}`,
    meta: { holdId: hold.id, expiresAt: hold.expiresAt }
  });
  save(s);
  return hold;
}
function releaseHold(id, reason = "manual") {
  const s = load();
  const h = s.holds.find((x) => x.id === id);
  if (!h || h.status !== "active") return;
  h.status = "released";
  s.events.unshift({
    id: uid("evt"),
    leadId: h.leadId,
    ts: Date.now(),
    kind: "hold-released",
    text: `Hold released · ${h.propertyName} (${reason})`
  });
  save(s);
}
function convertHold(id) {
  const s = load();
  const h = s.holds.find((x) => x.id === id);
  if (!h) return;
  h.status = "converted";
  s.events.unshift({
    id: uid("evt"),
    leadId: h.leadId,
    ts: Date.now(),
    kind: "booking-confirmed",
    text: `Hold converted to booking · ${h.propertyName}`
  });
  save(s);
}
function ackTeam(id) {
  const s = load();
  const h = s.holds.find((x) => x.id === id);
  if (!h) return;
  h.teamAck = true;
  s.events.unshift({
    id: uid("evt"),
    leadId: h.leadId,
    ts: Date.now(),
    kind: "team-ack",
    text: `Team confirmed hold · ${h.propertyName}`
  });
  save(s);
}
function ackOwner(id) {
  const s = load();
  const h = s.holds.find((x) => x.id === id);
  if (!h) return;
  h.ownerAck = true;
  s.events.unshift({
    id: uid("evt"),
    leadId: h.leadId,
    ts: Date.now(),
    kind: "owner-ack",
    text: `Owner approved hold · ${h.propertyName}`
  });
  save(s);
}
function reconfirmProperty(propertyId, verifiedBy = "team") {
  const s = load();
  s.freshness[propertyId] = { propertyId, lastVerifiedAt: Date.now(), verifiedBy };
  save(s);
}
function logTimeline(leadId, kind, text, meta) {
  const s = load();
  s.events.unshift({ id: uid("evt"), leadId, ts: Date.now(), kind, text, meta });
  save(s);
}
function freshnessFor(propertyId) {
  const s = load();
  const f = s.freshness[propertyId];
  if (!f) return { stale: true, ageMs: null, lastVerifiedAt: null };
  const age = Date.now() - f.lastVerifiedAt;
  return { stale: age > FRESH_TTL_MS, ageMs: age, lastVerifiedAt: f.lastVerifiedAt };
}
function useATC() {
  const [s, setS] = reactExports.useState(() => load());
  reactExports.useEffect(() => {
    const reload = () => setS(load());
    window.addEventListener(EVT, reload);
    window.addEventListener("storage", reload);
    const t = setInterval(() => {
      const cur = load();
      let changed = false;
      cur.holds.forEach((h) => {
        if (h.status === "active" && h.expiresAt <= Date.now()) {
          h.status = "expired";
          cur.events.unshift({
            id: uid("evt"),
            leadId: h.leadId,
            ts: Date.now(),
            kind: "hold-expired",
            text: `Hold auto-expired · ${h.propertyName}`
          });
          changed = true;
        }
      });
      if (changed) save(cur);
      else setS(cur);
    }, 3e4);
    return () => {
      window.removeEventListener(EVT, reload);
      window.removeEventListener("storage", reload);
      clearInterval(t);
    };
  }, []);
  return s;
}
function formatRemaining(ms) {
  if (ms <= 0) return "expired";
  const m = Math.floor(ms / 6e4);
  if (m >= 60) return `${Math.floor(m / 60)}h ${m % 60}m`;
  if (m >= 1) return `${m}m`;
  return `${Math.floor(ms / 1e3)}s`;
}
function FreshnessBadge({ propertyId, compact = false }) {
  useATC();
  const f = freshnessFor(propertyId);
  if (!f.stale && f.ageMs !== null) {
    const m = Math.floor(f.ageMs / 6e4);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] gap-1 border-won/40 text-won", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-2.5 w-2.5" }),
      " verified ",
      m < 60 ? `${m}m ago` : `${Math.floor(m / 60)}h ago`
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] gap-1 border-do-today/50 text-do-today", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-2.5 w-2.5" }),
      " needs reconfirm"
    ] }),
    !compact && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        variant: "ghost",
        className: "h-5 px-1.5 text-[10px]",
        onClick: (e) => {
          e.stopPropagation();
          reconfirmProperty(propertyId);
          toast.success("Marked verified");
        },
        children: "reconfirm"
      }
    )
  ] });
}
export {
  FreshnessBadge as F,
  ackTeam as a,
  ackOwner as b,
  createHold as c,
  convertHold as d,
  releaseHold as e,
  freshnessFor as f,
  formatRemaining as g,
  logTimeline as l,
  reconfirmProperty as r,
  useATC as u
};
