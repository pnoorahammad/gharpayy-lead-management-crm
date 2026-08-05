import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useRouterState, L as Link } from "../_libs/tanstack__react-router.mjs";
import { q as cn } from "./router-Brs45mHz.mjs";
const TABS = [
  { to: "/admin", label: "Cockpit" },
  { to: "/admin/supreme", label: "Supreme" },
  { to: "/admin/command", label: "Command" },
  { to: "/admin/war-room", label: "War-Room TV" },
  { to: "/admin/leads", label: "Leads" },
  { to: "/admin/visits", label: "Visits" },
  { to: "/admin/calendar", label: "Calendar" },
  { to: "/admin/owners", label: "Owners" },
  { to: "/admin/people", label: "People" },
  { to: "/admin/intelligence", label: "Intelligence" },
  { to: "/admin/audit", label: "Audit" },
  { to: "/admin/exports", label: "Exports" },
  { to: "/admin/settings", label: "Settings" }
];
function AdminShell({ children, title, sub }) {
  const path = useRouterState({ select: (r) => r.location.pathname });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card/80 backdrop-blur px-4 py-3 flex items-center justify-between gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-destructive font-semibold", children: "Super Admin · Full control" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-display font-semibold", children: title }),
        sub && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: sub })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex items-center gap-1 flex-wrap text-xs", children: TABS.map((t) => {
        const active = t.to === "/admin" ? path === "/admin" : path === t.to || path.startsWith(t.to + "/");
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: t.to,
            className: cn(
              "px-2.5 py-1 rounded-md transition-colors",
              active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-muted/60"
            ),
            children: t.label
          },
          t.to
        );
      }) })
    ] }),
    children
  ] });
}
export {
  AdminShell as A
};
