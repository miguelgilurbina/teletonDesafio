// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, Clock } from "lucide-react";
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
        staggerChildren: 0.2,
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
        // ✅ Sin ease - usa default que funciona perfecto
      },
    },
  };

  const featureIcons = {
    "Entrega garantizada en 7 días hábiles": Clock,
    "Diseño 100% responsive": Shield,
    "SEO básico incluido": Zap,
    "Formulario de contacto funcional": Check,
  };

  return (
    <section
      id="hero"
      className={`bg-gradient-hero relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
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
          {/* Main Headlines */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-[var(--accent)]/10 rounded-full text-[var(--accent)] font-medium text-sm mb-6">
              <Zap size={16} className="mr-2" />
              Entrega garantizada en 7 días hábiles
            </div>

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

            <p className="text-xl md:text-2xl text-[var(--neutral-medium)] max-w-4xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={() => scrollToSection("#contact")}
              className="btn-primary text-lg px-8 py-4 flex items-center group"
            >
              {data.cta_primary}
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button
              onClick={() => scrollToSection("#services")}
              className="btn-secondary text-lg px-8 py-4"
            >
              {data.cta_secondary}
            </button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
          >
            {data.features.map((feature, index) => {
              const IconComponent =
                featureIcons[feature as keyof typeof featureIcons] || Check;

              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 hover:border-[var(--primary)]/30 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--primary)]/20 transition-colors">
                    <IconComponent
                      size={24}
                      className="text-[var(--primary)]"
                    />
                  </div>
                  <p className="text-[var(--neutral-dark)] font-medium">
                    {feature}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* Social Proof / Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center"
          >
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full border-2 border-white flex items-center justify-center text-white font-medium text-sm"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-[var(--neutral-dark)] font-semibold">
                  50+ Clientes Satisfechos
                </p>
                <p className="text-[var(--neutral-medium)] text-sm">
                  Páginas entregadas en tiempo
                </p>
              </div>
            </div>

            <div className="w-px h-12 bg-gray-300 hidden sm:block"></div>

            <div className="text-center">
              <p className="text-3xl font-bold text-[var(--primary)]">7 días</p>
              <p className="text-[var(--neutral-medium)] text-sm">
                Tiempo promedio
                <br />
                de entrega
              </p>
            </div>

            <div className="w-px h-12 bg-gray-300 hidden sm:block"></div>

            <div className="text-center">
              <p className="text-3xl font-bold text-[var(--accent)]">100%</p>
              <p className="text-[var(--neutral-medium)] text-sm">
                Clientes satisfechos
                <br />
                con el resultado
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[var(--neutral-medium)] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[var(--neutral-medium)] rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
