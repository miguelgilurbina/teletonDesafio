// src/app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Import the template data
import templateData from "@/data/template.json";
import { SiteData } from "@/lib/types";

// Type assertion for the imported JSON
const siteData = templateData as SiteData;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--neutral-light)]">
      {/* Header */}
      <Header data={{ ...siteData.site, ...siteData.contact }} />

      {/* Main Content */}
      <div className="pt-20">
        {" "}
        {/* Offset for fixed header */}
        <Hero data={siteData.hero} />
        <About data={siteData.about} />
        <Services data={siteData.services} />
        <Process data={siteData.process} />
        <FAQ data={siteData.faq} />
        <Contact data={siteData.contact} />
      </div>

      {/* Footer */}
      <Footer data={{ ...siteData.site, ...siteData.contact }} />
    </main>
  );
}
