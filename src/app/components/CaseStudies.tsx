import { Card } from "./ui/card";
import { Quote } from "lucide-react";

const caseStudies = [
  {
    company: "HealthTech Solutions",
    industry: "Healthcare",
    location: "Austin, TX",
    result: "80% reduction in patient intake time",
    testimonial: "Nexivo's AI automation transformed our patient onboarding. We handle 3x more appointments with the same staff, and patient satisfaction scores jumped 40%.",
    author: "Dr. Jennifer Park",
    role: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc3MzI0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    company: "Metro Logistics Group",
    industry: "Logistics & Supply Chain",
    location: "Charlotte, NC",
    result: "65% faster delivery coordination",
    testimonial: "Cloud automation gave us real-time visibility across our entire supply chain. Route optimization alone saved us $2M annually.",
    author: "Marcus Williams",
    role: "VP of Operations",
    image: "https://images.unsplash.com/photo-1758626099012-2904337e9c60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2Nzc0NTQ5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    company: "Urban Realty Partners",
    industry: "Real Estate",
    location: "Phoenix, AZ",
    result: "90% automated property management",
    testimonial: "Smart infrastructure solutions revolutionized how we manage 50+ properties. Tenant satisfaction up, operational costs down 45%.",
    author: "Sarah Chen",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzY3NzA0NjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F8FA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#34C759]/10 text-[#34C759] text-sm mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#353A47] mb-4">
            Growing With America's Rising Cities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from businesses and communities we've helped transform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300 bg-white border-gray-200">
              <div className="aspect-video w-full mb-4 rounded-lg overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.company}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-sm text-[#2D5FFF]">{study.industry}</div>
                  <div className="text-sm text-gray-400">•</div>
                  <div className="text-sm text-gray-500">{study.location}</div>
                </div>
                <h3 className="text-xl text-[#353A47] mb-2">{study.company}</h3>
                <div className="inline-block px-3 py-1 rounded-full bg-[#34C759]/10 text-[#34C759] text-sm">
                  {study.result}
                </div>
              </div>
              
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#2D5FFF]/20" />
                <p className="text-gray-700 italic pl-6">
                  "{study.testimonial}"
                </p>
              </div>
              
              <div className="border-t pt-4">
                <div className="text-sm">
                  <div className="text-[#353A47]">{study.author}</div>
                  <div className="text-gray-500">{study.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
