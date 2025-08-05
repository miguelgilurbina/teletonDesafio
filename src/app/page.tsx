// src/app/page.tsx

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

// Import the template data
import templateData from "@/data/template.json";
import { SiteData } from "@/lib/types";

// Type assertion for the imported JSON
const siteData = templateData as SiteData;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--neutral-light)]">
      {/* Main Content */}
      <div className="pt-20">
        {" "}
        {/* Offset for fixed header */}
        <Hero data={siteData.hero} />
        <Process data={siteData.process} />
        <Services data={siteData.services} />
        <FAQ data={siteData.faq} />
        <Contact data={siteData.contact} />
      </div>
    </main>
  );
}
