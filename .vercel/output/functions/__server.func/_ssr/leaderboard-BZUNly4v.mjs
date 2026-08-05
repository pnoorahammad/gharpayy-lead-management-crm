import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-Cp2f_YYK.mjs";
import { aC as useAppState, aK as getMemberPerformance, aJ as zones, q as cn } from "./router-kYRMoTX_.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { E as Trophy, bS as Medal, ba as Award } from "../_libs/lucide-react.mjs";
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
function Leaderboard() {
  const { tours } = useAppState();
  const [roleFilter, setRoleFilter] = reactExports.useState("all");
  const [zoneFilter, setZoneFilter] = reactExports.useState("");
  const memberPerf = getMemberPerformance(tours);
  const scored = memberPerf.filter((m) => m.toursScheduled > 0).filter((m) => roleFilter === "all" || m.role === roleFilter).filter((m) => !zoneFilter || m.zoneName.includes(zoneFilter)).map((m) => {
    const score = Math.round(m.toursScheduled * (m.showUpRate / 100) * (m.drafts > 0 ? m.drafts / m.toursCompleted : 0) * 100) / 100;
    return { ...m, score };
  }).sort((a, b) => b.score - a.score);
  const selectClass = "h-8 bg-surface-2 border border-border rounded-md px-2 text-xs text-foreground";
  const rankIcons = [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-5 w-5 text-role-hr" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Medal, { className: "h-5 w-5 text-muted-foreground" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5 text-role-hr/60" })
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-slide-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", children: "Leaderboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Score = Tours × Show-Up% × Draft Rate" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: roleFilter, onChange: (e) => setRoleFilter(e.target.value), className: selectClass, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Roles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "flow-ops", children: "Flow Ops" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "tcm", children: "TCM" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: zoneFilter, onChange: (e) => setZoneFilter(e.target.value), className: selectClass, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Zones" }),
          zones.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: z.name.split(" — ")[1], children: z.name.split(" — ")[1] }, z.id))
        ] })
      ] })
    ] }),
    scored.length >= 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: scored.slice(0, 3).map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(
      "glass-card p-3 text-center",
      i === 0 && "border-role-hr/30 metric-glow-amber"
    ), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-1", children: rankIcons[i] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-heading font-bold text-foreground truncate", children: m.name.split(" ")[0] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: m.role === "tcm" ? "TCM" : "Flow Ops" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-heading font-bold text-foreground mt-1", children: m.score.toFixed(1) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn(
        "text-[9px] px-1 py-0.5 rounded",
        m.showUpRate >= 70 ? "bg-success/15 text-role-tcm" : "bg-danger/15 text-danger"
      ), children: [
        m.showUpRate,
        "% show"
      ] }) })
    ] }, m.memberId)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-3 md:p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0", children: [
      scored.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-2.5 border-b border-border/50 last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(
          "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
          i < 3 ? "bg-role-hr/15 text-role-hr" : "bg-surface-2 text-muted-foreground"
        ), children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: m.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
            m.zoneName.split(" — ")[1],
            " · ",
            m.role === "tcm" ? "TCM" : "Flow Ops"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 shrink-0 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center hidden sm:block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium", children: m.toursScheduled }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: "tours" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: cn("font-medium", m.showUpRate >= 70 ? "text-role-tcm" : m.showUpRate >= 50 ? "text-role-hr" : "text-danger"), children: [
              m.showUpRate,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: "show" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-role-hr font-medium", children: m.drafts }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: "drafts" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
            "w-12 text-center py-1 rounded font-heading font-bold",
            m.showUpRate >= 70 ? "bg-success/10 text-role-tcm" : m.showUpRate < 50 ? "bg-danger/10 text-danger" : "bg-surface-2 text-foreground"
          ), children: m.score.toFixed(1) })
        ] })
      ] }, m.memberId)),
      scored.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground text-xs py-6", children: "No data" })
    ] }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaderboard, {}) });
export {
  SplitComponent as component
};
