// src/components/FAQ.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQProps } from "@/lib/types";

export default function FAQ({ data, className = "" }: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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
    <section className={`section-padding bg-gradient-faq ${className}`}>
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
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-[var(--neutral-medium)] max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestro servicio
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            {data.map((item, index) => {
              const isOpen = openItems.includes(index);

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="mb-4"
                >
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[var(--primary)]/30 transition-all duration-300">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                    >
                      <h3 className="text-lg font-semibold text-[var(--neutral-dark)] pr-4">
                        {item.question}
                      </h3>
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-[var(--primary)] text-white"
                            : "text-[var(--primary)]"
                        }`}
                      >
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        >
                          <div className="px-6 pb-6">
                            <p className="text-[var(--neutral-medium)] leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-[var(--neutral-light)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[var(--neutral-dark)] mb-4">
                ¿Tienes más preguntas?
              </h3>
              <p className="text-[var(--neutral-medium)] mb-6">
                Estamos aquí para ayudarte. Conversemos sobre tu proyecto sin
                compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Solicitar Llamada Gratuita
                </button>
                <button className="btn-secondary">Enviar WhatsApp</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
