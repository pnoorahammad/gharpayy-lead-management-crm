import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-qrUFATK5.mjs";
import { ao as useOwner, q as cn } from "./router-Brs45mHz.mjs";
import { u as useGlueEvents } from "./use-event-bus-KpzdfeLo.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { T as TrendingUp, f as Activity, S as Sparkles, N as MessageSquare, g as TriangleAlert, bh as Eye, I as IndianRupee } from "../_libs/lucide-react.mjs";
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
const OBJECTION_LABELS = {
  price: "Price too high",
  location: "Location",
  timing: "Timing mismatch",
  amenities: "Amenities",
  other: "Other"
};
function OwnerInsights() {
  const { currentOwnerId, insights, objections, roomStatuses, rooms, properties } = useOwner();
  const insight = insights.find((i) => i.ownerId === currentOwnerId);
  const reports = useGlueEvents((e) => e.type === "tcm.report.filed", 10);
  const myObjections = objections.filter((o) => o.ownerId === currentOwnerId);
  const mySt = roomStatuses.filter((r) => r.ownerId === currentOwnerId);
  const topViewed = reactExports.useMemo(() => {
    return [...mySt].sort((a, b) => (b.views ?? 0) - (a.views ?? 0)).slice(0, 5);
  }, [mySt]);
  const counts = reactExports.useMemo(() => {
    const c = {};
    myObjections.forEach((o) => {
      c[o.reason] = (c[o.reason] ?? 0) + 1;
    });
    return c;
  }, [myObjections]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl md:text-2xl font-semibold tracking-tight", children: "Demand insights" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "What the market is telling you about your supply." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Leads pitched", value: insight?.leadsPitched ?? 0, icon: TrendingUp }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Visits done", value: insight?.visitsDone ?? 0, icon: Activity }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "High intent", value: insight?.highIntent ?? 0, icon: Sparkles }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Top objection", value: insight?.topObjection ?? "—", icon: MessageSquare, small: true })
    ] }),
    insight?.priceMismatchSignal && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-warning/30 bg-warning/5 p-4 flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-warning-foreground shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: "Price signal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: insight.priceMismatchSignal }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-2", children: "Recommended: drop ₹500–₹1000 on next vacating bed to test conversion." })
      ] })
    ] }),
    Object.keys(counts).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", children: "Why deals don't close" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: Object.entries(counts).sort(([, a], [, b]) => b - a).map(([reason, count]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm w-32 font-medium", children: OBJECTION_LABELS[reason] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn("h-full", reason === "price" ? "bg-destructive" : "bg-warning"),
            style: { width: `${count / myObjections.length * 100}%` }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-mono text-muted-foreground w-10 text-right", children: [
          count,
          "×"
        ] })
      ] }, reason)) })
    ] }),
    topViewed.length > 0 && topViewed[0].views ? /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", children: "Most-viewed rooms" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: topViewed.map((s) => {
        const r = rooms.find((x) => x.id === s.roomId);
        const p = properties.find((x) => x.id === s.propertyId);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 py-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium truncate", children: [
              p?.name ?? "—",
              " · ",
              r?.type ?? "room"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground font-mono inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-2.5 w-2.5" }),
              (s.rentConfirmed ?? r?.currentPrice ?? 0).toLocaleString(),
              "/mo"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-sm font-semibold tabular-nums inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3 w-3 text-muted-foreground" }),
            " ",
            s.views
          ] })
        ] }, s.roomId);
      }) })
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold mb-3", children: "Recent post-visit reports" }),
      reports.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "No reports filed yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 text-xs", children: reports.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border last:border-0 py-1.5", children: [
        "Tour ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: r.tourId }),
        " ·",
        " ",
        "objection: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: r.objection ?? "—" })
      ] }, i)) })
    ] })
  ] });
}
function Tile({ label, value, icon: Icon, small }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground font-mono", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3" }),
      " ",
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: small ? "text-xs font-medium mt-1" : "text-2xl font-display font-semibold mt-1 tabular-nums", children: value })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerInsights, {}) });
export {
  SplitComponent as component
};
