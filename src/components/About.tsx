// src/components/About.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Clock, Award } from "lucide-react";
import { AboutProps } from "@/lib/types";

export default function About({ data, className = "" }: AboutProps) {
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

  const benefitIcons = {
    "Proceso Optimizado": Clock,
    "Diseño Profesional": Award,
    "Soporte Incluido": Users,
  };

  return (
    <section className={`section-padding bg-gradient-about ${className}`}>
      <div className="container-custom ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--neutral-dark)] mb-6">
              {data.title}
            </h2>
            <p className="text-xl text-[var(--neutral-medium)] max-w-3xl mx-auto">
              {data.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Description */}
            <motion.div variants={itemVariants} className="space-y-8">
              <p className="text-lg text-[var(--neutral-dark)] leading-relaxed">
                {data.description}
              </p>

              {/* Benefits List */}
              <div className="space-y-6">
                {data.benefits.map((benefit, index) => {
                  const IconComponent =
                    benefitIcons[benefit.title as keyof typeof benefitIcons] ||
                    CheckCircle;

                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center">
                        <IconComponent
                          size={24}
                          className="text-[var(--primary)]"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--neutral-dark)] mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-[var(--neutral-medium)]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--primary)] mb-1">
                    98%
                  </div>
                  <div className="text-sm text-[var(--neutral-medium)]">
                    Satisfacción
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--primary)] mb-1">
                    50+
                  </div>
                  <div className="text-sm text-[var(--neutral-medium)]">
                    Proyectos
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--primary)] mb-1">
                    7
                  </div>
                  <div className="text-sm text-[var(--neutral-medium)]">
                    Días Max
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl p-8 text-white">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      Nuestro Compromiso
                    </h3>
                    <p className="text-white/90">
                      Páginas web que realmente funcionan
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-white" />
                      <span>Entrega en tiempo garantizada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-white" />
                      <span>Diseño que convierte visitantes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-white" />
                      <span>Soporte técnico incluido</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--accent)] rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  7D
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle size={24} className="text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--neutral-dark)]">
                        Proyecto Entregado
                      </div>
                      <div className="text-sm text-[var(--neutral-medium)]">
                        En tiempo récord
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
