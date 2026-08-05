import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useApp, c as useMountedNow, k as Button } from "./router-Brs45mHz.mjs";
import { a6 as liveConfidence, a7 as intentFor, I as IntentChip, N as StageBadge, C as ConfidenceBar } from "./AppShell-qrUFATK5.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as Phone, N as MessageSquare, L as ClipboardCheck, q as ChevronRight } from "../_libs/lucide-react.mjs";
function QuickActionRow({
  lead,
  reason,
  accent,
  dueLabel,
  onDone
}) {
  const { selectLead, logCall, sendMessage, tcms, tours } = useApp();
  const [now, mounted] = useMountedNow();
  const tcm = tcms.find((t) => t.id === lead.assignedTcmId);
  const live = mounted ? liveConfidence(lead, tours, now) : lead.confidence;
  const liveIntent = mounted ? intentFor(live) : lead.intent;
  const ring = {
    destructive: "border-l-destructive",
    accent: "border-l-accent",
    warning: "border-l-warning",
    default: "border-l-transparent"
  }[accent ?? "default"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `group grid grid-cols-12 items-center gap-2 px-3 py-2.5 border-l-2 ${ring} hover:bg-accent/5 transition-colors`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => selectLead(lead.id), className: "col-span-4 text-left min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm truncate", children: lead.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IntentChip, { intent: liveIntent })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", children: reason ?? `${lead.phone} · ${lead.preferredArea}` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StageBadge, { stage: lead.stage }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ConfidenceBar, { value: live }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 hidden md:block text-[11px] text-muted-foreground truncate", children: tcm?.initials }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 hidden md:block text-[11px] font-mono text-muted-foreground truncate", children: dueLabel ?? "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-2 flex items-center justify-end gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "icon",
          variant: "ghost",
          className: "h-7 w-7",
          onClick: (e) => {
            e.stopPropagation();
            logCall(lead.id);
            toast.success(`Call logged · ${lead.name}`);
          },
          title: "Log call",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "icon",
          variant: "ghost",
          className: "h-7 w-7",
          onClick: (e) => {
            e.stopPropagation();
            sendMessage(lead.id, "WhatsApp template sent");
            toast.success(`WA sent · ${lead.name}`);
          },
          title: "WhatsApp",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3.5 w-3.5" })
        }
      ),
      onDone && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "icon",
          variant: "ghost",
          className: "h-7 w-7 text-success",
          onClick: (e) => {
            e.stopPropagation();
            onDone();
          },
          title: "Mark done",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCheck, { className: "h-3.5 w-3.5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "icon",
          variant: "ghost",
          className: "h-7 w-7",
          onClick: () => selectLead(lead.id),
          title: "Open",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" })
        }
      )
    ] })
  ] });
}
export {
  QuickActionRow as Q
};
