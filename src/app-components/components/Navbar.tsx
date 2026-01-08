import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  onBookingClick: () => void;
}

export function Navbar({ onBookingClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#2D5FFF] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl text-[#353A47]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
              <span className="text-[#2D5FFF]">Nex</span>ivo
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Case Studies
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={onBookingClick}
              className="bg-gradient-to-r from-[#2D5FFF] to-[#34C759] hover:from-[#1E40CC] hover:to-[#2DA84C] text-white"
            >
              Book Consultation
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-left text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
              >
                Why Us
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')} 
                className="text-left text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
              >
                Case Studies
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
              >
                Contact
              </button>
              <Button onClick={onBookingClick} className="bg-gradient-to-r from-[#2D5FFF] to-[#34C759] hover:from-[#1E40CC] hover:to-[#2DA84C] text-white w-full">
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}