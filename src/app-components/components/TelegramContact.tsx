import { Button } from "./ui/button";
import { Send } from "lucide-react";

export function TelegramContact() {
  const handleTelegramClick = () => {
    // Replace with your actual Telegram username or bot
    const telegramUsername = "nexivo"; // Change this to your Telegram username
    window.open(`https://t.me/${telegramUsername}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#2D5FFF] to-[#353A47]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
          <Send className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl text-white mb-4">
          Let's Start a Conversation
        </h2>
        
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          Connect with our team on Telegram for instant answers, project inquiries, 
          and real-time updates on your digital transformation.
        </p>
        
        <Button 
          onClick={handleTelegramClick}
          size="lg"
          className="bg-white text-[#2D5FFF] hover:bg-gray-100 px-8 py-6 text-lg"
        >
          <Send className="mr-2 w-5 h-5" />
          Message Us on Telegram
        </Button>
        
        <p className="text-sm text-gray-300 mt-4">
          Response time: Typically within 30 minutes during business hours
        </p>
      </div>
    </section>
  );
}
