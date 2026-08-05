import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, "leads_db.json");

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Initialize Supabase Client
const SUPABASE_URL =
  process.env.SUPABASE_URL ||
  process.env.VITE_SUPABASE_URL ||
  "https://qiluyabnizuwzrbslwzr.supabase.co";
const SUPABASE_KEY =
  process.env.SUPABASE_SECRET_KEY ||
  process.env.SUPABASE_PUBLISHABLE_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY ||
  "sb_publishable_CmJbML-0tBhijzy94Ti52A_Mkru_kom";

let supabase = null;
if (SUPABASE_URL && SUPABASE_KEY) {
  try {
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    console.log("Supabase client initialized successfully for production DB.");
  } catch (err) {
    console.warn("Supabase initialization error, falling back to JSON DB:", err.message);
  }
}

// Initial Seed Leads for Local JSON Engine
const initialLeads = [
  {
    id: "l-1",
    name: "Karthik R.",
    phone: "+91 98331 12345",
    email: "karthik.r@gmail.com",
    source: "Instagram",
    budget: 14000,
    moveInDate: new Date(Date.now() + 3 * 86400000).toISOString(),
    preferredArea: "Koramangala",
    assignedTcmId: "tcm-1",
    stage: "tour-scheduled",
    intent: "hot",
    priority: "high",
    confidence: 86,
    tags: ["budget-match"],
    notes: [
      {
        id: "n-1",
        leadId: "l-1",
        author: "flow-ops",
        text: "Client requested double sharing room near Sony Signal.",
        createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
      },
    ],
    nextFollowUpAt: new Date(Date.now() + 3600000 * 6).toISOString(),
    responseSpeedMins: 3,
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    updatedAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: "l-2",
    name: "Ananya G.",
    phone: "+91 91225 55310",
    email: "ananya.g@gmail.com",
    source: "Justdial",
    budget: 11000,
    moveInDate: new Date(Date.now() + 7 * 86400000).toISOString(),
    preferredArea: "Indiranagar",
    assignedTcmId: "tcm-2",
    stage: "negotiation",
    intent: "warm",
    priority: "medium",
    confidence: 62,
    tags: ["price-issue"],
    notes: [],
    nextFollowUpAt: new Date(Date.now() + 86400000).toISOString(),
    responseSpeedMins: 8,
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 8).toISOString(),
  },
  {
    id: "l-3",
    name: "Sneha P.",
    phone: "+91 90224 68100",
    email: "sneha.p@gmail.com",
    source: "Google",
    budget: 16000,
    moveInDate: new Date(Date.now() + 86400000).toISOString(),
    preferredArea: "Whitefield",
    assignedTcmId: "tcm-4",
    stage: "tour-scheduled",
    intent: "hot",
    priority: "high",
    confidence: 91,
    tags: ["urgent"],
    notes: [
      {
        id: "n-2",
        leadId: "l-3",
        author: "tcm",
        text: "Looking for single occupancy room with AC.",
        createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
      },
    ],
    nextFollowUpAt: new Date(Date.now() + 3600000 * 3).toISOString(),
    responseSpeedMins: 2,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
];

// Local JSON Database Helpers
function loadLeads() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify(initialLeads, null, 2));
      return initialLeads;
    }
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading database file:", err);
    return initialLeads;
  }
}

function saveLeads(leads) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(leads, null, 2));
  } catch (err) {
    console.error("Error writing database file:", err);
  }
}

// ---------------- SERVER ROUTES ----------------

// Root Route - Fixes "Cannot GET /"
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "Gharpayy Lead Management CRM API",
    version: "1.0.0",
    database: supabase ? "supabase" : "local-json",
    endpoints: {
      health: "/health",
      api_health: "/api/health",
      leads: "/api/leads",
      stats: "/api/stats",
    },
    timestamp: new Date().toISOString(),
  });
});

// Health Check Routes - Fixes Render Health Checks
app.get(["/health", "/api/health"], async (req, res) => {
  let dbStatus = "connected";
  if (supabase) {
    try {
      const { error } = await supabase.from("leads").select("id").limit(1);
      if (error && error.code !== "PGRST116") dbStatus = "fallback-json";
    } catch {
      dbStatus = "fallback-json";
    }
  }
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    database: dbStatus,
    timestamp: new Date().toISOString(),
  });
});

// 1. GET /api/leads - Query, Filter, Sort Leads
app.get("/api/leads", async (req, res) => {
  try {
    let leads = [];

    // Try Supabase first
    if (supabase) {
      const { data, error } = await supabase.from("leads").select("*");
      if (!error && data && data.length > 0) {
        leads = data;
      }
    }

    // Fallback to local JSON store if empty or not configured
    if (leads.length === 0) {
      leads = loadLeads();
    }

    const { q, stage, priority, sortBy } = req.query;

    if (q) {
      const query = String(q).toLowerCase();
      leads = leads.filter(
        (l) =>
          (l.name && l.name.toLowerCase().includes(query)) ||
          (l.phone && l.phone.includes(query)) ||
          (l.email && l.email.toLowerCase().includes(query))
      );
    }

    if (stage && stage !== "all") {
      leads = leads.filter((l) => l.stage === stage);
    }

    if (priority && priority !== "all") {
      leads = leads.filter((l) => (l.priority || "medium") === priority);
    }

    if (sortBy) {
      leads.sort((a, b) => {
        if (sortBy === "priority") {
          const weight = { high: 3, medium: 2, low: 1 };
          return (weight[b.priority || "medium"] || 2) - (weight[a.priority || "medium"] || 2);
        }
        if (sortBy === "confidence") return (b.confidence || 0) - (a.confidence || 0);
        return new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0);
      });
    }

    res.json({ success: true, count: leads.length, leads });
  } catch (err) {
    console.error("GET /api/leads Error:", err);
    res.status(500).json({ success: false, message: "Internal server error", error: err.message });
  }
});

// 2. POST /api/leads - Create Lead
app.post("/api/leads", async (req, res) => {
  try {
    const { name, phone, email, source, budget, preferredArea, moveInDate, intent, priority, stage, assignedTcmId } = req.body;

    if (!name || !phone || !budget || !preferredArea) {
      return res.status(400).json({ success: false, message: "Missing required fields: name, phone, budget, preferredArea" });
    }

    const nowIso = new Date().toISOString();
    const newLead = {
      id: `l-${Date.now().toString(36)}`,
      name: name.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : "",
      source: source || "Direct",
      budget: Number(budget),
      moveInDate: moveInDate || nowIso,
      preferredArea: preferredArea.trim(),
      assignedTcmId: assignedTcmId || "tcm-1",
      stage: stage || "new",
      intent: intent || "warm",
      priority: priority || "medium",
      confidence: intent === "hot" ? 70 : intent === "cold" ? 25 : 50,
      tags: [],
      notes: [],
      nextFollowUpAt: null,
      responseSpeedMins: 15,
      createdAt: nowIso,
      updatedAt: nowIso,
    };

    // Save to local JSON DB
    const leads = loadLeads();
    leads.unshift(newLead);
    saveLeads(leads);

    // Save to Supabase DB if available
    if (supabase) {
      try {
        await supabase.from("leads").insert([newLead]);
      } catch (sbErr) {
        console.warn("Supabase insert warning:", sbErr.message);
      }
    }

    res.status(201).json({ success: true, lead: newLead });
  } catch (err) {
    console.error("POST /api/leads Error:", err);
    res.status(500).json({ success: false, message: "Internal server error", error: err.message });
  }
});

// 3. GET /api/leads/:id - Single Lead
app.get("/api/leads/:id", (req, res) => {
  const leads = loadLeads();
  const lead = leads.find((l) => l.id === req.params.id);
  if (!lead) {
    return res.status(404).json({ success: false, message: "Lead not found" });
  }
  res.json({ success: true, lead });
});

// 4. PUT /api/leads/:id - Update Lead
app.put("/api/leads/:id", async (req, res) => {
  try {
    const leads = loadLeads();
    const index = leads.findIndex((l) => l.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: "Lead not found" });
    }

    const updatedLead = {
      ...leads[index],
      ...req.body,
      updatedAt: new Date().toISOString(),
    };

    leads[index] = updatedLead;
    saveLeads(leads);

    if (supabase) {
      try {
        await supabase.from("leads").update(updatedLead).eq("id", req.params.id);
      } catch (sbErr) {
        console.warn("Supabase update warning:", sbErr.message);
      }
    }

    res.json({ success: true, lead: updatedLead });
  } catch (err) {
    console.error("PUT /api/leads/:id Error:", err);
    res.status(500).json({ success: false, message: "Internal server error", error: err.message });
  }
});

// 5. DELETE /api/leads/:id - Delete Lead
app.delete("/api/leads/:id", async (req, res) => {
  try {
    let leads = loadLeads();
    const exists = leads.some((l) => l.id === req.params.id);
    if (!exists) {
      return res.status(404).json({ success: false, message: "Lead not found" });
    }

    leads = leads.filter((l) => l.id !== req.params.id);
    saveLeads(leads);

    if (supabase) {
      try {
        await supabase.from("leads").delete().eq("id", req.params.id);
      } catch (sbErr) {
        console.warn("Supabase delete warning:", sbErr.message);
      }
    }

    res.json({ success: true, message: `Lead ${req.params.id} deleted` });
  } catch (err) {
    console.error("DELETE /api/leads/:id Error:", err);
    res.status(500).json({ success: false, message: "Internal server error", error: err.message });
  }
});

// 6. POST /api/leads/:id/notes - Add Note to Lead
app.post("/api/leads/:id/notes", async (req, res) => {
  try {
    const { text, author } = req.body;
    if (!text) {
      return res.status(400).json({ success: false, message: "Note text is required" });
    }

    const leads = loadLeads();
    const lead = leads.find((l) => l.id === req.params.id);
    if (!lead) {
      return res.status(404).json({ success: false, message: "Lead not found" });
    }

    const note = {
      id: `n-${Date.now().toString(36)}`,
      leadId: lead.id,
      author: author || "flow-ops",
      text,
      createdAt: new Date().toISOString(),
    };

    lead.notes = lead.notes || [];
    lead.notes.push(note);
    lead.updatedAt = new Date().toISOString();

    saveLeads(leads);

    res.status(201).json({ success: true, note, notes: lead.notes });
  } catch (err) {
    console.error("POST /api/leads/:id/notes Error:", err);
    res.status(500).json({ success: false, message: "Internal server error", error: err.message });
  }
});

// 7. GET /api/stats - Dashboard Analytics
app.get("/api/stats", (req, res) => {
  const leads = loadLeads();
  const total = leads.length;
  const converted = leads.filter((l) => l.stage === "booked").length;
  const pending = leads.filter((l) => l.stage !== "booked" && l.stage !== "dropped").length;
  const highPriority = leads.filter((l) => l.priority === "high").length;

  res.json({
    success: true,
    stats: {
      totalLeads: total,
      convertedLeads: converted,
      pendingLeads: pending,
      highPriorityLeads: highPriority,
      conversionRate: total > 0 ? Math.round((converted / total) * 100) : 0,
    },
  });
});

// Serve static frontend files if built in dist (for single-instance deployment)
const distPath = path.join(__dirname, "../dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

// Global Express Error Handler Middleware
app.use((err, req, res, next) => {
  console.error("Global Server Exception:", err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

app.listen(PORT, () => {
  console.log(`Gharpayy Lead CRM API Server running on port ${PORT}`);
});
