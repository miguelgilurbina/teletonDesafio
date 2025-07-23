// src/components/Process.tsx
"use client";

import { motion } from "framer-motion";
import { MessageCircle, CreditCard, Code, CheckCircle } from "lucide-react";
import { ProcessProps } from "@/lib/types";

export default function Process({ data, className = "" }: ProcessProps) {
  const stepIcons = [MessageCircle, CreditCard, Code, CheckCircle];

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
              Así de fácil es obtener tu página web profesional
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)]"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
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
                        <h3 className="text-xl font-bold text-[var(--neutral-dark)] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-[var(--neutral-medium)] leading-relaxed">
                          {step.description}
                        </p>
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

          {/* Timeline Summary */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Tiempo Total del Proceso
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">1 día</div>
                  <div className="text-white/90">
                    Conversación y pago inicial
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">5-7 días</div>
                  <div className="text-white/90">Desarrollo y diseño</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">1 día</div>
                  <div className="text-white/90">Entrega y pago final</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <button className="btn-primary text-lg px-8 py-4">
              Comenzar Mi Proyecto Ahora
            </button>
            <p className="text-[var(--neutral-medium)] mt-4">
              Sin compromisos. Conversemos sobre tu proyecto.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
