import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-qrUFATK5.mjs";
import { R as RequestAccessSheet, d as detectZone, D as DuplicateModal } from "./RequestAccessSheet-BU-PamvH.mjs";
import { u as useIdentityStore } from "./store-CBikX2jm.mjs";
import { T as Tabs, h as TabsList, j as TabsTrigger, l as TabsContent, X as Input, B as Badge, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, A as Textarea, k as Button, U as Label } from "./router-Brs45mHz.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { w as Shield, S as Sparkles, c as User, P as Phone, aq as Mail, O as MapPin, W as Wallet, au as CalendarDays, a4 as Briefcase, bV as BedDouble, k as CircleCheck, av as CircleAlert, bQ as LoaderCircle } from "../_libs/lucide-react.mjs";
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
import "./audit-log-BbY99Bzt.mjs";
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
const emptyDraft = () => ({
  name: "",
  phone: "",
  email: "",
  location: "",
  areas: [],
  fullAddress: "",
  budget: "",
  moveIn: "",
  type: "",
  room: "",
  need: "",
  specialReqs: "",
  inBLR: null,
  zone: "",
  rawSource: ""
});
const TYPE_OPTIONS = ["Student", "Working professional", "Intern", "Family", "Other"];
const ROOM_OPTIONS = ["Private", "Shared (2)", "Shared (3+)", "Studio", "Any"];
const NEED_OPTIONS = ["Boys", "Girls", "Coed", "Any"];
const phoneOk = (v) => v.replace(/\D/g, "").length >= 10;
const emailOk = (v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
function DirectLeadForm({ onCreated }) {
  const checkDuplicates = useIdentityStore((s) => s.checkDuplicates);
  const createLead = useIdentityStore((s) => s.createLead);
  const [draft, setDraft] = reactExports.useState(emptyDraft());
  const [touched, setTouched] = reactExports.useState({});
  const [match, setMatch] = reactExports.useState(null);
  const [showModal, setShowModal] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!draft.location) return;
    const zone = detectZone(draft.location);
    if (zone && zone !== draft.zone) {
      setDraft((d) => ({ ...d, zone }));
    }
  }, [draft.location]);
  const update = (k, v) => setDraft((d) => ({ ...d, [k]: v }));
  const errors = reactExports.useMemo(() => {
    const e = {};
    if (!draft.name.trim()) e.name = "Name is required";
    if (!draft.phone.trim()) e.phone = "Phone is required";
    else if (!phoneOk(draft.phone)) e.phone = "Enter a valid 10-digit phone";
    if (!emailOk(draft.email)) e.email = "Invalid email";
    return e;
  }, [draft]);
  const filled = reactExports.useMemo(() => {
    const fields = ["name", "phone", "email", "location", "budget", "moveIn", "type", "room"];
    return fields.filter((f) => String(draft[f] ?? "").trim().length > 0).length;
  }, [draft]);
  const completion = Math.round(filled / 8 * 100);
  const submit = () => {
    setTouched({ name: true, phone: true, email: true });
    if (Object.keys(errors).length > 0) {
      toast.error("Fix the highlighted fields first");
      return;
    }
    setSubmitting(true);
    const result = checkDuplicates(draft);
    setMatch(result);
    setShowModal(true);
    setSubmitting(false);
  };
  const onForceCreate = () => {
    const lead = createLead(draft);
    toast.success(`Lead created · ULID ${lead.ulid.slice(0, 12)}…`);
    setShowModal(false);
    setDraft(emptyDraft());
    setTouched({});
    setMatch(null);
    onCreated?.(lead);
  };
  const onUseExisting = (lead) => {
    toast.info(`Opening existing lead: ${lead.name}`);
    setShowModal(false);
    onCreated?.(lead);
  };
  const showError = (k) => touched[k] && errors[k];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm", children: "New lead" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Direct entry · auto zone detect · live dedup" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wide text-muted-foreground", children: "Completion" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-24 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary transition-all", style: { width: `${completion}%` } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium tabular-nums", children: [
            completion,
            "%"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Identity", subtitle: "Required for safe deduplication", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { icon: User, label: "Full name *", error: showError("name") ? errors.name : void 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: draft.name,
          onChange: (e) => update("name", e.target.value),
          onBlur: () => setTouched((t) => ({ ...t, name: true })),
          placeholder: "Rahul Sharma",
          className: "h-10 text-sm",
          autoFocus: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { icon: Phone, label: "Phone *", error: showError("phone") ? errors.phone : void 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: draft.phone,
          onChange: (e) => update("phone", e.target.value),
          onBlur: () => setTouched((t) => ({ ...t, phone: true })),
          placeholder: "+91 98xxxxxxxx",
          inputMode: "tel",
          className: "h-10 text-sm"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { icon: Mail, label: "Email", error: showError("email") ? errors.email : void 0, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: draft.email,
          onChange: (e) => update("email", e.target.value),
          onBlur: () => setTouched((t) => ({ ...t, email: true })),
          placeholder: "rahul@example.com",
          type: "email",
          className: "h-10 text-sm"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { icon: MapPin, label: "Preferred area / location", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: draft.location,
            onChange: (e) => update("location", e.target.value),
            placeholder: "Koramangala",
            className: "h-10 text-sm pr-20"
          }
        ),
        draft.zone && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "absolute right-1.5 top-1/2 -translate-y-1/2 text-[10px]", children: draft.zone })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Requirements", subtitle: "The more you fill, the better the match", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { icon: Wallet, label: "Budget (₹/month)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: draft.budget,
            onChange: (e) => update("budget", e.target.value),
            placeholder: "8000-12000",
            className: "h-10 text-sm"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { icon: CalendarDays, label: "Move-in", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "date",
            value: draft.moveIn,
            onChange: (e) => update("moveIn", e.target.value),
            className: "h-10 text-sm"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { icon: Briefcase, label: "Type", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.type, onValueChange: (v) => update("type", v), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-10 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: TYPE_OPTIONS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { icon: BedDouble, label: "Room preference", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.room, onValueChange: (v) => update("room", v), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-10 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ROOM_OPTIONS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Cohort / need", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.need, onValueChange: (v) => update("need", v), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-10 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: NEED_OPTIONS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Currently in Bangalore?", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: draft.inBLR === null ? "" : draft.inBLR ? "yes" : "no",
            onValueChange: (v) => update("inBLR", v === "" ? null : v === "yes"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-10 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "yes", children: "Yes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "no", children: "No" })
              ] })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Special requirements / notes", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          value: draft.specialReqs,
          onChange: (e) => update("specialReqs", e.target.value),
          placeholder: "e.g. needs parking, food preferences, family visiting…",
          className: "min-h-20 text-sm"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky bottom-0 -mx-1 px-1 pt-2 pb-1 bg-gradient-to-t from-background via-background/95 to-background/0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3 flex items-center justify-between gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 text-[11px] text-muted-foreground", children: filled >= 4 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-primary" }),
        " Strong signals — ready to dedup & save"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3.5 w-3.5 text-amber-500" }),
        " Add a few more fields for confident dedup"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", className: "h-9", onClick: () => {
          setDraft(emptyDraft());
          setTouched({});
        }, children: "Reset" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: submit, disabled: submitting || Object.keys(errors).length > 0, size: "sm", className: "h-9 gap-2 min-w-36", children: [
          submitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
          "Save lead"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DuplicateModal,
      {
        open: showModal,
        onClose: () => setShowModal(false),
        result: match,
        onForceCreate,
        onUseExisting
      }
    )
  ] });
}
function Section({ title, subtitle, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: subtitle })
    ] }),
    children
  ] });
}
function FormField({
  label,
  error,
  icon: Icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-[11px] font-medium flex items-center gap-1.5 text-muted-foreground", children: [
      Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3" }),
      " ",
      label
    ] }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-destructive flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3" }),
      " ",
      error
    ] })
  ] });
}
function AddLeadPage() {
  const totalLeads = useIdentityStore((s) => s.leads.length);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "flex items-end justify-between flex-wrap gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", children: "Add a lead" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-3.5 w-3.5" }),
        " Real-time dedup against ",
        totalLeads,
        " unified leads"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "single", className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "single", children: "Single lead" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "requests", children: "Access requests" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "single", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DirectLeadForm, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "requests", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RequestAccessSheet, {}) })
    ] })
  ] }) });
}
export {
  AddLeadPage as component
};
