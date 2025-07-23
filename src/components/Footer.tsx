// src/components/Footer.tsx
"use client";

import { motion } from "framer-motion";
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

export default function Footer({ data, className = "" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigation = {
    main: [
      { name: "Inicio", href: "#hero" },
      { name: "Servicios", href: "#services" },
      { name: "Proceso", href: "#process" },
      { name: "Precios", href: "#pricing" },
    ],
    support: [
      { name: "Preguntas Frecuentes", href: "#faq" },
      { name: "Contacto", href: "#contact" },
      { name: "Soporte Técnico", href: "#contact" },
    ],
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
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">7D</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{data.name}</h3>
                    <p className="text-gray-400 text-sm">{data.tagline}</p>
                  </div>
                </div>

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
                        onClick={() => scrollToSection(item.href)}
                        className="text-gray-300 hover:text-white transition-colors"
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
                        onClick={() => scrollToSection(item.href)}
                        className="text-gray-300 hover:text-white transition-colors"
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
              <button className="hover:text-white transition-colors">
                Términos de Servicio
              </button>
              <button className="hover:text-white transition-colors">
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
            <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
              <span>Hecho con</span>
              <Heart size={16} className="text-red-500" />
              <span>en Santiago, Chile</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Float Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <a
          href={`https://wa.me/${data.whatsapp}?text=Hola! Me interesa obtener una página web profesional`}
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
