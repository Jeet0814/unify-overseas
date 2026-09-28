import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Testimonials } from "@/components/Testimonials";
import { VisaProcess } from "@/components/VisaProcess";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unify Overseas | Study Abroad & Visa Consultancy" },
      {
        name: "description",
        content:
          "Unify Overseas is an overseas education and visa consultancy in Pehowa — expert guidance for university admissions, student visas and overseas careers.",
      },
      { property: "og:title", content: "Unify Overseas | Study Abroad & Visa Consultancy" },
      {
        property: "og:description",
        content:
          "Expert guidance for admissions, visas and overseas careers. 500+ students placed across 10+ countries with a 98% visa success rate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <LoadingScreen />
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
