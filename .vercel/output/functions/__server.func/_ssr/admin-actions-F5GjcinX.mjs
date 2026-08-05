import { u as useApp } from "./router-Brs45mHz.mjs";
import { u as useAuditLog } from "./audit-log-BbY99Bzt.mjs";
import { t as toast } from "../_libs/sonner.mjs";
const undoStack = /* @__PURE__ */ new Map();
function pushUndo(id, fn) {
  undoStack.set(id, fn);
  setTimeout(() => undoStack.delete(id), 1e4);
}
function undo(id) {
  const fn = undoStack.get(id);
  if (!fn) {
    toast.warning("Undo window expired");
    return;
  }
  fn();
  undoStack.delete(id);
  toast.success("Reverted");
}
function reassignLead(leadId, newTcmId, reason = "Admin reassignment") {
  const state = useApp.getState();
  const lead = state.leads.find((l) => l.id === leadId);
  if (!lead) return;
  const before = lead.assignedTcmId;
  state.reassignLead(leadId, newTcmId, reason);
  const entry = useAuditLog.getState().log({
    actorId: "admin",
    actorName: "Admin",
    entityType: "lead",
    entityId: leadId,
    action: "admin.reassign",
    before: { assignedTcmId: before },
    after: { assignedTcmId: newTcmId },
    summary: `Reassigned ${lead.name} → ${state.tcms.find((t) => t.id === newTcmId)?.name ?? newTcmId}`
  });
  pushUndo(entry.id, () => {
    useApp.getState().reassignLead(leadId, before, "Undo admin reassignment");
  });
  toast.success(`Reassigned ${lead.name}`, {
    action: { label: "Undo", onClick: () => undo(entry.id) }
  });
}
function forceCloseLead(leadId, outcome, reasonOrAmount) {
  const state = useApp.getState();
  const lead = state.leads.find((l) => l.id === leadId);
  if (!lead) return;
  const before = lead.stage;
  if (outcome === "won") {
    const amount = typeof reasonOrAmount === "number" ? reasonOrAmount : lead.budget;
    const tour = state.tours.find((t) => t.leadId === leadId);
    if (tour) {
      state.closeDeal({ leadId, tourId: tour.id, propertyId: tour.propertyId, tcmId: lead.assignedTcmId, amount });
    } else {
      state.setLeadStage(leadId, "booked");
    }
  } else {
    state.setLeadStage(leadId, "dropped");
  }
  const entry = useAuditLog.getState().log({
    actorId: "admin",
    actorName: "Admin",
    entityType: "lead",
    entityId: leadId,
    action: outcome === "won" ? "admin.force-close.won" : "admin.force-close.lost",
    before: { stage: before },
    after: { stage: outcome === "won" ? "booked" : "dropped", reason: reasonOrAmount },
    summary: `Force-closed ${lead.name} as ${outcome}`
  });
  pushUndo(entry.id, () => {
    useApp.getState().setLeadStage(leadId, before);
  });
  toast.success(`Closed ${lead.name} as ${outcome}`, {
    action: { label: "Undo stage", onClick: () => undo(entry.id) }
  });
}
function bulkReassign(leadIds, newTcmId) {
  if (leadIds.length > 10 && !confirm(`Reassign ${leadIds.length} leads?`)) return;
  leadIds.forEach((id) => reassignLead(id, newTcmId, "Bulk admin reassignment"));
}
function flagIntervention(leadId, note) {
  const lead = useApp.getState().leads.find((l) => l.id === leadId);
  if (!lead) return;
  useAuditLog.getState().log({
    actorId: "admin",
    actorName: "Admin",
    entityType: "lead",
    entityId: leadId,
    action: "admin.intervention.flag",
    summary: `Flagged ${lead.name}: ${note}`
  });
  toast.success("Intervention flagged");
}
export {
  flagIntervention as a,
  bulkReassign as b,
  forceCloseLead as f,
  reassignLead as r
};
