import { Metadata } from "next";
import About from "@/components/About";
import templateData from "@/data/template.json";

export const metadata: Metadata = {
  title: "Acerca de Nosotros | TuWebEn7Días",
  description:
    "Conoce la historia detrás de TuWebEn7Días y por qué somos la mejor opción para tu página web profesional.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <About data={templateData.about} />
    </main>
  );
}
