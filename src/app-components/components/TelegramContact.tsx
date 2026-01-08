import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Send, MessageSquare } from "lucide-react";
import { toast } from "sonner";

export function TelegramContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTelegramClick = () => {
    // Open your bot directly - replace with your actual bot username
    const botUsername = "Nexivotechnology_bot"; // Change this to your bot's username
    window.open(`https://t.me/${botUsername}`, '_blank');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }

      toast.success("Message sent successfully!", {
        description: "We'll get back to you on Telegram shortly.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        industry: "",
        service: "",
        message: ""
      });
      
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to send message";
      toast.error("Failed to send message", { description: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#2D5FFF] to-[#353A47]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
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
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Quick Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl text-white mb-4 flex items-center">
              <MessageSquare className="mr-2 w-5 h-5" />
              Quick Message
            </h3>
            <form onSubmit={handleQuickSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quick-name" className="text-white">Name *</Label>
                <Input
                  id="quick-name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your name"
                  className="bg-white/20 border-white/30 text-white placeholder-white/60"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="quick-email" className="text-white">Email *</Label>
                <Input
                  id="quick-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your@email.com"
                  className="bg-white/20 border-white/30 text-white placeholder-white/60"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="quick-company" className="text-white">Company</Label>
                <Input
                  id="quick-company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Your company"
                  className="bg-white/20 border-white/30 text-white placeholder-white/60"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quick-industry" className="text-white">Industry</Label>
                  <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                    <SelectTrigger id="quick-industry" className="bg-white/20 border-white/30 text-white">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#2D5FFF] border-white/30">
                      <SelectItem value="healthcare" className="text-white hover:bg-white/10">Healthcare</SelectItem>
                      <SelectItem value="logistics" className="text-white hover:bg-white/10">Logistics & Supply Chain</SelectItem>
                      <SelectItem value="realestate" className="text-white hover:bg-white/10">Real Estate</SelectItem>
                      <SelectItem value="smartcity" className="text-white hover:bg-white/10">Smart Infrastructure</SelectItem>
                      <SelectItem value="fintech" className="text-white hover:bg-white/10">FinTech</SelectItem>
                      <SelectItem value="retail" className="text-white hover:bg-white/10">Retail & E-commerce</SelectItem>
                      <SelectItem value="manufacturing" className="text-white hover:bg-white/10">Manufacturing</SelectItem>
                      <SelectItem value="other" className="text-white hover:bg-white/10">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="quick-service" className="text-white">Service Interest</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger id="quick-service" className="bg-white/20 border-white/30 text-white">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#2D5FFF] border-white/30">
                      <SelectItem value="ai-systems" className="text-white hover:bg-white/10">AI-Powered Systems</SelectItem>
                      <SelectItem value="cloud" className="text-white hover:bg-white/10">Cloud Automation</SelectItem>
                      <SelectItem value="process" className="text-white hover:bg-white/10">Process Automation</SelectItem>
                      <SelectItem value="analytics" className="text-white hover:bg-white/10">Predictive Analytics</SelectItem>
                      <SelectItem value="infrastructure" className="text-white hover:bg-white/10">Smart Infrastructure</SelectItem>
                      <SelectItem value="scalability" className="text-white hover:bg-white/10">Scalable Growth Tech</SelectItem>
                      <SelectItem value="custom" className="text-white hover:bg-white/10">Custom Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="quick-message" className="text-white">Message *</Label>
                <Textarea
                  id="quick-message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="How can we help you?"
                  rows={3}
                  className="bg-white/20 border-white/30 text-white placeholder-white/60 resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-[#2D5FFF] hover:bg-gray-100"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Direct Telegram Contact */}
          <div className="flex flex-col justify-center items-center text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 w-full">
              <h3 className="text-xl text-white mb-4">Direct Telegram Contact</h3>
              <p className="text-gray-200 mb-6">
                Prefer to chat directly? Open Telegram and start a conversation with us instantly.
              </p>
              
              <Button 
                onClick={handleTelegramClick}
                size="lg"
                className="bg-white text-[#2D5FFF] hover:bg-gray-100 px-8 py-4 text-lg w-full"
              >
                <Send className="mr-2 w-5 h-5" />
                Open Telegram
              </Button>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-gray-300 mb-2">
                  <strong>Response time:</strong> Typically within 30 minutes
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Available:</strong> Mon-Fri, 9AM-6PM EST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
