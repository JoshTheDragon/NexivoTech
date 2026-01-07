import { Button } from "./ui/button";
import { ArrowRight, Zap } from "lucide-react";

interface HeroProps {
  onBookingClick: () => void;
}

export function Hero({ onBookingClick }: HeroProps) {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2D5FFF] via-[#1E40CC] to-[#353A47]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc3MzI0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#34C759]/10 border border-[#34C759]/20 mb-6">
          <Zap className="w-4 h-4 text-[#34C759]" />
          <span className="text-sm text-[#34C759]">Smart Digital Solutions</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 max-w-4xl mx-auto">
          Empower Your Business with{" "}
          <span className="text-[#34C759]">
            Scalable Technology
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Nexivo delivers AI-powered systems and cloud automation for fast-growing businesses 
          and innovation-driven cities across America.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={onBookingClick}
            className="bg-[#34C759] hover:bg-[#2DA84C] text-white px-8 py-6 text-lg"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-white text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
          >
            Explore Solutions
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl text-white mb-2">250+</div>
            <div className="text-gray-300">Growing Businesses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl text-white mb-2">15+</div>
            <div className="text-gray-300">U.S. Cities Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl text-white mb-2">3x</div>
            <div className="text-gray-300">Average ROI Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
}