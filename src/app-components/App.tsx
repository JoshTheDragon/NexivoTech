import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Features } from "./components/Features";
import { CaseStudies } from "./components/CaseStudies";
import { TelegramContact } from "./components/TelegramContact";
import { Footer } from "./components/Footer";
import { BookingDialog } from "./components/BookingDialog";
import { Toaster } from "./components/ui/sonner";

export default function App() {
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