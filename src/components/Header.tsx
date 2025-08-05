"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { SiteData } from "@/lib/types";

interface HeaderProps {
  data: SiteData["site"] & SiteData["contact"];
  className?: string;
}

// Hook personalizado para manejar navegación inteligente
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

export default function Header({ data, className = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isHomePage, navigateToSection, navigateToPage, pathname } =
    useSmartNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Configuración de navegación adaptativa
  const navigation = [
    {
      name: "Inicio",
      href: isHomePage ? "#hero" : "/",
      type: isHomePage ? "scroll" : "link",
    },
    {
      name: "Sobre Nosotros",
      href: "/about",
      type: "link",
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
    {
      name: "FAQ",
      href: isHomePage ? "#faq" : "/#faq",
      type: isHomePage ? "scroll" : "link",
    },
    {
      name: "Contacto",
      href: isHomePage ? "#contact" : "/#contact",
      type: isHomePage ? "scroll" : "link",
    },
  ];

  const handleNavigation = (item: (typeof navigation)[0]) => {
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
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      navigateToSection("#hero");
    } else {
      navigateToPage("/");
    }
  };

  const handleCtaClick = () => {
    if (isHomePage) {
      navigateToSection("#contact");
    } else {
      navigateToSection("#contact"); // Esto llevará a home + contact
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      } ${className}`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Navigation inteligente */}
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">7D</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-[var(--neutral-dark)]">
                {data.name}
              </h1>
              <p className="text-xs text-[var(--neutral-medium)] hidden sm:block">
                {data.tagline}
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className={`transition-colors duration-200 font-medium ${
                  // Resaltar página actual
                  (item.href === "/about" && pathname === "/about") ||
                  (item.name === "Inicio" && pathname === "/")
                    ? "text-[var(--primary)]"
                    : "text-[var(--neutral-dark)] hover:text-[var(--primary)]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3 text-sm">
              <a
                href={`tel:${data.phone}`}
                className="flex items-center space-x-1 text-[var(--neutral-medium)] hover:text-[var(--primary)] transition-colors"
              >
                <Phone size={16} />
                <span>{data.phone}</span>
              </a>
              <div className="w-px h-4 bg-gray-300"></div>
              <a
                href={`mailto:${data.email}`}
                className="flex items-center space-x-1 text-[var(--neutral-medium)] hover:text-[var(--primary)] transition-colors"
              >
                <Mail size={16} />
                <span className="hidden xl:inline">Email</span>
              </a>
            </div>
            <button
              onClick={handleCtaClick}
              className="btn-primary text-sm px-4 py-2"
            >
              Solicitar Página
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`text-left transition-colors duration-200 font-medium py-2 ${
                    (item.href === "/about" && pathname === "/about") ||
                    (item.name === "Inicio" && pathname === "/")
                      ? "text-[var(--primary)]"
                      : "text-[var(--neutral-dark)] hover:text-[var(--primary)]"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex flex-col space-y-3">
                  <a
                    href={`tel:${data.phone}`}
                    className="flex items-center space-x-2 text-[var(--neutral-medium)]"
                  >
                    <Phone size={16} />
                    <span>{data.phone}</span>
                  </a>
                  <a
                    href={`mailto:${data.email}`}
                    className="flex items-center space-x-2 text-[var(--neutral-medium)]"
                  >
                    <Mail size={16} />
                    <span>{data.email}</span>
                  </a>
                  <button
                    onClick={handleCtaClick}
                    className="btn-primary text-sm mt-4 self-start"
                  >
                    Solicitar Mi Página Web
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
