import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { useApp } from "@/lib/store";
import { ConfidenceBar, IntentChip, StageBadge } from "@/components/atoms";
import { PriorityBadge } from "@/components/leads/PriorityBadge";
import { LeadFormModal } from "@/components/leads/LeadFormModal";
import { LeadDeleteDialog } from "@/components/leads/LeadDeleteDialog";
import { LeadTimelineSheet } from "@/components/leads/LeadTimelineSheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMemo, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import type { Lead, LeadStage, LeadPriority } from "@/lib/types";
import { useMountedNow } from "@/hooks/use-now";
import { Plus, Download, Edit3, Trash2, Search, Filter } from "lucide-react";
import { downloadCsv } from "@/admin/lib/exporters/csv";
import { toast } from "sonner";

export const Route = createFileRoute("/leads")({
  head: () => ({
    meta: [
      { title: "Leads — Gharpayy" },
      { name: "description", content: "Comprehensive lead management CRM: search, filter, priorities, timeline & CRUD actions." },
    ],
  }),
  component: LeadsPage,
});

function LeadsPage() {
  const { leads, tcms } = useApp();
  const [, mounted] = useMountedNow();

  const [q, setQ] = useState("");
  const [stage, setStage] = useState<string>("all");
  const [priority, setPriority] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"priority" | "confidence" | "moveIn" | "updated">("priority");

  // Modals & Drawers state
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [deletingLead, setDeletingLead] = useState<Lead | null>(null);
  const [activeTimelineId, setActiveTimelineId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const list = leads.filter((l) => {
      // Search by Name, Phone, Email
      if (q) {
        const query = q.toLowerCase();
        const matchesName = l.name.toLowerCase().includes(query);
        const matchesPhone = l.phone.includes(query);
        const matchesEmail = l.email ? l.email.toLowerCase().includes(query) : false;
        if (!matchesName && !matchesPhone && !matchesEmail) return false;
      }
      // Filter by stage
      if (stage !== "all" && l.stage !== stage) return false;
      // Filter by priority
      if (priority !== "all" && (l.priority || "medium") !== priority) return false;
      return true;
    });

    list.sort((a, b) => {
      if (sortBy === "priority") {
        const weight = { high: 3, medium: 2, low: 1 };
        return (weight[b.priority || "medium"] || 2) - (weight[a.priority || "medium"] || 2);
      }
      if (sortBy === "confidence") return b.confidence - a.confidence;
      if (sortBy === "moveIn") return +new Date(a.moveInDate) - +new Date(b.moveInDate);
      return +new Date(b.updatedAt) - +new Date(a.updatedAt);
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
      Created: l.createdAt,
    }));
    downloadCsv(`gharpayy-leads-${new Date().toISOString().slice(0, 10)}.csv`, exportData);
    toast.success(`Exported ${filtered.length} leads to CSV`);
  };

  return (
    <AppShell>
      <div className="space-y-4 pb-12">
        {/* Header */}
        <header className="flex items-end justify-between flex-wrap gap-3">
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-tight flex items-center gap-2">
              Leads Console
            </h1>
            <p className="text-sm text-muted-foreground">
              {filtered.length} of {leads.length} leads · search by name, phone, email & priority
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Button size="sm" variant="outline" className="h-9 text-xs gap-1.5" onClick={handleExportCsv}>
              <Download className="h-3.5 w-3.5" /> Export CSV
            </Button>
            <Button size="sm" className="h-9 text-xs gap-1.5" onClick={() => setCreateModalOpen(true)}>
              <Plus className="h-4 w-4" /> Add New Lead
            </Button>
          </div>
        </header>

        {/* Filter Controls Bar */}
        <div className="rounded-xl border border-border bg-card p-3 flex items-center gap-2 flex-wrap justify-between">
          <div className="flex items-center gap-2 flex-1 min-w-[240px]">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search name, phone, or email…"
                className="h-9 pl-9 text-xs"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Select value={stage} onValueChange={setStage}>
              <SelectTrigger className="h-9 w-36 text-xs"><SelectValue placeholder="All Stages" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stages</SelectItem>
                {(["new", "contacted", "tour-scheduled", "tour-done", "negotiation", "booked", "dropped"] as LeadStage[]).map((s) => (
                  <SelectItem key={s} value={s} className="capitalize">{s.replace("-", " ")}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priority} onValueChange={setPriority}>
              <SelectTrigger className="h-9 w-36 text-xs"><SelectValue placeholder="All Priorities" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="high">High Priority</SelectItem>
                <SelectItem value="medium">Medium Priority</SelectItem>
                <SelectItem value="low">Low Priority</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={(v) => setSortBy(v as typeof sortBy)}>
              <SelectTrigger className="h-9 w-40 text-xs"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="priority">Sort: Priority</SelectItem>
                <SelectItem value="confidence">Sort: Confidence</SelectItem>
                <SelectItem value="moveIn">Sort: Move-in date</SelectItem>
                <SelectItem value="updated">Sort: Last updated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Leads Table */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="grid grid-cols-12 px-4 py-2.5 text-[10px] uppercase tracking-wider text-muted-foreground font-semibold border-b border-border bg-muted/40">
            <div className="col-span-3">Lead</div>
            <div className="col-span-2">Priority & Stage</div>
            <div className="col-span-2">Intent & Score</div>
            <div className="col-span-2">Area & Budget</div>
            <div className="col-span-2">Assigned TCM</div>
            <div className="col-span-1 text-right">Actions</div>
          </div>

          <div className="divide-y divide-border">
            {filtered.map((l) => {
              const tcm = tcms.find((t) => t.id === l.assignedTcmId);
              return (
                <div key={l.id} className="grid grid-cols-12 px-4 py-3 items-center hover:bg-accent/5 transition-colors">
                  <button
                    onClick={() => setActiveTimelineId(l.id)}
                    className="col-span-3 text-left group"
                  >
                    <div className="font-medium text-sm group-hover:underline text-foreground flex items-center gap-1.5">
                      {l.name}
                    </div>
                    <div className="text-[11px] text-muted-foreground font-mono">
                      {l.phone} {l.email ? `· ${l.email}` : ""}
                    </div>
                  </button>

                  <div className="col-span-2 flex flex-col gap-1 items-start">
                    <PriorityBadge priority={l.priority} />
                    <StageBadge stage={l.stage} />
                  </div>

                  <div className="col-span-2 flex items-center gap-2">
                    <IntentChip intent={l.intent} />
                    <ConfidenceBar value={l.confidence} />
                  </div>

                  <div className="col-span-2 text-xs">
                    <div className="font-medium">{l.preferredArea}</div>
                    <div className="text-muted-foreground">₹{l.budget.toLocaleString("en-IN")}/mo</div>
                  </div>

                  <div className="col-span-2 text-xs">
                    <div className="font-medium">{tcm?.name ?? "Unassigned"}</div>
                    <div className="text-[10px] text-muted-foreground">{tcm?.zone ?? "—"}</div>
                  </div>

                  <div className="col-span-1 flex items-center justify-end gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 w-7 p-0"
                      title="Edit Lead"
                      onClick={() => setEditingLead(l)}
                    >
                      <Edit3 className="h-3.5 w-3.5" />
                    </Button>

                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 w-7 p-0 text-destructive hover:bg-destructive/10"
                      title="Delete Lead"
                      onClick={() => setDeletingLead(l)}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div className="text-center py-16 space-y-2">
                <Filter className="h-8 w-8 text-muted-foreground mx-auto opacity-50" />
                <p className="text-sm font-medium">No matching leads found</p>
                <p className="text-xs text-muted-foreground">Try clearing search query or adjusting filters.</p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Dialogs */}
        <LeadFormModal
          open={createModalOpen || Boolean(editingLead)}
          onOpenChange={(open) => {
            if (!open) {
              setCreateModalOpen(false);
              setEditingLead(null);
            }
          }}
          lead={editingLead}
        />

        <LeadDeleteDialog
          open={Boolean(deletingLead)}
          onOpenChange={(open) => {
            if (!open) setDeletingLead(null);
          }}
          lead={deletingLead}
        />

        <LeadTimelineSheet
          open={Boolean(activeTimelineId)}
          onOpenChange={(open) => {
            if (!open) setActiveTimelineId(null);
          }}
          leadId={activeTimelineId}
          onEdit={(leadToEdit) => {
            setActiveTimelineId(null);
            setEditingLead(leadToEdit);
          }}
          onDelete={(leadToDelete) => {
            setActiveTimelineId(null);
            setDeletingLead(leadToDelete);
          }}
        />
      </div>
    </AppShell>
  );
}
