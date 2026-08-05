import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-Cp2f_YYK.mjs";
import { aC as useAppState, aJ as zones, as as useNow, B as Badge, C as Card, k as Button } from "./router-kYRMoTX_.mjs";
import { G as GlueFeed } from "./GlueFeed-Brnspy9R.mjs";
import { u as useIdentityStore } from "./store-CBikX2jm.mjs";
import { m as morningReviewBuckets } from "./execution-engine-BqxRWtlf.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { bG as Crosshair, g as TriangleAlert, y as Target, T as TrendingUp, Z as Zap, s as Clock, x as Calendar, bo as UserX, bH as MessageSquareWarning, bI as Snowflake, k as CircleCheck } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, L as LineChart, X as XAxis, Y as YAxis, T as Tooltip, d as Line, B as BarChart, a as Bar, C as Cell } from "../_libs/recharts.mjs";
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
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
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
import "../_libs/isbot.mjs";
import "./use-event-bus-vdUBMB_n.mjs";
import "./audit-log-BbY99Bzt.mjs";
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
function ManagerMorningReview() {
  const leads = useIdentityStore((s) => s.leads);
  const now = useNow(6e4);
  const nowDate = now ? new Date(now) : /* @__PURE__ */ new Date();
  const buckets = reactExports.useMemo(() => morningReviewBuckets(leads, nowDate), [leads, nowDate]);
  const sections = [
    { key: "fc", title: "15-min law misses (NEW yesterday)", icon: Clock, tone: "danger", leads: buckets.firstContactMissed, hint: "First contact NOT logged within 15 min of lead creation." },
    { key: "t1", title: "T-1 reminder not sent", icon: Calendar, tone: "warn", leads: buckets.noT1Sent, hint: "Tour is tomorrow but TCM hasn't pinged the lead." },
    { key: "ns", title: "Yesterday no-shows", icon: UserX, tone: "danger", leads: buckets.noShowYesterday, hint: "Followed up within 1h? Manager review required." },
    { key: "pv", title: "Post-visit message missed", icon: MessageSquareWarning, tone: "warn", leads: buckets.postVisitMissed, hint: "Must go out within 2h of tour ending." },
    { key: "t3", title: "Stuck at T+3", icon: TriangleAlert, tone: "warn", leads: buckets.stuckAtT3, hint: "Manager takes over per escalation matrix." },
    { key: "ci7", title: "CI-7 with no activity in 10d", icon: Snowflake, tone: "warn", leads: buckets.ci7NoActivity, hint: "Reassign or close personally." },
    { key: "lost", title: "LOST without objection tag", icon: TriangleAlert, tone: "danger", leads: buckets.lostWithoutTag, hint: "Reject and return to TCM — tag required." }
  ];
  const total = sections.reduce((s, x) => s + x.leads.length, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold tracking-tight", children: "Manager Morning Review" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "8:30 AM checklist · ",
          total === 0 ? "Clean slate" : `${total} items flagged`
        ] })
      ] }),
      total === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-emerald-500 gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-3" }),
        " All clear"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: sections.map((sec) => {
      const Icon = sec.icon;
      const empty = sec.leads.length === 0;
      const toneCls = sec.tone === "danger" ? "border-rose-500/40 bg-rose-500/5" : sec.tone === "warn" ? "border-amber-500/40 bg-amber-500/5" : "border-border";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: empty ? "p-3" : `p-3 border-2 ${toneCls}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `size-4 mt-0.5 ${sec.tone === "danger" ? "text-rose-500" : sec.tone === "warn" ? "text-amber-500" : ""}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: sec.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: sec.hint })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: empty ? "outline" : "destructive", children: sec.leads.length })
        ] }),
        !empty && /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-2 space-y-1 text-xs", children: [
          sec.leads.slice(0, 6).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: l.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                " · ",
                l.area || "—",
                " · ",
                l.assigneeName ?? "Unassigned"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: "ghost", className: "h-6 px-2 text-[11px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/execution", children: "Take over" }) })
          ] }, l.ulid)),
          sec.leads.length > 6 && /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-[11px] text-muted-foreground", children: [
            "+",
            sec.leads.length - 6,
            " more"
          ] })
        ] })
      ] }, sec.key);
    }) })
  ] });
}
function WarRoom() {
  const { tours, leads, rooms, blocks, bookings } = useAppState();
  const data = reactExports.useMemo(() => {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const todayBookings = bookings.filter((b) => b.createdAt.startsWith(today));
    const actualRevenue = todayBookings.reduce((s, b) => s + b.rentValue, 0);
    const activeBlocksValue = blocks.filter((b) => b.status === "active" && new Date(b.expiresAt).getTime() > Date.now()).reduce((s, b) => {
      const room = rooms.find((r) => r.id === b.roomId);
      return s + (room?.currentPrice ?? 12e3) * (b.intent === "hard" ? 0.7 : 0.3);
    }, 0);
    const todayPipelineTours = tours.filter((t) => t.tourDate === today && t.status !== "cancelled");
    const pipelineValue = todayPipelineTours.reduce((s, t) => {
      const weight = t.intent === "hard" ? 0.5 : t.intent === "medium" ? 0.25 : 0.08;
      return s + t.budget * weight;
    }, 0);
    const expectedRevenue = Math.round(actualRevenue + activeBlocksValue + pipelineValue);
    const forecast = [];
    for (let i = 0; i < 7; i++) {
      const d = /* @__PURE__ */ new Date();
      d.setDate(d.getDate() + i);
      const dStr = d.toISOString().split("T")[0];
      const dayTours = tours.filter((t) => t.tourDate === dStr);
      const value = dayTours.reduce((s, t) => {
        const w = t.intent === "hard" ? 0.5 : t.intent === "medium" ? 0.25 : 0.08;
        return s + t.budget * w;
      }, 0);
      forecast.push({ day: d.toLocaleDateString("en", { weekday: "short" }), expected: Math.round(value / 1e3) });
    }
    const zoneConv = zones.map((z) => {
      const zoneTours = tours.filter((t) => t.zoneId === z.id && t.status === "completed");
      const closed = zoneTours.filter((t) => t.outcome === "booked" || t.outcome === "token-paid" || t.tokenPaid).length;
      const rate = zoneTours.length > 0 ? Math.round(closed / zoneTours.length * 100) : 0;
      return { zone: z.area.split(" ")[0], rate };
    });
    const scheduledCount = tours.length;
    const showedCount = tours.filter((t) => t.showUp === true).length;
    tours.filter((t) => t.status === "completed").length;
    const bookedCount = tours.filter((t) => t.outcome === "booked" || t.tokenPaid).length;
    const avgRent = tours.reduce((s, t) => s + t.budget, 0) / Math.max(1, tours.length);
    const noShowLoss = (scheduledCount - showedCount) * avgRent * 0.3;
    const showButNoCloseLoss = (showedCount - bookedCount) * avgRent * 0.5;
    const leakPoint = noShowLoss > showButNoCloseLoss ? { stage: "Show-ups", value: noShowLoss, fix: "Push pre-tour reminders 2h before slot" } : { stage: "Show → Book", value: showButNoCloseLoss, fix: "Reassign hard leads to top-converting TCMs" };
    const hardUnclaimed = leads.filter((l) => !l.claimedBy && l.status === "qualified").length;
    const action = hardUnclaimed > 0 ? { text: `Reassign ${hardUnclaimed} hard leads from queue → top TCMs`, link: "/marketplace" } : leakPoint.stage === "Show-ups" ? { text: "Send urgency nudges to next 2h slots", link: "/tcm/actions" } : { text: "Review hot properties for pricing changes", link: "/properties" };
    const weeklyTarget = 4e6;
    const weekRevenue = bookings.filter((b) => Date.now() - new Date(b.createdAt).getTime() < 7 * 24 * 60 * 60 * 1e3).reduce((s, b) => s + b.rentValue, 0);
    const gap = Math.max(0, weeklyTarget - weekRevenue);
    return { expectedRevenue, actualRevenue, forecast, zoneConv, leakPoint, action, gap, weekRevenue, weeklyTarget };
  }, [tours, leads, rooms, blocks, bookings]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-slide-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Crosshair, { className: "h-5 w-5 text-role-hr" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", children: "Founder War Room" })
    ] }),
    data.gap > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-danger/40 bg-danger/10 px-4 py-3 flex items-center justify-between gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-danger", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold", children: [
          "₹",
          (data.gap / 1e5).toFixed(1),
          "L behind 7-day target"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground", children: [
        "Booked ₹",
        (data.weekRevenue / 1e5).toFixed(1),
        "L of ₹",
        (data.weeklyTarget / 1e5).toFixed(0),
        "L"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-3.5 w-3.5" }),
          " Today: Expected vs Actual"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-foreground tabular-nums", children: [
              "₹",
              (data.expectedRevenue / 1e3).toFixed(0),
              "k"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Expected (pipeline + holds)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-semibold text-role-tcm tabular-nums", children: [
              "₹",
              (data.actualRevenue / 1e3).toFixed(0),
              "k"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Actual booked" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-surface-2 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full bg-role-tcm transition-all",
            style: { width: `${Math.min(100, data.actualRevenue / Math.max(1, data.expectedRevenue) * 100)}%` }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5" }),
          " Next 7-Day Revenue (₹k)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: data.forecast, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "day", stroke: "hsl(var(--muted-foreground))", fontSize: 10, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "hsl(var(--muted-foreground))", fontSize: 10, tickLine: false, axisLine: false, width: 28 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { background: "hsl(var(--popover))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 11 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "expected", stroke: "hsl(var(--primary))", strokeWidth: 2, dot: { r: 3 } })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5" }),
          " Conversion Rate by Zone"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: data.zoneConv, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "zone", stroke: "hsl(var(--muted-foreground))", fontSize: 10, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "hsl(var(--muted-foreground))", fontSize: 10, tickLine: false, axisLine: false, width: 28, unit: "%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { background: "hsl(var(--popover))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 11 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "rate", radius: [4, 4, 0, 0], children: data.zoneConv.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: d.rate >= 60 ? "hsl(var(--tcm))" : d.rate >= 35 ? "hsl(var(--hr))" : "hsl(var(--danger))" }, i)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5 text-danger" }),
          " Top Leak Point"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-semibold text-foreground", children: data.leakPoint.stage }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-danger tabular-nums", children: [
            "−₹",
            (data.leakPoint.value / 1e3).toFixed(0),
            "k"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-1", children: data.leakPoint.fix })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: data.action.link,
        className: "block rounded-xl border-2 border-primary bg-primary/10 hover:bg-primary/15 transition-colors p-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wide text-primary font-semibold", children: "Immediate Action Lever" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base md:text-lg font-bold text-foreground mt-1", children: [
            data.action.text,
            " →"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ManagerMorningReview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GlueFeed, { limit: 25, title: "Closed-loop activity · War Room" })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(WarRoom, {}) });
export {
  SplitComponent as component
};
