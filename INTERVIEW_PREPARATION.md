# Gharpayy Lead Management CRM — Technical Interview Guide

This document is prepared for the technical interview discussion with the **Gharpayy** engineering leadership team.

---

## 1. Architectural Strategy & Design Rationale

### Q: Why did you choose React 19 + TanStack Router + Zustand?
**Answer:**
- **TanStack Router**: Provides type-safe file-based routing with explicit search parameter contracts. Search params (like `q`, `stage`, `priority`) are treated as first-class state, allowing shareable deep links.
- **Zustand for Global State**: Unlike Redux, Zustand is lightweight, avoids unnecessary boilerplate, and allows fine-grained selector subscriptions to prevent extra re-renders.
- **Optimistic UI Updates**: State mutations in `useApp` apply immediately to local Zustand store while dispatching asynchronous requests to the Express backend. If a network call fails, the UI falls back gracefully without locking up user actions.

---

## 2. Key Technical Challenges & Solutions

### Challenge 1: Type-Safe Search Parameters in TanStack Router
- **Issue**: TanStack Router requires strict type definitions for search parameters. Untyped callbacks caused build-time TypeScript errors.
- **Solution**: Refactored `search` parameter mappers in `OwnerHome.tsx`, `SalesInventoryTruth.tsx`, and `owner-portal.tsx` to return complete typed objects containing both `id` and `tab` properties.

### Challenge 2: Offline-First Backend Synchronization
- **Issue**: Standard REST APIs fail when disconnected, while purely `localStorage` solutions lack persistence across browsers and multi-user environments.
- **Solution**: Designed `src/lib/api.ts` with a silent fallback mechanism. When the backend server is online, all CRUD actions (`POST`, `PUT`, `DELETE`, `/notes`) sync via HTTP REST endpoints. If offline, the application seamlessly updates local state and logs warning notices without crashing.

### Challenge 3: Live Deal Probability Scoring Algorithm
- **Solution**: Implemented `liveConfidence` decay engine (`src/lib/engine.ts`). Confidence scores decay automatically over time based on days since last touch, post-tour updates, and response speed SLAs.

---

## 3. Database Schema & Data Modeling

```json
{
  "id": "l-101",
  "name": "Arjun Sharma",
  "phone": "+91 98765 43210",
  "email": "arjun.sharma@gmail.com",
  "source": "Instagram",
  "budget": 14000,
  "moveInDate": "2026-08-15T00:00:00.000Z",
  "preferredArea": "Koramangala",
  "assignedTcmId": "tcm-1",
  "stage": "tour-scheduled",
  "intent": "hot",
  "priority": "high",
  "confidence": 85,
  "tags": ["budget-match", "ready-to-move"],
  "notes": [
    {
      "id": "n-1",
      "leadId": "l-101",
      "author": "flow-ops",
      "text": "Requires AC room near Sony World Signal.",
      "createdAt": "2026-08-05T09:00:00.000Z"
    }
  ],
  "createdAt": "2026-08-05T08:00:00.000Z",
  "updatedAt": "2026-08-05T09:30:00.000Z"
}
```

---

## 4. Performance & Scalability Optimizations

1. **Memoized Derivations (`useMemo`)**:
   - Complex filtering and sorting algorithms in `leads.tsx` and `index.tsx` are wrapped in `useMemo`, recalculating only when `leads`, `q`, `stage`, or `priority` change.
2. **Recharts Component Optimization**:
   - Recharts visual charts use responsive containers and minimal DOM nodes to keep frame rates steady at 60 FPS.
3. **Lazy Route Loading**:
   - Routes are lazy-loaded by TanStack Router, splitting JavaScript bundle sizes into lightweight chunks.

---

## 5. Summary of Implemented Features

1. **Lead Management (CRUD)**: Create, Edit, Delete, Stage updates with Zod validation and Radix Alert Dialogs.
2. **Multi-field Search & Filters**: Search by Name, Phone, Email; filter by Stage and Priority (`High`, `Medium`, `Low`).
3. **Lead Notes Timeline**: Dedicated timeline drawer for adding notes and viewing chronological activity history.
4. **Lead Priority System**: Color-coded badges (`High` Rose, `Medium` Amber, `Low` Emerald), sorting, and filtering.
5. **Dashboard Analytics**: KPI cards, Recharts Stage Funnel, Priority Distribution donut chart, and Revenue growth trend.
6. **Express REST Backend**: Persistent Node.js + Express backend with JSON database file storage (`server/server.js`).
