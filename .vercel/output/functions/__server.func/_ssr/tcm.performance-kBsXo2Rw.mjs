import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-Cp2f_YYK.mjs";
import { aC as useAppState } from "./router-kYRMoTX_.mjs";
import { M as MetricCard } from "./MetricCard-CudEsd3I.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { bB as CalendarCheck, T as TrendingUp, i as FileText } from "../_libs/lucide-react.mjs";
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
function TCMPerformance() {
  const { tours, currentMemberId } = useAppState();
  const myTours = currentMemberId ? tours.filter((t) => t.assignedTo === currentMemberId) : tours.filter((t) => t.assignedTo === "m5" || t.assignedTo === "m6");
  const completed = myTours.filter((t) => t.status === "completed").length;
  const showUps = myTours.filter((t) => t.showUp === true).length;
  const drafts = myTours.filter((t) => t.outcome === "draft").length;
  const rows = [
    { label: "Tours Assigned", value: myTours.length },
    { label: "Tours Completed", value: completed },
    { label: "No-Shows", value: myTours.filter((t) => t.showUp === false).length, danger: true },
    { label: "Pending Updates", value: myTours.filter((t) => t.status === "completed" && !t.outcome).length, warning: true },
    { label: "Draft Conversion", value: completed > 0 ? `${Math.round(drafts / completed * 100)}%` : "0%" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6 animate-slide-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", children: "My Performance" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Total Tours", value: myTours.length, color: "green", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Completed", value: completed, color: "green", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Show-Up %", value: myTours.length > 0 ? `${Math.round(showUps / myTours.length * 100)}%` : "0%", color: "green" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetricCard, { label: "Drafts", value: drafts, color: "amber", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm mb-3 text-foreground", children: "Daily Summary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0 text-sm", children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-2.5 border-b border-border/50 last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs md:text-sm", children: r.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-medium text-sm ${r.danger ? "text-danger" : r.warning ? "text-role-hr" : "text-foreground"}`, children: r.value })
      ] }, r.label)) })
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TCMPerformance, {}) });
export {
  SplitComponent as component
};
