import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Sparkles } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#353A47] text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#2D5FFF] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                <span className="text-[#2D5FFF]">Nex</span>ivo
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Empowering fast-growing businesses and cities through smart digital solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#2D5FFF] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#2D5FFF] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#2D5FFF] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#2D5FFF] transition-colors">AI-Powered Systems</a></li>
              <li><a href="#" className="hover:text-[#2D5FFF] transition-colors">Cloud Automation</a></li>
              <li><a href="#" className="hover:text-[#2D5FFF] transition-colors">Process Automation</a></li>
              <li><a href="#" className="hover:text-[#2D5FFF] transition-colors">Predictive Analytics</a></li>
              <li><a href="#" className="hover:text-[#2D5FFF] transition-colors">Smart Infrastructure</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#2D5FFF] transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-[#2D5FFF] transition-colors">Logistics</a></li>
              <li><a href="#" className="hover:text-[#2D5FFF] transition-colors">Real Estate</a></li>
              <li><a href="#" className="hover:text-[#2D5FFF] transition-colors">Smart Cities</a></li>
              <li><a href="#" className="hover:text-[#2D5FFF] transition-colors">Innovation Districts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@nexivo.com" className="hover:text-[#2D5FFF] transition-colors">
                  hello@nexivo.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+18885503946" className="hover:text-[#2D5FFF] transition-colors">
                  +1 (888) 550-3946
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Serving high-growth cities<br />across the United States</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Nexivo. All rights reserved. | <a href="#" className="hover:text-[#2D5FFF]">Privacy Policy</a> | <a href="#" className="hover:text-[#2D5FFF]">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
}
