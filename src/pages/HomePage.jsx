import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LanguageCoaching } from "@/components/LanguageCoaching";
import { Navbar } from "@/components/Navbar";
import { Testimonials } from "@/components/Testimonials";
import { VisaProcess } from "@/components/VisaProcess";
import { VisaServices } from "@/components/VisaServices";

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VisaServices />
        <LanguageCoaching />
        <About />
        <VisaProcess />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
