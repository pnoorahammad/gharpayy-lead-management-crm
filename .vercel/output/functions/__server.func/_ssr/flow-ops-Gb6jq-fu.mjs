import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-qrUFATK5.mjs";
import { u as useNavigate } from "./react-router-dom-DMFzJWOF.mjs";
import { aC as useAppState, k as Button, q as cn } from "./router-Brs45mHz.mjs";
import { M as MetricCard } from "./MetricCard-CSd8y5MG.mjs";
import { L as LeadControlPanel } from "./LeadControlPanel-BXb2atrI.mjs";
import { G as GlueFeed } from "./GlueFeed-DWgyPnAn.mjs";
import { C as CoachInline } from "./CoachInline-1h2OIiLF.mjs";
import { T as TenXOpsBar } from "./TenXOpsBar-W-I7GU0x.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { ar as CalendarPlus, bB as CalendarCheck, P as Phone, T as TrendingUp, i as FileText, y as Target, S as Sparkles } from "../_libs/lucide-react.mjs";
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
import "./slider-BkIGaRIX.mjs";
import "../_libs/radix-ui__react-slider.mjs";
import "./use-event-bus-KpzdfeLo.mjs";
const CYCLE_TARGETS = { chatsClosed: 30, mytLeads: 10, toursScheduled: 4, sameDayConfirmed: 2 };
function FlowOpsDashboard() {
  const { tours, currentMemberId } = useAppState();
  const navigate = useNavigate();
  const myTours = currentMemberId ? tours.filter((t) => t.scheduledBy === currentMemberId) : tours.filter((t) => t.scheduledBy === "m1");
  const completed = myTours.filter((t) => t.status === "completed").length;
  const showUps = myTours.filter((t) => t.showUp === true).length;
  const drafts = myTours.filter((t) => t.outcome === "draft").length;
  const pending = myTours.filter((t) => t.status === "scheduled").length;
  const [cycles, setCycles] = reactExports.useState([
    { cycleNumber: 1, chatsClosed: 0, mytLeads: 0, toursScheduled: 0, sameDayConfirmed: 0 },
    { cycleNumber: 2, chatsClosed: 0, mytLeads: 0, toursScheduled: 0, sameDayConfirmed: 0 },
    { cycleNumber: 3, chatsClosed: 0, mytLeads: 0, toursScheduled: 0, sameDayConfirmed: 0 },
    { cycleNumber: 4, chatsClosed: 0, mytLeads: 0, toursScheduled: 0, sameDayConfirmed: 0 }
  ]);
  const [activeCycle, setActiveCycle] = reactExports.useState(0);
  const updateCycle = (field, delta) => {
    setCycles((prev) => prev.map(
      (c, i) => i === activeCycle ? { ...c, [field]: Math.max(0, c[field] + delta) } : c
    ));
  };
  const dailyTotals = cycles.reduce((acc, c) => ({
    chatsClosed: acc.chatsClosed + c.chatsClosed,
    mytLeads: acc.mytLeads + c.mytLeads,
    toursScheduled: acc.toursScheduled + c.toursScheduled,
    sameDayConfirmed: acc.sameDayConfirmed + c.sameDayConfirmed
  }), { chatsClosed: 0, mytLeads: 0, toursScheduled: 0, sameDayConfirmed: 0 });
  const todayISO = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const scheduledToday = myTours.filter((t) => t.tourDate === todayISO);
  const top5 = scheduledToday.filter((t) => t.status === "scheduled" || t.status === "confirmed").sort((a, b) => a.tourTime.localeCompare(b.tourTime)).slice(0, 5).map((t) => ({
    id: t.id,
    title: `${t.leadName} → ${t.propertyName}`,
    subtitle: `${t.tourTime} · ${t.area} · TCM ${t.assignedToName}`,
    tag: t.status
  }));
  const stalled = myTours.filter((t) => t.outcome === "draft" || t.status === "scheduled" && t.tourDate < todayISO).slice(0, 5).map((t) => ({
    id: t.id,
    title: `${t.leadName} · ${t.propertyName}`,
    subtitle: `${t.tourDate} ${t.tourTime} · ${t.outcome ?? "no-outcome"}`,
    tag: t.outcome === "draft" ? "draft" : "overdue"
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6 animate-slide-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CoachInline, { page: "flow-ops" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TenXOpsBar,
      {
        role: "Flow Ops",
        moved: completed + dailyTotals.toursScheduled,
        breach: stalled.length,
        current: dailyTotals.toursScheduled,
        target: CYCLE_TARGETS.toursScheduled * 4,
        targetLabel: "Tours scheduled today",
        top5,
        stalled
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between flex-wrap gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", children: "Flow Ops Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Your scheduling performance · click any tour to open the command panel" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => navigate("/myt/schedule"), className: "gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarPlus, { className: "h-4 w-4" }),
        " Schedule Tour"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "My Tours", value: myTours.length, color: "blue", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Pending", value: pending, color: "amber", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Show-Ups", value: showUps, color: "green", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Drafts", value: drafts, color: "amber", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm text-foreground", children: "90-Min Cycle Tracker" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-4", children: cycles.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setActiveCycle(i),
          className: cn(
            "flex-1 py-1.5 text-xs font-medium rounded-md transition-colors",
            activeCycle === i ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted-foreground hover:text-foreground"
          ),
          children: [
            "G",
            i + 1
          ]
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
        { key: "chatsClosed", label: "Chats Closed", target: CYCLE_TARGETS.chatsClosed },
        { key: "mytLeads", label: "MYT Leads", target: CYCLE_TARGETS.mytLeads },
        { key: "toursScheduled", label: "Tours Scheduled", target: CYCLE_TARGETS.toursScheduled },
        { key: "sameDayConfirmed", label: "Same-Day", target: CYCLE_TARGETS.sameDayConfirmed }
      ].map((item) => {
        const val = cycles[activeCycle][item.key];
        const pct = Math.min(100, Math.round(val / item.target * 100));
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-2/50 rounded-lg p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: item.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
              val,
              "/",
              item.target
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-surface-3 rounded-full mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn("h-full rounded-full transition-all", pct >= 100 ? "bg-success" : pct >= 50 ? "bg-primary" : "bg-warning"),
              style: { width: `${pct}%` }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => updateCycle(item.key, -1), className: "h-7 w-7 p-0 text-xs", children: "−" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-heading font-bold text-foreground w-8 text-center", children: val }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => updateCycle(item.key, 1), className: "h-7 w-7 p-0 text-xs", children: "+" })
          ] })
        ] }, item.key);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-1", children: "Daily Totals (All 4 Cycles)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: dailyTotals.chatsClosed }),
            "/120 chats"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: dailyTotals.mytLeads }),
            "/40 MYT"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: dailyTotals.toursScheduled }),
            "/16 tours"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: dailyTotals.sameDayConfirmed }),
            "/8 same-day"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm mb-3 text-foreground", children: "Tours I Scheduled" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        myTours.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center py-4", children: 'No tours yet — hit "Schedule Tour" above to add one.' }),
        myTours.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-3 py-2.5 rounded-lg bg-surface-2/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm", children: t.leadName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: t.propertyName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground mt-0.5", children: [
              t.area,
              " · ",
              t.tourDate,
              " ",
              t.tourTime,
              " · TCM ",
              t.assignedToName
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] px-2 py-0.5 rounded-full ${t.status === "completed" ? "bg-success/15 text-success" : t.status === "confirmed" ? "bg-tcm/15 text-role-tcm" : "bg-primary/15 text-primary"}`, children: t.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              LeadControlPanel,
              {
                subject: { kind: "tour", tour: t },
                trigger: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px] gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
                  " Open"
                ] })
              }
            )
          ] })
        ] }, t.id))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GlueFeed, { limit: 20, title: "Closed-loop activity · Flow Ops" })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlowOpsDashboard, {}) });
export {
  SplitComponent as component
};
