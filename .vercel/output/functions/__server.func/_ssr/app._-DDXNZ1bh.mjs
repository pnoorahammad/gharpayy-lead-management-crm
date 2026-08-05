import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
const ReferralApp = reactExports.lazy(() => import("./App-CbwjPjdv.mjs"));
function AppShell() {
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => setMounted(true), []);
  if (!mounted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background text-muted-foreground", children: "Loading desk…" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background text-muted-foreground", children: "Loading desk…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReferralApp, {}) });
}
export {
  AppShell as component
};
