import type { Lead, LeadNote, LeadPriority, LeadStage } from "./types";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function fetchBackendLeads(params?: { q?: string; stage?: string; priority?: string; sortBy?: string }) {
  try {
    const url = new URL(`${API_BASE_URL}/leads`);
    if (params) {
      Object.entries(params).forEach(([key, val]) => {
        if (val) url.searchParams.append(key, val);
      });
    }
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data.leads as Lead[];
  } catch (err) {
    console.warn("Backend API offline, using local store data:", err);
    return null;
  }
}

export async function createBackendLead(leadData: Partial<Lead>) {
  try {
    const res = await fetch(`${API_BASE_URL}/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData),
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data.lead as Lead;
  } catch (err) {
    console.warn("Backend API offline, saved to local store:", err);
    return null;
  }
}

export async function updateBackendLead(id: string, patch: Partial<Lead>) {
  try {
    const res = await fetch(`${API_BASE_URL}/leads/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patch),
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data.lead as Lead;
  } catch (err) {
    console.warn("Backend API offline, updated local store:", err);
    return null;
  }
}

export async function deleteBackendLead(id: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/leads/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    return true;
  } catch (err) {
    console.warn("Backend API offline, deleted from local store:", err);
    return false;
  }
}

export async function addBackendLeadNote(id: string, text: string, author: string = "flow-ops") {
  try {
    const res = await fetch(`${API_BASE_URL}/leads/${id}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, author }),
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    return data.note as LeadNote;
  } catch (err) {
    console.warn("Backend API offline, added note to local store:", err);
    return null;
  }
}
