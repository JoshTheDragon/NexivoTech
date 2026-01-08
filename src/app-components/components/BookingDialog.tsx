import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
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
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2, Clock } from "lucide-react";
import { toast } from "sonner";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const [date, setDate] = useState<Date>();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    service: "",
    message: ""
  });

  // Load preselected service from sessionStorage when dialog opens
  useEffect(() => {
    if (open) {
      const preselectedService = sessionStorage.getItem('preselectedService');
      if (preselectedService) {
        setFormData(prev => ({ ...prev, service: preselectedService }));
        // Clear the stored service after using it
        sessionStorage.removeItem('preselectedService');
      }
    }
  }, [open]);

  // Load Calendly script when dialog opens
  useEffect(() => {
    if (open && !document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }
  }, [open]);

  // Remove the preload effect that was causing scroll issues
  // useEffect(() => {
  //   if (open && formData.service && (window as any).Calendly && !submitted) {
  //     const widgetContainer = document.querySelector('.calendly-inline-widget');
  //     if (widgetContainer) {
  //       // Use a contained message that doesn't affect page layout
  //       widgetContainer.innerHTML = `
  //         <div class="text-center p-4 border border-gray-200 rounded-lg bg-gray-50 max-w-md mx-auto">
  //           <p class="text-gray-600 mb-2">✨ Scheduling ready</p>
  //           <p class="text-sm text-gray-500">Submit form to unlock Calendly options</p>
  //         </div>
  //       `;
  //     }
  //   }
  // }, [open, formData.service, submitted]);

  // Initialize Calendly when form is submitted and widget should show
  useEffect(() => {
    if (submitted && showCalendly && (window as any).Calendly) {
      // Clear any existing widget
      const widgetContainer = document.querySelector('.calendly-inline-widget');
      if (widgetContainer) {
        widgetContainer.innerHTML = '';
      }
      
      // Initialize new widget immediately
      (window as any).Calendly.initInlineWidget({
        url: getServiceCalendlyUrl(formData.service, "30min"),
        parentElement: document.querySelector('.calendly-inline-widget'),
        prefill: {},
        utm: {}
      });
    }
  }, [submitted, showCalendly, formData.service]);

  const getServiceCalendlyUrl = (service: string, duration: string) => {
  const serviceUrls: { [key: string]: string } = {
    "ai-systems": `https://calendly.com/nexivotechnology/ai-powered-customer-systems/${duration}`,
    "cloud": `https://calendly.com/nexivotechnology/cloud-automation-migration/${duration}`,
    "process": `https://calendly.com/nexivotechnology/business-process-automation/${duration}`,
    "analytics": `https://calendly.com/nexivotechnology/predictive-analytics-insights/${duration}`,
    "infrastructure": `https://calendly.com/nexivotechnology/smart-infrastructure-solutions/${duration}`,
    "scalability": `https://calendly.com/nexivotechnology/scalable-growth-technology/${duration}`,
    "custom": `https://calendly.com/nexivotechnology/custom-solution-consultation/${duration}`
  };
  
  return serviceUrls[service] || serviceUrls["custom"];
};

  const resetForm = () => {
    setSubmitted(false);
    onOpenChange(false);
    setDate(undefined);
    setShowCalendly(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      industry: "",
      service: "",
      message: ""
    });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Validation Error", { description: "Name is required" });
      return false;
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      toast.error("Validation Error", { description: "Valid email is required" });
      return false;
    }
    if (!formData.company.trim()) {
      toast.error("Validation Error", { description: "Company name is required" });
      return false;
    }
    if (!formData.industry) {
      toast.error("Validation Error", { description: "Please select an industry" });
      return false;
    }
    if (!formData.service) {
      toast.error("Validation Error", { description: "Please select a service" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/book-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          date: date ? date.toISOString() : null,
        }),
      });

      if (!res.ok) {
        let message = "Failed to submit consultation request.";
        try {
          const data = await res.json();
          if (typeof data?.error === "string") message = data.error;
        } catch {
          // ignore
        }
        throw new Error(message);
      }

      setSubmitted(true);
      setShowCalendly(true);
      toast.success("Consultation request submitted! Please schedule your meeting below.", {
        description: "You'll receive a confirmation email shortly.",
        duration: 5000
      });

      setTimeout(() => {
    // Don't auto-close dialog after form submission
    // resetForm();
  }, 15000); // Give 15 seconds for scheduling
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to submit consultation request.";
      toast.error("Submission failed", { description: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white border border-gray-200 shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#353A47]">Schedule a Free Consultation</DialogTitle>
          <DialogDescription>
            Let's discuss how Nexivo can accelerate your business growth with smart digital solutions.
          </DialogDescription>
        </DialogHeader>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="ACME Corporation"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                  <SelectTrigger id="industry" className="hover:shadow-md transition-shadow duration-200">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent className="hover:shadow-lg transition-shadow duration-200">
                    <SelectItem value="healthcare" className="hover:bg-blue-50">Healthcare</SelectItem>
                    <SelectItem value="logistics" className="hover:bg-blue-50">Logistics & Supply Chain</SelectItem>
                    <SelectItem value="realestate" className="hover:bg-blue-50">Real Estate</SelectItem>
                    <SelectItem value="smartcity" className="hover:bg-blue-50">Smart Infrastructure / Cities</SelectItem>
                    <SelectItem value="fintech" className="hover:bg-blue-50">FinTech</SelectItem>
                    <SelectItem value="retail" className="hover:bg-blue-50">Retail & E-commerce</SelectItem>
                    <SelectItem value="manufacturing" className="hover:bg-blue-50">Manufacturing</SelectItem>
                    <SelectItem value="other" className="hover:bg-blue-50">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service">Service Interest</Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger id="service" className="hover:shadow-md transition-shadow duration-200">
                    <SelectValue placeholder="Select a solution" />
                  </SelectTrigger>
                  <SelectContent className="hover:shadow-lg transition-shadow duration-200">
                    <SelectItem value="ai-systems" className="hover:bg-blue-50">AI-Powered Systems</SelectItem>
                    <SelectItem value="cloud" className="hover:bg-blue-50">Cloud Automation & Migration</SelectItem>
                    <SelectItem value="process" className="hover:bg-blue-50">Business Process Automation</SelectItem>
                    <SelectItem value="analytics" className="hover:bg-blue-50">Predictive Analytics</SelectItem>
                    <SelectItem value="infrastructure" className="hover:bg-blue-50">Smart Infrastructure</SelectItem>
                    <SelectItem value="scalability" className="hover:bg-blue-50">Scalable Growth Tech</SelectItem>
                    <SelectItem value="custom" className="hover:bg-blue-50">Custom Solution</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Tell us about your business</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="What are your main business challenges? What growth goals are you working toward?"
                rows={4}
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#2D5FFF] hover:bg-[#1E40CC] text-white"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="py-8 text-center">
              <CheckCircle2 className="w-16 h-16 text-[#34C759] mx-auto mb-4" />
              <h3 className="text-xl text-[#353A47] mb-2">Request Submitted!</h3>
              <p className="text-gray-600">Now please schedule your meeting below.</p>
            </div>
            
            {/* Calendly Widget - Only shows after form submission */}
            <div className="space-y-4">
              <Label>Schedule Your Meeting</Label>
              
              {/* Fixed height container to prevent scroll */}
              <div 
                className="calendly-inline-widget border border-gray-200 rounded-lg p-4 bg-gray-50"
                style={{ minWidth: '320px', height: '400px', minHeight: '400px' }}
              >
                <div className="h-full flex items-center justify-center">
                  <p className="text-gray-600 mb-4">Loading scheduling options...</p>
                  <Button
                    onClick={() => window.open(getServiceCalendlyUrl(formData.service, "30min"), "_blank")}
                    className="bg-[#2D5FFF] hover:bg-[#1E40CC] text-white mb-2"
                  >
                    Open Scheduling in New Tab
                  </Button>
                  <Button
                    onClick={resetForm}
                    variant="outline"
                    className="w-full"
                  >
                    Done
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
