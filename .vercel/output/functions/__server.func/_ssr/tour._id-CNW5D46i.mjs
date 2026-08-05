import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, aF as mapsLink, aG as fmtWhen, aH as genOtp, aI as whatsappLink, aJ as copyToClipboard } from "./AppShell-qrUFATK5.mjs";
import { a as useParams, L as Link } from "./react-router-dom-DMFzJWOF.mjs";
import { aC as useAppState, a as useSettings, aN as useTourData, aS as renderTemplate, C as Card, aq as CardHeader, ar as CardTitle, B as Badge, ap as CardContent, k as Button, T as Tabs, h as TabsList, j as TabsTrigger, l as TabsContent, q as cn, X as Input, A as Textarea, U as Label } from "./router-Brs45mHz.mjs";
import { c as computeTourScore, d as detectMismatches } from "./intelligence-00D1NvXB.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { bC as ArrowLeft, P as Phone, c as User, O as MapPin, m as CalendarClock, k as CircleCheck, bY as Truck, bZ as CircleDot, b_ as CirclePlay, b$ as CircleStop, bO as CircleX, K as Send, N as MessageSquare, aV as KeyRound, aA as ExternalLink, b as Check, j as Copy } from "../_libs/lucide-react.mjs";
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
function CopyButton({ text, size = "sm", variant = "secondary", label = "Copy", onCopied, className }) {
  const [copied, setCopied] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      type: "button",
      size,
      variant,
      className: cn("gap-1.5", className),
      onClick: async () => {
        const ok = await copyToClipboard(text);
        if (ok) {
          setCopied(true);
          toast.success("Copied — paste into WhatsApp");
          onCopied?.();
          setTimeout(() => setCopied(false), 1800);
        } else {
          toast.error("Copy failed");
        }
      },
      children: [
        copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3.5 w-3.5" }),
        size !== "icon" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copied ? "Copied" : label })
      ]
    }
  );
}
const EVENT_LABEL = {
  booked: "📌 Booked",
  confirmation_sent: "📤 Confirmation sent",
  confirmed_by_customer: "✅ Customer confirmed",
  reschedule_requested: "🔁 Reschedule requested",
  reminder_sent: "⏰ Reminder sent",
  tcm_on_the_way: "🚗 TCM on the way",
  customer_running_late: "🐢 Customer running late",
  tour_started: "▶️ Tour started",
  tour_ended: "⏹️ Tour ended",
  no_show: "👻 No-show",
  cancelled: "❌ Cancelled",
  feedback_received: "💬 Customer feedback",
  tcm_report_filed: "📝 TCM report filed",
  custom_message_sent: "💬 Custom message"
};
function TourCommand() {
  const { id } = useParams();
  const { tours, setTours } = useAppState();
  const { settings } = useSettings();
  const { addEvent, eventsForTour, feedback, reports } = useTourData();
  const tour = reactExports.useMemo(() => tours.find((t) => t.id === id), [tours, id]);
  const [activeTplId, setActiveTplId] = reactExports.useState(settings.templates[0]?.id ?? "");
  const [customBody, setCustomBody] = reactExports.useState("");
  const [otp, setOtp] = reactExports.useState("");
  const [etaMinutes, setEtaMinutes] = reactExports.useState("15");
  const events = id ? eventsForTour(id) : [];
  const tourFeedback = id ? feedback[id] : void 0;
  const tourReport = id ? reports[id] : void 0;
  if (!tour) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/myt/tours", className: "text-primary hover:underline inline-flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to tours"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Tour not found." })
    ] });
  }
  const safeTour = tour;
  const vars = {
    leadName: tour.leadName,
    propertyName: tour.propertyName,
    area: tour.area,
    when: fmtWhen(tour.tourDate, tour.tourTime),
    tcmName: tour.assignedToName,
    tcmPhone: "—",
    budget: tour.budget?.toLocaleString("en-IN") ?? "—",
    workLocation: tour.qualification?.workLocation ?? "—",
    mapsLink: mapsLink(tour.area, tour.propertyName),
    etaMinutes,
    otp: otp || "______",
    siteName: settings.siteName,
    signature: settings.signatureLine
  };
  const activeTpl = settings.templates.find((t) => t.id === activeTplId);
  const renderedActive = activeTpl ? renderTemplate(activeTpl.body, vars) : "";
  const renderedCustom = renderTemplate(customBody, vars);
  const score = computeTourScore(tour, events, settings.weights, tourFeedback, tourReport);
  const mismatches = detectMismatches(tour, tourFeedback, tourReport);
  function logEvent(kind, notes, templateId) {
    if (!id) return;
    addEvent({ tourId: id, kind, notes, templateId });
  }
  function setStatus(next) {
    setTours((prev) => prev.map((t) => t.id === safeTour.id ? { ...t, status: next } : t));
  }
  function handleCustomerConfirmed() {
    logEvent("confirmed_by_customer", "Customer replied YES");
    setStatus("confirmed");
    setTours((prev) => prev.map((t) => t.id === safeTour.id ? { ...t, status: "confirmed" } : t));
    toast.success("Marked as confirmed by customer");
  }
  function handleStartTour() {
    if (!otp) {
      const fresh = genOtp();
      setOtp(fresh);
      logEvent("custom_message_sent", `OTP generated: ${fresh}`);
      toast.message(`OTP ${fresh} generated. Share with customer or use Tour Start OTP template.`);
      return;
    }
    logEvent("tour_started", `OTP: ${otp}`);
    setTours((prev) => prev.map((t) => t.id === safeTour.id ? { ...t, status: "confirmed", showUp: true } : t));
    toast.success("Tour started");
  }
  function handleEndTour() {
    logEvent("tour_ended");
    setTours((prev) => prev.map((t) => t.id === safeTour.id ? { ...t, status: "completed" } : t));
    toast.success("Tour ended — please file TCM report");
  }
  function handleNoShow() {
    logEvent("no_show", "Marked no-show");
    setTours((prev) => prev.map((t) => t.id === safeTour.id ? { ...t, status: "no-show", showUp: false } : t));
    toast.warning("Marked as no-show");
  }
  function handleTcmOnWay() {
    logEvent("tcm_on_the_way", `ETA ${etaMinutes} min`);
  }
  function handleCustomerLate() {
    logEvent("customer_running_late");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/myt/tours", className: "text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Back to tours"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xl", children: tour.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground flex flex-wrap gap-x-3 gap-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
              tour.phone
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3 w-3" }),
              tour.assignedToName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
              tour.area,
              " · ",
              tour.propertyName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "h-3 w-3" }),
              fmtWhen(tour.tourDate, tour.tourTime)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "💰 ₹",
              tour.budget?.toLocaleString("en-IN")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: tour.status === "completed" ? "default" : "secondary", className: "capitalize", children: tour.status }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Score" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold tabular-nums", children: [
            score.total,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "/100" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: handleCustomerConfirmed, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 mr-1" }),
            " Customer replied YES"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: handleTcmOnWay, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-4 w-4 mr-1" }),
            " TCM on the way"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: handleCustomerLate, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleDot, { className: "h-4 w-4 mr-1" }),
            " Customer running late"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: handleStartTour, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-4 w-4 mr-1" }),
            " ",
            otp ? "Confirm tour started" : "Generate OTP & start"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "default", onClick: handleEndTour, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleStop, { className: "h-4 w-4 mr-1" }),
            " End tour"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "destructive", onClick: handleNoShow, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4 mr-1" }),
            " No-show"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/myt/tour/${tour.id}/report`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "secondary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 mr-1" }),
            " File TCM report"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/myt/feedback/${tour.id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "secondary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4 mr-1" }),
            " Customer feedback"
          ] }) })
        ] }),
        mismatches.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded border border-destructive/40 bg-destructive/10 p-2 text-xs text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-0.5", children: "⚠ Mismatch detected" }),
          mismatches.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "• ",
            m.reason
          ] }, i))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "messages", className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "messages", children: "Copy-paste messages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "timeline", children: [
          "Timeline (",
          events.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "score", children: "Score" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "messages", className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Pick a scenario → copy → paste in WhatsApp" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-2", children: settings.templates.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setActiveTplId(t.id),
              className: cn(
                "text-left rounded border p-2 hover:border-primary transition-colors",
                activeTplId === t.id && "border-primary bg-primary/5"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: t.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground line-clamp-2", children: t.scenario })
              ]
            },
            t.id
          )) }),
          activeTpl && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border bg-muted/30 p-3 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: activeTpl.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: activeTpl.scenario })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center flex-wrap", children: [
                activeTpl.id === "tour_start_otp" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: otp,
                      onChange: (e) => setOtp(e.target.value),
                      placeholder: "OTP",
                      className: "h-7 w-24 text-xs"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2 text-xs", onClick: () => setOtp(genOtp()), children: "Gen" })
                ] }),
                activeTpl.id === "tcm_eta" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "ETA" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: etaMinutes,
                      onChange: (e) => setEtaMinutes(e.target.value),
                      className: "h-7 w-16 text-xs"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "min" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CopyButton,
                  {
                    text: renderedActive,
                    variant: "default",
                    label: "Copy message",
                    onCopied: () => logEvent("custom_message_sent", `Copied: ${activeTpl.label}`, activeTpl.id)
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: whatsappLink(tour.phone, renderedActive),
                    target: "_blank",
                    rel: "noreferrer",
                    onClick: () => logEvent("custom_message_sent", `WA opened: ${activeTpl.label}`, activeTpl.id),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "secondary", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5 mr-1" }),
                      " Open WhatsApp"
                    ] })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: renderedActive, readOnly: true, rows: Math.min(12, renderedActive.split("\n").length + 1), className: "font-mono text-xs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border p-3 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs uppercase text-muted-foreground", children: [
              "Custom message (variables work: ",
              "{{leadName}}, {{propertyName}}, {{when}}…",
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: customBody, onChange: (e) => setCustomBody(e.target.value), rows: 3, placeholder: "Type a custom message…" }),
            customBody && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Preview" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: renderedCustom, readOnly: true, rows: Math.min(8, renderedCustom.split("\n").length + 1), className: "font-mono text-xs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CopyButton, { text: renderedCustom, variant: "default" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: whatsappLink(tour.phone, renderedCustom), target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "secondary", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5 mr-1" }),
                  " Open WhatsApp"
                ] }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            "Edit any template wording in ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/myt/settings", className: "text-primary underline", children: "Settings → Message Templates" }),
            "."
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "timeline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: events.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No events yet. Use the action buttons above to log lifecycle moments." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative border-l pl-4 space-y-3", children: events.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[19px] top-1 h-2.5 w-2.5 rounded-full bg-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: EVENT_LABEL[e.kind] ?? e.kind }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: new Date(e.at).toLocaleString("en-IN") }),
        e.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mt-0.5", children: e.notes })
      ] }, e.id)) }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "score", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-bold tabular-nums", children: [
          score.total,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-muted-foreground", children: "/100" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: Object.keys(score.parts).map((k) => {
          const p = score.parts[k];
          const pct = p.max ? p.earned / p.max * 100 : 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: k.replace(/([A-Z])/g, " $1") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tabular-nums", children: [
                p.earned,
                "/",
                p.max
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-muted rounded overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary", style: { width: `${pct}%` } }) })
          ] }, k);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
          "Adjust weights in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/myt/settings", className: "underline", children: "Settings → Score Weights" }),
          "."
        ] })
      ] }) }) })
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TourCommand, {}) });
export {
  SplitComponent as component
};
