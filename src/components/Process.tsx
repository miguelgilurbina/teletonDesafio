// src/components/Process.tsx - VERSIÓN ACTUALIZADA
"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  CreditCard,
  Code,
  CheckCircle,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { ProcessProps } from "@/lib/types";

export default function Process({ data, className = "" }: ProcessProps) {
  const stepIcons = [MessageCircle, CreditCard, Code, RefreshCw, CheckCircle];

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="process"
      className={`section-padding bg-gradient-process ${className}`}
    >
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
            <p className="text-xl text-[var(--neutral-medium)] max-w-3xl mx-auto">
              Proceso transparente con revisiones incluidas para garantizar tu
              satisfacción
            </p>
          </motion.div>

          {/* Prerequisito Alert */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gradient-to-r from-[var(--accent)]/10 to-[var(--primary)]/10 border border-[var(--accent)]/20 rounded-2xl p-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[var(--neutral-dark)] mb-2">
                    ¿Tienes clara tu marca?
                  </h3>
                  <p className="text-[var(--neutral-medium)] mb-4">
                    Para crear tu página web necesitas tener definido: tu
                    propuesta de valor, servicios principales, diferenciadores y
                    mensaje clave. Si aún no los tienes claros, te ayudamos
                    primero.
                  </p>
                  <button className="bg-[var(--accent)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--accent)]/90 transition-colors duration-200">
                    ✨ Tu Marca en 7 Días - $75.000
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)]"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
              {data.steps.map((step, index) => {
                const IconComponent = stepIcons[index];
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div
                      className={`text-center ${
                        isEven ? "lg:mt-0" : "lg:mt-16"
                      }`}
                    >
                      {/* Step Number */}
                      <div className="relative mb-6 flex justify-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg relative z-10">
                          {step.number}
                        </div>
                        {/* Icon overlay */}
                        <div className="absolute inset-0 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                          <IconComponent size={24} className="text-white/80" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[var(--primary)]/30 transition-all duration-300 hover:shadow-lg">
                        <h3 className="text-lg font-bold text-[var(--neutral-dark)] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-[var(--neutral-medium)] leading-relaxed text-sm mb-3">
                          {step.description}
                        </p>
                        {/* Timeline específico para cada paso */}
                        <div className="text-xs text-[var(--primary)] font-semibold">
                          {index === 0 && "Día 1"}
                          {index === 1 && "Día 1-2"}
                          {index === 2 && "Día 2-4"}
                          {index === 3 && "Día 3-5"}
                          {index === 4 && "Día 6-7"}
                        </div>
                      </div>

                      {/* Mobile Arrow */}
                      {index < data.steps.length - 1 && (
                        <div className="lg:hidden flex justify-center mt-6">
                          <div className="w-0.5 h-8 bg-gradient-to-b from-[var(--primary)] to-[var(--accent)]"></div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Revision Process Highlight */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-white rounded-2xl p-8 border border-[var(--primary)]/20 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw size={32} className="text-[var(--primary)]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--neutral-dark)] mb-4">
                  Proceso de Revisión Incluido
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-[var(--neutral-dark)] mb-2">
                      📅 Primera Revisión (Día 3-4)
                    </h4>
                    <p className="text-[var(--neutral-medium)] text-sm">
                      Te mostramos el diseño inicial y estructura para validar
                      que vamos por buen camino.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--neutral-dark)] mb-2">
                      🔄 Ajustes Incluidos
                    </h4>
                    <p className="text-[var(--neutral-medium)] text-sm">
                      Hasta 2 rondas de cambios para asegurar que quedes 100%
                      satisfecho.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline Summary - ACTUALIZADO */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-6">
                Timeline Detallado del Proceso
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">Día 1-2</div>
                  <div className="text-white/90 text-sm">
                    Información y pago inicial
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Día 2-4</div>
                  <div className="text-white/90 text-sm">
                    Desarrollo y primera revisión
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Día 5-6</div>
                  <div className="text-white/90 text-sm">
                    Ajustes y refinamiento
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Día 7</div>
                  <div className="text-white/90 text-sm">Entrega final</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <button className="btn-primary text-lg px-8 py-4 mr-4">
              Comenzar Mi Proyecto Ahora
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Primero Definir Mi Marca
            </button>
            <p className="text-[var(--neutral-medium)] mt-4">
              Sin compromisos iniciales. Conversemos sobre tu proyecto.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
