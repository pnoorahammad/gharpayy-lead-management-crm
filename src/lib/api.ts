import type { Lead, LeadNote, LeadPriority, LeadStage } from "./types";

const DEFAULT_BACKEND_URL = "https://gharpayy-crm-api.onrender.com/api";

function getApiUrl(path: string): string {
  const envUrl = import.meta.env.VITE_API_URL || DEFAULT_BACKEND_URL;
  const baseUrl = envUrl.replace(/\/$/, "");

  // If envUrl already ends with /api and path starts with /api, strip redundant /api
  if (baseUrl.endsWith("/api") && path.startsWith("/api")) {
    return `${baseUrl}${path.replace(/^\/api/, "")}`;
  }

  // If path doesn't start with /api and baseUrl doesn't end with /api
  if (!baseUrl.endsWith("/api") && !path.startsWith("/api")) {
    return `${baseUrl}/api${path}`;
  }

  return `${baseUrl}${path}`;
}

export async function fetchBackendLeads(params?: { q?: string; stage?: string; priority?: string; sortBy?: string }) {
  if (typeof window === "undefined") return null;
  try {
    const baseUrl = getApiUrl("/api/leads");
    const url = new URL(baseUrl);
    if (params) {
      Object.entries(params).forEach(([key, val]) => {
        if (val) url.searchParams.append(key, val);
      });
    }
    const res = await fetch(url.toString());
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data?.leads) ? (data.leads as Lead[]) : null;
  } catch (err) {
    console.warn("Backend API offline or unreachable, falling back to local store:", err);
    return null;
  }
}

export async function createBackendLead(leadData: Partial<Lead>) {
  if (typeof window === "undefined") return null;
  try {
    const url = getApiUrl("/api/leads");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.lead as Lead;
  } catch (err) {
    console.warn("Backend API offline, saved locally:", err);
    return null;
  }
}

export async function updateBackendLead(id: string, patch: Partial<Lead>) {
  if (typeof window === "undefined") return null;
  try {
    const url = getApiUrl(`/api/leads/${id}`);
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patch),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.lead as Lead;
  } catch (err) {
    console.warn("Backend API offline, updated locally:", err);
    return null;
  }
}

export async function deleteBackendLead(id: string) {
  if (typeof window === "undefined") return false;
  try {
    const url = getApiUrl(`/api/leads/${id}`);
    const res = await fetch(url, { method: "DELETE" });
    return res.ok;
  } catch (err) {
    console.warn("Backend API offline, deleted locally:", err);
    return false;
  }
}

export async function addBackendLeadNote(id: string, text: string, author: string = "flow-ops") {
  if (typeof window === "undefined") return null;
  try {
    const url = getApiUrl(`/api/leads/${id}/notes`);
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, author }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.note as LeadNote;
  } catch (err) {
    console.warn("Backend API offline, added note locally:", err);
    return null;
  }
}
