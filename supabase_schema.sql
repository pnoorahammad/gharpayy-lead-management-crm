-- ========================================================
-- Gharpayy Lead Management CRM - Supabase Schema Migration
-- ========================================================

-- 1. Create Leads Table
CREATE TABLE IF NOT EXISTS public.leads (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  source TEXT DEFAULT 'Direct',
  budget NUMERIC NOT NULL,
  move_in_date TIMESTAMPTZ,
  preferred_area TEXT NOT NULL,
  assigned_tcm_id TEXT DEFAULT 'tcm-1',
  stage TEXT DEFAULT 'new',
  intent TEXT DEFAULT 'warm',
  priority TEXT DEFAULT 'medium',
  confidence NUMERIC DEFAULT 50,
  tags JSONB DEFAULT '[]'::jsonb,
  notes JSONB DEFAULT '[]'::jsonb,
  next_follow_up_at TIMESTAMPTZ,
  response_speed_mins NUMERIC DEFAULT 15,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create Notes Table
CREATE TABLE IF NOT EXISTS public.notes (
  id TEXT PRIMARY KEY,
  lead_id TEXT REFERENCES public.leads(id) ON DELETE CASCADE,
  author TEXT DEFAULT 'flow-ops',
  text TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create Activities Table
CREATE TABLE IF NOT EXISTS public.activities (
  id TEXT PRIMARY KEY,
  lead_id TEXT REFERENCES public.leads(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  details TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for Fast Query Performance
CREATE INDEX IF NOT EXISTS idx_leads_stage ON public.leads(stage);
CREATE INDEX IF NOT EXISTS idx_leads_priority ON public.leads(priority);
CREATE INDEX IF NOT EXISTS idx_leads_preferred_area ON public.leads(preferred_area);
CREATE INDEX IF NOT EXISTS idx_notes_lead_id ON public.notes(lead_id);

-- Disable Row Level Security (RLS) or add public read/write policy for API access
ALTER TABLE public.leads DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.notes DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities DISABLE ROW LEVEL SECURITY;
