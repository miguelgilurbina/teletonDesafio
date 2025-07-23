// src/components/Services.tsx
"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Search,
  Mail,
  Zap,
  Server,
  Globe,
  CheckCircle,
} from "lucide-react";
import { ServicesProps } from "@/lib/types";

export default function Services({ data, className = "" }: ServicesProps) {
  const iconMap = {
    Monitor,
    Search,
    Mail,
    Zap,
    Server,
    Globe,
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

  return (
    <section
      id="services"
      className={`section-padding bg-[var(--neutral-light)] ${className}`}
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
              {data.subtitle}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.items.map((service, index) => {
              const IconComponent =
                iconMap[service.icon as keyof typeof iconMap] || CheckCircle;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-[var(--primary)]/30 transition-all duration-300 hover:shadow-xl group-hover:-translate-y-2">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={28} className="text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[var(--neutral-dark)] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-[var(--neutral-medium)] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Included badge */}
                    <div className="mt-6 inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      <CheckCircle size={16} className="mr-2" />
                      Incluido
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[var(--neutral-dark)] mb-4">
                ¿Necesitas algo específico?
              </h3>
              <p className="text-[var(--neutral-medium)] mb-6">
                Cada proyecto es único. Si tienes necesidades especiales,
                conversemos sobre cómo podemos ayudarte.
              </p>
              <button className="btn-primary">
                Solicitar Cotización Personalizada
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
