import { useState } from "react";
import { Navbar } from "../src/app-components/components/Navbar";
import { Hero } from "../src/app-components/components/Hero";
import { Services } from "../src/app-components/components/Services";
import { Features } from "../src/app-components/components/Features";
import { CaseStudies } from "../src/app-components/components/CaseStudies";
import { TelegramContact } from "../src/app-components/components/TelegramContact";
import { Footer } from "../src/app-components/components/Footer";
import { BookingDialog } from "../src/app-components/components/BookingDialog";
import { Toaster } from "../src/app-components/components/ui/sonner";

export default function Home() {
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onBookingClick={() => setBookingDialogOpen(true)} />
      
      <main>
        <Hero onBookingClick={() => setBookingDialogOpen(true)} />
        
        <div id="services">
          <Services />
        </div>
        
        <div id="features">
          <Features />
        </div>
        
        <div id="case-studies">
          <CaseStudies />
        </div>
        
        <div id="contact">
          <TelegramContact />
        </div>
      </main>
      
      <Footer />
      
      <BookingDialog 
        open={bookingDialogOpen} 
        onOpenChange={setBookingDialogOpen}
      />
      
      <Toaster />
    </div>
  );
}
