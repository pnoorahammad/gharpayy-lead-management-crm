import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { q as cn } from "./router-Brs45mHz.mjs";
const options = [
  { value: "today", label: "Today" },
  { value: "week", label: "This Week" },
  { value: "month", label: "This Month" }
];
function DateRangeToggle({ value, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 bg-surface-2 rounded-lg p-1", children: options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: () => onChange(opt.value),
      className: cn(
        "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
        value === opt.value ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
      ),
      children: opt.label
    },
    opt.value
  )) });
}
export {
  DateRangeToggle as D
};
