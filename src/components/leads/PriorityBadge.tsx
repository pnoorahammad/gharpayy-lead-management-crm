import React from "react";
import type { LeadPriority } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface PriorityBadgeProps {
  priority?: LeadPriority;
  className?: string;
}

export function PriorityBadge({ priority = "medium", className = "" }: PriorityBadgeProps) {
  switch (priority) {
    case "high":
      return (
        <Badge variant="outline" className={`border-rose-500/50 bg-rose-500/10 text-rose-500 font-semibold ${className}`}>
          High
        </Badge>
      );
    case "medium":
      return (
        <Badge variant="outline" className={`border-amber-500/50 bg-amber-500/10 text-amber-500 font-semibold ${className}`}>
          Medium
        </Badge>
      );
    case "low":
      return (
        <Badge variant="outline" className={`border-emerald-500/50 bg-emerald-500/10 text-emerald-500 font-semibold ${className}`}>
          Low
        </Badge>
      );
    default:
      return (
        <Badge variant="outline" className={className}>
          {priority}
        </Badge>
      );
  }
}
