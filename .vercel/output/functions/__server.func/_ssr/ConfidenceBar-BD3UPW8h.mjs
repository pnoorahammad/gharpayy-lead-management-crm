import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { q as cn } from "./router-kYRMoTX_.mjs";
function ConfidenceBar({ score, intent, className, showLabel = true }) {
  const fill = intent === "hard" ? "bg-role-tcm" : intent === "medium" ? "bg-role-hr" : "bg-muted-foreground";
  const label = intent === "hard" ? "HARD" : intent === "medium" ? "MEDIUM" : "SOFT";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-2", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 rounded-full bg-surface-2 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn("h-full rounded-full transition-all", fill),
        style: { width: `${Math.max(4, score)}%` }
      }
    ) }),
    showLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono font-semibold tabular-nums text-foreground shrink-0 w-16 text-right", children: [
      score,
      "% · ",
      label
    ] })
  ] });
}
export {
  ConfidenceBar as C
};
