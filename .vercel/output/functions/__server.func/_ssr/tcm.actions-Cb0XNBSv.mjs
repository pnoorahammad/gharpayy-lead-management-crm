import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-Cp2f_YYK.mjs";
import { aC as useAppState } from "./router-kYRMoTX_.mjs";
import { T as TourCard } from "./TourCard-B80MFPCA.mjs";
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
import "./ConfidenceBar-BD3UPW8h.mjs";
import "./StatusBadge-BXz4uvew.mjs";
import "./LeadControlPanel-B4VZKfye.mjs";
import "./slider-b3nZWa_t.mjs";
import "../_libs/radix-ui__react-slider.mjs";
const intentRank = { hard: 0, medium: 1, soft: 2 };
function TCMActions() {
  const { tours, setTours, currentMemberId } = useAppState();
  const myTours = currentMemberId ? tours.filter((t) => t.assignedTo === currentMemberId) : tours.filter((t) => t.assignedTo === "m5" || t.assignedTo === "m6");
  const sortByIntent = (list) => [...list].sort((a, b) => intentRank[a.intent] - intentRank[b.intent] || a.tourTime.localeCompare(b.tourTime));
  const toConfirm = sortByIntent(myTours.filter((t) => t.status === "scheduled"));
  const missed = sortByIntent(myTours.filter((t) => t.status === "no-show"));
  const needsOutcome = sortByIntent(myTours.filter((t) => t.status === "completed" && !t.outcome));
  const draftPush = sortByIntent(myTours.filter((t) => t.outcome === "draft"));
  const updateTour = (id, updates) => {
    setTours((prev) => prev.map((t) => t.id === id ? { ...t, ...updates } : t));
  };
  const total = toConfirm.length + missed.length + needsOutcome.length + draftPush.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6 animate-slide-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", children: "Action Queue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Hard intent surfaced first — fight for the highest-conversion tours" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "📞 Confirm Attendance", count: toConfirm.length, color: "text-primary", children: toConfirm.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(TourCard, { tour: t, onUpdate: updateTour, variant: "compact" }, t.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "❌ Missed — Follow Up", count: missed.length, color: "text-danger", children: missed.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(TourCard, { tour: t, onUpdate: updateTour, variant: "compact" }, t.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "📝 Update Outcome", count: needsOutcome.length, color: "text-role-hr", children: needsOutcome.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(TourCard, { tour: t, onUpdate: updateTour, variant: "compact" }, t.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "📄 Push Draft Agreement", count: draftPush.length, color: "text-role-hr", children: draftPush.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(TourCard, { tour: t, onUpdate: updateTour, variant: "compact" }, t.id)) }),
    total === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-8 text-center text-muted-foreground", children: "All caught up! 🎉" })
  ] });
}
function Section({ title, count, color, children }) {
  if (count === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-heading font-semibold text-xs md:text-sm ${color}`, children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
        "(",
        count,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 md:grid-cols-2", children })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TCMActions, {}) });
export {
  SplitComponent as component
};
