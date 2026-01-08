import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

  console.log("Test endpoint - Environment check:", { 
    hasUrl: !!supabaseUrl, 
    hasKey: !!supabaseServiceKey,
    urlPrefix: supabaseUrl?.substring(0, 20) + "..."
  });

  if (!supabaseUrl || !supabaseServiceKey) {
    return res.status(500).json({
      error: "Missing environment variables",
      details: {
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseServiceKey
      }
    });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Test basic connection by checking if table exists
    const { data, error } = await supabase
      .from('consultations')
      .select('count', { count: 'exact', head: true });

    if (error) {
      console.error("Supabase connection test failed:", error);
      return res.status(500).json({
        error: "Supabase connection failed",
        details: error.message
      });
    }

    console.log("Supabase connection successful! Table exists.");
    return res.status(200).json({ 
      ok: true, 
      message: "Supabase connection successful",
      tableExists: true,
      count: data
    });

  } catch (err) {
    console.error("Unexpected error in test:", err);
    return res.status(500).json({
      error: "Unexpected error",
      details: err instanceof Error ? err.message : "Unknown error"
    });
  }
}
