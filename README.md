# NexivoTech

AI Automation Agency Website. The original project is available at https://www.figma.com/design/QDRSN01LAlY2NXB6uChW2W/AI-Automation-Agency-Website.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Consultation Form Setup

The consultation form uses Supabase to store booking requests.

### Supabase Setup

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com) and create a new project
   - Note your project URL and anon/service keys

2. **Create the Database Table**
   - Open the Supabase SQL Editor
   - Run the SQL from `supabase-schema.sql` to create the `consultations` table

3. **Get Environment Variables**
   - In Supabase Project Settings → API
   - Copy the **Project URL** and **service_role** key

### Vercel Environment Variables

In Vercel Project → Settings → Environment Variables, add:

```
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_KEY=your_supabase_service_role_key
```

Add these for Production (and Preview if desired).

### Testing

After deployment, test the consultation form to ensure submissions are saved to your Supabase `consultations` table.
