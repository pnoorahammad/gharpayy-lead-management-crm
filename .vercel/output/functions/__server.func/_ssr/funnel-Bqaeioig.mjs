import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-Cp2f_YYK.mjs";
import { aC as useAppState, aK as getMemberPerformance, q as cn } from "./router-kYRMoTX_.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { bT as ArrowDown, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
function Funnel() {
  const { tours, bookings } = useAppState();
  const scheduled = tours.length;
  const showUps = tours.filter((t) => t.showUp === true).length;
  const drafts = tours.filter((t) => t.outcome === "draft").length;
  const bookingsViaTour = bookings.filter((b) => b.viaTour).length;
  const directBookings = bookings.filter((b) => !b.viaTour).length;
  const steps = [
    { label: "Tours Scheduled", value: scheduled, color: "text-primary" },
    { label: "Show-Ups", value: showUps, color: "text-role-tcm", rate: scheduled > 0 ? Math.round(showUps / scheduled * 100) : 0 },
    { label: "Drafts", value: drafts, color: "text-role-hr", rate: showUps > 0 ? Math.round(drafts / showUps * 100) : 0 },
    { label: "Bookings (via Tour)", value: bookingsViaTour, color: "text-role-tcm", rate: drafts > 0 ? Math.round(bookingsViaTour / drafts * 100) : 0 }
  ];
  const memberPerf = getMemberPerformance(tours);
  const memberBookings = bookings.reduce((acc, b) => {
    acc[b.closedBy] = (acc[b.closedBy] || 0) + 1;
    return acc;
  }, {});
  const memberRent = bookings.reduce((acc, b) => {
    acc[b.closedBy] = (acc[b.closedBy] || 0) + b.rentValue;
    return acc;
  }, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6 animate-slide-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", children: "Funnel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Full pipeline: Tour → Booking" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row items-center gap-2 md:gap-0", children: steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center gap-2 w-full md:w-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-4 text-center flex-1 md:flex-none md:min-w-[140px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("text-2xl md:text-3xl font-heading font-bold", step.color), children: step.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-1", children: step.label }),
          step.rate !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
            "(",
            step.rate,
            "% conv)"
          ] })
        ] }),
        i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-5 w-5 text-muted-foreground md:hidden" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5 text-muted-foreground hidden md:block mx-2" })
        ] })
      ] }, step.label)) }),
      directBookings > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-3 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "+ ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: directBookings }),
        " Direct Bookings (no tour)"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm mb-3 text-foreground", children: "Who Is Converting" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto -mx-3 px-3 md:mx-0 md:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs md:text-sm min-w-[500px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", children: "Tours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", children: "Show%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", children: "Drafts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", children: "Bookings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", children: "Rent" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: memberPerf.filter((m) => m.toursScheduled > 0 || (memberBookings[m.memberId] || 0) > 0).sort((a, b) => (memberBookings[b.memberId] || 0) - (memberBookings[a.memberId] || 0)).slice(0, 15).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-foreground font-medium", children: m.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-muted-foreground", children: m.toursScheduled }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: cn("text-center font-medium", m.showUpRate >= 70 ? "text-role-tcm" : "text-danger"), children: [
            m.showUpRate,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-role-hr font-medium", children: m.drafts }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-foreground font-medium", children: memberBookings[m.memberId] || 0 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-center text-role-tcm font-medium", children: [
            "₹",
            (memberRent[m.memberId] || 0).toLocaleString()
          ] })
        ] }, m.memberId)) })
      ] }) })
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, {}) });
export {
  SplitComponent as component
};
