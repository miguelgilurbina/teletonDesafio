// src/components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import {
  Heart,
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Linkedin,
} from "lucide-react";
import { SiteData } from "@/lib/types";

interface FooterProps {
  data: SiteData["site"] & SiteData["contact"];
  className?: string;
}

// Hook reutilizable para navegación inteligente (mismo que header)
const useSmartNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const navigateToSection = (href: string) => {
    if (isHomePage) {
      // Si estamos en home, scroll directo
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, ir a home y luego scroll
      router.push(`/${href}`);
    }
  };

  const navigateToPage = (href: string) => {
    router.push(href);
  };

  return {
    isHomePage,
    navigateToSection,
    navigateToPage,
    pathname,
  };
};

export default function Footer({ data, className = "" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { isHomePage, navigateToSection, navigateToPage, pathname } =
    useSmartNavigation();

  // Navegación adaptativa para footer
  const navigation = {
    main: [
      {
        name: "Inicio",
        href: isHomePage ? "#hero" : "/",
        type: isHomePage ? "scroll" : "link",
      },
      {
        name: "Servicios",
        href: isHomePage ? "#services" : "/#services",
        type: isHomePage ? "scroll" : "link",
      },
      {
        name: "Proceso",
        href: isHomePage ? "#process" : "/#process",
        type: isHomePage ? "scroll" : "link",
      },
    ],
    support: [
      {
        name: "Preguntas Frecuentes",
        href: isHomePage ? "#faq" : "/#faq",
        type: isHomePage ? "scroll" : "link",
      },
      {
        name: "Contacto",
        href: isHomePage ? "#contact" : "/#contact",
        type: isHomePage ? "scroll" : "link",
      },
      {
        name: "Sobre Nosotros",
        href: "/about",
        type: "link",
      },
    ],
  };

  const handleNavigation = (item: {
    name: string;
    href: string;
    type: string;
  }) => {
    if (item.type === "link") {
      if (item.href.startsWith("/#")) {
        // Para enlaces que van a home + sección
        navigateToSection(item.href.substring(1)); // Quita el /
      } else {
        // Para páginas regulares
        navigateToPage(item.href);
      }
    } else {
      // Para scroll interno
      navigateToSection(item.href);
    }
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      navigateToSection("#hero");
    } else {
      navigateToPage("/");
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      href: data.social?.instagram,
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: data.social?.linkedin,
      icon: Linkedin,
    },
  ];

  return (
    <footer className={`bg-[var(--neutral-dark)] text-white ${className}`}>
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section - Logo clickeable */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo clickeable */}
                <button
                  onClick={handleLogoClick}
                  className="flex items-center space-x-3 mb-6 hover:opacity-80 transition-opacity"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">7D</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{data.name}</h3>
                    <p className="text-gray-400 text-sm">{data.tagline}</p>
                  </div>
                </button>

                <p className="text-gray-300 mb-6 max-w-md">
                  {data.description}
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href={`tel:${data.phone}`}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Phone size={16} />
                    <span>{data.phone}</span>
                  </a>
                  <a
                    href={`mailto:${data.email}`}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail size={16} />
                    <span>{data.email}</span>
                  </a>
                  <a
                    href={`https://wa.me/${data.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Navigation Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-6">Navegación</h4>
                <ul className="space-y-3">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => handleNavigation(item)}
                        className={`text-left transition-colors ${
                          (item.href === "/" && pathname === "/") ||
                          (item.name === "Inicio" && pathname === "/")
                            ? "text-[var(--primary)]"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Support Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-lg font-semibold mb-6">Soporte</h4>
                <ul className="space-y-3">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => handleNavigation(item)}
                        className={`text-left transition-colors ${
                          item.href === "/about" && pathname === "/about"
                            ? "text-[var(--primary)]"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Social Links */}
                <div className="mt-8">
                  <h5 className="text-sm font-medium mb-4 text-gray-400">
                    Síguenos
                  </h5>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      if (!social.href) return null;

                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[var(--primary)] transition-colors"
                        >
                          <Icon size={18} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {data.name}. Todos los derechos reservados.
            </div>

            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <button
                className="hover:text-white transition-colors"
                onClick={() =>
                  handleNavigation({
                    name: "Términos",
                    href: isHomePage ? "#contact" : "/#contact",
                    type: isHomePage ? "scroll" : "link",
                  })
                }
              >
                Términos de Servicio
              </button>
              <button
                className="hover:text-white transition-colors"
                onClick={() =>
                  handleNavigation({
                    name: "Privacidad",
                    href: isHomePage ? "#contact" : "/#contact",
                    type: isHomePage ? "scroll" : "link",
                  })
                }
              >
                Política de Privacidad
              </button>
            </div>
          </motion.div>
        </div>

        {/* Made with love */}
        <div className="border-t border-gray-800 py-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="flex flex-col items-center justify-center space-y-2 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <span>Hecho con</span>
                <Heart size={16} className="text-red-500" />
                <span>en Santiago, Chile</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Desarrollado por</span>
                <a
                  href="https://miguelgilurbina.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors font-medium"
                >
                  Miguel Gil Urbina
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Float Button - Navegación inteligente para WhatsApp */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <a
          href={`https://wa.me/${data.whatsapp}?text=Hola! Me interesa obtener una página web profesional. Vi su sitio web y me gustaría conversar sobre mi proyecto.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <MessageCircle
            size={24}
            className="text-white group-hover:scale-110 transition-transform"
          />
        </a>
      </motion.div>
    </footer>
  );
}
