import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Testimonials } from "@/components/Testimonials";
import { VisaProcess } from "@/components/VisaProcess";

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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
