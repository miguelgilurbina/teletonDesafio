"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Heart,
  ExternalLink,
} from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
    color: "hover:text-pink-500",
  },
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
];

const quickLinks = [
  { name: "Sobre Teletón", href: "#" },
  { name: "Términos y Condiciones", href: "#" },
  { name: "Política de Privacidad", href: "#" },
  { name: "Código de Conducta", href: "#" },
];

const eventInfo = [
  { icon: Calendar, text: "28-29 Noviembre 2025" },
  { icon: MapPin, text: "Teletón Venezuela, Caracas" },
  { icon: Mail, text: "desafios@teleton.org.ve" },
  { icon: Phone, text: "+58 (212) 123-4567" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2D3748] via-[#553C9A] to-[#2D3748] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E53E3E] to-[#C53030] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Desafíos Teletón 2025</h3>
                  <p className="text-gray-300 text-sm">
                    IA para Rehabilitación
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Un evento pionero que une tecnología e impacto social para
                desarrollar soluciones con Inteligencia Artificial que
                transformen la rehabilitación en Venezuela.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-white/20 hover:scale-110`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Event Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">
                Información del Evento
              </h4>
              <div className="space-y-4">
                {eventInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <IconComponent className="w-5 h-5 text-[#E53E3E] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {info.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Enlaces Útiles</h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h5 className="font-semibold mb-3 text-sm">
                  Mantente informado
                </h5>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent"
                  />
                  <button className="bg-[#E53E3E] hover:bg-[#C53030] px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200">
                    Suscribir
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © 2025 Teletón Venezuela. Todos los derechos reservados.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Evento organizado con propósito de impacto social
              </p>
            </div>

            {/* Partners */}
            <div className="flex items-center space-x-4 text-center md:text-right">
              <div className="text-gray-400 text-xs">
                <p>
                  Desarrollado con{" "}
                  <Heart className="w-3 h-3 inline text-[#E53E3E]" /> por
                </p>
                <a
                  href="https://tuweben7dias.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E53E3E] hover:text-white transition-colors duration-200 font-medium"
                >
                  Tu Web en 7 Días
                </a>
              </div>
            </div>
          </div>

          {/* Challenge Stats */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-[#E53E3E] mb-1">3</div>
                <div className="text-gray-400 text-xs">Desafíos de IA</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#E53E3E] mb-1">
                  48h
                </div>
                <div className="text-gray-400 text-xs">de Innovación</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#E53E3E] mb-1">∞</div>
                <div className="text-gray-400 text-xs">Vidas Transformadas</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
