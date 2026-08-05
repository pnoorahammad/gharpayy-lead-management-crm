import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-Cp2f_YYK.mjs";
import { u as useApp, a6 as computePropertyMetrics } from "./router-kYRMoTX_.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
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
import "../_libs/lucide-react.mjs";
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
function InventoryPage() {
  const {
    properties,
    leads,
    tours
  } = useApp();
  const metrics = reactExports.useMemo(() => computePropertyMetrics(properties, leads, tours), [properties, leads, tours]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", children: "Inventory pressure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Demand vs conversion vs vacancy. Each card tells you what to do next." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-xl border border-border bg-card p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-sm leading-tight", children: m.property.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: m.property.area })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Signal, { signal: m.signal })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Demand", value: m.demandScore, suffix: "/100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Pressure", value: m.pressureScore, suffix: "/100", accent: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Conversion", value: m.conversionPct, suffix: "%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Occupancy", value: m.occupancyPct, suffix: "%" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { label: "Pressure", value: m.pressureScore }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { label: "Conversion", value: m.conversionPct, tone: "success" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { label: "Occupancy", value: m.occupancyPct, tone: "info" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-[11px] pt-1 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(KV, { label: "Leads", value: m.leadCount }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KV, { label: "Tours", value: m.tourCount }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(KV, { label: "Vacant", value: `${m.property.vacantBeds}/${m.property.totalBeds}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Recommendation, { signal: m.signal, property: m.property })
    ] }, m.property.id)) })
  ] }) });
}
function Tile({
  label,
  value,
  suffix,
  accent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted/60 px-3 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `font-display text-lg font-semibold tabular-nums ${accent ? "text-accent" : ""}`, children: [
      value,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs font-normal", children: suffix })
    ] })
  ] });
}
function Bar({
  label,
  value,
  tone = "accent"
}) {
  const cls = {
    accent: "bg-accent",
    success: "bg-success",
    info: "bg-info"
  }[tone];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: value })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full ${cls} transition-all`, style: {
      width: `${Math.min(100, value)}%`
    } }) })
  ] });
}
function KV({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium", children: value })
  ] });
}
function Signal({
  signal
}) {
  const map = {
    "high-demand-low-conv": {
      label: "Pricing",
      cls: "bg-destructive/10 text-destructive border-destructive/30"
    },
    "low-demand-high-vacancy": {
      label: "Marketing",
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold ${cfg.cls}`, children: cfg.label });
}
function Recommendation({
  signal,
  property
}) {
  const text = {
    "high-demand-low-conv": `Strong demand but conversion lags — review pricing at ₹${property.pricePerBed.toLocaleString()}.`,
    "low-demand-high-vacancy": `${property.vacantBeds} beds vacant. Push marketing in ${property.area}.`,
    "high-conv-low-supply": `Hot conversion with only ${property.vacantBeds} bed${property.vacantBeds === 1 ? "" : "s"} left. Plan expansion.`,
    "balanced": `Healthy. Maintain current playbook.`
  }[signal];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground border-t border-border pt-2", children: text });
}
export {
  InventoryPage as component
};
