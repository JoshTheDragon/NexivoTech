import { Mail, Phone, MapPin, Facebook, Instagram, Sparkles, Send } from "lucide-react";
import { useRef, useState } from "react";

const privacySections = [
  {
    title: "Information Collection",
    content:
      "We collect data to improve your experience, including usage patterns and preferences.",
  },
  {
    title: "Use of Data",
    content:
      "Your data helps us provide better services and personalized recommendations.",
  },
  {
    title: "Third-Party Sharing",
    content:
      "We do not sell your information. We may share anonymized data with partners for analytics.",
  },
  {
    title: "Cookies & Tracking",
    content:
      "Cookies are used to enhance site functionality and analyze trends.",
  },
  {
    title: "Security Measures",
    content:
      "We protect your data using encryption and secure storage.",
  },
  {
    title: "User Rights",
    content:
      "You can request access, correction, or deletion of your personal data anytime.",
  },
  {
    title: "Policy Updates",
    content:
      "Changes to this policy will be communicated on the website. Continued use implies consent.",
  },
];

const termsSections = [
  {
    title: "Acceptance of Terms",
    content: "By accessing and using this website, users agree to comply with and be bound by these Terms of Service. Users who do not agree with these terms should discontinue use of the website immediately."
  },
  {
    title: "User Account Responsibilities",
    content: "Users are responsible for maintaining the confidentiality of their account credentials. Any activities occurring under a user's account are the sole responsibility of the account holder. Users must notify the website administrators immediately of any unauthorized account access."
  },
  {
    title: "Content Usage and Restrictions",
    content: "The website and its original content are protected by intellectual property laws. Users may not reproduce, distribute, modify, create derivative works, or commercially exploit any content without explicit written permission from the website owners."
  },
  {
    title: "Limitation of Liability",
    content: "The website provides content 'as is' without any warranties. The website owners shall not be liable for direct, indirect, incidental, consequential, or punitive damages arising from user interactions with the platform."
  },
  {
    title: "User Conduct Guidelines",
    content: "• Not upload harmful or malicious content\n• Respect the rights of other users\n• Avoid activities that could disrupt website functionality\n• Comply with applicable local and international laws"
  },
  {
    title: "Modifications to Terms",
    content: "The website reserves the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms."
  },
  {
    title: "Termination Clause",
    content: "The website may terminate or suspend user access without prior notice for violations of these terms or for any other reason deemed appropriate by the administration."
  },
  {
    title: "Governing Law",
    content: "These terms are governed by the laws of the jurisdiction where the website is primarily operated, without regard to conflict of law principles."
  }
];

function TermsOfServiceModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const content = contentRef.current;
    if (!content) return;
    const progress = Math.min(
      1,
      content.scrollTop / (content.scrollHeight - content.clientHeight)
    );
    setScrollProgress(progress);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="text-sm text-gray-400 hover:text-[#2D5FFF] bg-transparent border-0 p-0 h-auto font-normal cursor-pointer"
      >
        Terms of Service
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full max-h-[80vh] flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Terms of Service</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        <div
          ref={contentRef}
          onScroll={handleScroll}
          className="overflow-y-auto p-4 flex-1 space-y-4"
          style={{ maxHeight: "60vh" }}
        >
          {termsSections.map((section, idx) => (
            <div key={idx}>
              <p className="font-medium">{section.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>

        <div
          className="h-1 bg-blue-500 transition-all duration-200 rounded-3xl"
          style={{ width: `${scrollProgress * 100}%` }}
        />

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            By continuing to use our site, you agree with the Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}

function PrivacyPolicyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const content = contentRef.current;
    if (!content) return;
    const progress = Math.min(
      1,
      content.scrollTop / (content.scrollHeight - content.clientHeight)
    );
    setScrollProgress(progress);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="text-sm text-gray-400 hover:text-[#2D5FFF] bg-transparent border-0 p-0 h-auto font-normal cursor-pointer"
      >
        Privacy Policy
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full max-h-[80vh] flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Privacy Policy</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        <div
          ref={contentRef}
          onScroll={handleScroll}
          className="overflow-y-auto p-4 flex-1 space-y-4"
          style={{ maxHeight: "60vh" }}
        >
          {privacySections.map((section, idx) => (
            <div key={idx}>
              <p className="font-medium">{section.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{section.content}</p>
            </div>
          ))}
        </div>

        <div
          className="h-1 bg-blue-500 transition-all duration-200 rounded-3xl"
          style={{ width: `${scrollProgress * 100}%` }}
        />

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            By continuing to use this site, you agree to our Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}

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
          </div>
          
          <div>
            <h4 className="text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a>AI-Powered Systems</a></li>
              <li><a>Cloud Automation</a></li>
              <li><a>Process Automation</a></li>
              <li><a>Predictive Analytics</a></li>
              <li><a>Smart Infrastructure</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li><a>Healthcare</a></li>
              <li><a>Logistics</a></li>
              <li><a>Real Estate</a></li>
              <li><a>Smart Cities</a></li>
              <li><a>Innovation Districts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Facebook className="w-5 h-4 mt-0.5 flex-shrink-0" />
                <a 
                  href="https://www.facebook.com/share/16iuPNduZr/?mibextid=wwXIfr" 
                  className="hover:text-[#2D5FFF] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Instagram className="w-5 h-4 mt-0.5 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/nexivotech_?igsh=MXgyZjgzZ2RwaThneQ%3D&utm_source=qr" 
                  className="hover:text-[#2D5FFF] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Send className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="https://t.me/Nexivotechnology_bot" className="hover:text-[#2D5FFF] transition-colors" target="_blank" rel="noopener noreferrer">
                  Start a Conversation
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Serving high-growth cities<br />across United States</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Nexivo. All rights reserved. | <PrivacyPolicyModal /> | <TermsOfServiceModal /></p>
        </div>
      </div>
    </footer>
  );
}
