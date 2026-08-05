import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { G as Sheet, am as SheetTrigger, H as SheetContent, J as SheetHeader, M as SheetTitle } from "./AppShell-Cp2f_YYK.mjs";
import { aC as useAppState, aN as useTourData, k as Button, q as cn, aL as intentBg, B as Badge, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, T as Tabs, h as TabsList, j as TabsTrigger, l as TabsContent, U as Label, A as Textarea, X as Input } from "./router-kYRMoTX_.mjs";
import { S as Slider } from "./slider-b3nZWa_t.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { S as Sparkles, g as TriangleAlert, X, P as Phone, r as MessageCircle, i as FileText, N as MessageSquare, p as Bell, k as CircleCheck, f as Activity, W as Wallet, O as MapPin, B as Building2, s as Clock, ap as Tag, K as Send } from "../_libs/lucide-react.mjs";
import { b as formatDistanceToNow, f as format } from "../_libs/date-fns.mjs";
const STAGES = [
  { value: "scheduled", label: "Scheduled" },
  { value: "confirmed", label: "Confirmed" },
  { value: "completed", label: "Tour Done" },
  { value: "no-show", label: "No-show" },
  { value: "cancelled", label: "Cancelled" }
];
const SIGNAL_TAGS = [
  "Price issue",
  "Location mismatch",
  "Parents involved",
  "Comparing options",
  "Food concern",
  "Move-in delay",
  "Hot lead"
];
function LeadControlPanel({ subject, trigger, defaultTab = "overview" }) {
  const [open, setOpen] = reactExports.useState(false);
  const { setTours, leads, setLeads } = useAppState();
  const { addEvent, eventsForTour, reports, setReport } = useTourData();
  const tour = subject.kind === "tour" ? subject.tour : void 0;
  const lead = subject.kind === "lead" ? subject.lead : leads.find((l) => l.phone === subject.tour.phone || l.name === subject.tour.leadName);
  const name = tour?.leadName ?? lead?.name ?? "Lead";
  const phone = tour?.phone ?? lead?.phone ?? "";
  const area = tour?.area ?? lead?.area ?? "—";
  const budget = tour?.budget ?? lead?.budget ?? 0;
  const property = tour?.propertyName;
  const [note, setNote] = reactExports.useState("");
  const [tags, setTags] = reactExports.useState([]);
  const [fuDate, setFuDate] = reactExports.useState(() => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().slice(0, 10);
  });
  const [fuPriority, setFuPriority] = reactExports.useState(
    tour?.intent === "hard" ? "hot" : tour?.intent === "medium" ? "warm" : "cold"
  );
  const [fuReason, setFuReason] = reactExports.useState("Decision check-in");
  const [waText, setWaText] = reactExports.useState("");
  const existingReport = tour ? reports[tour.id] : void 0;
  const [ptOutcome, setPtOutcome] = reactExports.useState(tour?.outcome ?? "");
  const [ptConfidence, setPtConfidence] = reactExports.useState(existingReport ? 80 : tour?.confidenceScore ?? 50);
  const [ptObjection, setPtObjection] = reactExports.useState(tour?.whyLost ?? null);
  const [ptObjectionNote, setPtObjectionNote] = reactExports.useState("");
  const [ptDecisionDate, setPtDecisionDate] = reactExports.useState("");
  const [ptNextFollowUp, setPtNextFollowUp] = reactExports.useState(fuDate);
  const events = reactExports.useMemo(() => tour ? eventsForTour(tour.id) : [], [tour, eventsForTour]);
  const updateTour = (patch) => {
    if (!tour) return;
    setTours((prev) => prev.map((t) => t.id === tour.id ? { ...t, ...patch } : t));
  };
  const updateLead = (patch) => {
    if (!lead) return;
    setLeads((prev) => prev.map((l) => l.id === lead.id ? { ...l, ...patch } : l));
  };
  const log = (kind, notes) => {
    if (tour) addEvent({ tourId: tour.id, kind, notes });
  };
  const setStatus = (status) => {
    updateTour({ status, ...status === "completed" ? { showUp: true } : {} });
    log(
      status === "completed" ? "tour_ended" : status === "no-show" ? "no_show" : "custom_message_sent",
      `Status → ${status}`
    );
    toast.success(`Status updated to ${status}`);
  };
  const sendWhatsApp = (text) => {
    if (!phone) {
      toast.error("No phone on file");
      return;
    }
    const cleaned = phone.replace(/\D/g, "");
    window.open(`https://wa.me/${cleaned}?text=${encodeURIComponent(text)}`, "_blank");
    log("custom_message_sent", text.slice(0, 80));
    toast.success("WhatsApp opened");
  };
  const callNow = () => {
    if (!phone) return;
    window.location.href = `tel:${phone.replace(/\s/g, "")}`;
    log("custom_message_sent", "Call placed");
  };
  const saveNote = () => {
    if (!note.trim()) return;
    log("custom_message_sent", `Note: ${note.trim()}${tags.length ? ` [${tags.join(", ")}]` : ""}`);
    toast.success("Note saved");
    setNote("");
    setTags([]);
  };
  const saveFollowUp = () => {
    new Date(fuDate).toISOString();
    log("reminder_sent", `Follow-up scheduled · ${fuPriority.toUpperCase()} · ${fuReason} · ${format(new Date(fuDate), "MMM d")}`);
    toast.success(`Follow-up set ${format(new Date(fuDate), "MMM d")}`, { description: fuReason });
    if (lead) updateLead({ notes: `[FU ${fuDate}] ${fuReason}
${lead.notes ?? ""}` });
  };
  const savePostTour = () => {
    if (!tour) return;
    if (!ptOutcome) {
      toast.error("Pick an outcome");
      return;
    }
    if (!ptObjection && ptOutcome !== "booked" && ptOutcome !== "token-paid") {
      toast.error("Tag the key objection");
      return;
    }
    if (!ptNextFollowUp) {
      toast.error("Next follow-up date is mandatory");
      return;
    }
    updateTour({ outcome: ptOutcome, whyLost: ptObjection, remarks: ptObjectionNote });
    setReport({
      tourId: tour.id,
      arrived: tour.showUp ? "yes" : "no",
      punctuality: "on_time",
      budgetAlignment: "exact",
      propertyReaction: ptOutcome === "booked" || ptOutcome === "token-paid" ? "positive" : "neutral",
      interestLevel: ptConfidence >= 70 ? "high" : ptConfidence >= 40 ? "medium" : "low",
      firstObjection: ptObjection ?? void 0,
      decisionAuthority: "self",
      emotionalTone: "neutral",
      outcome: ptOutcome === "booked" || ptOutcome === "token-paid" ? "booked" : ptOutcome === "follow-up" ? "warm" : ptOutcome === "draft" ? "hot" : "cold",
      nextStep: `${fuReason} on ${ptNextFollowUp}`,
      notes: ptObjectionNote,
      filedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    log("tcm_report_filed", `Outcome: ${ptOutcome} · confidence ${ptConfidence}%`);
    toast.success("Post-tour update saved");
  };
  const stale = tour?.status === "completed" && !tour.outcome;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, children: trigger ?? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-8 gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
      " Open"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      SheetContent,
      {
        side: "right",
        className: "w-full sm:max-w-xl p-0 overflow-y-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { className: "p-4 border-b border-border bg-surface-2/40 sticky top-0 z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { className: "text-base font-heading flex items-center gap-2 flex-wrap", children: [
                  name,
                  tour && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[10px] px-1.5 py-0.5 rounded border font-medium uppercase", intentBg[tour.intent]), children: tour.intent }),
                  stale && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "destructive", className: "text-[10px] gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3 w-3" }),
                    " Update required"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground mt-1", children: [
                  phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mr-2", children: [
                    "📞 ",
                    phone
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mr-2", children: [
                    "📍 ",
                    area
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "💰 ₹",
                    (budget / 1e3).toFixed(0),
                    "k"
                  ] })
                ] }),
                tour && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: [
                  tour.propertyName,
                  " · ",
                  tour.tourDate,
                  " ",
                  tour.tourTime,
                  " · TCM ",
                  tour.assignedToName
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-7 w-7", onClick: () => setOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 gap-1 text-[11px]", onClick: callNow, disabled: !phone, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
                " Call"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 gap-1 text-[11px]", onClick: () => sendWhatsApp(`Hi ${name}, this is regarding your Gharpayy tour. Can we connect?`), disabled: !phone, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3 w-3" }),
                " WhatsApp"
              ] }),
              tour && /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: tour.status, onValueChange: (v) => setStatus(v), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 text-[11px] w-[130px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STAGES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s.value, className: "text-xs", children: s.label }, s.value)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: stale ? "post-tour" : defaultTab, className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full justify-start h-9 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "overview", className: "text-[11px] gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3 w-3" }),
                " Overview"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "actions", className: "text-[11px] gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3 w-3" }),
                " Action"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "followup", className: "text-[11px] gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-3 w-3" }),
                " Follow-up"
              ] }),
              tour && /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "post-tour", className: cn("text-[11px] gap-1", stale && "text-destructive"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3" }),
                " Post-tour"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "activity", className: "text-[11px] gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3 w-3" }),
                " Activity"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "overview", className: "mt-3 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3.5 w-3.5" }), label: "Budget", value: `₹${budget.toLocaleString()}/mo` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }), label: "Area", value: area }),
                tour && /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5" }), label: "Property", value: property }),
                tour && /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }), label: "Slot", value: `${tour.tourDate} ${tour.tourTime}` }),
                lead && /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-3.5 w-3.5" }), label: "Source", value: lead.addedByName ?? "—" }),
                lead && /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }), label: "Move-in", value: lead.moveInDate })
              ] }),
              tour && (tour.confidenceReason?.length ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-surface-2/40 p-2.5 text-[11px] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium text-foreground mb-1 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
                  " Why this score"
                ] }),
                tour.confidenceReason.join(" · ")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", children: "Add note" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: note,
                    onChange: (e) => setNote(e.target.value),
                    placeholder: "What did the lead say? Concerns, decision triggers, parent objections…",
                    className: "min-h-[70px] text-xs"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: SIGNAL_TAGS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setTags((s) => s.includes(t) ? s.filter((x) => x !== t) : [...s, t]),
                    className: cn(
                      "text-[10px] px-2 py-0.5 rounded-full border transition-colors",
                      tags.includes(t) ? "bg-primary/15 border-primary/40 text-primary" : "bg-surface-2 border-border text-muted-foreground hover:bg-surface-3"
                    ),
                    children: t
                  },
                  t
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "w-full gap-1.5", onClick: saveNote, disabled: !note.trim(), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5" }),
                  " Save to log"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "actions", className: "mt-3 space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              [
                { label: "Reconfirm tour", text: `Hi ${name}, just confirming your tour today at ${tour?.tourTime ?? "the scheduled time"} for ${property ?? "the property"}. Reply YES to confirm.` },
                { label: "Send directions", text: `Hi ${name}, here are directions for your visit: https://maps.google.com/?q=${encodeURIComponent(property ?? area)}. TCM ${tour?.assignedToName ?? ""} will meet you.` },
                { label: "Urgency nudge", text: `Hi ${name}, only 2 beds left in your range at ${property ?? "this property"}. 3 others viewing today. Hold expires in 4 hours. Reply YES to lock.` },
                { label: "Post-tour check-in", text: `Hi ${name}, hope the visit went well! Did you like the place? Reply 1: Loved it · 2: Good unsure · 3: Need better options.` },
                { label: "Token request", text: `Hi ${name}, lock your bed at ${property ?? ""} with a refundable ₹2,000 token. Pay here: gharpayy.com/pay/${tour?.id ?? ""}` }
              ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-surface-2/40 p-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold", children: t.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-6 gap-1 text-[10px]", onClick: () => sendWhatsApp(t.text), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3 w-3" }),
                    " Send"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground line-clamp-2", children: t.text })
              ] }, t.label)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-surface-2/40 p-2.5 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", children: "Custom message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: waText, onChange: (e) => setWaText(e.target.value), placeholder: "Type a custom WhatsApp message…", className: "min-h-[60px] text-xs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "w-full gap-1.5", disabled: !waText.trim(), onClick: () => {
                  sendWhatsApp(waText);
                  setWaText("");
                }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5" }),
                  " Send custom"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "followup", className: "mt-3 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-amber/30 bg-amber/5 p-2.5 text-[11px] text-amber-foreground/90", children: "⚠ Every lead must have a next follow-up date. No exceptions." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", children: "Next follow-up" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: fuDate, onChange: (e) => setFuDate(e.target.value), className: "h-9 text-sm" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", children: "Priority" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: fuPriority, onValueChange: (v) => setFuPriority(v), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hot", children: "🔥 Hot — today" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "warm", children: "☀️ Warm — 24h" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cold", children: "❄️ Cold — this week" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", children: "What to do" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: fuReason, onValueChange: setFuReason, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Decision check-in", children: "Decision check-in" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Reconfirm tour", children: "Reconfirm tour" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Send property options", children: "Send property options" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Pricing discussion", children: "Pricing discussion" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Token / advance push", children: "Token / advance push" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Parent call", children: "Parent call" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: saveFollowUp, className: "w-full gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
                " Set follow-up"
              ] })
            ] }),
            tour && /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "post-tour", className: "mt-3 space-y-3", children: [
              stale && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-destructive/40 bg-destructive/5 p-2.5 text-[11px] text-destructive flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5" }),
                " Tour ended without an update. Fill all fields to clear the flag."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", children: "Outcome (mandatory)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-1.5", children: [
                  { v: "booked", label: "✅ Booked" },
                  { v: "token-paid", label: "💰 Token" },
                  { v: "draft", label: "📄 Draft" },
                  { v: "follow-up", label: "🔁 Follow-up" },
                  { v: "not-interested", label: "❌ Not fit" },
                  { v: "rejected", label: "🚫 Rejected" }
                ].map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setPtOutcome(o.v),
                    className: cn(
                      "h-8 rounded-md border text-[10px] font-medium transition-colors",
                      ptOutcome === o.v ? "border-primary bg-primary/15 text-primary" : "border-border bg-surface-2 text-muted-foreground hover:bg-surface-3"
                    ),
                    children: o.label
                  },
                  o.v
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-[11px] text-muted-foreground", children: [
                  "Deal confidence · ",
                  ptConfidence,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { value: [ptConfidence], onValueChange: (v) => setPtConfidence(v[0]), max: 100, step: 5 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", children: "Key objection" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: ptObjection ?? "", onValueChange: (v) => setPtObjection(v || null), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select objection" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "price", children: "Price" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "location", children: "Location" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "food", children: "Food" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "delay", children: "Decision delay" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "comparing", children: "Comparing options" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "other", children: "Other" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Add detail (exact words help)", value: ptObjectionNote, onChange: (e) => setPtObjectionNote(e.target.value), className: "h-9 text-sm" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", children: "Expected decision date" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: ptDecisionDate, onChange: (e) => setPtDecisionDate(e.target.value), className: "h-9 text-sm" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", children: "Next follow-up *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: ptNextFollowUp, onChange: (e) => setPtNextFollowUp(e.target.value), className: "h-9 text-sm" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: savePostTour, className: "w-full gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
                " Submit post-tour update"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Skipping or partial fills block new tour assignments after 4 hours." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "activity", className: "mt-3 space-y-2", children: events.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center py-6", children: "No activity yet. Every action you take here will appear in this timeline." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: events.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-surface-2/40 p-2.5 text-[11px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium capitalize", children: e.kind.replace(/_/g, " ") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: formatDistanceToNow(new Date(e.at), { addSuffix: true }) })
              ] }),
              e.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-0.5", children: e.notes })
            ] }, e.id)) }) })
          ] })
        ]
      }
    )
  ] });
}
function Info({ icon, label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-surface-2/40 p-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-muted-foreground uppercase tracking-wide", children: [
      icon,
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground font-medium mt-0.5 truncate", children: value })
  ] });
}
export {
  LeadControlPanel as L
};
