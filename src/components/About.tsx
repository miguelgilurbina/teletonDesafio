// src/components/About.tsx
"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Code,
  Users,
  Award,
  TrendingUp,
  Timer,
  Target,
  Lightbulb,
  Heart,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

  return (
    <section
      className={`section-padding mb-4 mt-10 bg-gradient-about ${className}`}
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Hero Personal */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="max-w-4xl mx-auto">
              {/* Foto y presentación */}
              <div className="mb-12">
                <div className="relative inline-block">
                  <Image
                    src="/images/fotoPerfil.png"
                    alt="Miguel Gil Urbina - Fundador de TuWebEn7Días"
                    width={200}
                    height={200}
                    className="w-48 h-48 mx-auto rounded-full object-cover shadow-xl border-4 border-white"
                    priority
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[var(--accent)] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    👋 Hola!
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--neutral-dark)] mb-6">
                Soy Miguel Gil Urbina
              </h1>
              <p className="text-xl md:text-2xl text-[var(--primary)] font-semibold mb-8">
                Fundador de TuWebEn7Días
              </p>
              <p className="text-lg text-[var(--neutral-medium)] max-w-3xl mx-auto leading-relaxed">
                Durante 8+ años he combinado estrategia comercial con desarrollo
                tecnológico. Después de ver cómo las PyMEs luchan con
                proveedores web lentos y costosos, decidí crear la solución que
                yo habría querido encontrar.
              </p>
            </div>
          </motion.div>

          {/* Mi Journey - Timeline */}
          <motion.div variants={itemVariants} className="mb-14">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--neutral-dark)] mb-4">
                Mi Journey Profesional
              </h2>
              <p className="text-lg text-[var(--neutral-medium)] max-w-2xl mx-auto">
                El camino que me llevó a crear TuWebEn7Días
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Timeline */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-[var(--primary)] to-[var(--accent)]"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  {/* 2017-2023: Gestión Comercial */}
                  <div className="relative">
                    <div className="flex items-center justify-center">
                      <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg max-w-md mx-8 relative">
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center">
                          <Users size={16} className="text-white" />
                        </div>
                        <div className="text-sm text-[var(--primary)] font-semibold mb-2">
                          2017 - 2023
                        </div>
                        <h3 className="text-xl font-bold text-[var(--neutral-dark)] mb-3">
                          Gestión Comercial & Canales
                        </h3>
                        <p className="text-[var(--neutral-medium)] text-sm mb-4">
                          6 años optimizando redes de distribución en empresas
                          tecnológicas como Hikvision, Dahua y otras. Lideré
                          equipos comerciales y procesos de licitación.
                        </p>
                        <div className="text-xs text-[var(--primary)] font-medium">
                          💡 Aprendí: Gestión de stakeholders, análisis de
                          datos, procesos empresariales
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2024: Desarrollo & QA */}
                  <div className="relative">
                    <div className="flex items-center justify-center">
                      <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg max-w-md mx-8 relative">
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[var(--accent)] rounded-full flex items-center justify-center">
                          <Code size={16} className="text-white" />
                        </div>
                        <div className="text-sm text-[var(--accent)] font-semibold mb-2">
                          2024
                        </div>
                        <h3 className="text-xl font-bold text-[var(--neutral-dark)] mb-3">
                          Transición a Tech
                        </h3>
                        <p className="text-[var(--neutral-medium)] text-sm mb-4">
                          Full Stack Developer en Vemex Digital. Desarrollo web
                          moderno con React, Next.js y estrategias de testing.
                          Creé Prompt Maker, mi primera startup tech.
                        </p>
                        <div className="text-xs text-[var(--accent)] font-medium">
                          💡 Descubrí: Mi pasión por crear soluciones que
                          resuelven problemas reales
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2024-Present: IA Research */}
                  <div className="relative">
                    <div className="flex items-center justify-center">
                      <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg max-w-md mx-8 relative">
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center">
                          <Award size={16} className="text-white" />
                        </div>
                        <div className="text-sm text-[var(--primary)] font-semibold mb-2">
                          Nov 2024 - Presente
                        </div>
                        <h3 className="text-xl font-bold text-[var(--neutral-dark)] mb-3">
                          AI Research en Outlier
                        </h3>
                        <p className="text-[var(--neutral-medium)] text-sm mb-4">
                          Evaluador oficial de modelos de IA líderes (GPT-4,
                          Claude, Gemini). Desarrollo metodologías para medir
                          rendimiento empresarial de IA.
                        </p>
                        <div className="text-xs text-[var(--primary)] font-medium">
                          💡 Entendí: Cómo la IA puede acelerar procesos sin
                          sacrificar calidad
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2025: TuWebEn7Días */}
                  <div className="relative">
                    <div className="flex items-center justify-center">
                      <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-xl p-8 text-white max-w-md mx-8 relative shadow-xl">
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <Zap size={16} className="text-[var(--primary)]" />
                        </div>
                        <div className="text-sm text-white/80 font-semibold mb-2">
                          2025
                        </div>
                        <h3 className="text-xl font-bold mb-3">
                          Nace TuWebEn7Días
                        </h3>
                        <p className="text-white/90 text-sm mb-4">
                          Combiné mi experiencia comercial + expertise técnico +
                          conocimiento en IA para crear páginas web
                          profesionales en tiempo récord.
                        </p>
                        <div className="text-xs text-white/80 font-medium">
                          🚀 El resultado: Calidad profesional + velocidad +
                          precio justo
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* El Problema que Vi */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-[var(--neutral-dark)] mb-6">
                    El Problema que Vi
                  </h2>
                  <div className="space-y-4 text-[var(--neutral-medium)]">
                    <p className="leading-relaxed">
                      Durante mis años en comercial, vi de primera mano cómo las
                      PyMEs luchaban por tener presencia web profesional:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-600 text-sm">❌</span>
                        </div>
                        <span>
                          <strong>Agencias:</strong> Muy caras ($2M+) y procesos
                          de 3-6 meses
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-600 text-sm">❌</span>
                        </div>
                        <span>
                          <strong>Freelancers:</strong> Baratos pero
                          impredecibles, calidad inconsistente
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-600 text-sm">❌</span>
                        </div>
                        <span>
                          <strong>Plantillas:</strong> Genéricas, difíciles de
                          personalizar, sin soporte
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lightbulb size={80} className="text-[var(--primary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--neutral-dark)] mb-4">
                    ¡Tenía que haber una mejor forma!
                  </h3>
                  <p className="text-[var(--neutral-medium)]">
                    Un equilibrio perfecto entre calidad profesional, tiempo de
                    entrega y precio justo.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cómo lo Resuelvo */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--neutral-dark)] mb-4">
                Mi Solución: TuWebEn7Días
              </h2>
              <p className="text-lg text-[var(--neutral-medium)] max-w-2xl mx-auto">
                Combiné lo mejor de tres mundos para crear algo único
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Experiencia Comercial */}
              <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-lg text-center">
                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users size={32} className="text-[var(--primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--neutral-dark)] mb-4">
                  Experiencia Comercial
                </h3>
                <p className="text-[var(--neutral-medium)] text-sm">
                  Entiendo las necesidades reales de las PyMEs y cómo comunicar
                  valor efectivamente
                </p>
              </div>

              {/* Stack Técnico */}
              <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-lg text-center">
                <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code size={32} className="text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--neutral-dark)] mb-4">
                  Stack Moderno
                </h3>
                <p className="text-[var(--neutral-medium)] text-sm">
                  Next.js, TypeScript, Tailwind - Tecnología que usan Netflix y
                  TikTok
                </p>
              </div>

              {/* IA Integration */}
              <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-lg text-center">
                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp size={32} className="text-[var(--primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--neutral-dark)] mb-4">
                  IA Integrada
                </h3>
                <p className="text-[var(--neutral-medium)] text-sm">
                  Uso Claude Sonnet 4 para acelerar desarrollo sin sacrificar
                  personalización
                </p>
              </div>
            </div>

            {/* Resultado */}
            <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">El Resultado</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-2">$250K</div>
                  <div className="text-white/80">
                    Precio fijo, sin sorpresas
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">7 días</div>
                  <div className="text-white/80">Hábiles garantizados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-white/80">Profesional y optimizado</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mi Filosofía */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-lg">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart size={32} className="text-[var(--accent)]" />
                </div>
                <h2 className="text-3xl font-bold text-[var(--neutral-dark)] mb-4">
                  Mi Filosofía de Trabajo
                </h2>
                <p className="text-lg text-[var(--neutral-medium)] max-w-2xl mx-auto">
                  Los valores que guían cada proyecto
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle
                        size={24}
                        className="text-[var(--primary)]"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--neutral-dark)] mb-2">
                        Transparencia Total
                      </h3>
                      <p className="text-[var(--neutral-medium)]">
                        Precio fijo, proceso claro, comunicación directa. Sin
                        letras chicas ni sorpresas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Timer size={24} className="text-[var(--primary)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--neutral-dark)] mb-2">
                        Compromiso con los Plazos
                      </h3>
                      <p className="text-[var(--neutral-medium)]">
                        7 días hábiles es una promesa, no una estimación. Tu
                        tiempo es valioso.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target size={24} className="text-[var(--primary)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--neutral-dark)] mb-2">
                        Enfoque en Resultados
                      </h3>
                      <p className="text-[var(--neutral-medium)]">
                        No solo hago webs bonitas, las optimizo para que generen
                        leads y ventas reales.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users size={24} className="text-[var(--primary)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--neutral-dark)] mb-2">
                        Relación a Largo Plazo
                      </h3>
                      <p className="text-[var(--neutral-medium)]">
                        No desaparezco después de entregar. Estoy aquí para
                        acompañarte en tu crecimiento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Final */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5 rounded-2xl p-8 border border-[var(--primary)]/20">
              <h3 className="text-2xl font-bold text-[var(--neutral-dark)] mb-4">
                ¿Listo para trabajar juntos?
              </h3>
              <p className="text-lg text-[var(--neutral-medium)] mb-6 max-w-2xl mx-auto">
                Conversemos sobre tu proyecto. Te explico exactamente cómo puedo
                ayudarte a tener la web profesional que tu negocio necesita.
              </p>
              <Link
                href="/#contact"
                className="btn-primary mr-6 px-8 py-4 inline-block"
              >
                Empezar Mi Proyecto
              </Link>

              <a
                href="https://miguelgilurbina.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-4 inline-block"
              >
                Ver Mi Perfil Completo
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
