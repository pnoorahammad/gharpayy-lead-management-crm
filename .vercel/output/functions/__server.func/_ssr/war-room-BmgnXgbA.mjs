import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, u as useQuotations } from "./AppShell-qrUFATK5.mjs";
import { u as useApp, B as Badge } from "./router-Brs45mHz.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { w as Shield, x as Calendar, i as FileText, g as TriangleAlert, F as Flame, y as Target, d as Users, Z as Zap, f as Activity } from "../_libs/lucide-react.mjs";
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
function isToday(iso) {
  return new Date(iso).toDateString() === (/* @__PURE__ */ new Date()).toDateString();
}
function isThisMonth(iso) {
  const d = new Date(iso);
  const n = /* @__PURE__ */ new Date();
  return d.getFullYear() === n.getFullYear() && d.getMonth() === n.getMonth();
}
function WarRoom() {
  const {
    leads,
    tours,
    tcms,
    bookings,
    properties
  } = useApp();
  const quotes = useQuotations((s) => s.quotations);
  const stats = reactExports.useMemo(() => {
    const toursToday = tours.filter((t) => isToday(t.scheduledAt));
    const overdueTours = tours.filter((t) => t.status === "scheduled" && +new Date(t.scheduledAt) + 30 * 6e4 < Date.now());
    const staleQuotes = quotes.filter((q) => Date.now() - +new Date(q.sentAt) > 24 * 36e5);
    const draftsOpen = tours.filter((t) => t.status === "completed" && !t.postTour?.filledAt);
    const hotLeads = leads.filter((l) => l.intent === "hot" && l.stage !== "booked" && l.stage !== "dropped");
    const bookingsMonth = bookings.filter((b) => isThisMonth(b.ts));
    const forecast = Math.round(hotLeads.length * 0.35 + toursToday.length * 0.18);
    return {
      toursToday,
      overdueTours,
      staleQuotes,
      draftsOpen,
      hotLeads,
      bookingsMonth,
      forecast
    };
  }, [leads, tours, quotes, bookings]);
  const tcmLoad = reactExports.useMemo(() => {
    return tcms.map((t) => {
      const myLeads = leads.filter((l) => l.assignedTcmId === t.id && l.stage !== "booked" && l.stage !== "dropped");
      const myToursToday = stats.toursToday.filter((tr) => tr.tcmId === t.id);
      const myOverdue = stats.overdueTours.filter((tr) => tr.tcmId === t.id).length + stats.staleQuotes.filter((q) => q.tcmId === t.id).length;
      return {
        tcm: t,
        openLeads: myLeads.length,
        toursToday: myToursToday.length,
        overdue: myOverdue
      };
    }).sort((a, b) => b.overdue - a.overdue || b.openLeads - a.openLeads);
  }, [tcms, leads, stats]);
  const escalations = reactExports.useMemo(() => {
    const list = [];
    stats.overdueTours.forEach((t) => {
      const l = leads.find((x) => x.id === t.leadId);
      const tcm = tcms.find((x) => x.id === t.tcmId)?.name;
      if (l) list.push({
        id: `tour-${t.id}`,
        name: l.name,
        reason: "Tour overdue · no outcome",
        tcm,
        severity: "high"
      });
    });
    stats.staleQuotes.forEach((q) => {
      const l = leads.find((x) => x.id === q.leadId);
      const tcm = tcms.find((x) => x.id === q.tcmId)?.name;
      if (l) list.push({
        id: `quote-${q.id}`,
        name: l.name,
        reason: "Quote stale > 24h",
        tcm,
        severity: "med"
      });
    });
    stats.draftsOpen.forEach((t) => {
      const l = leads.find((x) => x.id === t.leadId);
      const tcm = tcms.find((x) => x.id === t.tcmId)?.name;
      if (l) list.push({
        id: `draft-${t.id}`,
        name: l.name,
        reason: "Post-tour draft unfilled",
        tcm,
        severity: "high"
      });
    });
    return list.slice(0, 20);
  }, [stats, leads, tcms]);
  const zoneMap = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    leads.forEach((l) => {
      const z = l.preferredArea || "—";
      const e = map.get(z) ?? {
        open: 0,
        tours: 0,
        quotes: 0,
        booked: 0
      };
      if (l.stage !== "booked" && l.stage !== "dropped") e.open++;
      if (l.stage === "booked") e.booked++;
      map.set(z, e);
    });
    tours.forEach((t) => {
      const p = properties.find((x) => x.id === t.propertyId);
      const z = p?.area ?? "—";
      const e = map.get(z) ?? {
        open: 0,
        tours: 0,
        quotes: 0,
        booked: 0
      };
      e.tours++;
      map.set(z, e);
    });
    quotes.forEach((q) => {
      const p = properties.find((x) => x.id === q.propertyId);
      const z = p?.area ?? "—";
      const e = map.get(z) ?? {
        open: 0,
        tours: 0,
        quotes: 0,
        booked: 0
      };
      e.quotes++;
      map.set(z, e);
    });
    return Array.from(map.entries()).map(([zone, v]) => ({
      zone,
      ...v
    })).sort((a, b) => b.open - a.open).slice(0, 10);
  }, [leads, tours, quotes, properties]);
  const maxOpen = Math.max(1, ...zoneMap.map((z) => z.open));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between border-b border-border pb-3 flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-[0.2em] text-danger font-semibold flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-3 w-3" }),
          " Manager · war room"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-semibold", children: "Morning Command" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Queue health · SLA breaches · TCM load · today's forecast · escalation ladder." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { icon: Calendar, label: "Tours today", value: stats.toursToday.length, tone: "primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { icon: FileText, label: "Stale quotes", value: stats.staleQuotes.length, tone: stats.staleQuotes.length ? "danger" : "muted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { icon: TriangleAlert, label: "Overdue", value: stats.overdueTours.length + stats.draftsOpen.length, tone: stats.overdueTours.length + stats.draftsOpen.length ? "danger" : "muted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { icon: Flame, label: "Hot leads", value: stats.hotLeads.length, tone: "warning" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KPI, { icon: Target, label: "Forecast", value: stats.forecast, tone: "success" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-3 lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider font-semibold", children: "TCM Load" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          tcmLoad.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: "No TCMs." }),
          tcmLoad.map(({
            tcm,
            openLeads,
            toursToday,
            overdue
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border p-2 hover:bg-muted/30 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: tcm.name }),
              overdue > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[9px] bg-danger/10 text-danger border-danger/40", children: [
                overdue,
                " breach"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[11px] text-muted-foreground mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: openLeads }),
                " open"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: toursToday }),
                " tours"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto font-mono", children: [
                Math.round((tcm.conversionRate ?? 0) * 100),
                "% conv"
              ] })
            ] })
          ] }, tcm.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-danger/30 bg-gradient-to-br from-danger/5 to-card p-3 lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5 text-danger" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider font-semibold text-danger", children: "Escalation Ladder" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "ml-auto text-[9px] bg-danger/10 text-danger border-danger/40", children: escalations.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 max-h-[440px] overflow-y-auto", children: [
          escalations.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-success italic", children: "All clear. Nothing escalating." }),
          escalations.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-md border p-2 text-xs ${e.severity === "high" ? "border-danger/40 bg-danger/5" : "border-warning/40 bg-warning/5"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: `h-3 w-3 ${e.severity === "high" ? "text-danger" : "text-warning"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium truncate flex-1", children: e.name }),
              e.tcm && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px]", children: e.tcm })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5 pl-5", children: e.reason })
          ] }, e.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-3 lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider font-semibold", children: "Zone Heatmap" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          zoneMap.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: "No zone activity." }),
          zoneMap.map((z) => {
            const pct = Math.round(z.open / maxOpen * 100);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium truncate", children: z.zone }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-muted-foreground", children: [
                  z.open,
                  "o · ",
                  z.tours,
                  "t · ",
                  z.quotes,
                  "q · ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success", children: [
                    z.booked,
                    "b"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-accent to-primary", style: {
                width: `${pct}%`
              } }) })
            ] }, z.zone);
          })
        ] })
      ] })
    ] })
  ] });
}
function KPI({
  icon: Icon,
  label,
  value,
  tone
}) {
  const cls = {
    primary: "bg-primary/10 text-primary border-primary/30",
    danger: "bg-danger/10 text-danger border-danger/30",
    warning: "bg-warning/10 text-warning border-warning/30",
    success: "bg-success/10 text-success border-success/30",
    muted: "bg-muted text-muted-foreground border-border"
  }[tone];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-md border px-2.5 py-1.5 flex items-center gap-2 ${cls}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider font-semibold opacity-80", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-display font-semibold leading-none", children: value })
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(WarRoom, {}) });
export {
  SplitComponent as component
};
