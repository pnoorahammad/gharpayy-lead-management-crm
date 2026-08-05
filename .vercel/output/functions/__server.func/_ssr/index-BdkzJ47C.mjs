import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as buildDoNextQueue, a7 as intentFor, a6 as liveConfidence, A as AppShell, K as KpiCard } from "./AppShell-Cp2f_YYK.mjs";
import { u as useApp, c as useMountedNow, a6 as computePropertyMetrics } from "./router-kYRMoTX_.mjs";
import { s as scanRevivals } from "./revival-DHqmK9tp.mjs";
import { Q as QuickActionRow } from "./QuickActionRow-DY2Umr3P.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { f as format } from "../_libs/date-fns.mjs";
import { S as Sparkles, D as ArrowUpRight, Z as Zap, z as Sun, g as TriangleAlert, F as Flame, ar as CalendarPlus, I as IndianRupee, B as Building2, T as TrendingUp } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, B as BarChart, X as XAxis, Y as YAxis, T as Tooltip, a as Bar, P as PieChart, b as Pie, C as Cell, A as AreaChart, c as Area } from "../_libs/recharts.mjs";
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
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
const STAGE_LABELS = {
  new: "New",
  contacted: "Contacted",
  "tour-scheduled": "Tour Scheduled",
  "tour-done": "Tour Done",
  negotiation: "Negotiation",
  booked: "Booked",
  dropped: "Dropped"
};
const PRIORITY_COLORS = {
  high: "#f43f5e",
  // Rose-500
  medium: "#f59e0b",
  // Amber-500
  low: "#10b981"
  // Emerald-500
};
function DashboardCharts({ leads }) {
  const stageCounts = {
    new: 0,
    contacted: 0,
    "tour-scheduled": 0,
    "tour-done": 0,
    negotiation: 0,
    booked: 0,
    dropped: 0
  };
  leads.forEach((l) => {
    if (stageCounts[l.stage] !== void 0) {
      stageCounts[l.stage]++;
    }
  });
  const stageData = Object.keys(stageCounts).map((key) => ({
    stage: STAGE_LABELS[key] || key,
    count: stageCounts[key]
  }));
  const priorityCounts = { high: 0, medium: 0, low: 0 };
  leads.forEach((l) => {
    const p = l.priority || "medium";
    priorityCounts[p]++;
  });
  const priorityData = [
    { name: "High Priority", value: priorityCounts.high, color: PRIORITY_COLORS.high },
    { name: "Medium Priority", value: priorityCounts.medium, color: PRIORITY_COLORS.medium },
    { name: "Low Priority", value: priorityCounts.low, color: PRIORITY_COLORS.low }
  ];
  const monthlyData = [
    { month: "Jan", revenue: 120, leads: 18 },
    { month: "Feb", revenue: 180, leads: 24 },
    { month: "Mar", revenue: 240, leads: 31 },
    { month: "Apr", revenue: 310, leads: 42 },
    { month: "May", revenue: 450, leads: 58 },
    { month: "Jun", revenue: 580, leads: 72 }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-semibold", children: "Lead Stage Funnel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Distribution across sales pipeline" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-56 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: stageData, margin: { top: 10, right: 10, left: -20, bottom: 20 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "stage", tick: { fontSize: 10, fill: "#888888" }, interval: 0, angle: -25, textAnchor: "end" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fontSize: 10, fill: "#888888" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tooltip,
          {
            contentStyle: { backgroundColor: "#1c1917", borderColor: "#333", borderRadius: 8, fontSize: 12 },
            itemStyle: { color: "#fff" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "count", fill: "#3b82f6", radius: [4, 4, 0, 0] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-semibold", children: "Priority Distribution" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Leads grouped by urgency" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-56 w-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Pie,
          {
            data: priorityData,
            cx: "50%",
            cy: "50%",
            innerRadius: 45,
            outerRadius: 75,
            paddingAngle: 4,
            dataKey: "value",
            children: priorityData.map((entry, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.color }, `cell-${index}`))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tooltip,
          {
            contentStyle: { backgroundColor: "#1c1917", borderColor: "#333", borderRadius: 8, fontSize: 12 },
            itemStyle: { color: "#fff" }
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-4 text-xs", children: priorityData.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full", style: { backgroundColor: p.color } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          p.name.split(" ")[0],
          ": ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: p.value })
        ] })
      ] }, p.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-semibold", children: "Revenue Growth Trend" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Closed MRR (in ₹1,000s)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-56 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: monthlyData, margin: { top: 10, right: 10, left: -15, bottom: 0 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "colorRev", x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "#10b981", stopOpacity: 0.4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "#10b981", stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", tick: { fontSize: 10, fill: "#888888" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fontSize: 10, fill: "#888888" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tooltip,
          {
            contentStyle: { backgroundColor: "#1c1917", borderColor: "#333", borderRadius: 8, fontSize: 12 },
            itemStyle: { color: "#fff" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "revenue", stroke: "#10b981", fillOpacity: 1, fill: "url(#colorRev)" })
      ] }) }) })
    ] })
  ] });
}
function DashboardPage() {
  const {
    leads,
    tours,
    followUps,
    properties,
    role,
    currentTcmId,
    selectLead,
    bookings,
    handoffs
  } = useApp();
  const [now, mounted] = useMountedNow();
  const filterTcm = role === "tcm" ? currentTcmId : void 0;
  const metrics = reactExports.useMemo(() => computePropertyMetrics(properties, leads, tours), [properties, leads, tours]);
  const queue = reactExports.useMemo(() => buildDoNextQueue(leads, tours, followUps, now, filterTcm), [leads, tours, followUps, now, filterTcm]);
  const revivals = reactExports.useMemo(() => scanRevivals(leads, properties, tours, now), [leads, properties, tours, now]);
  const liveLeads = reactExports.useMemo(() => leads.map((l) => ({
    ...l,
    confidence: liveConfidence(l, tours, now),
    intent: intentFor(liveConfidence(l, tours, now))
  })), [leads, tours, now]);
  const hotLeads = liveLeads.filter((l) => l.intent === "hot" && l.stage !== "booked" && l.stage !== "dropped");
  const incompleteTours = tours.filter((t) => t.status === "completed" && !t.postTour.filledAt);
  const todayTours = tours.filter((t) => t.status === "scheduled" && sameDay(+new Date(t.scheduledAt), now));
  const booked = tours.filter((t) => t.decision === "booked").length;
  const conversion = tours.length ? Math.round(booked / tours.length * 100) : 0;
  const overdueFu = followUps.filter((f) => !f.done && +new Date(f.dueAt) < now).length;
  const monthlyRevenue = bookings.reduce((s, b) => s + b.amount, 0);
  const unreadHandoffs = handoffs.filter((h) => !h.read && h.to === role).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-end justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", children: "Arena Infrastructure" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Every lead, every tour, every follow-up — one operating layer. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-mono", children: "live" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-mono min-h-[1em]", children: mounted ? format(new Date(now), "EEEE, MMM d · h:mm a") : " " })
    ] }),
    unreadHandoffs > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/handoffs", className: "block rounded-xl border border-info/30 bg-info/5 p-3 hover:bg-info/10 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-info" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
          unreadHandoffs,
          " unread handoff",
          unreadHandoffs > 1 ? "s" : ""
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          " from ",
          role === "tcm" ? "Flow Ops" : "TCM team"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-info" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "Total Leads", value: leads.length, sub: `${hotLeads.length} hot priority` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "Today's Leads", value: leads.filter((l) => sameDay(+new Date(l.createdAt), now)).length, sub: "Newly ingested", tone: "accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "Converted Leads", value: leads.filter((l) => l.stage === "booked").length, sub: `${conversion}% conversion`, tone: "success" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "Pending Leads", value: leads.filter((l) => l.stage !== "booked" && l.stage !== "dropped").length, sub: `${overdueFu} overdue`, tone: overdueFu ? "destructive" : "default" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { label: "MRR Closed", value: `₹${(monthlyRevenue / 1e3).toFixed(0)}k`, sub: `${bookings.length} bookings`, tone: "success" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardCharts, { leads }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between px-4 py-3 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", children: "Do this next" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground font-mono", children: [
            queue.length,
            " ranked"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/today", className: "text-xs text-accent inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-3 w-3" }),
          " Today view ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
        ] })
      ] }),
      queue.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-8 text-center text-sm text-muted-foreground", children: "Inbox zero. Nothing pending right now." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: queue.slice(0, 5).map((a) => {
        const lead = leads.find((l) => l.id === a.leadId);
        if (!lead) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(QuickActionRow, { lead, reason: a.reason, accent: a.kind === "post-tour-overdue" || a.kind === "first-response" || a.kind === "follow-up-overdue" ? "destructive" : a.kind === "no-follow-up" ? "warning" : "accent" }, `${a.leadId}-${a.kind}`);
      }) })
    ] }),
    incompleteTours.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-destructive/30 bg-destructive/5 p-4 flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-destructive shrink-0 mt-0.5 animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold text-destructive text-sm", children: [
          incompleteTours.length,
          " post-tour update",
          incompleteTours.length > 1 ? "s" : "",
          " missing"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: "Auto-escalation triggers at 6h. Click any name to fill the form now." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mt-2", children: incompleteTours.map((t) => {
          const lead = leads.find((l) => l.id === t.leadId);
          if (!lead) return null;
          const hrs = Math.round((now - +new Date(t.scheduledAt)) / 36e5);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => selectLead(lead.id), className: "text-[11px] rounded-md border border-destructive/30 bg-card px-2 py-0.5 hover:bg-destructive/10 transition-colors inline-flex items-center gap-1", children: [
            lead.name,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-destructive min-w-[2ch] inline-block text-right", children: mounted ? `${hrs}h` : "…" })
          ] }, t.id);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Hot pipeline", icon: Flame, accent: true, action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/leads", className: "text-xs text-accent inline-flex items-center gap-1", children: [
        "All leads ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
      ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-border -mx-3", children: [
        hotLeads.slice(0, 5).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(QuickActionRow, { lead: l, accent: "accent" }, l.id)),
        hotLeads.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground text-center py-6", children: "No hot leads right now." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Today's tours", icon: CalendarPlus, action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/tours", className: "text-xs text-accent inline-flex items-center gap-1", children: [
        "All tours ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
      ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        todayTours.map((t) => {
          const lead = leads.find((l) => l.id === t.leadId);
          const prop = properties.find((p) => p.id === t.propertyId);
          if (!lead) return null;
          const minsTo = (+new Date(t.scheduledAt) - now) / 6e4;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => selectLead(lead.id), className: "w-full text-left rounded-lg border border-border bg-card hover:border-accent/40 transition-colors p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm", children: lead.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-mono ${mounted && minsTo < 60 && minsTo > 0 ? "text-accent" : "text-muted-foreground"}`, children: mounted ? minsTo > 0 ? `in ${formatMins(minsTo)}` : `${formatMins(-minsTo)} ago` : " " })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-0.5", children: [
              prop?.name,
              " · ",
              format(new Date(t.scheduledAt), "p")
            ] })
          ] }, t.id);
        }),
        todayTours.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground text-center py-6", children: "No tours scheduled today." })
      ] }) })
    ] }),
    revivals.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-info/30 bg-info/5 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between px-4 py-3 border-b border-info/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-4 w-4 text-info" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", children: "Hidden revenue · revival queue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground font-mono", children: [
            revivals.length,
            " candidate",
            revivals.length === 1 ? "" : "s"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/revival", className: "text-xs text-info inline-flex items-center gap-1", children: [
          "Open queue ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-info/10", children: revivals.slice(0, 4).map((r) => {
        const lead = leads.find((l) => l.id === r.leadId);
        if (!lead) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => selectLead(lead.id), className: "w-full text-left px-4 py-2 hover:bg-info/5 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", children: lead.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", children: r.reason })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono text-info shrink-0", children: [
            "score ",
            r.score
          ] })
        ] }, r.leadId);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Inventory pressure", icon: Building2, action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/inventory", className: "text-xs text-accent inline-flex items-center gap-1", children: [
      "All properties ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3", children: metrics.slice(0, 6).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-3 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm leading-tight", children: m.property.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: m.property.area })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SignalChip, { signal: m.signal })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-[11px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Demand", value: m.demandScore }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Conv %", value: m.conversionPct }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Vacant", value: `${m.property.vacantBeds}/${m.property.totalBeds}`, mono: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-accent", style: {
        width: `${m.pressureScore}%`
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Pressure ",
          m.pressureScore,
          "/100"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-2.5 w-2.5" }),
          " live"
        ] })
      ] })
    ] }, m.property.id)) }) })
  ] }) });
}
function Card({
  title,
  icon: Icon,
  action,
  accent,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between px-4 py-3 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-4 w-4 ${accent ? "text-accent" : "text-muted-foreground"}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", children: title })
      ] }),
      action
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3", children })
  ] });
}
function Stat({
  label,
  value,
  mono
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-muted/60 px-2 py-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs font-medium ${mono ? "font-mono" : ""}`, children: value })
  ] });
}
function SignalChip({
  signal
}) {
  const map = {
    "high-demand-low-conv": {
      label: "Pricing issue",
      cls: "bg-destructive/10 text-destructive border-destructive/30"
    },
    "low-demand-high-vacancy": {
      label: "Push marketing",
      cls: "bg-warning/15 text-warning-foreground border-warning/30"
    },
    "high-conv-low-supply": {
      label: "Expand",
      cls: "bg-success/10 text-success border-success/30"
    },
    "balanced": {
      label: "Balanced",
      cls: "bg-muted text-muted-foreground border-border"
    }
  };
  const cfg = map[signal];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center rounded-md border px-1.5 py-0.5 text-[10px] font-medium whitespace-nowrap ${cfg.cls}`, children: cfg.label });
}
function sameDay(a, b) {
  const da = new Date(a), db = new Date(b);
  return da.getFullYear() === db.getFullYear() && da.getMonth() === db.getMonth() && da.getDate() === db.getDate();
}
function formatMins(m) {
  if (m < 60) return `${Math.round(m)}m`;
  return `${(m / 60).toFixed(m < 600 ? 1 : 0)}h`;
}
export {
  DashboardPage as component
};
