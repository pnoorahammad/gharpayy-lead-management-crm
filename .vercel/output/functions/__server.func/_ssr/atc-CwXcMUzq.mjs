import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, T as ScrollArea } from "./AppShell-Cp2f_YYK.mjs";
import { u as useApp, B as Badge, C as Card, aq as CardHeader, ar as CardTitle, ap as CardContent, k as Button } from "./router-kYRMoTX_.mjs";
import { u as useATC, f as freshnessFor, a as ackTeam, b as ackOwner, d as convertHold, e as releaseHold, r as reconfirmProperty, F as FreshnessBadge, g as formatRemaining } from "./FreshnessBadge-BevgLw4-.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { bs as Plane, a8 as Lock, g as TriangleAlert, l as ShieldCheck, f as Activity, B as Building2, s as Clock, aC as StickyNote, bt as DoorOpen, bu as PartyPopper, b6 as UserCheck, I as IndianRupee, bv as AlarmClockOff, bw as LockOpen, _ as Star, aQ as CheckCheck, bx as CalendarCheck2, $ as Search, aF as ClipboardList } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/zustand.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./store-CeJJuoup.mjs";
import "./analytics-Ds6VG4Ib.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/cmdk.mjs";
import "./personas-DYCrD02E.mjs";
import "../_libs/radix-ui__react-scroll-area.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/date-fns.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/radix-ui__react-label.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function HoldCountdown({ hold }) {
  const [, force] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => force((n) => n + 1), 1e3);
    return () => clearInterval(t);
  }, []);
  if (hold.status !== "active") {
    const tone2 = hold.status === "converted" ? "bg-won text-white" : hold.status === "expired" ? "bg-do-now text-white" : "bg-muted text-muted-foreground";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `text-[10px] ${tone2}`, children: hold.status });
  }
  const remain = hold.expiresAt - Date.now();
  const tone = remain < 5 * 6e4 ? "bg-do-now text-white" : remain < 30 * 6e4 ? "bg-do-today text-white" : "bg-do-soon text-white";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: `text-[10px] gap-1 ${tone}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-2.5 w-2.5" }),
    " ",
    formatRemaining(remain)
  ] });
}
const ICONS = {
  requirement: ClipboardList,
  matched: Search,
  "visit-scheduled": CalendarCheck2,
  "visit-done": CheckCheck,
  shortlisted: Star,
  "hold-created": Lock,
  "hold-released": LockOpen,
  "hold-expired": AlarmClockOff,
  "payment-initiated": IndianRupee,
  "team-ack": ShieldCheck,
  "owner-ack": UserCheck,
  "booking-confirmed": PartyPopper,
  "check-in": DoorOpen,
  note: StickyNote
};
const TONE = {
  "hold-expired": "text-do-now",
  "hold-released": "text-muted-foreground",
  "booking-confirmed": "text-won",
  "check-in": "text-won",
  "owner-ack": "text-won"
};
function TenantTimeline({ leadId, max = 25 }) {
  const { events } = useATC();
  const list = events.filter((e) => e.leadId === leadId).slice(0, max);
  if (list.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground italic px-2 py-4 text-center", children: "No timeline events yet. Actions taken in the Impact Queue land here automatically." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative border-l border-border/60 ml-2 space-y-3 py-1", children: list.map((e) => {
    const Icon = ICONS[e.kind] ?? StickyNote;
    const tone = TONE[e.kind] ?? "text-foreground";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "ml-3 pl-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[7px] mt-1 flex h-3 w-3 items-center justify-center rounded-full bg-background border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-2.5 w-2.5 ${tone}` }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs font-medium ${tone}`, children: e.text }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: new Date(e.ts).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }) })
    ] }, e.id);
  }) });
}
function ATCWarRoom() {
  const {
    leads,
    properties,
    tours,
    bookings
  } = useApp();
  const {
    holds
  } = useATC();
  const [focusLead, setFocusLead] = reactExports.useState(null);
  const active = holds.filter((h) => h.status === "active");
  const stale = reactExports.useMemo(() => properties.filter((p) => freshnessFor(p.id).stale), [
    properties,
    holds
    /* re-eval on store change */
  ]);
  const pendingOwnerAck = active.filter((h) => !h.ownerAck);
  const pendingTeamAck = active.filter((h) => !h.teamAck);
  const visitsToday = tours.filter((t) => {
    const d = new Date(t.scheduledAt);
    const today = /* @__PURE__ */ new Date();
    return d.toDateString() === today.toDateString();
  });
  const bookingsToday = bookings.filter((b) => {
    const d = new Date(b.ts);
    const today = /* @__PURE__ */ new Date();
    return d.toDateString() === today.toDateString();
  });
  const freshnessPct = properties.length === 0 ? 100 : Math.round((properties.length - stale.length) / properties.length * 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-6 space-y-4 max-w-[1400px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "h-5 w-5 text-do-now" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-bold", children: "Air Traffic Control" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: "Live · single source of truth" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { tone: "do-now", label: "Active holds", value: active.length, icon: Lock }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { tone: "do-today", label: "Owner ack pending", value: pendingOwnerAck.length, icon: TriangleAlert }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { tone: "do-soon", label: "Team ack pending", value: pendingTeamAck.length, icon: ShieldCheck }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { tone: "won", label: "Bookings today", value: bookingsToday.length, icon: Activity }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { tone: freshnessPct >= 80 ? "won" : freshnessPct >= 50 ? "do-today" : "do-now", label: "Inventory freshness", value: `${freshnessPct}%`, icon: Building2 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-4 w-4 text-do-now" }),
          " Active smart holds (",
          active.length,
          ")"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[360px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2", children: [
          active.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyMsg, { text: "No active holds. Lock a room from the Impact Queue → Hold." }),
          active.map((h) => {
            const lead = leads.find((l) => l.id === h.leadId);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border bg-card p-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold truncate", children: h.leadName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                  "→ ",
                  h.propertyName,
                  h.bedRef ? ` · ${h.bedRef}` : ""
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HoldCountdown, { hold: h }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-1.5 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: h.teamAck ? "default" : "outline", className: `text-[10px] ${h.teamAck ? "bg-won text-white" : "border-do-today/50 text-do-today"}`, children: [
                  "team ",
                  h.teamAck ? "✓" : "pending"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: h.ownerAck ? "default" : "outline", className: `text-[10px] ${h.ownerAck ? "bg-won text-white" : "border-do-today/50 text-do-today"}`, children: [
                  "owner ",
                  h.ownerAck ? "✓" : "pending"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex gap-1", children: [
                  !h.teamAck && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-6 text-[10px] px-2", onClick: () => {
                    ackTeam(h.id);
                    toast.success("Team confirmed");
                  }, children: "team ack" }),
                  !h.ownerAck && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-6 text-[10px] px-2", onClick: () => {
                    ackOwner(h.id);
                    toast.success("Owner confirmed");
                  }, children: "owner ack" }),
                  h.teamAck && h.ownerAck && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-6 text-[10px] px-2 bg-won hover:bg-won/90 text-white", onClick: () => {
                    convertHold(h.id);
                    toast.success("Booking confirmed");
                  }, children: "confirm booking" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-6 text-[10px] px-2", onClick: () => releaseHold(h.id, "manual"), children: "release" })
                ] })
              ] }),
              lead && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-[10px] text-muted-foreground underline mt-1", onClick: () => setFocusLead(lead.id), children: "view timeline" })
            ] }, h.id);
          })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-do-today" }),
          " Stale inventory (",
          stale.length,
          ")",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] ml-1", children: [
            ">",
            " 6h or never verified"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[360px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-1.5", children: [
          stale.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyMsg, { text: "All inventory verified within 6h. 🛬 Clear skies." }),
          stale.map((p) => {
            const f = freshnessFor(p.id);
            const ageLabel = f.ageMs === null ? "never verified" : `${Math.floor(f.ageMs / 36e5)}h old`;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-md border bg-card p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", children: [
                  p.area,
                  " · ",
                  p.vacantBeds,
                  "/",
                  p.totalBeds,
                  " beds · ",
                  ageLabel
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-6 text-[10px]", onClick: () => {
                reconfirmProperty(p.id);
                toast.success(`${p.name} verified`);
              }, children: "reconfirm" })
            ] }, p.id);
          })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm", children: [
          "Today’s flight board · ",
          visitsToday.length,
          " visits"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3", children: [
          visitsToday.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyMsg, { text: "No visits on the board today." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: visitsToday.map((t) => {
            const lead = leads.find((l) => l.id === t.leadId);
            const prop = properties.find((p) => p.id === t.propertyId);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded border bg-card p-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground w-12", children: new Date(t.scheduledAt).toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit"
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium truncate flex-1", children: lead?.name ?? t.leadId }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground truncate", children: [
                "→ ",
                prop?.name ?? t.propertyId
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: t.status }),
              prop && /* @__PURE__ */ jsxRuntimeExports.jsx(FreshnessBadge, { propertyId: prop.id, compact: true })
            ] }, t.id);
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm flex items-center gap-2", children: [
          "Tenant timeline",
          focusLead && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: leads.find((l) => l.id === focusLead)?.name ?? focusLead })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3", children: [
          !focusLead && /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyMsg, { text: "Click ‘view timeline’ on any hold to see its flight log." }),
          focusLead && /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[320px] pr-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TenantTimeline, { leadId: focusLead }) })
        ] })
      ] })
    ] })
  ] });
}
function KPI({
  label,
  value,
  icon: Icon,
  tone
}) {
  const toneCls = {
    "do-now": "border-do-now/40 text-do-now",
    "do-today": "border-do-today/40 text-do-today",
    "do-soon": "border-do-soon/40 text-do-soon",
    "won": "border-won/40 text-won"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-md border bg-card p-3 ${toneCls[tone]}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] uppercase tracking-wide", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3" }),
      " ",
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold mt-1", children: value })
  ] });
}
function EmptyMsg({
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground italic text-center py-6", children: text });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ATCWarRoom, {}) });
export {
  SplitComponent as component
};
