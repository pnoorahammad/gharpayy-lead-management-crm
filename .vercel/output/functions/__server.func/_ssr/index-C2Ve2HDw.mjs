import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-qrUFATK5.mjs";
import { aC as useAppState, aD as filterToursByDateRange, aE as getZonePerformance, q as cn, aB as heatmapData } from "./router-Brs45mHz.mjs";
import { M as MetricCard } from "./MetricCard-CSd8y5MG.mjs";
import { D as DateRangeToggle } from "./DateRangeToggle-419mz4Fm.mjs";
import { S as StatusBadge, O as OutcomeBadge } from "./StatusBadge-TSI28v8v.mjs";
import { G as GlueFeed } from "./GlueFeed-DWgyPnAn.mjs";
import { C as CoachInline } from "./CoachInline-1h2OIiLF.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { bB as CalendarCheck, d as Users, T as TrendingUp, i as FileText, g as TriangleAlert, aS as Building, s as Clock } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, B as BarChart, X as XAxis, Y as YAxis, T as Tooltip, a as Bar, C as Cell } from "../_libs/recharts.mjs";
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
import "./use-event-bus-KpzdfeLo.mjs";
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
function HourlyHeatmap() {
  const maxTours = Math.max(...heatmapData.map((d) => d.tours));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm mb-3 text-foreground", children: "Hourly Heatmap" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 md:h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: heatmapData, barCategoryGap: "15%", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "hour", tick: { fill: "hsl(215 12% 50%)", fontSize: 9 }, axisLine: false, tickLine: false, interval: 1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fill: "hsl(215 12% 50%)", fontSize: 9 }, axisLine: false, tickLine: false, width: 20 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tooltip,
        {
          contentStyle: {
            background: "hsl(220 18% 12%)",
            border: "1px solid hsl(220 14% 16%)",
            borderRadius: "8px",
            fontSize: "11px",
            color: "hsl(210 20% 92%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "tours", radius: [3, 3, 0, 0], name: "Tours", children: heatmapData.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: `hsl(217 91% ${40 + entry.tours / maxTours * 30}%)`, opacity: 0.4 + entry.tours / maxTours * 0.6 }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "showUps", radius: [3, 3, 0, 0], fill: "hsl(152 69% 45%)", opacity: 0.7, name: "Show-ups" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "drafts", radius: [3, 3, 0, 0], fill: "hsl(38 92% 50%)", opacity: 0.7, name: "Drafts" })
    ] }) }) })
  ] });
}
function NotificationsPanel() {
  const { tours } = useAppState();
  const now = /* @__PURE__ */ new Date();
  const currentHour = now.getHours();
  const unconfirmed = tours.filter((t) => {
    const h = parseInt(t.tourTime.split(":")[0]);
    return h >= currentHour && h <= currentHour + 2 && t.status === "scheduled";
  });
  const threeDaysAgo = /* @__PURE__ */ new Date();
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
  const staleDrafts = tours.filter((t) => t.outcome === "draft" && new Date(t.tourDate) < threeDaysAgo);
  const noOutcome = tours.filter((t) => t.status === "completed" && !t.outcome);
  const totalAlerts = unconfirmed.length + staleDrafts.length + noOutcome.length;
  if (totalAlerts === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-4 border-warning/30 space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-warning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-heading font-semibold text-xs text-warning", children: [
        totalAlerts,
        " Alerts"
      ] })
    ] }),
    unconfirmed.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-primary mt-0.5 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium", children: unconfirmed.length }),
        " tours in next 2hrs not confirmed"
      ] })
    ] }),
    staleDrafts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5 text-role-hr mt-0.5 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-role-hr font-medium", children: staleDrafts.length }),
        " drafts >3 days without agreement"
      ] })
    ] }),
    noOutcome.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5 text-danger mt-0.5 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger font-medium", children: noOutcome.length }),
        " completed tours missing outcome"
      ] })
    ] })
  ] });
}
function HRTower() {
  const { tours, globalZoneFilter } = useAppState();
  const [dateRange, setDateRange] = reactExports.useState("today");
  const [, setTick] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 3e4);
    return () => clearInterval(interval);
  }, []);
  let filtered = filterToursByDateRange(tours, dateRange);
  if (globalZoneFilter) filtered = filtered.filter((t) => t.zoneId === globalZoneFilter);
  const total = filtered.length;
  const completed = filtered.filter((t) => t.status === "completed").length;
  const showUps = filtered.filter((t) => t.showUp === true).length;
  const showUpRate = total > 0 ? Math.round(showUps / total * 100) : 0;
  const noShows = filtered.filter((t) => t.showUp === false).length;
  const drafts = filtered.filter((t) => t.outcome === "draft").length;
  const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const sameDayTours = filtered.filter((t) => t.tourDate === todayStr).length;
  const sameDayRate = total > 0 ? Math.round(sameDayTours / total * 100) : 0;
  const draftRate = completed > 0 ? Math.round(drafts / completed * 100) : 0;
  const zonePerf = getZonePerformance(filtered);
  const propertyMap = /* @__PURE__ */ new Map();
  filtered.forEach((t) => {
    const p = propertyMap.get(t.propertyName) || { tours: 0, showUps: 0, drafts: 0 };
    p.tours++;
    if (t.showUp) p.showUps++;
    if (t.outcome === "draft") p.drafts++;
    propertyMap.set(t.propertyName, p);
  });
  const propertyPerf = Array.from(propertyMap.entries()).map(([name, d]) => ({ name, ...d, conversion: d.tours > 0 ? Math.round(d.drafts / d.tours * 100) : 0 })).sort((a, b) => b.drafts - a.drafts);
  const noUpdates = filtered.filter((t) => t.status === "completed" && !t.outcome);
  const highNoShow = noShows > total * 0.3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6 animate-slide-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CoachInline, { page: "hr" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", children: "HR Control Tower" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-muted-foreground", children: "Real-time performance tracking" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeToggle, { value: dateRange, onChange: setDateRange })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationsPanel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Scheduled", value: total, color: "blue", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Completed", value: completed, color: "green", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Show-Up %", value: `${showUpRate}%`, color: showUpRate >= 70 ? "green" : "red", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Same-Day %", value: `${sameDayRate}%`, color: "amber" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Draft %", value: `${draftRate}%`, color: "amber", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }) })
    ] }),
    (noUpdates.length > 0 || highNoShow) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-4 border-danger/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-danger" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm text-danger", children: "Red Flags" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs md:text-sm text-muted-foreground", children: [
        noUpdates.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger font-medium", children: noUpdates.length }),
          " tours with no outcome update"
        ] }),
        highNoShow && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger font-medium", children: noShows }),
          " no-shows (",
          Math.round(noShows / total * 100),
          "%)"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HourlyHeatmap, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm mb-3 text-foreground", children: "Zone Performance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto -mx-3 px-3 md:mx-0 md:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs md:text-sm min-w-[340px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "Zone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", children: "Tours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", children: "Done" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", children: "Show%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", children: "Drafts" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: zonePerf.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 font-medium text-foreground", children: z.zoneName.split(" — ")[1] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-muted-foreground", children: z.toursScheduled }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-muted-foreground", children: z.toursCompleted }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: cn("text-center font-medium", z.showUpRate >= 70 ? "text-role-tcm" : z.showUpRate >= 50 ? "text-role-hr" : "text-danger"), children: [
              z.showUpRate,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-role-hr font-medium", children: z.drafts })
          ] }, z.zoneId)) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm text-foreground", children: "Property Performance" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto -mx-3 px-3 md:mx-0 md:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs md:text-sm min-w-[400px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "Property" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", children: "Tours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", children: "Show-Ups" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", children: "Drafts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", children: "Conv%" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: propertyPerf.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 font-medium text-foreground", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-muted-foreground", children: p.tours }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-muted-foreground", children: p.showUps }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-role-hr font-medium", children: p.drafts }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: cn("text-center font-medium", p.conversion >= 30 ? "text-role-tcm" : "text-muted-foreground"), children: [
            p.conversion,
            "%"
          ] })
        ] }, p.name)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm mb-3 text-foreground", children: "Live Activity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden space-y-2", children: filtered.slice(0, 10).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-2/50 rounded-lg p-3 space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm", children: t.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: t.tourTime })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          t.propertyName,
          " · ",
          t.assignedToName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: t.status }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { outcome: t.outcome })
        ] })
      ] }, t.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "Lead" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "Property" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "TCM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "Outcome" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.slice(0, 15).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50 hover:bg-accent/30 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground", children: t.tourTime }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 font-medium text-foreground", children: t.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground", children: t.propertyName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground", children: t.assignedToName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: t.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { outcome: t.outcome }) })
        ] }, t.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GlueFeed, { limit: 30, title: "Closed-loop activity · HR" })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HRTower, {}) });
export {
  SplitComponent as component
};
