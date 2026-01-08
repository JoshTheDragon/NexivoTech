import { useState } from "react";
import { Hero } from "../src/app/components/Hero";
import { Features } from "../src/app/components/Features";
import { Testimonials } from "../src/app/components/Testimonials";
import { Pricing } from "../src/app/components/Pricing";
import { FAQ } from "../src/app/components/FAQ";
import { Contact } from "../src/app/components/Contact";
import { Footer } from "../src/app/components/Footer";
import { BookingDialog } from "../src/app/components/BookingDialog";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Hero onBookConsultation={() => setIsBookingOpen(true)} />
      <Features />
      <Testimonials />
      <Pricing onBookConsultation={() => setIsBookingOpen(true)} />
      <FAQ />
      <Contact onBookConsultation={() => setIsBookingOpen(true)} />
      <Footer />
      <BookingDialog 
        open={isBookingOpen} 
        onOpenChange={setIsBookingOpen} 
      />
    </div>
  );
}
