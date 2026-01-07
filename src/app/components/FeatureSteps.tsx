import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "./ui/utils";
import { Check } from "lucide-react";

interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
  features: string[];
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  autoPlayInterval?: number;
  imageHeight?: string;
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 4000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <div className={cn("py-20 px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#2D5FFF]/10 text-[#2D5FFF] text-sm mb-4">
            Our Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#353A47] mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Scalable digital solutions for businesses and cities on the rise
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Steps */}
          <div className="order-2 lg:order-1 space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={cn(
                  "flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300",
                  index === currentFeature
                    ? "bg-white shadow-lg border border-[#2D5FFF]/20"
                    : "bg-[#F6F8FA] hover:bg-white hover:shadow-md"
                )}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.6 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleFeatureClick(index)}
              >
                <motion.div
                  className={cn(
                    "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    index === currentFeature
                      ? "bg-[#2D5FFF] border-[#2D5FFF] text-white scale-110"
                      : index < currentFeature
                      ? "bg-[#34C759] border-[#34C759] text-white"
                      : "bg-white border-gray-300 text-gray-600"
                  )}
                >
                  {index < currentFeature ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1 min-w-0">
                  <h3 className={cn(
                    "text-lg md:text-xl mb-1 transition-colors",
                    index === currentFeature ? "text-[#2D5FFF]" : "text-[#353A47]"
                  )}>
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-2">
                    {feature.content}
                  </p>
                  
                  {/* Features list */}
                  {index === currentFeature && (
                    <motion.ul
                      className="space-y-1.5 mt-3"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] mr-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                  
                  {/* Progress bar */}
                  {index === currentFeature && (
                    <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#2D5FFF]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side - Image */}
          <div className={cn(
            "order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-2xl",
            imageHeight
          )}>
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-xl overflow-hidden"
                      initial={{ y: 50, opacity: 0, scale: 0.95 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: -50, opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#353A47]/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl mb-2">{feature.title || feature.step}</h3>
                        <p className="text-sm text-gray-200">{feature.content}</p>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
