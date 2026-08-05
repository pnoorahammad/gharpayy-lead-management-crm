import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import type { Lead } from "@/lib/types";

interface DashboardChartsProps {
  leads: Lead[];
}

const STAGE_LABELS: Record<string, string> = {
  new: "New",
  contacted: "Contacted",
  "tour-scheduled": "Tour Scheduled",
  "tour-done": "Tour Done",
  negotiation: "Negotiation",
  booked: "Booked",
  dropped: "Dropped",
};

const PRIORITY_COLORS: Record<string, string> = {
  high: "#f43f5e",   // Rose-500
  medium: "#f59e0b", // Amber-500
  low: "#10b981",    // Emerald-500
};

export function DashboardCharts({ leads }: DashboardChartsProps) {
  // 1. Stage Funnel Data
  const stageCounts: Record<string, number> = {
    new: 0,
    contacted: 0,
    "tour-scheduled": 0,
    "tour-done": 0,
    negotiation: 0,
    booked: 0,
    dropped: 0,
  };

  leads.forEach((l) => {
    if (stageCounts[l.stage] !== undefined) {
      stageCounts[l.stage]++;
    }
  });

  const stageData = Object.keys(stageCounts).map((key) => ({
    stage: STAGE_LABELS[key] || key,
    count: stageCounts[key],
  }));

  // 2. Priority Breakdown Data
  const priorityCounts = { high: 0, medium: 0, low: 0 };
  leads.forEach((l) => {
    const p = l.priority || "medium";
    priorityCounts[p]++;
  });

  const priorityData = [
    { name: "High Priority", value: priorityCounts.high, color: PRIORITY_COLORS.high },
    { name: "Medium Priority", value: priorityCounts.medium, color: PRIORITY_COLORS.medium },
    { name: "Low Priority", value: priorityCounts.low, color: PRIORITY_COLORS.low },
  ];

  // 3. Pipeline Value Trend Data (Mock monthly progression)
  const monthlyData = [
    { month: "Jan", revenue: 120, leads: 18 },
    { month: "Feb", revenue: 180, leads: 24 },
    { month: "Mar", revenue: 240, leads: 31 },
    { month: "Apr", revenue: 310, leads: 42 },
    { month: "May", revenue: 450, leads: 58 },
    { month: "Jun", revenue: 580, leads: 72 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Chart 1: Stage Breakdown */}
      <div className="rounded-xl border border-border bg-card p-4 space-y-3">
        <div>
          <h3 className="font-display text-sm font-semibold">Lead Stage Funnel</h3>
          <p className="text-[11px] text-muted-foreground">Distribution across sales pipeline</p>
        </div>
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stageData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
              <XAxis dataKey="stage" tick={{ fontSize: 10, fill: "#888888" }} interval={0} angle={-25} textAnchor="end" />
              <YAxis tick={{ fontSize: 10, fill: "#888888" }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#1c1917", borderColor: "#333", borderRadius: 8, fontSize: 12 }}
                itemStyle={{ color: "#fff" }}
              />
              <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 2: Priority Distribution */}
      <div className="rounded-xl border border-border bg-card p-4 space-y-3">
        <div>
          <h3 className="font-display text-sm font-semibold">Priority Distribution</h3>
          <p className="text-[11px] text-muted-foreground">Leads grouped by urgency</p>
        </div>
        <div className="h-56 w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={priorityData}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={75}
                paddingAngle={4}
                dataKey="value"
              >
                {priorityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#1c1917", borderColor: "#333", borderRadius: 8, fontSize: 12 }}
                itemStyle={{ color: "#fff" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-4 text-xs">
          {priorityData.map((p) => (
            <div key={p.name} className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.color }} />
              <span className="text-muted-foreground">{p.name.split(" ")[0]}: <strong className="text-foreground">{p.value}</strong></span>
            </div>
          ))}
        </div>
      </div>

      {/* Chart 3: Pipeline & Revenue Growth */}
      <div className="rounded-xl border border-border bg-card p-4 space-y-3">
        <div>
          <h3 className="font-display text-sm font-semibold">Revenue Growth Trend</h3>
          <p className="text-[11px] text-muted-foreground">Closed MRR (in ₹1,000s)</p>
        </div>
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#888888" }} />
              <YAxis tick={{ fontSize: 10, fill: "#888888" }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#1c1917", borderColor: "#333", borderRadius: 8, fontSize: 12 }}
                itemStyle={{ color: "#fff" }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#10b981" fillOpacity={1} fill="url(#colorRev)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
