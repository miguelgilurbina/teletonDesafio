"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { SiteData } from "@/lib/types";

interface HeaderProps {
  data: SiteData["site"] & SiteData["contact"];
  className?: string;
}

export default function Header({ data, className = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Inicio", href: "#hero" },
    { name: "Servicios", href: "#services" },
    { name: "Proceso", href: "#process" },
    { name: "Precios", href: "#pricing" },
    { name: "Contacto", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
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
          {/* Logo */}
          <div className="flex items-center space-x-2">
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
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-[var(--neutral-dark)] hover:text-[var(--primary)] transition-colors duration-200 font-medium"
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
              onClick={() => scrollToSection("#contact")}
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
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-[var(--neutral-dark)] hover:text-[var(--primary)] transition-colors duration-200 font-medium py-2"
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
                    onClick={() => scrollToSection("#contact")}
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
