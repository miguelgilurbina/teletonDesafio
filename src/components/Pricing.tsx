// src/components/Pricing.tsx
"use client";

import { motion } from "framer-motion";
import { Check, Star, Clock, Shield } from "lucide-react";
import { PricingProps } from "@/lib/types";

export default function Pricing({ data, className = "" }: PricingProps) {
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

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat("es-CL").format(parseInt(price));
  };

  return (
    <section
      id="pricing"
      className={`section-padding bg-gradient-pricing ${className}`}
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
            <div className="inline-flex items-center px-4 py-2 bg-[var(--accent)]/10 rounded-full text-[var(--accent)] font-medium text-sm mb-6">
              <Star size={16} className="mr-2" />
              Precio transparente, sin sorpresas
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--neutral-dark)] mb-6">
              {data.title}
            </h2>
            <p className="text-xl text-[var(--neutral-medium)] max-w-3xl mx-auto">
              {data.subtitle}
            </p>
          </motion.div>

          {/* Main Pricing Card */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] text-white px-6 py-2 rounded-full text-sm font-medium">
                  🔥 Más Popular
                </div>
              </div>

              <div className="bg-white rounded-3xl border-2 border-[var(--primary)]/20 p-8 md:p-12 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[var(--neutral-dark)] mb-4">
                    Página Web Completa
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-5xl md:text-6xl font-bold text-[var(--primary)]">
                        ${formatPrice(data.price)}
                      </span>
                      <span className="text-xl text-[var(--neutral-medium)] ml-2">
                        {data.currency}
                      </span>
                    </div>
                    <p className="text-[var(--neutral-medium)]">
                      Pago dividido: ${formatPrice(data.payment.down_payment)}{" "}
                      inicial + ${formatPrice(data.payment.final_payment)} al
                      finalizar
                    </p>
                  </div>

                  {/* Guarantee badges */}
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className="flex items-center px-3 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      <Clock size={16} className="mr-2" />
                      Entrega en 7 días
                    </div>
                    <div className="flex items-center px-3 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      <Shield size={16} className="mr-2" />
                      100% Garantizado
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {data.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check
                        size={20}
                        className="text-green-600 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-[var(--neutral-dark)]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                  <button className="btn-primary text-lg px-8 py-4 w-full md:w-auto mb-4">
                    Solicitar Mi Página Web Ahora
                  </button>
                  <p className="text-[var(--neutral-medium)] text-sm">
                    Sin compromiso inicial. Conversemos sobre tu proyecto.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Options */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Domain Option */}
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-[var(--neutral-dark)]">
                    Dominio .com
                  </h4>
                  <span className="text-[var(--primary)] font-bold">
                    +$15,000/año
                  </span>
                </div>
                <p className="text-[var(--neutral-medium)] text-sm mb-4">
                  Tu nombre único en internet (ej: tunegocio.com)
                </p>
                <div className="flex items-center text-green-600 text-sm">
                  <Check size={16} className="mr-2" />
                  Primer año incluido si contratas antes del 31 de enero
                </div>
              </div>

              {/* Premium Support */}
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-[var(--neutral-dark)]">
                    Soporte Premium
                  </h4>
                  <span className="text-[var(--primary)] font-bold">
                    +$25,000/mes
                  </span>
                </div>
                <p className="text-[var(--neutral-medium)] text-sm mb-4">
                  Actualizaciones ilimitadas y soporte prioritario
                </p>
                <div className="flex items-center text-green-600 text-sm">
                  <Check size={16} className="mr-2" />
                  Primer mes gratis para nuevos clientes
                </div>
              </div>
            </div>
          </motion.div>

          {/* Money Back Guarantee */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-700 rounded-full font-medium">
              <Shield size={20} className="mr-2" />
              Garantía de satisfacción 100% o te devolvemos tu dinero
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
