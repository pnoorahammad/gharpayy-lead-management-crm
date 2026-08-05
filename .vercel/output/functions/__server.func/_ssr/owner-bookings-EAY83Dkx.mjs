import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, u as useQuotations } from "./AppShell-qrUFATK5.mjs";
import { T as Tabs, h as TabsList, j as TabsTrigger, X as Input, C as Card, B as Badge, u as useApp, Z as Dialog, _ as DialogTrigger, k as Button, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, z as SelectItem, P as PGS, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, a2 as DialogFooter, U as Label } from "./router-Brs45mHz.mjs";
import { u as useOwnerBookings, c as computeTotals, L as LIFECYCLE_LABEL, O as OwnerBookingCard } from "./OwnerBookingCard-L9TazbTv.mjs";
import { e as emptyDraft, S as SOURCE_TONE, a as applyLead, b as applyProperty, c as applyQuotation, d as SOURCE_LABEL, f as draftToCreateInput } from "./sync-BFjVrETE.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { s as Clock, k as CircleCheck, I as IndianRupee, $ as Search, t as Plus, Z as Zap, aa as UserSearch, ab as House, i as FileText, X } from "../_libs/lucide-react.mjs";
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
import "./separator-BWKrsKfl.mjs";
import "../_libs/radix-ui__react-separator.mjs";
const SUGGESTED = [
  "Lower floor",
  "Quiet room",
  "Near window",
  "Early check-in",
  "Extra mattress",
  "AC room",
  "Attached washroom",
  "Veg-only floor"
];
function CreateBookingDialog({ trigger, leadId: initialLeadId, propertyId: initialPropertyId }) {
  const { createBooking } = useOwnerBookings();
  const leads = useApp((s) => s.leads);
  const quotations = useQuotations((s) => s.quotations);
  const [open, setOpen] = reactExports.useState(false);
  const [leadId, setLeadId] = reactExports.useState(initialLeadId ?? "");
  const [pgId, setPgId] = reactExports.useState(initialPropertyId ?? "");
  const [quotationId, setQuotationId] = reactExports.useState("");
  const [draft, setDraft] = reactExports.useState(() => emptyDraft());
  const [reqDraft, setReqDraft] = reactExports.useState("");
  const leadQuotations = reactExports.useMemo(
    () => leadId ? quotations.filter((q) => q.leadId === leadId) : quotations.slice(0, 30),
    [leadId, quotations]
  );
  function runSync(opts = {}) {
    const lId = opts.l ?? leadId;
    const pId = opts.p ?? pgId;
    const qId = opts.q ?? quotationId;
    let d = emptyDraft();
    if (lId) d = applyLead(d, leads.find((l) => l.id === lId));
    if (pId) d = applyProperty(d, PGS.find((p) => p.id === pId));
    if (qId) d = applyQuotation(d, quotations.find((q) => q.id === qId));
    setDraft(d);
  }
  function selectLead(v) {
    const id = v === "__none" ? "" : v;
    setLeadId(id);
    const paid = id ? quotations.find((q) => q.leadId === id && q.status === "paid") : void 0;
    if (paid) setQuotationId(paid.id);
    if (paid?.propertyId) setPgId(paid.propertyId);
    runSync({ l: id, q: paid?.id ?? quotationId, p: paid?.propertyId ?? pgId });
  }
  function selectPg(v) {
    const id = v === "__none" ? "" : v;
    setPgId(id);
    runSync({ p: id });
  }
  function selectQuotation(v) {
    const id = v === "__none" ? "" : v;
    setQuotationId(id);
    const q = quotations.find((qq) => qq.id === id);
    if (q?.propertyId && !pgId) setPgId(q.propertyId);
    runSync({ q: id, p: q?.propertyId ?? pgId });
  }
  function patch(key, value) {
    setDraft((d) => ({ ...d, [key]: value, source: { ...d.source, [key]: "manual" } }));
  }
  function patchCustomer(key, value) {
    setDraft((d) => ({
      ...d,
      customer: { ...d.customer, [key]: value },
      source: { ...d.source, [`customer.${String(key)}`]: "manual" }
    }));
  }
  function patchInventory(key, value) {
    setDraft((d) => ({
      ...d,
      inventory: { ...d.inventory, [key]: value },
      source: { ...d.source, [`inventory.${String(key)}`]: "manual" }
    }));
  }
  function patchMoveIn(key, value) {
    setDraft((d) => ({
      ...d,
      moveIn: { ...d.moveIn, [key]: value },
      source: { ...d.source, [`moveIn.${String(key)}`]: "manual" }
    }));
  }
  function addReq(text) {
    const t = text.trim();
    if (t && !draft.specialRequests.includes(t)) {
      setDraft((d) => ({ ...d, specialRequests: [...d.specialRequests, t] }));
    }
    setReqDraft("");
  }
  function submit() {
    if (!draft.customer.name.trim() || !draft.customer.phone.trim() || !draft.inventory.propertyName.trim() || !draft.inventory.roomNumber.trim()) return;
    createBooking(draftToCreateInput(draft, { leadId: leadId || void 0 }));
    setOpen(false);
    setLeadId("");
    setPgId("");
    setQuotationId("");
    setDraft(emptyDraft());
  }
  const synced = reactExports.useMemo(() => {
    const s = draft.source;
    return {
      lead: Object.values(s).filter((v) => v === "lead").length,
      property: Object.values(s).filter((v) => v === "property").length,
      quotation: Object.values(s).filter((v) => v === "quotation").length
    };
  }, [draft.source]);
  const isValid = !!draft.customer.name.trim() && !!draft.customer.phone.trim() && !!draft.inventory.propertyName.trim() && !!draft.inventory.roomNumber.trim();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: (o) => {
    setOpen(o);
    if (o) runSync();
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: trigger ?? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-1" }),
      "New Owner Booking"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-4xl max-h-[92vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-amber-500" }),
        " Create Owner Booking — Smart Sync"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 bg-gradient-to-br from-primary/5 to-transparent border-primary/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SourcePicker, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserSearch, { className: "h-3.5 w-3.5" }), label: "Lead", value: leadId, onChange: selectLead, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__none", children: "— none —" }),
            leads.slice(0, 60).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: l.id, children: [
              l.name,
              " · ",
              l.phone,
              " · ",
              l.preferredArea
            ] }, l.id))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SourcePicker, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-3.5 w-3.5" }), label: "Property", value: pgId, onChange: selectPg, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__none", children: "— none —" }),
            PGS.slice(0, 60).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: p.id, children: [
              p.actualName || p.name,
              " · ",
              p.area
            ] }, p.id))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SourcePicker, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5" }), label: "Quotation", value: quotationId, onChange: selectQuotation, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__none", children: "— none —" }),
            leadQuotations.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: q.id, children: [
              q.propertyName,
              " · ₹",
              q.discountedPrice.toLocaleString("en-IN"),
              " · ",
              q.status
            ] }, q.id))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2 flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] flex-wrap", children: [
            synced.lead > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: SOURCE_TONE.lead, children: [
              synced.lead,
              " from Lead"
            ] }),
            synced.property > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: SOURCE_TONE.property, children: [
              synced.property,
              " from Property"
            ] }),
            synced.quotation > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: SOURCE_TONE.quotation, children: [
              synced.quotation,
              " from Quotation"
            ] }),
            synced.lead + synced.property + synced.quotation === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Pick a source above to auto-fill — anything missing, just type it in." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => runSync(), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5 mr-1" }),
            " Resync"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2 mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground", children: "Customer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", src: draft.source["customer.name"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.customer.name, onChange: (e) => patchCustomer("name", e.target.value) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", src: draft.source["customer.phone"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.customer.phone, onChange: (e) => patchCustomer("phone", e.target.value) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Gender", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.customer.gender, onValueChange: (v) => patchCustomer("gender", v), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "male", children: "Male" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "female", children: "Female" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "other", children: "Other" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Occupation", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.customer.occupation, onValueChange: (v) => patchCustomer("occupation", v), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "working", children: "Working Pro" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "student", children: "Student" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "other", children: "Other" })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company / College", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.customer.companyOrCollege, onChange: (e) => patchCustomer("companyOrCollege", e.target.value) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Emergency Name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.customer.emergencyName, onChange: (e) => patchCustomer("emergencyName", e.target.value) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Emergency Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.customer.emergencyPhone, onChange: (e) => patchCustomer("emergencyPhone", e.target.value) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground", children: "Room & Property" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Property", src: draft.source["inventory.propertyName"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.inventory.propertyName, onChange: (e) => patchInventory("propertyName", e.target.value) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Floor", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.inventory.floor, onChange: (e) => patchInventory("floor", e.target.value) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Room #", src: draft.source["inventory.roomNumber"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.inventory.roomNumber, onChange: (e) => patchInventory("roomNumber", e.target.value) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Bed", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.inventory.bedNumber, onChange: (e) => patchInventory("bedNumber", e.target.value) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Sharing", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.inventory.sharing, onValueChange: (v) => patchInventory("sharing", v), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "single", children: "Single" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "double", children: "Double" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "triple", children: "Triple" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "quad", children: "Quad" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "studio", children: "Studio" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Category", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.inventory.category, onValueChange: (v) => patchInventory("category", v), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "ac", children: "AC" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "non-ac", children: "Non-AC" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "premium", children: "Premium" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "standard", children: "Standard" })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Owner ID", src: draft.source["ownerId"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.ownerId, onChange: (e) => patch("ownerId", e.target.value), placeholder: "GP-OWN-XXXX" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground", children: "Financials (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Monthly Rent", src: draft.source["rent"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: draft.rent, onChange: (e) => patch("rent", +e.target.value) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Security Deposit", src: draft.source["deposit"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: draft.deposit, onChange: (e) => patch("deposit", +e.target.value) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Booking Amount Received", src: draft.source["bookingAmt"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: draft.bookingAmt, onChange: (e) => patch("bookingAmt", +e.target.value) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Other Charges", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: draft.otherCharges, onChange: (e) => patch("otherCharges", +e.target.value) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
            "Expected total: ₹",
            (draft.rent + draft.deposit + draft.bookingAmt + draft.otherCharges).toLocaleString("en-IN"),
            " · ",
            "Received: ₹",
            draft.bookingAmt.toLocaleString("en-IN")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground", children: "Move-In" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Move-In Date", src: draft.source["moveIn.date"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: draft.moveIn.date, onChange: (e) => patchMoveIn("date", e.target.value) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Time", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "time", value: draft.moveIn.time, onChange: (e) => patchMoveIn("time", e.target.value) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Stay (months)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: draft.moveIn.stayMonths, onChange: (e) => patchMoveIn("stayMonths", +e.target.value) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lock-In (months)", src: draft.source["moveIn.lockInMonths"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: draft.moveIn.lockInMonths, onChange: (e) => patchMoveIn("lockInMonths", +e.target.value) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Notice (days)", src: draft.source["moveIn.noticeDays"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: draft.moveIn.noticeDays, onChange: (e) => patchMoveIn("noticeDays", +e.target.value) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 space-y-2 md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground", children: "Customer Expectations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: SUGGESTED.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => addReq(s),
              className: "text-[11px] rounded-full border border-border bg-card px-2 py-0.5 hover:border-primary",
              children: [
                "+ ",
                s
              ]
            },
            s
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: reqDraft,
                onChange: (e) => setReqDraft(e.target.value),
                placeholder: "Add custom expectation…",
                onKeyDown: (e) => e.key === "Enter" && (e.preventDefault(), addReq(reqDraft))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => addReq(reqDraft), children: "Add" })
          ] }),
          draft.specialRequests.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: draft.specialRequests.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] rounded-full bg-primary/10 text-primary px-2 py-0.5 flex items-center gap-1", children: [
            r,
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDraft((d) => ({ ...d, specialRequests: d.specialRequests.filter((_, j) => j !== i) })), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" }) })
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setOpen(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submit, disabled: !isValid, children: "Create & queue for owner" })
      ] })
    ] })
  ] });
}
function SourcePicker({
  icon,
  label,
  value,
  onChange,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-[11px] text-muted-foreground flex items-center gap-1", children: [
      icon,
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: value || "__none", onValueChange: onChange, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: `Pick ${label.toLowerCase()}…` }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "max-h-80", children })
    ] })
  ] });
}
function Field({ label, src, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-[11px] text-muted-foreground flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
      src && src !== "manual" && src !== "default" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: `text-[9px] h-4 px-1 ${SOURCE_TONE[src]}`, children: [
        "↻ ",
        SOURCE_LABEL[src]
      ] })
    ] }),
    children
  ] });
}
const TAB_FILTERS = [{
  id: "all",
  label: "All",
  match: () => true
}, {
  id: "pending_ack",
  label: "Pending Ack",
  match: (b) => ["created", "shared_with_owner", "viewed_by_owner"].includes(b.status)
}, {
  id: "prepare",
  label: "Room Prep",
  match: (b) => b.status === "acknowledged"
}, {
  id: "ready",
  label: "Ready",
  match: (b) => b.status === "room_ready" || b.status === "move_in_approved"
}, {
  id: "completed",
  label: "Completed",
  match: (b) => b.status === "completed"
}, {
  id: "issues",
  label: "Issues",
  match: (b) => b.status === "rejected" || b.status === "cancelled"
}];
function OwnerBookingsConsole() {
  const {
    bookings
  } = useOwnerBookings();
  const [tab, setTab] = reactExports.useState("all");
  const [q, setQ] = reactExports.useState("");
  const [openId, setOpenId] = reactExports.useState(bookings[0]?.id ?? null);
  const filtered = reactExports.useMemo(() => {
    const f = TAB_FILTERS.find((t) => t.id === tab).match;
    const term = q.trim().toLowerCase();
    return bookings.filter((b) => f(b) && (term === "" || b.customer.name.toLowerCase().includes(term) || b.customer.phone.toLowerCase().includes(term) || b.inventory.propertyName.toLowerCase().includes(term) || b.inventory.roomNumber.toLowerCase().includes(term)));
  }, [bookings, tab, q]);
  const stats = reactExports.useMemo(() => {
    const totals = bookings.reduce((acc, b) => {
      const t = computeTotals(b);
      acc.expected += t.expected;
      acc.received += t.received;
      if (["created", "shared_with_owner", "viewed_by_owner"].includes(b.status)) acc.pendingAck++;
      if (b.status === "room_ready" || b.status === "move_in_approved") acc.ready++;
      if (b.status === "completed") acc.completed++;
      return acc;
    }, {
      expected: 0,
      received: 0,
      pendingAck: 0,
      ready: 0,
      completed: 0
    });
    return totals;
  }, [bookings]);
  const open = bookings.find((b) => b.id === openId);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold", children: "Owner Booking Console" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Every booking is shared with the property owner, acknowledged, and tracked to check-in." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CreateBookingDialog, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Total bookings", value: bookings.length.toString() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Pending ack", value: stats.pendingAck.toString(), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-amber-500" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Ready", value: stats.ready.toString(), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-emerald-500" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Collected", value: `₹${stats.received.toLocaleString("en-IN")}`, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Pending dues", value: `₹${(stats.expected - stats.received).toLocaleString("en-IN")}`, tone: "warn" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickBookFromQuotations, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: tab, onValueChange: setTab, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { children: TAB_FILTERS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: t.id, className: "text-xs", children: t.label }, t.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative ml-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3.5 w-3.5 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search name, phone, room…", className: "pl-7 h-8 w-64" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[360px_1fr] gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 max-h-[70vh] overflow-y-auto pr-1", children: [
        filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 text-center text-xs text-muted-foreground", children: "No bookings here." }),
        filtered.map((b) => {
          const t = computeTotals(b);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { onClick: () => setOpenId(b.id), className: `p-3 cursor-pointer transition border ${openId === b.id ? "border-primary ring-1 ring-primary" : "hover:border-primary/40"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm truncate", children: b.customer.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: LIFECYCLE_LABEL[b.status] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground truncate mt-0.5", children: [
              b.inventory.propertyName,
              " · R",
              b.inventory.roomNumber,
              "/",
              b.inventory.bedNumber
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] mt-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                "Move-in ",
                new Date(b.moveIn.date).toLocaleDateString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t.pending > 0 ? "text-amber-600" : "text-emerald-600", children: t.pending > 0 ? `₹${t.pending.toLocaleString("en-IN")} due` : "Paid" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 h-1 bg-muted rounded overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-emerald-500", style: {
              width: `${t.readyCount / t.totalReadiness * 100}%`
            } }) })
          ] }, b.id);
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerBookingCard, { booking: open, mode: "sales" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-10 text-center text-muted-foreground", children: "Select a booking to view details." }) })
    ] })
  ] });
}
function Stat({
  label,
  value,
  icon,
  tone
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground flex items-center gap-1", children: [
      icon,
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-lg font-bold ${tone === "warn" ? "text-amber-600" : ""}`, children: value })
  ] });
}
function QuickBookFromQuotations() {
  const quotations = useQuotations((s) => s.quotations);
  const leads = useApp((s) => s.leads);
  const {
    bookings,
    createBooking
  } = useOwnerBookings();
  const candidates = reactExports.useMemo(() => {
    const usedLeadIds = new Set(bookings.map((b) => b.leadId).filter(Boolean));
    return quotations.filter((q) => q.status === "paid" && !usedLeadIds.has(q.leadId)).slice(0, 6);
  }, [quotations, bookings]);
  if (candidates.length === 0) return null;
  function quickBook(quotationId) {
    const q = quotations.find((qq) => qq.id === quotationId);
    if (!q) return;
    const lead = leads.find((l) => l.id === q.leadId);
    const pg = q.propertyId ? PGS.find((p) => p.id === q.propertyId) : void 0;
    let d = emptyDraft();
    d = applyLead(d, lead);
    if (pg) d = applyProperty(d, pg);
    d = applyQuotation(d, q);
    if (!d.inventory.roomNumber) d.inventory.roomNumber = "TBD";
    createBooking(draftToCreateInput(d, {
      leadId: q.leadId,
      createdBy: "auto-sync"
    }));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-amber-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "Quick book from paid quotations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px]", children: [
          candidates.length,
          " ready"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: "Lead + Property + Quote synced in one click." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3", children: candidates.map((q) => {
      const lead = leads.find((l) => l.id === q.leadId);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-border bg-card p-2 flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium truncate", children: lead?.name ?? q.leadId }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground truncate", children: [
            q.propertyName,
            " · ",
            q.roomType,
            " · ₹",
            q.discountedPrice.toLocaleString("en-IN")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px]", onClick: () => quickBook(q.id), children: "Sync & book" })
      ] }, q.id);
    }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerBookingsConsole, {}) });
export {
  SplitComponent as component
};
