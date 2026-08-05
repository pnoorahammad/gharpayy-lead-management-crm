import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as ConfidenceBar } from "./ConfidenceBar-n8qiGgug.mjs";
import { S as StatusBadge } from "./StatusBadge-TSI28v8v.mjs";
import { q as cn, aL as intentBg, aM as confirmationLabel, k as Button, A as Textarea } from "./router-Brs45mHz.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { L as LeadControlPanel } from "./LeadControlPanel-BXb2atrI.mjs";
import { P as Phone, W as Wallet, x as Calendar, O as MapPin, B as Building2, S as Sparkles, F as Flame, b3 as Package, I as IndianRupee, bJ as Video, a4 as Briefcase } from "../_libs/lucide-react.mjs";
const tourTypeIcon = (t) => t === "virtual" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-3.5 w-3.5" }) : t === "pre-book-pitch" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5" });
const tourTypeLabel = {
  physical: "Physical",
  virtual: "Virtual",
  "pre-book-pitch": "Pre-book"
};
function TourCard({ tour: t, onUpdate, variant = "full" }) {
  const [showOutcome, setShowOutcome] = reactExports.useState(false);
  const [remarks, setRemarks] = reactExports.useState("");
  const [whyLost, setWhyLost] = reactExports.useState(null);
  const setOutcome = (outcome, extra = {}) => {
    onUpdate?.(t.id, { outcome, remarks, whyLost, ...extra });
    setShowOutcome(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(
    "rounded-xl border bg-card p-3 space-y-2.5 transition-all hover:border-accent/50 hover:shadow-sm",
    t.intent === "hard" && "border-accent/40",
    t.intent === "medium" && "border-warning/30",
    t.intent === "soft" && "border-border"
  ), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-sm truncate", children: t.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[9px] px-1.5 py-0.5 rounded border font-medium uppercase tracking-wide", intentBg[t.intent]), children: t.intent })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${t.phone}`, className: "text-[11px] text-muted-foreground hover:text-primary flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
            t.phone
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground capitalize", children: [
            "· ",
            t.bookingSource
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: tourTypeLabel[t.tourType] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 justify-end text-foreground text-xs font-medium mt-0.5", children: [
          tourTypeIcon(t.tourType),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.tourTime })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfidenceBar, { score: t.confidenceScore, intent: t.intent }),
    t.confidenceReason.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground leading-relaxed", children: t.confidenceReason.join(" · ") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1.5 text-[11px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3 w-3 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
          "₹",
          (t.budget / 1e3).toFixed(0),
          "k"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
          "Move ",
          t.qualification.moveInDate.slice(5)
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: t.area })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3 w-3 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: t.propertyName })
      ] })
    ] }),
    t.qualification.keyConcern && variant === "full" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-amber-foreground/80 bg-amber/10 border border-amber/20 rounded px-2 py-1", children: [
      "⚠ ",
      t.qualification.keyConcern
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 pt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: t.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: confirmationLabel[t.confirmationStrength] })
      ] }),
      onUpdate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LeadControlPanel,
          {
            subject: { kind: "tour", tour: t },
            trigger: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px] px-2 gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
              " Open"
            ] })
          }
        ),
        t.status === "scheduled" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => onUpdate(t.id, { status: "confirmed" }), className: "h-7 text-[11px] px-2.5", children: "Confirm" }),
        t.status === "confirmed" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => onUpdate(t.id, { status: "completed", showUp: true }), className: "h-7 text-[11px] px-2.5", children: "Show" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => onUpdate(t.id, { status: "no-show", showUp: false }), className: "h-7 text-[11px] px-2 text-danger border-danger/30", children: "No-Show" })
        ] }),
        t.status === "completed" && !t.outcome && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => setShowOutcome((s) => !s), className: "h-7 text-[11px] px-2.5", children: "Update" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 pt-1 border-t border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScarcityButton,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3 w-3" }),
          label: "Urgency",
          onClick: () => {
            const msg = encodeURIComponent(
              `Hi ${t.leadName}, only 2 beds left in your range at ${t.propertyName}. 3 others viewing today. Hold expires in 4h. Reply YES to confirm.`
            );
            window.open(`https://wa.me/${t.phone.replace(/[^\d]/g, "")}?text=${msg}`, "_blank");
            toast.success("Urgency nudge prepared");
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScarcityButton,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-3 w-3" }),
          label: "Pack",
          onClick: () => {
            const msg = encodeURIComponent(
              `Hi ${t.leadName}, here's your pre-tour pack for ${t.propertyName}:

📸 Photos: gharpayy.com/p/${t.propertyId ?? "demo"}
🍽 Today's menu: gharpayy.com/menu
🛡 Safety video: gharpayy.com/safety

See you at ${t.tourTime}!`
            );
            window.open(`https://wa.me/${t.phone.replace(/[^\d]/g, "")}?text=${msg}`, "_blank");
            toast.success("Content pack ready");
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScarcityButton,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-3 w-3" }),
          label: "Token",
          onClick: () => {
            const link = `gharpayy.com/pay/${t.id}`;
            const msg = encodeURIComponent(
              `Lock your bed at ${t.propertyName} with ₹2,000 token. Refundable. Pay here: ${link}`
            );
            window.open(`https://wa.me/${t.phone.replace(/[^\d]/g, "")}?text=${msg}`, "_blank");
            toast.success("Payment link sent");
          }
        }
      )
    ] }),
    showOutcome && onUpdate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2 border-t border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          value: remarks,
          onChange: (e) => setRemarks(e.target.value),
          placeholder: "Remarks — objections, feedback…",
          className: "bg-surface-3 border-border text-xs h-14 resize-none"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: whyLost ?? "",
          onChange: (e) => setWhyLost(e.target.value || null),
          className: "w-full h-8 bg-surface-3 border border-border rounded-md px-2 text-xs text-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Why lost? (if applicable)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "price", children: "Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "location", children: "Location" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "food", children: "Food" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "delay", children: "Delay in decision" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "comparing", children: "Comparing options" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => setOutcome("booked", { tokenPaid: true }), className: "h-7 text-[10px] px-2 bg-role-tcm text-background hover:bg-role-tcm/90", children: "✅ Booked" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => setOutcome("token-paid", { tokenPaid: true }), className: "h-7 text-[10px] px-2 bg-role-tcm/80 text-background hover:bg-role-tcm/70", children: "💰 Token" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => setOutcome("draft"), variant: "outline", className: "h-7 text-[10px] px-2 text-role-hr border-role-hr/30", children: "📄 Draft" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => setOutcome("follow-up"), variant: "outline", className: "h-7 text-[10px] px-2", children: "🔁 Follow-up" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => setOutcome("not-interested"), variant: "outline", className: "h-7 text-[10px] px-2 text-danger border-danger/30", children: "❌ Lost" })
      ] })
    ] })
  ] });
}
function ScarcityButton({ icon, label, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick,
      className: "flex items-center gap-1 px-2 h-6 rounded-md bg-surface-3 hover:bg-primary/15 hover:text-primary text-muted-foreground text-[10px] font-medium uppercase tracking-wide transition-colors",
      children: [
        icon,
        label
      ]
    }
  );
}
export {
  TourCard as T
};
