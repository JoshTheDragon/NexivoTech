export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({
      error: "Server is not configured. Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID.",
    });
  }

  const {
    name,
    email,
    company,
    phone,
    industry,
    service,
    message
  } = req.body;

  // Validate required fields
  if (!name || !email || !company) {
    return res.status(400).json({
      error: "Missing required fields. Please provide name, email, and company.",
    });
  }

  // Format the message for Telegram
  const telegramMessage = `
🚀 *New Lead from Nexivo Website*

👤 *Name:* ${name}
📧 *Email:* ${email}
🏢 *Company:* ${company}
${phone ? `📱 *Phone:* ${phone}` : ''}
🏭 *Industry:* ${industry || 'Not specified'}
🛠️ *Service:* ${service || 'Not specified'}

💬 *Message:*
${message || 'No additional message provided'}

📅 *Received:* ${new Date().toLocaleString()}
  `.trim();

  try {
    // Send message to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Telegram API error:', data);
      return res.status(500).json({
        error: 'Failed to send Telegram notification',
        details: data.description || 'Unknown error',
      });
    }

    return res.status(200).json({ 
      success: true, 
      messageId: data.result?.message_id,
      message: 'Lead notification sent to Telegram successfully'
    });

  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return res.status(500).json({
      error: 'Failed to send Telegram notification',
      details: error.message,
    });
  }
}
