import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useApp } from "@/lib/store";
import type { Lead } from "@/lib/types";
import { toast } from "sonner";

interface LeadDeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lead: Lead | null;
}

export function LeadDeleteDialog({ open, onOpenChange, lead }: LeadDeleteDialogProps) {
  const { deleteLead } = useApp();

  if (!lead) return null;

  const handleDelete = () => {
    deleteLead(lead.id);
    toast.success(`Deleted lead ${lead.name}`);
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Lead "{lead.name}"?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the lead, associated tours, follow-ups, and notes history.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel size="sm">Cancel</AlertDialogCancel>
          <AlertDialogAction
            size="sm"
            onClick={handleDelete}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Delete Lead
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
