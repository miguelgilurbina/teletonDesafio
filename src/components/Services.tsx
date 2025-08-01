// src/components/Services.tsx
"use client";

import { motion } from "framer-motion";
import {
  Check,
  Star,
  TrendingUp,
  Shield,
  Headphones,
  FileText,
  BarChart,
  Zap,
  Monitor,
  Search,
  Mail,
  Code,
  Globe,
  Server,
} from "lucide-react";
import { ServicesProps } from "@/lib/types";

export default function Services({ data, className = "" }: ServicesProps) {
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
      transition: { duration: 0.6 },
    },
  };

  // Feature icons mapping
  const featureIcons = {
    "Diseño 100% responsive": Monitor,
    "SEO básico optimizado": Search,
    "Formulario de contacto funcional": Mail,
    "Carga ultrarrápida (Next.js)": Zap,
    "Google Analytics configurado": BarChart,
    "Entrega con código fuente": Code,
  };

  return (
    <section
      id="services"
      className={`section-padding bg-gradient-services ${className}`}
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--neutral-dark)] mb-4 mt-6">
              {data.title}
            </h2>
            <p className="text-xl text-[var(--neutral-medium)] max-w-3xl mx-auto mt-4">
              {data.subtitle}
            </p>
          </motion.div>

          {/* Main Service - Landing Page */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

              <div className="relative z-10">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white/90 text-sm font-medium mb-4">
                    <Star size={16} className="mr-2" />
                    Servicio Principal
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Landing Page Profesional
                  </h3>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Tu página web completa, optimizada y lista para generar
                    leads en 7 días hábiles
                  </p>
                  <div className="text-5xl md:text-6xl font-bold mb-2">
                    $250.000
                  </div>
                  <div className="text-white/80">
                    Precio fijo • Sin sorpresas • Pago 50/50
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.main_service?.features.map((feature, index) => {
                    const IconComponent =
                      featureIcons[feature as keyof typeof featureIcons] ||
                      Check;
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm"
                      >
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent size={18} className="text-white" />
                        </div>
                        <span className="text-white/95 font-medium">
                          {feature}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="text-center mt-8">
                  <a
                    href="https://calendly.com/miguel-gil-9210/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-[var(--primary)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors duration-300 shadow-lg">
                      Empezar Mi Proyecto
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Post-Delivery Journey - NUEVA VERSIÓN INFORMATIVA */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--neutral-dark)] mb-4">
                ¿Qué Pasa Después de los 7 Días?
              </h3>
              <p className="text-lg text-[var(--neutral-medium)] max-w-3xl mx-auto mb-8">
                Tu web está lista, pero el viaje apenas comienza. No somos de
                los que entregamos y desaparecemos. Estamos aquí para
                acompañarte en el crecimiento de tu negocio a largo plazo.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-[var(--primary)]/10 rounded-full text-[var(--primary)] font-medium">
                🚀 Tu socio tecnológico a largo plazo
              </div>
            </div>

            {/* Timeline Visual */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hidden md:block"></div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                      <Check size={32} className="text-white" />
                    </div>
                    <h4 className="font-bold text-[var(--neutral-dark)] mb-2">
                      Día 7: Entrega
                    </h4>
                    <p className="text-[var(--neutral-medium)] text-sm">
                      Tu web está online y funcionando perfecto
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                      <TrendingUp size={32} className="text-white" />
                    </div>
                    <h4 className="font-bold text-[var(--neutral-dark)] mb-2">
                      Mes 1-3: Crecimiento
                    </h4>
                    <p className="text-[var(--neutral-medium)] text-sm">
                      Optimizamos y mejoramos basado en resultados reales
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                      <Star size={32} className="text-white" />
                    </div>
                    <h4 className="font-bold text-[var(--neutral-dark)] mb-2">
                      Largo Plazo: Éxito
                    </h4>
                    <p className="text-[var(--neutral-medium)] text-sm">
                      Tu web se convierte en tu mejor vendedor
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Maintenance Options - MÁS INFORMATIVO */}
            <div className="bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5 rounded-2xl p-8 border border-[var(--primary)]/20">
              <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-[var(--neutral-dark)] mb-2">
                  Opciones de Acompañamiento Disponibles
                </h4>
                <p className="text-[var(--neutral-medium)]">
                  Una vez entregada tu web, puedes elegir cómo quieres que te
                  acompañemos
                </p>
              </div>

              {/* NUEVA VERSIÓN - MÁS INFORMATIVA */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {data.maintenance_plans.map((plan, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[var(--primary)]/30 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-[var(--neutral-dark)] mb-1">
                          {plan.name}
                        </h5>
                        <p className="text-[var(--neutral-medium)] text-sm mb-3">
                          {plan.description}
                        </p>
                        {plan.popular && (
                          <div className="inline-flex items-center px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-xs font-medium">
                            ⭐ Más elegido
                          </div>
                        )}
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-xl font-bold text-[var(--primary)]">
                          {plan.price}
                        </div>
                        <div className="text-[var(--neutral-medium)] text-sm">
                          {plan.period}
                        </div>
                      </div>
                    </div>

                    {/* Features - Solo top 4 para mantener compacto */}
                    <div className="space-y-2 mb-4">
                      {plan.features
                        .slice(0, 4)
                        .map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-sm"
                          >
                            <Check
                              size={14}
                              className="text-[var(--primary)] mr-2 flex-shrink-0"
                            />
                            <span className="text-[var(--neutral-dark)]">
                              {feature}
                            </span>
                          </div>
                        ))}
                      {plan.features.length > 4 && (
                        <div className="text-xs text-[var(--neutral-medium)] ml-5 mt-2">
                          +{plan.features.length - 4} servicios adicionales
                          incluidos
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA MÁS SUAVE */}
              <div className="text-center mt-8">
                <p className="text-[var(--neutral-medium)] text-sm mt-4">
                  💡 Estos servicios se evalúan después de la entrega de tu web
                </p>
              </div>
            </div>
          </motion.div>

          {/* Additional Services CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5 rounded-2xl p-8 border border-[var(--primary)]/20 max-w-4xl mx-auto">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[var(--neutral-dark)] mb-4">
                  ¿Necesitas algo más específico?
                </h3>
                <p className="text-[var(--neutral-medium)] max-w-2xl mx-auto">
                  Cada negocio es único. Si tienes necesidades especiales como
                  e-commerce, portales de membresía o integraciones específicas,
                  conversemos.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="btn-primary px-8 py-4"
                >
                  Solicitar Cotización Personalizada
                </button>
                {/* <button className="btn-secondary px-8 py-4">
                  Ver Ejemplos de Proyectos
                </button> */}
              </div>

              <div className="mt-6 text-sm text-[var(--neutral-medium)]">
                💡 <strong>Proyectos especiales:</strong> E-commerce, sistemas
                de reservas, portales corporativos
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
