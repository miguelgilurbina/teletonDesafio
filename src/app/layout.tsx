// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Desafíos Teletón 2025",
    template: "%s | Desafíos Teletón 2025",
  },
  description:
    "Transformando la rehabilitación con IA y tecnología. Únete a nuestros desafíos de innovación.",
  keywords: ["Teletón", "rehabilitación", "IA", "tecnología", "innovación"],
  authors: [{ name: "Teletón + Tu Web en 7 Días" }],
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: "https://desafios-teleton.tuweben7dias.com",
    title: "Desafíos Teletón 2025",
    description: "Transformando la rehabilitación con IA y tecnología",
    siteName: "Desafíos Teletón",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desafíos Teletón 2025",
    description: "Únete a los desafíos de innovación con IA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
