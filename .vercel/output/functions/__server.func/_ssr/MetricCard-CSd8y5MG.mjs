import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { q as cn } from "./router-Brs45mHz.mjs";
const glowMap = {
  blue: "metric-glow-blue border-flow-ops/20",
  green: "metric-glow-green border-tcm/20",
  amber: "metric-glow-amber border-hr/20",
  red: "border-danger/20"
};
const textMap = {
  blue: "text-role-flow",
  green: "text-role-tcm",
  amber: "text-role-hr",
  red: "text-danger"
};
function MetricCard({ label, value, subtext, color = "blue", icon }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("glass-card p-3 md:p-4 animate-slide-up", glowMap[color]), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1 md:mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] md:text-xs font-medium text-muted-foreground uppercase tracking-wider leading-tight", children: label }),
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("opacity-60 hidden sm:block", textMap[color]), children: icon })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-xl md:text-2xl font-heading font-bold", textMap[color]), children: value }),
    subtext && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] md:text-xs text-muted-foreground mt-1", children: subtext })
  ] });
}
export {
  MetricCard as M
};
