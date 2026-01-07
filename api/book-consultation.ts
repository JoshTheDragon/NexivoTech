import { Client } from "@notionhq/client";

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

  const notionToken = process.env.NOTION_TOKEN;
  const notionDatabaseId = process.env.NOTION_DATABASE_ID;

  if (!notionToken || !notionDatabaseId) {
    return res.status(500).json({
      error: "Server is not configured. Missing NOTION_TOKEN or NOTION_DATABASE_ID.",
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

  const notion = new Client({ auth: notionToken });

  try {
    console.log("Creating Notion page with properties:", {
      Name: name,
      Email: email,
      Company: company,
      Industry: industry,
      Service: service
    });

    const result = await notion.pages.create({
      parent: { database_id: notionDatabaseId },
      properties: {
        Name: {
          title: [{ type: "text", text: { content: name } }],
        },
        Email: {
          rich_text: [{ type: "text", text: { content: email } }],
        },
        Company: {
          rich_text: [{ type: "text", text: { content: company } }],
        },
        Phone: phone
          ? {
              rich_text: [{ type: "text", text: { content: phone } }],
            }
          : {
              rich_text: [],
            },
        Industry: {
          select: { name: industry },
        },
        Service: {
          select: { name: service },
        },
        Message: message
          ? {
              rich_text: [{ type: "text", text: { content: message } }],
            }
          : {
              rich_text: [],
            },
        SubmittedAt: {
          date: { start: new Date().toISOString() },
        },
        ...(preferredDate
          ? {
              PreferredDate: {
                date: { start: preferredDate },
              },
            }
          : {}),
      },
    });

    console.log("Successfully created Notion page:", result.id);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Notion API error:", err);
    const message = err instanceof Error ? err.message : "Failed to write to Notion";
    return res.status(500).json({ error: message });
  }
}
