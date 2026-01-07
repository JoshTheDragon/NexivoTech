-- Create consultations table for Nexivo booking form
-- Run this in your Supabase SQL Editor

CREATE TABLE consultations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  phone TEXT,
  industry TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT,
  preferred_date TIMESTAMPTZ,
  submitted_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Add indexes for performance
CREATE INDEX idx_consultations_email ON consultations(email);
CREATE INDEX idx_consultations_submitted_at ON consultations(submitted_at);
CREATE INDEX idx_consultations_industry ON consultations(industry);
CREATE INDEX idx_consultations_service ON consultations(service);

-- Enable Row Level Security (RLS)
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for the API endpoint)
-- This allows anyone to insert data but restricts reading
CREATE POLICY "Allow insert access" ON consultations
  FOR INSERT
  WITH CHECK (true);

-- Optional: Create policy to allow reading (if you want to build a dashboard)
-- Uncomment this if you need to read data from the client side
-- CREATE POLICY "Allow read access" ON consultations
--   FOR SELECT
--   USING (true);

-- Add comments for documentation
COMMENT ON TABLE consultations IS 'Nexivo consultation booking requests';
COMMENT ON COLUMN consultations.name IS 'Full name of the contact person';
COMMENT ON COLUMN consultations.email IS 'Email address of the contact person';
COMMENT ON COLUMN consultations.company IS 'Company name';
COMMENT ON COLUMN consultations.phone IS 'Phone number (optional)';
COMMENT ON COLUMN consultations.industry IS 'Industry type (Healthcare, Logistics, etc.)';
COMMENT ON COLUMN consultations.service IS 'Service interest (AI-Powered Systems, Cloud Automation, etc.)';
COMMENT ON COLUMN consultations.message IS 'Additional message about business needs';
COMMENT ON COLUMN consultations.preferred_date IS 'Preferred consultation date (optional)';
COMMENT ON COLUMN consultations.submitted_at IS 'When the consultation was submitted';
