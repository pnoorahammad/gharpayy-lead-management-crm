import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell, N as StageBadge, I as IntentChip, C as ConfidenceBar, G as Sheet, H as SheetContent, J as SheetHeader, M as SheetTitle, O as SheetDescription } from "./AppShell-Cp2f_YYK.mjs";
import { u as useApp, c as useMountedNow, k as Button, X as Input, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, B as Badge, Z as Dialog, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, a4 as DialogDescription, U as Label, a2 as DialogFooter, A as Textarea, q as cn, a5 as buttonVariants } from "./router-kYRMoTX_.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { a } from "../_libs/hookform__resolvers.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { R as Root2, P as Portal2, C as Content2, T as Title2, D as Description2, a as Cancel, A as Action, O as Overlay2 } from "../_libs/radix-ui__react-alert-dialog.mjs";
import { d as downloadCsv } from "./csv-25pRKrlC.mjs";
import "../_libs/react-dom.mjs";
import { am as Download, t as Plus, $ as Search, an as PenLine, ao as Trash2, Y as Funnel, ap as Tag, P as Phone, aq as Mail, O as MapPin, I as IndianRupee, c as User, s as Clock, N as MessageSquare } from "../_libs/lucide-react.mjs";
import { b as formatDistanceToNow, f as format } from "../_libs/date-fns.mjs";
import { o as objectType, s as stringType, e as enumType, n as numberType, l as literalType } from "../_libs/zod.mjs";
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
function PriorityBadge({ priority = "medium", className = "" }) {
  switch (priority) {
    case "high":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `border-rose-500/50 bg-rose-500/10 text-rose-500 font-semibold ${className}`, children: "High" });
    case "medium":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `border-amber-500/50 bg-amber-500/10 text-amber-500 font-semibold ${className}`, children: "Medium" });
    case "low":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `border-emerald-500/50 bg-emerald-500/10 text-emerald-500 font-semibold ${className}`, children: "Low" });
    default:
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className, children: priority });
  }
}
const leadSchema = objectType({
  name: stringType().min(2, "Name must be at least 2 characters"),
  phone: stringType().min(10, "Phone number must be at least 10 digits"),
  email: stringType().email("Invalid email address").or(literalType("")).optional(),
  source: stringType().min(1, "Source is required"),
  budget: numberType({ invalid_type_error: "Budget must be a number" }).min(1e3, "Minimum budget is ₹1,000"),
  preferredArea: stringType().min(1, "Preferred Area is required"),
  moveInDate: stringType().min(1, "Move-in date is required"),
  intent: enumType(["hot", "warm", "cold"]),
  priority: enumType(["high", "medium", "low"]),
  stage: enumType(["new", "contacted", "tour-scheduled", "tour-done", "negotiation", "booked", "dropped"]),
  assignedTcmId: stringType().min(1, "Assigned TCM is required")
});
function LeadFormModal({ open, onOpenChange, lead }) {
  const { addLead, updateLead, tcms } = useApp();
  const isEditing = Boolean(lead);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: a(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      source: "Website",
      budget: 12e3,
      preferredArea: "Koramangala",
      moveInDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      intent: "warm",
      priority: "medium",
      stage: "new",
      assignedTcmId: tcms[0]?.id || "tcm-1"
    }
  });
  reactExports.useEffect(() => {
    if (lead) {
      reset({
        name: lead.name,
        phone: lead.phone,
        email: lead.email || "",
        source: lead.source,
        budget: lead.budget,
        preferredArea: lead.preferredArea,
        moveInDate: lead.moveInDate ? new Date(lead.moveInDate).toISOString().slice(0, 10) : (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
        intent: lead.intent,
        priority: lead.priority || "medium",
        stage: lead.stage,
        assignedTcmId: lead.assignedTcmId
      });
    } else {
      reset({
        name: "",
        phone: "",
        email: "",
        source: "Direct",
        budget: 12e3,
        preferredArea: "Koramangala",
        moveInDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
        intent: "warm",
        priority: "medium",
        stage: "new",
        assignedTcmId: tcms[0]?.id || "tcm-1"
      });
    }
  }, [lead, reset, tcms]);
  const onSubmit = (data) => {
    try {
      if (isEditing && lead) {
        updateLead(lead.id, {
          ...data,
          moveInDate: new Date(data.moveInDate).toISOString()
        });
        toast.success(`Updated lead ${data.name}`);
      } else {
        addLead({
          ...data,
          moveInDate: new Date(data.moveInDate).toISOString()
        });
        toast.success(`Created new lead ${data.name}`);
      }
      onOpenChange(false);
    } catch (err) {
      toast.error("Failed to save lead. Please check details.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-xl max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: isEditing ? "Edit Lead Details" : "Create New Lead" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: isEditing ? "Update lead preferences, status, or assignment." : "Add a new prospective tenant to the Gharpayy CRM pipeline." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Full Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "h-9 text-xs mt-1", placeholder: "e.g. Arjun Sharma", ...register("name") }),
          errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-destructive mt-0.5", children: errors.name.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Phone Number *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "h-9 text-xs mt-1", placeholder: "+91 98765 43210", ...register("phone") }),
          errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-destructive mt-0.5", children: errors.phone.message })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Email Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "h-9 text-xs mt-1", type: "email", placeholder: "arjun@gmail.com", ...register("email") }),
          errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-destructive mt-0.5", children: errors.email.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Lead Source *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: watch("source"), onValueChange: (val) => setValue("source", val), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-xs mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Instagram", children: "Instagram" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Google", children: "Google" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Referral", children: "Referral" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Housing.com", children: "Housing.com" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Justdial", children: "Justdial" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Direct", children: "Direct Lead" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Monthly Budget (₹) *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              className: "h-9 text-xs mt-1",
              ...register("budget", { valueAsNumber: true })
            }
          ),
          errors.budget && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-destructive mt-0.5", children: errors.budget.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Preferred Area *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "h-9 text-xs mt-1", placeholder: "e.g. Koramangala", ...register("preferredArea") }),
          errors.preferredArea && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-destructive mt-0.5", children: errors.preferredArea.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Target Move-in *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", className: "h-9 text-xs mt-1", ...register("moveInDate") }),
          errors.moveInDate && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-destructive mt-0.5", children: errors.moveInDate.message })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Priority *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: watch("priority"), onValueChange: (val) => setValue("priority", val), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-xs mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "high", children: "High Priority" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "medium", children: "Medium Priority" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "low", children: "Low Priority" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Intent *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: watch("intent"), onValueChange: (val) => setValue("intent", val), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-xs mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hot", children: "Hot (Ready to move)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "warm", children: "Warm (Exploring)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cold", children: "Cold (Browsing)" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Stage *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: watch("stage"), onValueChange: (val) => setValue("stage", val), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-xs mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "new", children: "New" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "contacted", children: "Contacted" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "tour-scheduled", children: "Tour Scheduled" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "tour-done", children: "Tour Done" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "negotiation", children: "Negotiation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "booked", children: "Booked" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "dropped", children: "Dropped" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Assigned TCM *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: watch("assignedTcmId"), onValueChange: (val) => setValue("assignedTcmId", val), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-xs mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: tcms.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: t.id, children: [
            t.name,
            " (",
            t.zone,
            ")"
          ] }, t.id)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "pt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: () => onOpenChange(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "sm", disabled: isSubmitting, children: isEditing ? "Save Changes" : "Create Lead" })
      ] })
    ] })
  ] }) });
}
const AlertDialog = Root2;
const AlertDialogPortal = Portal2;
const AlertDialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay2,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = Overlay2.displayName;
const AlertDialogContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = Content2.displayName;
const AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title2,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = Title2.displayName;
const AlertDialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description2,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = Description2.displayName;
const AlertDialogAction = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Action, { ref, className: cn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = Action.displayName;
const AlertDialogCancel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Cancel,
  {
    ref,
    className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
    ...props
  }
));
AlertDialogCancel.displayName = Cancel.displayName;
function LeadDeleteDialog({ open, onOpenChange, lead }) {
  const { deleteLead } = useApp();
  if (!lead) return null;
  const handleDelete = () => {
    deleteLead(lead.id);
    toast.success(`Deleted lead ${lead.name}`);
    onOpenChange(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { children: [
        'Delete Lead "',
        lead.name,
        '"?'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: "This action cannot be undone. This will permanently delete the lead, associated tours, follow-ups, and notes history." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { size: "sm", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AlertDialogAction,
        {
          size: "sm",
          onClick: handleDelete,
          className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          children: "Delete Lead"
        }
      )
    ] })
  ] }) });
}
function LeadTimelineSheet({ open, onOpenChange, leadId, onEdit, onDelete }) {
  const { leads, tcms, activities, setLeadPriority, setLeadStage, addLeadNote } = useApp();
  const [noteText, setNoteText] = reactExports.useState("");
  const lead = leads.find((l) => l.id === leadId);
  if (!lead) return null;
  const assignedTcm = tcms.find((t) => t.id === lead.assignedTcmId);
  const leadActivities = activities.filter((a2) => a2.leadId === lead.id);
  const handleAddNote = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    addLeadNote(lead.id, noteText.trim());
    toast.success("Note added to timeline");
    setNoteText("");
  };
  const handlePriorityChange = (val) => {
    setLeadPriority(lead.id, val);
    toast.success(`Priority updated to ${val.toUpperCase()}`);
  };
  const handleStageChange = (val) => {
    setLeadStage(lead.id, val);
    toast.success(`Stage updated to ${val}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { className: "w-full sm:max-w-xl overflow-y-auto p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { className: "space-y-2 border-b border-border pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "text-xl font-display font-bold flex items-center gap-2", children: lead.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetDescription, { className: "text-xs font-mono text-muted-foreground mt-0.5", children: [
            "ID: ",
            lead.id,
            " · Created ",
            formatDistanceToNow(new Date(lead.createdAt), { addSuffix: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          onEdit && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-8 text-xs gap-1", onClick: () => onEdit(lead), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "h-3.5 w-3.5" }),
            " Edit"
          ] }),
          onDelete && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-8 text-xs gap-1 text-destructive hover:bg-destructive/10", onClick: () => onDelete(lead), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: lead.priority }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StageBadge, { stage: lead.stage }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IntentChip, { intent: lead.intent }),
        lead.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-[10px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-2.5 w-2.5 mr-1" }),
          " ",
          tag
        ] }, tag))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs bg-muted/30 p-3.5 rounded-lg border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: lead.phone })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: lead.email || "No email provided" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lead.preferredArea })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
          "₹",
          lead.budget.toLocaleString("en-IN"),
          "/mo"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Assigned: ",
          assignedTcm?.name ?? "Unassigned"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Target: ",
          new Date(lead.moveInDate).toLocaleDateString()
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase font-semibold text-muted-foreground tracking-wider mb-1 block", children: "Change Priority" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: lead.priority || "medium", onValueChange: (v) => handlePriorityChange(v), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "high", children: "High Priority" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "medium", children: "Medium Priority" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "low", children: "Low Priority" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase font-semibold text-muted-foreground tracking-wider mb-1 block", children: "Change Stage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: lead.stage, onValueChange: (v) => handleStageChange(v), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "new", children: "New" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "contacted", children: "Contacted" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "tour-scheduled", children: "Tour Scheduled" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "tour-done", children: "Tour Done" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "negotiation", children: "Negotiation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "booked", children: "Booked" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "dropped", children: "Dropped" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAddNote, className: "space-y-2 pt-2 border-t border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs font-semibold flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3.5 w-3.5 text-accent" }),
          " Add Timeline Note"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Logged with timestamp" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          value: noteText,
          onChange: (e) => setNoteText(e.target.value),
          placeholder: "Type notes, client feedback, or call summary...",
          className: "text-xs min-h-[70px]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "sm", className: "h-8 text-xs", disabled: !noteText.trim(), children: "Save Note" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-semibold tracking-wide uppercase text-muted-foreground", children: [
        "Notes Timeline (",
        (lead.notes || []).length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: (lead.notes || []).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic py-2", children: "No notes recorded yet." }) : (lead.notes || []).slice().reverse().map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg bg-card border border-border space-y-1 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] text-muted-foreground font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-accent", children: n.author }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: format(new Date(n.createdAt), "MMM d, h:mm a") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground leading-relaxed whitespace-pre-wrap", children: n.text })
      ] }, n.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-4 border-t border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-semibold tracking-wide uppercase text-muted-foreground flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
        " Recent Activity History"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-l border-border pl-4 space-y-3 text-xs", children: leadActivities.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: "No system activities logged." }) : leadActivities.slice(0, 10).map((act) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-accent border-2 border-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] text-muted-foreground font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: act.kind.replace("_", " ") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDistanceToNow(new Date(act.ts), { addSuffix: true }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-xs mt-0.5", children: act.text })
      ] }, act.id)) })
    ] })
  ] }) });
}
function LeadsPage() {
  const {
    leads,
    tcms
  } = useApp();
  useMountedNow();
  const [q, setQ] = reactExports.useState("");
  const [stage, setStage] = reactExports.useState("all");
  const [priority, setPriority] = reactExports.useState("all");
  const [sortBy, setSortBy] = reactExports.useState("priority");
  const [createModalOpen, setCreateModalOpen] = reactExports.useState(false);
  const [editingLead, setEditingLead] = reactExports.useState(null);
  const [deletingLead, setDeletingLead] = reactExports.useState(null);
  const [activeTimelineId, setActiveTimelineId] = reactExports.useState(null);
  const filtered = reactExports.useMemo(() => {
    const list = leads.filter((l) => {
      if (q) {
        const query = q.toLowerCase();
        const matchesName = l.name.toLowerCase().includes(query);
        const matchesPhone = l.phone.includes(query);
        const matchesEmail = l.email ? l.email.toLowerCase().includes(query) : false;
        if (!matchesName && !matchesPhone && !matchesEmail) return false;
      }
      if (stage !== "all" && l.stage !== stage) return false;
      if (priority !== "all" && (l.priority || "medium") !== priority) return false;
      return true;
    });
    list.sort((a2, b) => {
      if (sortBy === "priority") {
        const weight = {
          high: 3,
          medium: 2,
          low: 1
        };
        return (weight[b.priority || "medium"] || 2) - (weight[a2.priority || "medium"] || 2);
      }
      if (sortBy === "confidence") return b.confidence - a2.confidence;
      if (sortBy === "moveIn") return +new Date(a2.moveInDate) - +new Date(b.moveInDate);
      return +new Date(b.updatedAt) - +new Date(a2.updatedAt);
    });
    return list;
  }, [leads, q, stage, priority, sortBy]);
  const handleExportCsv = () => {
    const exportData = filtered.map((l) => ({
      ID: l.id,
      Name: l.name,
      Phone: l.phone,
      Email: l.email || "",
      Source: l.source,
      Budget: l.budget,
      Area: l.preferredArea,
      Stage: l.stage,
      Priority: l.priority || "medium",
      Intent: l.intent,
      Confidence: `${l.confidence}%`,
      AssignedTCM: tcms.find((t) => t.id === l.assignedTcmId)?.name || "",
      Created: l.createdAt
    }));
    downloadCsv(`gharpayy-leads-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`, exportData);
    toast.success(`Exported ${filtered.length} leads to CSV`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-end justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight flex items-center gap-2", children: "Leads Console" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          filtered.length,
          " of ",
          leads.length,
          " leads · search by name, phone, email & priority"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-9 text-xs gap-1.5", onClick: handleExportCsv, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
          " Export CSV"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-9 text-xs gap-1.5", onClick: () => setCreateModalOpen(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add New Lead"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3 flex items-center gap-2 flex-wrap justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-1 min-w-[240px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search name, phone, or email…", className: "h-9 pl-9 text-xs" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: stage, onValueChange: setStage, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 w-36 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Stages" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Stages" }),
            ["new", "contacted", "tour-scheduled", "tour-done", "negotiation", "booked", "dropped"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, className: "capitalize", children: s.replace("-", " ") }, s))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: priority, onValueChange: setPriority, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 w-36 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Priorities" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Priorities" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "high", children: "High Priority" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "medium", children: "Medium Priority" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "low", children: "Low Priority" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: sortBy, onValueChange: (v) => setSortBy(v), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 w-40 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "priority", children: "Sort: Priority" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "confidence", children: "Sort: Confidence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "moveIn", children: "Sort: Move-in date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "updated", children: "Sort: Last updated" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 px-4 py-2.5 text-[10px] uppercase tracking-wider text-muted-foreground font-semibold border-b border-border bg-muted/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3", children: "Lead" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: "Priority & Stage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: "Intent & Score" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: "Area & Budget" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: "Assigned TCM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 text-right", children: "Actions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-border", children: [
        filtered.map((l) => {
          const tcm = tcms.find((t) => t.id === l.assignedTcmId);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 px-4 py-3 items-center hover:bg-accent/5 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTimelineId(l.id), className: "col-span-3 text-left group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm group-hover:underline text-foreground flex items-center gap-1.5", children: l.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground font-mono", children: [
                l.phone,
                " ",
                l.email ? `· ${l.email}` : ""
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 flex flex-col gap-1 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: l.priority }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StageBadge, { stage: l.stage })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IntentChip, { intent: l.intent }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ConfidenceBar, { value: l.confidence })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: l.preferredArea }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground", children: [
                "₹",
                l.budget.toLocaleString("en-IN"),
                "/mo"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: tcm?.name ?? "Unassigned" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: tcm?.zone ?? "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1 flex items-center justify-end gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 w-7 p-0", title: "Edit Lead", onClick: () => setEditingLead(l), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 w-7 p-0 text-destructive hover:bg-destructive/10", title: "Delete Lead", onClick: () => setDeletingLead(l), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
            ] })
          ] }, l.id);
        }),
        filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-8 w-8 text-muted-foreground mx-auto opacity-50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "No matching leads found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Try clearing search query or adjusting filters." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LeadFormModal, { open: createModalOpen || Boolean(editingLead), onOpenChange: (open) => {
      if (!open) {
        setCreateModalOpen(false);
        setEditingLead(null);
      }
    }, lead: editingLead }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LeadDeleteDialog, { open: Boolean(deletingLead), onOpenChange: (open) => {
      if (!open) setDeletingLead(null);
    }, lead: deletingLead }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LeadTimelineSheet, { open: Boolean(activeTimelineId), onOpenChange: (open) => {
      if (!open) setActiveTimelineId(null);
    }, leadId: activeTimelineId, onEdit: (leadToEdit) => {
      setActiveTimelineId(null);
      setEditingLead(leadToEdit);
    }, onDelete: (leadToDelete) => {
      setActiveTimelineId(null);
      setDeletingLead(leadToDelete);
    } })
  ] }) });
}
export {
  LeadsPage as component
};
