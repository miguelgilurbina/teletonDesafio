import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Tu Web En 7 Días - Páginas Web Profesionales",
  description:
    "Obtén tu página web profesional en 7 días hábiles. Diseño responsive, SEO optimizado, formulario de contacto incluido. Solo $150.000 CLP.",
  keywords:
    "páginas web, diseño web, sitios web profesionales, landing pages, Chile",
  authors: [{ name: "Tu Web En 7 Días" }],
  openGraph: {
    title: "Tu Web En 7 Días - Páginas Web Profesionales",
    description: "Páginas web profesionales entregadas en 7 días hábiles",
    url: "https://tuweben7dias.com",
    siteName: "Tu Web En 7 Días",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
