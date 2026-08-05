import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AdminShell } from "./AdminShell-BVNlkZSs.mjs";
import { u as useAdminRows } from "./use-admin-rows-C8LQh_0S.mjs";
import { u as useApp, q as cn } from "./router-Brs45mHz.mjs";
import { u as useAuditLog } from "./audit-log-BbY99Bzt.mjs";
import { a as flagIntervention, b as bulkReassign } from "./admin-actions-F5GjcinX.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { b6 as UserCheck, bX as Power, am as Download, bn as Megaphone, bI as Snowflake, af as ShieldAlert } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./store-CeJJuoup.mjs";
import "../_libs/zustand.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
const KILL_KEY = "admin.kill.sequences";
function CommandBridge() {
  const rows = useAdminRows();
  const {
    tcms,
    setRole,
    setCurrentTcmId
  } = useApp();
  const log = useAuditLog((s) => s.log);
  const [impersonateId, setImpersonateId] = reactExports.useState("");
  const [broadcast, setBroadcast] = reactExports.useState("");
  const [paused, setPaused] = reactExports.useState(() => typeof window !== "undefined" && localStorage.getItem(KILL_KEY) === "1");
  const dormant = reactExports.useMemo(() => rows.filter((r) => r.status === "dormant"), [rows]);
  const stuckHot = reactExports.useMemo(() => rows.filter((r) => !r.booked && r.status !== "lost" && r.probability >= 70 && Date.now() - r.lastTouchTs > 2 * 864e5), [rows]);
  function doImpersonate() {
    if (!impersonateId) return;
    setRole("tcm");
    setCurrentTcmId(impersonateId);
    const t = tcms.find((x) => x.id === impersonateId);
    log({
      actorId: "admin",
      actorName: "Admin",
      entityType: "session",
      entityId: impersonateId,
      action: "admin.impersonate",
      summary: `Impersonating ${t?.name ?? impersonateId}`
    });
    toast.warning(`Now impersonating ${t?.name}. Switch back via View as.`);
  }
  function togglePause() {
    const next = !paused;
    setPaused(next);
    if (typeof window !== "undefined") {
      localStorage.setItem(KILL_KEY, next ? "1" : "0");
    }
    log({
      actorId: "admin",
      actorName: "Admin",
      entityType: "system",
      entityId: "sequences",
      action: next ? "admin.kill.on" : "admin.kill.off",
      summary: next ? "Paused all sequences" : "Resumed sequences"
    });
    toast[next ? "warning" : "success"](next ? "All sequences paused org-wide" : "Sequences resumed");
  }
  function sendBroadcast() {
    if (!broadcast.trim()) return;
    log({
      actorId: "admin",
      actorName: "Admin",
      entityType: "broadcast",
      entityId: String(Date.now()),
      action: "admin.broadcast",
      summary: `Broadcast → ${tcms.length} TCMs: ${broadcast.slice(0, 80)}`
    });
    navigator.clipboard?.writeText(broadcast).catch(() => {
    });
    toast.success(`Broadcast queued for ${tcms.length} TCMs · copied to clipboard`);
    setBroadcast("");
  }
  function snapshotNow() {
    const blob = new Blob([JSON.stringify({
      ts: Date.now(),
      rows
    }, null, 2)], {
      type: "application/json"
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `admin-snapshot-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 19)}.json`;
    a.click();
    log({
      actorId: "admin",
      actorName: "Admin",
      entityType: "system",
      entityId: "snapshot",
      action: "admin.snapshot",
      summary: `Snapshot of ${rows.length} rows downloaded`
    });
  }
  function rebalanceDormant() {
    if (!dormant.length) return toast.info("No dormant leads to rebalance");
    if (!tcms.length) return;
    const fittest = tcms.slice().sort((a, b) => b.conversionRate - a.conversionRate)[0];
    bulkReassign(dormant.map((d) => d.lead.id), fittest.id);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminShell, { title: "Command Bridge", sub: "Impersonate, broadcast, pause, snapshot — every god-mode lever.", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "h-4 w-4" }), title: "Impersonate", tone: "warn", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-2", children: "Sign in as any TCM to debug their desk. Logged + reversible." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: impersonateId, onChange: (e) => setImpersonateId(e.target.value), className: "w-full text-xs bg-background border border-border rounded px-2 py-1.5 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select TCM…" }),
          tcms.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: t.id, children: [
            t.name,
            " · ",
            t.zone
          ] }, t.id))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: doImpersonate, disabled: !impersonateId, className: "w-full text-xs bg-warning text-warning-foreground rounded py-1.5 font-medium disabled:opacity-40", children: "Become this TCM" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "h-4 w-4" }), title: "Kill switch", tone: paused ? "danger" : "ok", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-2", children: "Pause every WhatsApp sequence + automation org-wide. Use during incidents." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-center py-2 rounded mb-2 font-mono text-xs", paused ? "bg-destructive/15 text-destructive" : "bg-success/15 text-success"), children: paused ? "PAUSED" : "RUNNING" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: togglePause, className: cn("w-full text-xs rounded py-1.5 font-medium", paused ? "bg-success text-success-foreground" : "bg-destructive text-destructive-foreground"), children: paused ? "Resume sequences" : "Pause all sequences" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }), title: "Snapshot now", tone: "info", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-2", children: "Download current state of every joined admin row as JSON. Use for forensics or BI export." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mb-2 font-mono", children: [
          rows.length,
          " rows · ",
          (JSON.stringify(rows).length / 1024).toFixed(1),
          " KB"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: snapshotNow, className: "w-full text-xs bg-info text-info-foreground rounded py-1.5 font-medium", children: "Download snapshot" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-4 w-4" }), title: "Broadcast to all TCMs", tone: "info", className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: broadcast, onChange: (e) => setBroadcast(e.target.value), placeholder: "One message — every TCM sees this on next refresh + WhatsApp copy.", rows: 3, className: "w-full text-xs bg-background border border-border rounded px-2 py-1.5 mb-2 font-mono" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
            broadcast.length,
            "/280 · ",
            tcms.length,
            " recipients"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: sendBroadcast, disabled: !broadcast.trim(), className: "text-xs bg-accent text-accent-foreground rounded px-3 py-1.5 font-medium disabled:opacity-40", children: "Send + copy" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Snowflake, { className: "h-4 w-4" }), title: "Rebalance dormant", tone: "warn", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-2", children: "Bulk-reassign every dormant lead to the top-converting TCM." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mb-2 font-mono", children: [
          dormant.length,
          " dormant lead(s)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: rebalanceDormant, className: "w-full text-xs bg-warning text-warning-foreground rounded py-1.5 font-medium", children: "Rebalance now" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3 mt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-4 w-4 text-destructive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold", children: "Intervention queue · hot leads going cold" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-[10px] uppercase text-muted-foreground border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1.5", children: "Lead" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left", children: "TCM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Prob" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Age" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", {})
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
          stuckHot.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5", children: r.lead.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: r.tcm?.name ?? "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-right font-mono text-accent", children: [
              r.probability,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-right font-mono", children: [
              Math.round((Date.now() - r.lastTouchTs) / 864e5),
              "d"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => flagIntervention(r.lead.id, "Hot lead stalled · admin escalation"), className: "text-[10px] px-2 py-0.5 rounded bg-destructive/15 text-destructive hover:bg-destructive/25", children: "Flag" }) })
          ] }, r.lead.id)),
          !stuckHot.length && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "text-center text-muted-foreground py-4", children: "No hot leads stalled. Excellent." }) })
        ] })
      ] })
    ] })
  ] });
}
function Card({
  icon,
  title,
  tone,
  children,
  className
}) {
  const border = {
    ok: "border-success/40",
    info: "border-info/40",
    warn: "border-warning/40",
    danger: "border-destructive/40"
  }[tone];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-xl border bg-card p-3", border, className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1.5 text-xs font-semibold", children: [
      icon,
      title
    ] }),
    children
  ] });
}
export {
  CommandBridge as component
};
