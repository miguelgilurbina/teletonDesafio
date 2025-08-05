// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, Clock, Target } from "lucide-react";
import { HeroProps } from "@/lib/types";

export default function Hero({ data, className = "" }: HeroProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const featureIcons = {
    "Entrega garantizada en 7 días": Clock,
    "100% responsive y optimizado": Shield,
    "SEO incluido para aparecer en Google": Target,
    "Formulario que captura leads reales": Check,
  };

  return (
    <section
      id="hero"
      className={`bg-gradient-hero section-padding-first relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-primary from-[var(--neutral-light)] via-white to-[var(--neutral-light)]/50"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container-custom">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Urgency Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center px-6 py-3 btn-primary rounded-full text-white font-semibold text-sm mb-6 shadow-lg">
              <Zap size={18} className="mr-2 animate-pulse" />
              Solo 5 cupos disponibles este mes
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--neutral-dark)] mb-6 leading-tight">
              {data.headline.split(" ").map((word, index) => {
                if (word === "7" || word === "Días") {
                  return (
                    <span key={index} className="text-gradient">
                      {word}{" "}
                    </span>
                  );
                }
                return <span key={index}>{word} </span>;
              })}
            </h1>

            <p className="text-lg md:text-xl text-[var(--neutral-medium)] max-w-3xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={() => scrollToSection("#contact")}
              className="btn-primary text-lg px-10 py-5 flex items-center group shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {data.cta_primary}
              <ArrowRight
                size={22}
                className="ml-3 group-hover:translate-x-1 transition-transform"
              />
            </button>

            {/* <button
              onClick={() => scrollToSection("#portfolio")}
              className="btn-secondary text-lg px-10 py-5 hover:bg-[var(--primary)]/10 transition-all duration-300"
            >
              {data.cta_secondary}
            </button> */}
          </motion.div>

          {/* Features Grid - OPTIMIZADO */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-16"
          >
            {data.features.map((feature, index) => {
              const IconComponent =
                featureIcons[feature as keyof typeof featureIcons] || Check;

              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 border border-gray-100 hover:border-[var(--primary)]/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-[var(--primary)]/20 transition-colors mx-auto">
                    <IconComponent
                      size={24}
                      className="text-[var(--primary)]"
                    />
                  </div>
                  <p className="text-[var(--neutral-dark)] font-medium text-sm md:text-base text-center leading-snug">
                    {feature}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* Social Proof MEJORADO */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center"
          >
            {/* Tiempo de Entrega */}
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-2">
                <Clock size={20} className="text-[var(--primary)]" />
                <p className="text-2xl md:text-3xl font-bold text-[var(--primary)]">
                  7 días
                </p>
              </div>
              <p className="text-[var(--neutral-medium)] text-sm">
                Tiempo garantizado
                <br />
                de entrega
              </p>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-300"></div>

            {/* Garantía */}
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-2">
                <Shield size={20} className="text-[var(--accent)]" />
                <p className="text-2xl md:text-3xl font-bold text-[var(--accent)]">
                  100%
                </p>
              </div>
              <p className="text-[var(--neutral-medium)] text-sm">
                Garantía de
                <br />
                satisfacción
              </p>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-300"></div>

            {/* Precio Competitivo */}
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-2">
                <Target size={20} className="text-[var(--primary)]" />
                <p className="text-2xl md:text-3xl font-bold text-gradient">
                  $250K
                </p>
              </div>
              <p className="text-[var(--neutral-medium)] text-sm">
                Precio fijo
                <br />
                sin sorpresas
              </p>
            </div>
          </motion.div>

          {/* Garantía destacada */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-4 md:p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3">
              <Shield size={24} className="text-green-600" />
              <p className="text-green-800 font-semibold text-sm md:text-base">
                <strong>Garantía Total:</strong> Si no cumplimos, te devolvemos
                tu dinero.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
