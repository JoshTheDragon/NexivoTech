import { FeatureSteps } from "./FeatureSteps";

const services = [
  {
    step: "Step 1",
    title: "AI-Powered Customer Systems",
    content: "Intelligent chatbots and virtual assistants that handle customer interactions 24/7, qualify leads, and provide instant support across all channels.",
    image: "https://images.unsplash.com/photo-1762328862557-e0a36587cd3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGN1c3RvbWVyJTIwc2VydmljZXxlbnwxfHx8fDE3Njc2NDMzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Smart lead qualification", "Multi-channel support", "Automated responses", "24/7 availability"]
  },
  {
    step: "Step 2",
    title: "Cloud Automation & Migration",
    content: "Seamlessly migrate to the cloud and automate your infrastructure. Scale effortlessly with enterprise-grade cloud solutions tailored for growth.",
    image: "https://images.unsplash.com/photo-1667984390527-850f63192709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY3NjgxMDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Cloud migration", "Auto-scaling systems", "Infrastructure as code", "Cost optimization"]
  },
  {
    step: "Step 3",
    title: "Business Process Automation",
    content: "Streamline operations with intelligent workflow automation. Eliminate repetitive tasks and free your team to focus on strategic growth.",
    image: "https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjB3b3JrZmxvd3xlbnwxfHx8fDE3Njc3MTE0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Workflow optimization", "Task automation", "Integration management", "Real-time monitoring"]
  },
  {
    step: "Step 4",
    title: "Predictive Analytics & Insights",
    content: "Transform your data into actionable intelligence. Our AI-driven analytics help you predict trends, optimize operations, and make smarter decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NzY0NjM2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Predictive modeling", "Real-time dashboards", "Custom analytics", "Business intelligence"]
  },
  {
    step: "Step 5",
    title: "Smart Infrastructure Solutions",
    content: "Build the foundation for innovation with IoT-enabled systems, smart building technology, and connected infrastructure for modern cities.",
    image: "https://images.unsplash.com/photo-1699602050604-698045645108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3Njc3NDgwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["IoT integration", "Smart sensors", "Infrastructure monitoring", "Energy optimization"]
  },
  {
    step: "Step 6",
    title: "Scalable Growth Technology",
    content: "Technology that grows with you. From startups to established enterprises, our solutions scale seamlessly as your business expands.",
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY3NzQ4MDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Flexible architecture", "Performance optimization", "Growth analytics", "Enterprise readiness"]
  }
];

export function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-[#F6F8FA] to-white">
      <FeatureSteps 
        features={services} 
        title="Technology That Drives Growth"
        autoPlayInterval={5000}
        imageHeight="h-[300px] md:h-[400px] lg:h-[500px]"
      />
    </section>
  );
}
