import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useApp } from "@/lib/store";
import type { Lead, LeadStage, Intent, LeadPriority } from "@/lib/types";
import { toast } from "sonner";

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address").or(z.literal("")).optional(),
  source: z.string().min(1, "Source is required"),
  budget: z.number({ invalid_type_error: "Budget must be a number" }).min(1000, "Minimum budget is ₹1,000"),
  preferredArea: z.string().min(1, "Preferred Area is required"),
  moveInDate: z.string().min(1, "Move-in date is required"),
  intent: z.enum(["hot", "warm", "cold"]),
  priority: z.enum(["high", "medium", "low"]),
  stage: z.enum(["new", "contacted", "tour-scheduled", "tour-done", "negotiation", "booked", "dropped"]),
  assignedTcmId: z.string().min(1, "Assigned TCM is required"),
});

type LeadFormData = z.infer<typeof leadSchema>;

interface LeadFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lead?: Lead | null;
}

export function LeadFormModal({ open, onOpenChange, lead }: LeadFormModalProps) {
  const { addLead, updateLead, tcms } = useApp();
  const isEditing = Boolean(lead);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      source: "Website",
      budget: 12000,
      preferredArea: "Koramangala",
      moveInDate: new Date().toISOString().slice(0, 10),
      intent: "warm",
      priority: "medium",
      stage: "new",
      assignedTcmId: tcms[0]?.id || "tcm-1",
    },
  });

  useEffect(() => {
    if (lead) {
      reset({
        name: lead.name,
        phone: lead.phone,
        email: lead.email || "",
        source: lead.source,
        budget: lead.budget,
        preferredArea: lead.preferredArea,
        moveInDate: lead.moveInDate ? new Date(lead.moveInDate).toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10),
        intent: lead.intent,
        priority: lead.priority || "medium",
        stage: lead.stage,
        assignedTcmId: lead.assignedTcmId,
      });
    } else {
      reset({
        name: "",
        phone: "",
        email: "",
        source: "Direct",
        budget: 12000,
        preferredArea: "Koramangala",
        moveInDate: new Date().toISOString().slice(0, 10),
        intent: "warm",
        priority: "medium",
        stage: "new",
        assignedTcmId: tcms[0]?.id || "tcm-1",
      });
    }
  }, [lead, reset, tcms]);

  const onSubmit = (data: LeadFormData) => {
    try {
      if (isEditing && lead) {
        updateLead(lead.id, {
          ...data,
          moveInDate: new Date(data.moveInDate).toISOString(),
        });
        toast.success(`Updated lead ${data.name}`);
      } else {
        addLead({
          ...data,
          moveInDate: new Date(data.moveInDate).toISOString(),
        });
        toast.success(`Created new lead ${data.name}`);
      }
      onOpenChange(false);
    } catch (err) {
      toast.error("Failed to save lead. Please check details.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Lead Details" : "Create New Lead"}</DialogTitle>
          <DialogDescription>
            {isEditing ? "Update lead preferences, status, or assignment." : "Add a new prospective tenant to the Gharpayy CRM pipeline."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs">Full Name *</Label>
              <Input className="h-9 text-xs mt-1" placeholder="e.g. Arjun Sharma" {...register("name")} />
              {errors.name && <p className="text-[10px] text-destructive mt-0.5">{errors.name.message}</p>}
            </div>

            <div>
              <Label className="text-xs">Phone Number *</Label>
              <Input className="h-9 text-xs mt-1" placeholder="+91 98765 43210" {...register("phone")} />
              {errors.phone && <p className="text-[10px] text-destructive mt-0.5">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs">Email Address</Label>
              <Input className="h-9 text-xs mt-1" type="email" placeholder="arjun@gmail.com" {...register("email")} />
              {errors.email && <p className="text-[10px] text-destructive mt-0.5">{errors.email.message}</p>}
            </div>

            <div>
              <Label className="text-xs">Lead Source *</Label>
              <Select value={watch("source")} onValueChange={(val) => setValue("source", val)}>
                <SelectTrigger className="h-9 text-xs mt-1"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Instagram">Instagram</SelectItem>
                  <SelectItem value="Google">Google</SelectItem>
                  <SelectItem value="Referral">Referral</SelectItem>
                  <SelectItem value="Housing.com">Housing.com</SelectItem>
                  <SelectItem value="Justdial">Justdial</SelectItem>
                  <SelectItem value="Direct">Direct Lead</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <Label className="text-xs">Monthly Budget (₹) *</Label>
              <Input
                type="number"
                className="h-9 text-xs mt-1"
                {...register("budget", { valueAsNumber: true })}
              />
              {errors.budget && <p className="text-[10px] text-destructive mt-0.5">{errors.budget.message}</p>}
            </div>

            <div>
              <Label className="text-xs">Preferred Area *</Label>
              <Input className="h-9 text-xs mt-1" placeholder="e.g. Koramangala" {...register("preferredArea")} />
              {errors.preferredArea && <p className="text-[10px] text-destructive mt-0.5">{errors.preferredArea.message}</p>}
            </div>

            <div>
              <Label className="text-xs">Target Move-in *</Label>
              <Input type="date" className="h-9 text-xs mt-1" {...register("moveInDate")} />
              {errors.moveInDate && <p className="text-[10px] text-destructive mt-0.5">{errors.moveInDate.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <Label className="text-xs">Priority *</Label>
              <Select value={watch("priority")} onValueChange={(val) => setValue("priority", val as LeadPriority)}>
                <SelectTrigger className="h-9 text-xs mt-1"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High Priority</SelectItem>
                  <SelectItem value="medium">Medium Priority</SelectItem>
                  <SelectItem value="low">Low Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-xs">Intent *</Label>
              <Select value={watch("intent")} onValueChange={(val) => setValue("intent", val as Intent)}>
                <SelectTrigger className="h-9 text-xs mt-1"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="hot">Hot (Ready to move)</SelectItem>
                  <SelectItem value="warm">Warm (Exploring)</SelectItem>
                  <SelectItem value="cold">Cold (Browsing)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-xs">Stage *</Label>
              <Select value={watch("stage")} onValueChange={(val) => setValue("stage", val as LeadStage)}>
                <SelectTrigger className="h-9 text-xs mt-1"><SelectValue /></SelectTrigger>
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

          <div>
            <Label className="text-xs">Assigned TCM *</Label>
            <Select value={watch("assignedTcmId")} onValueChange={(val) => setValue("assignedTcmId", val)}>
              <SelectTrigger className="h-9 text-xs mt-1"><SelectValue /></SelectTrigger>
              <SelectContent>
                {tcms.map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    {t.name} ({t.zone})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className="pt-3">
            <Button type="button" variant="outline" size="sm" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" size="sm" disabled={isSubmitting}>
              {isEditing ? "Save Changes" : "Create Lead"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
