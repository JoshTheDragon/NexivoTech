import { createClient } from '@supabase/supabase-js';

type BookingPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  industry?: string;
  service?: string;
  message?: string;
  date?: string | null;
};

const getString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return res.status(500).json({
      error: "Server is not configured. Missing SUPABASE_URL or SUPABASE_SERVICE_KEY.",
    });
  }

  const body: BookingPayload =
    typeof req.body === "string" ? (JSON.parse(req.body) as BookingPayload) : ((req.body ?? {}) as BookingPayload);

  // Debug logging
  console.log("Received body:", JSON.stringify(body, null, 2));

  const name = getString(body.name);
  const email = getString(body.email);
  const company = getString(body.company);
  const phone = getString(body.phone);
  const industry = getString(body.industry);
  const service = getString(body.service);
  const message = getString(body.message);
  const preferredDate = typeof body.date === "string" && body.date ? body.date : null;

  console.log("Processed fields:", { name, email, company, industry, service });

  if (!name || !email || !company || !industry || !service) {
    console.log("Validation failed. Missing fields:", { 
      hasName: !!name, 
      hasEmail: !!email, 
      hasCompany: !!company, 
      hasIndustry: !!industry, 
      hasService: !!service 
    });
    return res.status(400).json({
      error: "Missing required fields. Please provide name, email, company, industry, and service.",
    });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    console.log("Inserting consultation record:", {
      name,
      email,
      company,
      industry,
      service
    });

    const { data, error } = await supabase
      .from('consultations')
      .insert({
        name,
        email,
        company,
        phone: phone || null,
        industry,
        service,
        message: message || null,
        preferred_date: preferredDate,
        submitted_at: new Date().toISOString()
      })
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: error.message });
    }

    console.log("Successfully created consultation record:", data[0]?.id);
    return res.status(200).json({ ok: true, id: data[0]?.id });
  } catch (err) {
    console.error("Unexpected error:", err);
    const message = err instanceof Error ? err.message : "Failed to save consultation";
    return res.status(500).json({ error: message });
  }
}
