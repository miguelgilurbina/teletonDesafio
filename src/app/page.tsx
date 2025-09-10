// src/app/page.tsx
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ChallengeGrid } from "@/components/ChallengeGrid";
import { RegistrationForm } from "@/components/RegistrationForm";
import { FAQ } from "@/components/FAQ";
import templateData from "@/data/template.json";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero
        headline={templateData.hero.headline}
        subtitle={templateData.hero.subtitle}
        ctaText={templateData.hero.cta_text}
      />

      <About />

      <ChallengeGrid challenges={templateData.challenges} />

      <RegistrationForm />

      <FAQ />
    </main>
  );
}

// Metadata para SEO
export const metadata = {
  title: "Desafíos Teletón 2025 - IA para Rehabilitación",
  description:
    "Únete a los desafíos de innovación con IA para mejorar la rehabilitación, motivación y inserción laboral en Teletón",
  keywords: [
    "Teletón",
    "rehabilitación",
    "inteligencia artificial",
    "tecnología",
    "desafíos",
  ],
};
