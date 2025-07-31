// src/components/About.tsx
"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Code,
  DollarSign,
  Target,
  X,
  TrendingUp,
  Timer,
  Users,
  Award,
} from "lucide-react";
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
      },
    },
  };

  const benefitIcons = {
    "Stack Tecnológico Moderno": Code,
    "Precio Fijo Sin Sorpresas": DollarSign,
    "Especialización en Conversión": Target,
  };

  return (
    <section className={`section-padding bg-gradient-about ${className}`}>
      <div className="container-custom">
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
            <p className="text-xl text-[var(--neutral-medium)] max-w-4xl mx-auto">
              {data.subtitle}
            </p>
          </motion.div>

          {/* Comparison Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Agencias Caras */}
              <div className="bg-[var(--neutral-light)]/50 border border-[var(--neutral-medium)]/30 rounded-xl p-6 relative">
                <div className="absolute -top-3 left-4 bg-[var(--neutral-medium)] text-white px-3 py-1 rounded-full text-sm font-medium">
                  ❌ Agencias Tradicionales
                </div>
                <div className="pt-4">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-[var(--neutral-dark)]">
                      $2M+
                    </div>
                    <div className="text-sm text-[var(--neutral-medium)]">
                      3-6 meses
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-[var(--neutral-dark)]">
                    <li className="flex items-center">
                      <X
                        size={16}
                        className="mr-2 text-[var(--neutral-medium)]"
                      />
                      Procesos lentos y burocráticos
                    </li>
                    <li className="flex items-center">
                      <X
                        size={16}
                        className="mr-2 text-[var(--neutral-medium)]"
                      />
                      Costos ocultos y extras
                    </li>
                    <li className="flex items-center">
                      <X
                        size={16}
                        className="mr-2 text-[var(--neutral-medium)]"
                      />
                      Contacto solo con ejecutivos
                    </li>
                  </ul>
                </div>
              </div>

              {/* Nosotros */}
              <div className="bg-[var(--primary)]/10 border-2 border-[var(--primary)] rounded-xl p-6 relative transform scale-105 shadow-lg">
                <div className="absolute -top-3 left-4 bg-[var(--primary)] text-white px-3 py-1 rounded-full text-sm font-medium">
                  ✅ TuWebEn7Días
                </div>
                <div className="pt-4">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-[var(--primary)]">
                      $250K
                    </div>
                    <div className="text-sm text-[var(--primary)]/80">
                      7 días hábiles exactos
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-[var(--neutral-dark)]">
                    <li className="flex items-center">
                      <CheckCircle
                        size={16}
                        className="mr-2 text-[var(--primary)]"
                      />
                      Proceso optimizado y transparente
                    </li>
                    <li className="flex items-center">
                      <CheckCircle
                        size={16}
                        className="mr-2 text-[var(--primary)]"
                      />
                      Precio fijo sin sorpresas
                    </li>
                    <li className="flex items-center">
                      <CheckCircle
                        size={16}
                        className="mr-2 text-[var(--primary)]"
                      />
                      Contacto directo con el desarrollador
                    </li>
                  </ul>
                </div>
              </div>

              {/* Freelancers */}
              <div className="bg-[var(--secondary)]/20 border border-[var(--secondary)]/40 rounded-xl p-6 relative">
                <div className="absolute -top-3 left-4 bg-[var(--secondary)] text-white px-3 py-1 rounded-full text-sm font-medium">
                  ⚠️ Freelancers Baratos
                </div>
                <div className="pt-4">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-[var(--neutral-dark)]">
                      $50K-150K
                    </div>
                    <div className="text-sm text-[var(--neutral-medium)]">
                      ¿2 semanas? ¿2 meses?
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-[var(--neutral-dark)]">
                    <li className="flex items-center">
                      <X size={16} className="mr-2 text-[var(--secondary)]" />
                      Tiempos impredecibles
                    </li>
                    <li className="flex items-center">
                      <X size={16} className="mr-2 text-[var(--secondary)]" />
                      Calidad inconsistente
                    </li>
                    <li className="flex items-center">
                      <X size={16} className="mr-2 text-[var(--secondary)]" />
                      Riesgo de desaparición
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
            </motion.div>

            {/* Right: Tech Stack Visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                {/* Main Tech Card */}
                <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl p-8 text-white">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      Stack Tecnológico
                    </h3>
                    <p className="text-white/90">
                      La tecnología que potencia tu web
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Code size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Next.js</div>
                        <div className="text-white/80 text-sm">
                          Framework React ultrarrápido
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Award size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">TypeScript</div>
                        <div className="text-white/80 text-sm">
                          Código libre de errores
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <TrendingUp size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Optimización SEO</div>
                        <div className="text-white/80 text-sm">
                          Para aparecer en Google
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Performance Badge */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold">
                  <div className="text-center">
                    <div className="text-lg font-bold">98+</div>
                    <div className="text-xs">Score</div>
                  </div>
                </div>

                {/* Speed Indicator */}
                <div className="absolute -bottom-16 -left-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Timer size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--neutral-dark)]">
                        Carga Ultrarrápida
                      </div>
                      <div className="text-sm text-[var(--neutral-medium)]">
                        &lt; 2 segundos promedio
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Value Proposition Summary */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5 rounded-2xl p-8 border border-[var(--primary)]/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[var(--neutral-dark)] mb-4">
                  El balance perfecto entre calidad, velocidad y precio
                </h3>
                <p className="text-lg text-[var(--neutral-medium)] mb-6 max-w-2xl mx-auto">
                  No pagues de más por procesos lentos ni arriesgues con
                  soluciones baratas. Obtén calidad profesional en tiempo
                  récord.
                </p>
                <div className="inline-flex items-center space-x-4 text-[var(--primary)] font-semibold">
                  <span>🎯 Calidad Profesional</span>
                  <span>⚡ Entrega Rápida</span>
                  <span>💰 Precio Justo</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
