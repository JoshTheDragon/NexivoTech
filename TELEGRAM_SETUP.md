# Telegram Bot Setup Guide for Lead Generation

## Overview
This guide will walk you through setting up a Telegram bot to receive lead notifications from your Nexivo website.

## Step 1: Create Your Telegram Bot

1. **Open Telegram** and search for `@BotFather`
2. **Start a chat** with BotFather and send `/newbot`
3. **Choose a name** for your bot (e.g., "Nexivo Lead Bot")
4. **Choose a username** for your bot (must end in `bot`, e.g., "nexivo_lead_bot")
5. **Save your bot token** - BotFather will give you a token like: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`

## Step 2: Get Your Chat ID

1. **Start a chat** with your new bot by sending it any message
2. **Visit this URL** in your browser (replace `YOUR_BOT_TOKEN`):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
3. **Look for the `chat.id`** field in the response - this is your Chat ID
4. **Save your Chat ID** (it's usually a number, e.g., `123456789`)

## Step 3: Configure Environment Variables

1. **Create a `.env.local` file** in your project root (if it doesn't exist)
2. **Add your Telegram credentials**:
   ```
   # Telegram Bot Configuration
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   TELEGRAM_CHAT_ID=your_chat_id_here
   
   # Supabase Configuration (already existing)
   SUPABASE_URL=your_supabase_url
   SUPABASE_SERVICE_KEY=your_supabase_service_key
   ```

## Step 4: Test Your Bot

1. **Deploy your changes** to Vercel:
   ```bash
   git add .
   git commit -m "Add Telegram bot integration"
   git push
   vercel --prod
   ```

2. **Test the integration** by filling out the consultation form on your website

3. **Check your Telegram** - you should receive a nicely formatted message with the lead details

## Step 5: Optional - Customize Your Bot

### Add Commands to Your Bot
You can add commands like `/start`, `/help`, etc. by talking to @BotFather and using `/setcommands`

### Bot Commands Example:
```
start - Welcome message and how to get started
help - Show available commands
status - Check if bot is working
contact - Show contact information
```

### Set Commands with BotFather:
1. Send `/setcommands` to @BotFather
2. Select your bot
3. Paste the commands list above

## Features Included

### ✅ Automatic Lead Notifications
- Every consultation form submission sends a notification to Telegram
- Includes name, email, company, phone, industry, service, and message
- Formatted with emojis for easy reading

### ✅ Quick Contact Form
- Direct form in the Telegram section for quick messages
- Validates required fields
- Shows success/error messages with toast notifications

### ✅ Direct Telegram Link
- Users can open Telegram directly from your website
- Two options: quick form or direct chat

## Troubleshooting

### Bot Not Receiving Messages
1. **Check your bot token** - make sure it's correct and has no extra spaces
2. **Check your chat ID** - ensure you're using the correct chat ID
3. **Verify environment variables** - make sure they're set in Vercel dashboard

### Environment Variables Not Working
1. **Add to Vercel Dashboard**:
   - Go to your Vercel project
   - Settings → Environment Variables
   - Add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`

2. **Redeploy** after adding environment variables

### Bot Token Security
- **Never share your bot token** publicly
- **Never commit `.env.local`** to git
- **Use environment variables** in production

## Message Format Example

You'll receive messages like this in Telegram:

```
🚀 New Lead from Nexivo Website

👤 Name: John Doe
📧 Email: john@example.com
🏢 Company: ACME Corporation
📱 Phone: +1 (555) 123-4567
🏭 Industry: Healthcare
🛠️ Service: AI-Powered Systems

💬 Message:
We need help with automating our patient intake system.

📅 Received: 1/8/2026, 4:30:00 PM
```

## Advanced Options

### Multiple Recipients
To send to multiple chats/channels, modify the `send-telegram.js` API to loop through an array of chat IDs.

### Custom Formatting
You can customize the message format in `send-telegram.js` to match your brand voice.

### Bot Actions
Set up your bot to respond with automated messages when users interact with it directly.

## Support

If you need help:
1. Check the Vercel function logs for errors
2. Verify your bot token and chat ID
3. Make sure environment variables are set correctly
4. Test the API endpoint directly using a tool like Postman
