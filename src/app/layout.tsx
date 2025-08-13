import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
// Import the template data
import templateData from "@/data/template.json";
import { SiteData } from "@/lib/types";

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
    "Obtén tu página web profesional en 7 días hábiles. Diseño responsive, SEO optimizado, formulario de contacto incluido. Solo $250.000 CLP.",
  keywords:
    "páginas web, diseño web, sitios web profesionales, landing pages, Chile, pymes, profesionales independientes",
  authors: [{ name: "Tu Web En 7 Días" }],
  openGraph: {
    title: "Tu Web En 7 Días - Páginas Web Profesionales",
    description:
      "Páginas web profesionales entregadas en 7 días hábiles. $250.000 precio fijo, sin sorpresas.",
    url: "https://tuweben7dias.com",
    siteName: "Tu Web En 7 Días",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tu Web En 7 Días - Páginas Web Profesionales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Web En 7 Días - Páginas Web Profesionales",
    description:
      "Páginas web profesionales entregadas en 7 días hábiles. $250.000 precio fijo.",
    images: ["/og-image.png"],
  },
  // Favicon y meta tags
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#62868D",
  other: {
    "msapplication-TileColor": "#62868D",
  },
};

// Type assertion for the imported JSON
const siteData = templateData as SiteData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        {/* Header */}
        <Header data={{ ...siteData.site, ...siteData.contact }} />

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer data={{ ...siteData.site, ...siteData.contact }} />
      </body>
    </html>
  );
}
