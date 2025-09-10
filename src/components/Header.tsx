"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Calendar, Users, Zap } from "lucide-react";

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Desafíos", href: "#desafios" },
  { name: "Sobre el Evento", href: "#sobre" },
  { name: "FAQ", href: "#faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            {/* Logo placeholder - reemplazar con logo real */}
            <div className="w-10 h-10 bg-gradient-to-br from-[#E53E3E] to-[#C53030] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div
              className={`font-bold text-lg transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              <span className="hidden sm:inline">Desafíos </span>Teletón 2025
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-[#E53E3E] ${
                  isScrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Event Info Badge (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex items-center gap-2 bg-[#E53E3E] text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            <Calendar className="w-4 h-4" />
            28-29 Nov 2025
          </motion.div>

          {/* CTA Button (Desktop) */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => scrollToSection("#registro")}
            className="hidden md:block bg-gradient-to-r from-[#E53E3E] to-[#C53030] hover:from-[#C53030] hover:to-[#A02626] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Registrarse
          </motion.button>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
      >
        <div className="px-4 py-6 space-y-4">
          {/* Event info */}
          <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#E53E3E]/10 to-[#C53030]/10 rounded-xl">
            <Calendar className="w-5 h-5 text-[#E53E3E]" />
            <div>
              <div className="font-semibold text-gray-900 text-sm">
                28-29 Noviembre 2025
              </div>
              <div className="text-gray-600 text-xs">
                48 horas de innovación
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-[#E53E3E] hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile CTA */}
          <button
            onClick={() => scrollToSection("#registro")}
            className="w-full bg-gradient-to-r from-[#E53E3E] to-[#C53030] text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            <Users className="w-5 h-5" />
            Registrarse al Desafío
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
            <div className="text-center">
              <div className="text-xl font-bold text-[#E53E3E]">3</div>
              <div className="text-xs text-gray-600">Desafíos</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-[#E53E3E]">48h</div>
              <div className="text-xs text-gray-600">Innovación</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-[#E53E3E]">∞</div>
              <div className="text-xs text-gray-600">Impacto</div>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
