import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-Cp2f_YYK.mjs";
import { a as useParams, u as useNavigate, L as Link } from "./react-router-dom-DMFzJWOF.mjs";
import { aC as useAppState, a as useSettings, aN as useTourData, C as Card, aq as CardHeader, ar as CardTitle, ap as CardContent, U as Label, X as Input, A as Textarea, k as Button, q as cn } from "./router-kYRMoTX_.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { bC as ArrowLeft, a9 as Save } from "../_libs/lucide-react.mjs";
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
function Pills({
  value,
  onChange,
  options
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: () => onChange(o.value),
      className: cn(
        "px-2.5 py-1 rounded text-xs border",
        value === o.value ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border hover:border-primary/50"
      ),
      children: o.label
    },
    o.value
  )) });
}
function TCMReportPage() {
  const { id } = useParams();
  const nav = useNavigate();
  const { tours } = useAppState();
  const { settings } = useSettings();
  const { reports, setReport, addEvent } = useTourData();
  const tour = reactExports.useMemo(() => tours.find((t) => t.id === id), [tours, id]);
  const existing = id ? reports[id] : void 0;
  const [r, setR] = reactExports.useState(
    existing ?? {
      tourId: id ?? "",
      arrived: void 0,
      punctuality: void 0,
      budgetAlignment: void 0,
      propertyReaction: void 0,
      interestLevel: void 0,
      decisionAuthority: void 0,
      emotionalTone: void 0,
      outcome: void 0,
      nextStep: ""
    }
  );
  if (!tour) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/myt/tours", className: "text-primary underline inline-flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3", children: "Tour not found." })
    ] });
  }
  function field(k, v) {
    setR((p) => ({ ...p, [k]: v }));
  }
  function canSubmit() {
    return r.arrived && r.punctuality && r.budgetAlignment && r.propertyReaction && r.interestLevel && r.decisionAuthority && r.emotionalTone && r.outcome && r.nextStep && r.nextStep.trim().length > 0;
  }
  function submit() {
    if (!canSubmit() || !id) {
      toast.error("Fill all required fields and define a next step");
      return;
    }
    const report = {
      tourId: id,
      arrived: r.arrived,
      punctuality: r.punctuality,
      budgetAlignment: r.budgetAlignment,
      propertyReaction: r.propertyReaction,
      interestLevel: r.interestLevel,
      firstObjection: r.firstObjection,
      priceReactionWords: r.priceReactionWords,
      decisionAuthority: r.decisionAuthority,
      comparisonReference: r.comparisonReference,
      emotionalTone: r.emotionalTone,
      outcome: r.outcome,
      nextStep: r.nextStep,
      notes: r.notes,
      filedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    setReport(report);
    addEvent({ tourId: id, kind: "tcm_report_filed", notes: `Outcome: ${report.outcome}` });
    toast.success("Report filed — next task unlocked");
    nav(`/tour/${id}`);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/myt/tour/${tour.id}`, className: "text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Back to tour"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { children: [
          "TCM Intelligence Form — ",
          tour.leadName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Forced closure: you can't move on until every required field is filled. Your input is matched against the customer feedback to detect mismatches." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Arrived?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pills,
            {
              value: r.arrived,
              onChange: (v) => field("arrived", v),
              options: [
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "proxy", label: "Proxy visited" }
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Punctuality" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pills,
            {
              value: r.punctuality,
              onChange: (v) => field("punctuality", v),
              options: [
                { value: "early", label: "Early" },
                { value: "on_time", label: "On time" },
                { value: "late", label: "Late" },
                { value: "no_show", label: "No-show" }
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Budget alignment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pills,
            {
              value: r.budgetAlignment,
              onChange: (v) => field("budgetAlignment", v),
              options: [
                { value: "exact", label: "Exact" },
                { value: "stretch", label: "Stretch" },
                { value: "mismatch", label: "Mismatch" }
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Property reaction" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pills,
            {
              value: r.propertyReaction,
              onChange: (v) => field("propertyReaction", v),
              options: [
                { value: "positive", label: "Positive" },
                { value: "neutral", label: "Neutral" },
                { value: "negative", label: "Negative" }
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Interest level" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pills,
            {
              value: r.interestLevel,
              onChange: (v) => field("interestLevel", v),
              options: [
                { value: "high", label: "🔥 High" },
                { value: "medium", label: "🙂 Medium" },
                { value: "low", label: "❄️ Low" }
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "First objection raised" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: r.firstObjection ?? "",
                onChange: (e) => field("firstObjection", e.target.value),
                className: "w-full h-10 mt-1 bg-background border border-border rounded-md px-3 text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select…" }),
                  settings.customObjections.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o, children: o }, o))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Price reaction (exact words)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                className: "mt-1",
                value: r.priceReactionWords ?? "",
                onChange: (e) => field("priceReactionWords", e.target.value),
                placeholder: "e.g. 'Bahut zyada hai bhai'"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Decision authority" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pills,
            {
              value: r.decisionAuthority,
              onChange: (v) => field("decisionAuthority", v),
              options: [
                { value: "self", label: "Self" },
                { value: "parent", label: "Parent" },
                { value: "group", label: "Group" },
                { value: "other", label: "Other" }
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Comparison reference" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              value: r.comparisonReference ?? "",
              onChange: (e) => field("comparisonReference", e.target.value),
              placeholder: "e.g. 'They mentioned Stanza Living near campus'"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Emotional tone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pills,
            {
              value: r.emotionalTone,
              onChange: (v) => field("emotionalTone", v),
              options: [
                { value: "excited", label: "Excited" },
                { value: "confused", label: "Confused" },
                { value: "defensive", label: "Defensive" },
                { value: "neutral", label: "Neutral" }
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Outcome (funnel position)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pills,
            {
              value: r.outcome,
              onChange: (v) => field("outcome", v),
              options: [
                { value: "booked", label: "Booked (token / blocked)" },
                { value: "hot", label: "Hot (24-48 hrs)" },
                { value: "warm", label: "Warm (exploring)" },
                { value: "cold", label: "Cold" },
                { value: "dropped", label: "Dropped" }
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Next step (mandatory)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              className: "mt-1",
              rows: 2,
              value: r.nextStep ?? "",
              onChange: (e) => field("nextStep", e.target.value),
              placeholder: "e.g. Follow-up call tomorrow 11am · suggest property X · drop"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Free notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              className: "mt-1",
              rows: 3,
              value: r.notes ?? "",
              onChange: (e) => field("notes", e.target.value),
              placeholder: "Anything else worth capturing"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: submit, disabled: !canSubmit(), className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4 mr-2" }),
          " File report & unlock next task"
        ] })
      ] })
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TCMReportPage, {}) });
export {
  SplitComponent as component
};
