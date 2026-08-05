import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useGlueEvents } from "./use-event-bus-KpzdfeLo.mjs";
import { f as Activity } from "../_libs/lucide-react.mjs";
const EVENT_LABEL = {
  "owner.room.updated": "🏠 Owner updated a room",
  "owner.room.locked": "🔒 Room auto-locked (unverified)",
  "owner.media.uploaded": "📸 Media uploaded",
  "owner.media.expired": "⏰ Media expired",
  "owner.block.approved": "✅ Owner approved block",
  "owner.block.rejected": "❌ Owner rejected block",
  "owner.compliance.scored": "📊 Compliance recalculated",
  "team.lead.pitched": "🎯 Team pitched a lead",
  "team.visit.scheduled": "📅 Visit scheduled",
  "team.visit.started": "🚶 Visit started",
  "team.visit.ended": "🏁 Visit ended",
  "team.block.requested": "🔔 Team requested a block",
  "team.task.created": "✨ New task created",
  "team.activation.required": "⚡ Activation required",
  "tcm.report.required": "📝 TCM report required",
  "tcm.report.filed": "✍️ TCM report filed",
  "system.daily.truth.warning": "⚠️ Daily-truth warning",
  "system.daily.truth.locked": "🔒 Daily-truth locked",
  "tour.confirmation.sent": "💬 Tour confirmation sent",
  "tour.reminder.sent": "🔔 Tour reminder sent"
};
function GlueFeed({ limit = 30, title = "Closed-loop activity" }) {
  const events = useGlueEvents(void 0, limit);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center gap-2 px-4 py-3 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground font-mono ml-auto", children: [
        events.length,
        " events · live"
      ] })
    ] }),
    events.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-6 text-xs text-muted-foreground text-center", children: "No events yet — perform an action to see the loop fire." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: events.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "px-4 py-2 text-xs flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: EVENT_LABEL[e.type] ?? e.type }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground", children: e.type })
    ] }, i)) })
  ] });
}
export {
  GlueFeed as G
};
