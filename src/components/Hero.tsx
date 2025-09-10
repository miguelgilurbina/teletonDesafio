"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Zap } from "lucide-react";

interface HeroProps {
  headline: string;
  subtitle: string;
  ctaText: string;
}

export function Hero({ headline, subtitle, ctaText }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background con gradiente Teletón */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#553C9A] via-[#2D3748] to-black" />

      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Logo placeholder - aquí irá el PNG que extraigas */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 bg-[#E53E3E] rounded-full flex items-center justify-center">
            {/* Placeholder - reemplazar con logo */}
            <div className="text-4xl font-bold text-white">T</div>
          </div>
        </motion.div>

        {/* Event info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
            <Calendar className="w-4 h-4" />
            28 y 29 de Noviembre 2025
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          {headline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group bg-[#E53E3E] hover:bg-[#C53030] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-2xl">
            {ctaText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="group border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
            Conoce más
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Zap className="w-6 h-6 text-[#E53E3E]" />
            </div>
            <div className="text-2xl font-bold">3</div>
            <div className="text-gray-300">Desafíos IA</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-[#E53E3E]" />
            </div>
            <div className="text-2xl font-bold">48h</div>
            <div className="text-gray-300">de Innovación</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="w-6 h-6 text-[#E53E3E]" />
            </div>
            <div className="text-2xl font-bold">∞</div>
            <div className="text-gray-300">Impacto Social</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
