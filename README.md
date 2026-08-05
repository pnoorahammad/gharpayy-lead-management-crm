# Gharpayy Lead Management CRM

A production-grade, enterprise Lead Management CRM platform designed specifically for **Gharpayy**'s student housing and co-living operations.

**Repository**: [https://github.com/pnoorahammad/gharpayy-lead-management-crm](https://github.com/pnoorahammad/gharpayy-lead-management-crm)  
**Live Demo**: [https://gharpayy-lead-management-crm.vercel.app](https://gharpayy-lead-management-crm.vercel.app)

---

## 🌟 Executive Summary

Gharpayy CRM connects prospective tenants, Territory Managers (TCMs), Flow Operations, and Property Owners into one unified arena infrastructure. It features real-time deal probability decay, priority management, automated tour assignment, post-tour enforcement, and interactive pipeline analytics.

---

## 🏗️ Architecture & Technology Stack

- **Frontend**: React 19, TypeScript 5.8, TanStack Router (file-based routing), Tailwind CSS v4, Vite 7.
- **State Management**: Zustand store with optimistic UI updates and REST API sync.
- **Backend API**: Node.js, Express, RESTful endpoints with persistent database JSON/Mongoose storage.
- **UI Components & UX**: Radix UI primitives, Lucide React icons, Sonner toast notifications, Recharts interactive data visualizations.
- **Exporters**: SheetJS (XLSX), jsPDF, CSV generation.

```
src/
├── admin/               # Master lead console & export utilities
├── components/          # Reusable UI components & dialogs
│   ├── dashboard/       # Recharts visualization cards
│   ├── leads/           # Lead creation modal, priority badge, timeline sheet
│   └── ui/              # Radix UI primitives (Button, Input, Select, Dialog)
├── hooks/               # Custom React hooks (useMountedNow, etc.)
├── lib/                 # Core engine & store logic
│   ├── api.ts           # REST API client
│   ├── store.ts         # Zustand state management
│   ├── types.ts         # Full TypeScript interfaces
│   ├── engine.ts        # Live deal probability scoring & Do Next queue
│   └── mock-data.ts     # Initial seed dataset
├── owner/               # Property owner portal & inventory truth
├── routes/              # TanStack Router file-based pages
│   ├── index.tsx        # Dashboard & Arena Infrastructure
│   ├── leads.tsx        # Master Leads CRM Console
│   ├── today.tsx        # Today's Priority Queue
│   └── owner-portal.tsx # Owner portal desk
server/
└── server.js            # Express REST API backend
```

---

## 🚀 Key Features

### 1. Lead Management (CRUD)
- **Create Lead**: Full validation using Zod for Name, 10-digit Phone, Email, Budget (₹), Preferred Area, Intent, Priority, Stage, and TCM assignment.
- **Edit Lead**: Complete modal workflow to update preferences, target move-in dates, and contact details.
- **Delete Lead**: Safe deletion using Radix Alert Confirmation Dialog.
- **Stage Progression**: Track lead stages (`new` → `contacted` → `tour-scheduled` → `tour-done` → `negotiation` → `booked` / `dropped`).

### 2. Search & Advanced Filtering
- **Multi-field Search**: Search across **Name**, **Phone**, and **Email** simultaneously.
- **Stage Filter**: Filter by pipeline stage.
- **Priority Filter**: Filter by urgency (`High`, `Medium`, `Low`).
- **Dynamic Sorting**: Sort by Priority (High→Low), Deal Confidence, Move-in Date, and Last Updated.

### 3. Lead Notes Timeline & Priority System
- **Lead Priority Badges**: Visual color-coded indicators (`High` Rose, `Medium` Amber, `Low` Emerald).
- **Notes Timeline**: Timestamped log of notes entered by Flow Ops and TCMs.
- **Activity History Feed**: Chronological system audit trail for stage transitions, calls logged, and tour completions.

### 4. Interactive Dashboard & Analytics
- **KPI Metrics**: Total Leads, Today's Ingested Leads, Converted Leads, Pending Leads, MRR Closed.
- **Visual Charts**:
  - **Lead Stage Conversion Funnel** (Bar chart).
  - **Priority Distribution** (Donut chart).
  - **Revenue Growth Trend** (Area chart).
- **Do Next Queue**: Automated action items ranked by urgency and response speed SLA.

### 5. Persistent Express Backend API
- REST API server built with Express and Node.js.
- Endpoints for `/api/leads`, `/api/leads/:id`, `/api/leads/:id/notes`, and `/api/stats`.
- Local database file persistence (`leads_db.json`) ensuring data remains intact across sessions.

---

## 🔧 Installation & Local Setup

### Prerequisites
- Node.js 18+ and npm

### Steps
```bash
# Clone the repository
git clone https://github.com/pnoorahammad/gharpayy-lead-management-crm.git
cd gharpayy-lead-management-crm

# Install dependencies
npm install

# Option A: Run Frontend locally (Vite dev server)
npm run dev

# Option B: Run Backend Express Server
npm run server

# Option C: Build Production Bundle
npm run build
```

---

## 📡 REST API Documentation

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | API Health Check |
| `GET` | `/api/leads` | List leads (Query params: `q`, `stage`, `priority`, `sortBy`) |
| `POST` | `/api/leads` | Create new lead with full validation |
| `GET` | `/api/leads/:id` | Get details for single lead |
| `PUT` | `/api/leads/:id` | Update lead properties, stage, or priority |
| `DELETE` | `/api/leads/:id` | Delete lead by ID |
| `POST` | `/api/leads/:id/notes` | Append note to lead timeline |
| `GET` | `/api/stats` | Retrieve overall CRM statistics & KPIs |

---

## 🛡️ License & Attribution

Built for Gharpayy technical assessment. Designed with clean architecture, SOLID principles, and high-performance React design patterns.
