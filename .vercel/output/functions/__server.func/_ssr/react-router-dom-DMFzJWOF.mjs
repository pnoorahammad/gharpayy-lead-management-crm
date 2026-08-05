import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { h as useParams$1, L as Link$1, d as useNavigate$1, f as useLocation } from "../_libs/tanstack__react-router.mjs";
const Link = reactExports.forwardRef(
  ({ to, replace: _replace, state: _state, children, ...rest }, ref) => {
    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { ref, to, ...rest, children })
    );
  }
);
Link.displayName = "Link";
const NavLink = reactExports.forwardRef(
  ({ to, end, className, style, children, ...rest }, ref) => {
    const location = useLocation();
    const isActive = end ? location.pathname === to : location.pathname === to || location.pathname.startsWith(to + "/");
    const ctx = { isActive, isPending: false };
    const resolvedClassName = typeof className === "function" ? className(ctx) : className;
    const resolvedStyle = typeof style === "function" ? style(ctx) : style;
    const resolvedChildren = typeof children === "function" ? children(ctx) : children;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        ref,
        to,
        className: resolvedClassName,
        style: resolvedStyle,
        ...rest,
        children: resolvedChildren
      }
    );
  }
);
NavLink.displayName = "NavLink";
function useNavigate() {
  const nav = useNavigate$1();
  return reactExports.useCallback(
    (to, opts) => {
      if (typeof to === "number") {
        if (typeof window !== "undefined") window.history.go(to);
        return;
      }
      nav({ to, replace: opts?.replace });
    },
    [nav]
  );
}
function useParams() {
  return useParams$1({ strict: false });
}
export {
  Link as L,
  useParams as a,
  useNavigate as u
};
