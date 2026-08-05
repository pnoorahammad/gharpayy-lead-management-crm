import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, "leads_db.json");

app.use(cors());
app.use(express.json());

// Initial Seed Leads
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

// Helper to load leads from JSON file
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

// Helper to save leads to JSON file
function saveLeads(leads) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(leads, null, 2));
  } catch (err) {
    console.error("Error writing database file:", err);
  }
}

// REST ENDPOINTS

// 1. Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// 2. GET /api/leads - List all leads with search & filtering
app.get("/api/leads", (req, res) => {
  let leads = loadLeads();
  const { q, stage, priority, sortBy } = req.query;

  if (q) {
    const query = String(q).toLowerCase();
    leads = leads.filter(
      (l) =>
        l.name.toLowerCase().includes(query) ||
        l.phone.includes(query) ||
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
      if (sortBy === "confidence") return b.confidence - a.confidence;
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
  }

  res.json({ success: true, count: leads.length, leads });
});

// 3. POST /api/leads - Create new lead
app.post("/api/leads", (req, res) => {
  const { name, phone, email, source, budget, preferredArea, moveInDate, intent, priority, stage, assignedTcmId } = req.body;

  if (!name || !phone || !budget || !preferredArea) {
    return res.status(400).json({ success: false, message: "Missing required fields: name, phone, budget, preferredArea" });
  }

  const leads = loadLeads();
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

  leads.unshift(newLead);
  saveLeads(leads);

  res.status(201).json({ success: true, lead: newLead });
});

// 4. GET /api/leads/:id - Single lead details
app.get("/api/leads/:id", (req, res) => {
  const leads = loadLeads();
  const lead = leads.find((l) => l.id === req.params.id);
  if (!lead) {
    return res.status(404).json({ success: false, message: "Lead not found" });
  }
  res.json({ success: true, lead });
});

// 5. PUT /api/leads/:id - Update lead details
app.put("/api/leads/:id", (req, res) => {
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

  res.json({ success: true, lead: updatedLead });
});

// 6. DELETE /api/leads/:id - Delete lead
app.delete("/api/leads/:id", (req, res) => {
  let leads = loadLeads();
  const exists = leads.some((l) => l.id === req.params.id);
  if (!exists) {
    return res.status(404).json({ success: false, message: "Lead not found" });
  }

  leads = leads.filter((l) => l.id !== req.params.id);
  saveLeads(leads);

  res.json({ success: true, message: `Lead ${req.params.id} deleted` });
});

// 7. POST /api/leads/:id/notes - Add note to lead
app.post("/api/leads/:id/notes", (req, res) => {
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
});

// 8. GET /api/stats - Dashboard analytics
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

app.listen(PORT, () => {
  console.log(`Gharpayy Lead CRM API Server running on port ${PORT}`);
});
