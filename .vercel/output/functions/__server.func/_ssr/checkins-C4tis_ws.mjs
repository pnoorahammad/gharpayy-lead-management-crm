import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, aa as useCheckins, ab as riskLevel, ac as STAGE_ORDER, ad as STAGE_LABEL, ae as RISK_LABEL, af as RISK_CLASS, ag as formatINR } from "./AppShell-qrUFATK5.mjs";
import { u as useApp, c as useMountedNow, B as Badge, k as Button } from "./router-Brs45mHz.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { aw as RotateCcw, A as ArrowRight, g as TriangleAlert } from "../_libs/lucide-react.mjs";
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
function CheckInBoard() {
  const checkins = useCheckins((s) => s.checkins);
  const setStage = useCheckins((s) => s.setStage);
  const { leads, selectLead } = useApp();
  const [, mounted] = useMountedNow();
  const byStage = reactExports.useMemo(() => {
    const map = {
      booked: [],
      ack_received: [],
      token_paid: [],
      room_assigned: [],
      date_set: [],
      moved_in: [],
      settled: [],
      cancelled: []
    };
    for (const c of checkins) map[c.stage].push(c);
    return map;
  }, [checkins]);
  const atRisk = reactExports.useMemo(
    () => mounted ? checkins.filter((c) => riskLevel(c) >= 2) : [],
    [checkins, mounted]
  );
  const leadName = (id) => leads.find((l) => l.id === id)?.name ?? "—";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 min-w-[1100px]", children: STAGE_ORDER.map((stage) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-[160px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold mb-2 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: STAGE_LABEL[stage] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: byStage[stage].length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        byStage[stage].map((c) => {
          const r = mounted ? riskLevel(c) : 0;
          const nextIdx = STAGE_ORDER.indexOf(stage) + 1;
          const next = STAGE_ORDER[nextIdx];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-lg border border-border bg-card p-2.5 space-y-1.5 hover:border-primary/40 cursor-pointer",
              onClick: () => selectLead(c.leadId),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium truncate", children: leadName(c.leadId) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground truncate", children: [
                  c.propertyName ?? "No property",
                  c.roomNumber ? ` · ${c.roomNumber}` : ""
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[9px] ${RISK_CLASS[r]}`, children: RISK_LABEL[r] }),
                  c.delays.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-orange-600 inline-flex items-center gap-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-2.5 w-2.5" }),
                    c.delays.length
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", children: [
                  "Bal ",
                  formatINR(c.balanceDue)
                ] }),
                next && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-6 w-full text-[10px]",
                    onClick: (e) => {
                      e.stopPropagation();
                      setStage(c.id, next);
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 mr-1" }),
                      " ",
                      STAGE_LABEL[next]
                    ]
                  }
                )
              ]
            },
            c.id
          );
        }),
        byStage[stage].length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground italic px-1 py-2", children: "—" })
      ] })
    ] }, stage)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5 text-orange-500" }),
        " At-risk lane"
      ] }),
      atRisk.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground italic", children: "Nothing at risk. 🎉" }),
      atRisk.map((c) => {
        const r = mounted ? riskLevel(c) : 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-lg border border-orange-500/30 bg-orange-500/5 p-2.5 space-y-1 cursor-pointer hover:border-orange-500/60",
            onClick: () => selectLead(c.leadId),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium", children: leadName(c.leadId) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", children: [
                STAGE_LABEL[c.stage],
                " · ",
                c.delays.length,
                " reschedule(s)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[9px] ${RISK_CLASS[r]}`, children: RISK_LABEL[r] })
            ]
          },
          c.id
        );
      })
    ] })
  ] });
}
function CheckInsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold", children: "Check-ins" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "From booked to settled. Tap a card to open the lead. Delay risk auto-scored." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CheckInBoard, {})
  ] }) });
}
export {
  CheckInsPage as component
};
