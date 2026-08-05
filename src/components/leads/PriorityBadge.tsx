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
        <Badge
          variant="outline"
          className={`cursor-pointer border-rose-500/40 bg-rose-500/10 text-rose-500 font-semibold transition-all hover:bg-rose-500/20 shadow-xs ${className}`}
        >
          <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
          High
        </Badge>
      );
    case "medium":
      return (
        <Badge
          variant="outline"
          className={`cursor-pointer border-amber-500/40 bg-amber-500/10 text-amber-500 font-semibold transition-all hover:bg-amber-500/20 shadow-xs ${className}`}
        >
          <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-amber-500" />
          Medium
        </Badge>
      );
    case "low":
      return (
        <Badge
          variant="outline"
          className={`cursor-pointer border-emerald-500/40 bg-emerald-500/10 text-emerald-500 font-semibold transition-all hover:bg-emerald-500/20 shadow-xs ${className}`}
        >
          <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Low
        </Badge>
      );
    default:
      return (
        <Badge variant="outline" className={`cursor-pointer ${className}`}>
          {priority}
        </Badge>
      );
  }
}
