import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useApp } from "@/lib/store";
import type { Lead, LeadPriority, LeadStage } from "@/lib/types";
import { PriorityBadge } from "./PriorityBadge";
import { StageBadge, IntentChip } from "@/components/atoms";
import { formatDistanceToNow, format } from "date-fns";
import { MessageSquare, Clock, User, Phone, Mail, MapPin, IndianRupee, Tag, ShieldCheck, Edit3, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface LeadTimelineSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  leadId: string | null;
  onEdit?: (lead: Lead) => void;
  onDelete?: (lead: Lead) => void;
}

export function LeadTimelineSheet({ open, onOpenChange, leadId, onEdit, onDelete }: LeadTimelineSheetProps) {
  const { leads, tcms, activities, setLeadPriority, setLeadStage, addLeadNote } = useApp();
  const [noteText, setNoteText] = useState("");

  const lead = leads.find((l) => l.id === leadId);

  if (!lead) return null;

  const assignedTcm = tcms.find((t) => t.id === lead.assignedTcmId);
  const leadActivities = activities.filter((a) => a.leadId === lead.id);

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    addLeadNote(lead.id, noteText.trim());
    toast.success("Note added to timeline");
    setNoteText("");
  };

  const handlePriorityChange = (val: LeadPriority) => {
    setLeadPriority(lead.id, val);
    toast.success(`Priority updated to ${val.toUpperCase()}`);
  };

  const handleStageChange = (val: LeadStage) => {
    setLeadStage(lead.id, val);
    toast.success(`Stage updated to ${val}`);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-xl overflow-y-auto p-6 space-y-6">
        <SheetHeader className="space-y-2 border-b border-border pb-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <SheetTitle className="text-xl font-display font-bold flex items-center gap-2">
                {lead.name}
              </SheetTitle>
              <SheetDescription className="text-xs font-mono text-muted-foreground mt-0.5">
                ID: {lead.id} · Created {formatDistanceToNow(new Date(lead.createdAt), { addSuffix: true })}
              </SheetDescription>
            </div>
            <div className="flex items-center gap-2">
              {onEdit && (
                <Button size="sm" variant="outline" className="h-8 text-xs gap-1" onClick={() => onEdit(lead)}>
                  <Edit3 className="h-3.5 w-3.5" /> Edit
                </Button>
              )}
              {onDelete && (
                <Button size="sm" variant="outline" className="h-8 text-xs gap-1 text-destructive hover:bg-destructive/10" onClick={() => onDelete(lead)}>
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap pt-1">
            <PriorityBadge priority={lead.priority} />
            <StageBadge stage={lead.stage} />
            <IntentChip intent={lead.intent} />
            {lead.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[10px]">
                <Tag className="h-2.5 w-2.5 mr-1" /> {tag}
              </Badge>
            ))}
          </div>
        </SheetHeader>

        {/* Lead Details Grid */}
        <div className="grid grid-cols-2 gap-3 text-xs bg-muted/30 p-3.5 rounded-lg border border-border">
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            <span className="font-mono">{lead.phone}</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            <span className="truncate">{lead.email || "No email provided"}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            <span>{lead.preferredArea}</span>
          </div>

          <div className="flex items-center gap-2">
            <IndianRupee className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            <span className="font-semibold">₹{lead.budget.toLocaleString("en-IN")}/mo</span>
          </div>

          <div className="flex items-center gap-2">
            <User className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            <span>Assigned: {assignedTcm?.name ?? "Unassigned"}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            <span>Target: {new Date(lead.moveInDate).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Priority & Stage Controls */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider mb-1 block">
              Change Priority
            </label>
            <Select value={lead.priority || "medium"} onValueChange={(v) => handlePriorityChange(v as LeadPriority)}>
              <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="high">High Priority</SelectItem>
                <SelectItem value="medium">Medium Priority</SelectItem>
                <SelectItem value="low">Low Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider mb-1 block">
              Change Stage
            </label>
            <Select value={lead.stage} onValueChange={(v) => handleStageChange(v as LeadStage)}>
              <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="tour-scheduled">Tour Scheduled</SelectItem>
                <SelectItem value="tour-done">Tour Done</SelectItem>
                <SelectItem value="negotiation">Negotiation</SelectItem>
                <SelectItem value="booked">Booked</SelectItem>
                <SelectItem value="dropped">Dropped</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Add Note Section */}
        <form onSubmit={handleAddNote} className="space-y-2 pt-2 border-t border-border">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold flex items-center gap-1.5">
              <MessageSquare className="h-3.5 w-3.5 text-accent" /> Add Timeline Note
            </label>
            <span className="text-[10px] text-muted-foreground">Logged with timestamp</span>
          </div>
          <Textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Type notes, client feedback, or call summary..."
            className="text-xs min-h-[70px]"
          />
          <div className="flex justify-end">
            <Button type="submit" size="sm" className="h-8 text-xs" disabled={!noteText.trim()}>
              Save Note
            </Button>
          </div>
        </form>

        {/* Notes Timeline List */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
            Notes Timeline ({(lead.notes || []).length})
          </h3>

          <div className="space-y-2">
            {(lead.notes || []).length === 0 ? (
              <p className="text-xs text-muted-foreground italic py-2">No notes recorded yet.</p>
            ) : (
              (lead.notes || [])
                .slice()
                .reverse()
                .map((n) => (
                  <div key={n.id} className="p-3 rounded-lg bg-card border border-border space-y-1 text-xs">
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground font-mono">
                      <span className="font-semibold text-accent">{n.author}</span>
                      <span>{format(new Date(n.createdAt), "MMM d, h:mm a")}</span>
                    </div>
                    <p className="text-foreground leading-relaxed whitespace-pre-wrap">{n.text}</p>
                  </div>
                ))
            )}
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="space-y-3 pt-4 border-t border-border">
          <h3 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> Recent Activity History
          </h3>

          <div className="relative border-l border-border pl-4 space-y-3 text-xs">
            {leadActivities.length === 0 ? (
              <p className="text-xs text-muted-foreground italic">No system activities logged.</p>
            ) : (
              leadActivities.slice(0, 10).map((act) => (
                <div key={act.id} className="relative group">
                  <div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-accent border-2 border-background" />
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground font-mono">
                    <span className="capitalize">{act.kind.replace("_", " ")}</span>
                    <span>{formatDistanceToNow(new Date(act.ts), { addSuffix: true })}</span>
                  </div>
                  <p className="text-foreground text-xs mt-0.5">{act.text}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
