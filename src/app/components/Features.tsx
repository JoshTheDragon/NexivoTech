import { Zap, Shield, TrendingUp, Clock, HeartHandshake, Puzzle } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Get your solutions live in weeks, not months. Fast implementation designed for businesses that move quickly."
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption and compliance standards. Your data and systems protected with military-grade security."
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description: "Technology infrastructure that grows with you. From startup to enterprise, seamlessly scale without limits."
  },
  {
    icon: Clock,
    title: "Always-On Systems",
    description: "24/7 automated operations with 99.9% uptime. Your business never sleeps, and neither do our systems."
  },
  {
    icon: HeartHandshake,
    title: "Local Partnership",
    description: "Dedicated teams who understand your market. We're invested in the growth of your region and industry."
  },
  {
    icon: Puzzle,
    title: "Seamless Integration",
    description: "Works with your existing tech stack. No disruption to current operations—just enhanced performance."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#34C759]/10 text-[#34C759] text-sm mb-4">
            Why Nexivo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#353A47] mb-4">
            Technology Built for Tomorrow
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partner with a team that understands the unique challenges of fast-growing markets
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#2D5FFF]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-[#2D5FFF]" />
                </div>
                
                <h3 className="text-xl text-[#353A47] mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
