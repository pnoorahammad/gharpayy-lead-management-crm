import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { q as cn } from "./router-kYRMoTX_.mjs";
const statusStyles = {
  scheduled: "bg-primary/15 text-primary",
  confirmed: "bg-tcm/15 text-role-tcm",
  completed: "bg-success/15 text-success",
  "no-show": "bg-danger/15 text-danger",
  cancelled: "bg-muted text-muted-foreground"
};
const outcomeStyles = {
  draft: "bg-hr/15 text-role-hr",
  "follow-up": "bg-primary/15 text-primary",
  rejected: "bg-danger/15 text-danger"
};
function StatusBadge({ status }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("px-2 py-0.5 rounded-full text-xs font-medium capitalize", statusStyles[status]), children: status.replace("-", " ") });
}
function OutcomeBadge({ outcome }) {
  if (!outcome) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "—" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("px-2 py-0.5 rounded-full text-xs font-medium capitalize", outcomeStyles[outcome]), children: outcome.replace("-", " ") });
}
export {
  OutcomeBadge as O,
  StatusBadge as S
};
