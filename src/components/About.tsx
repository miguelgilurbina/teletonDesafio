"use client";

import { motion } from "framer-motion";
import { Heart, Users, Lightbulb, Target, Award, Calendar } from "lucide-react";

const stats = [
  { icon: Users, value: "150+", label: "Participantes Esperados" },
  { icon: Lightbulb, value: "3", label: "Desafíos IA" },
  { icon: Calendar, value: "48h", label: "de Innovación" },
  { icon: Award, value: "∞", label: "Impacto Social" },
];

const values = [
  {
    icon: Heart,
    title: "Impacto Social",
    description:
      "Cada línea de código que escribas tendrá un propósito: mejorar vidas reales.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description:
      "Conecta con desarrolladores, terapeutas, diseñadores y visionarios de toda Venezuela.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description:
      "Experimenta con IA, IoT, ML y tecnologías emergentes en casos de uso reales.",
  },
  {
    icon: Target,
    title: "Resultados",
    description:
      "Construye prototipos funcionales que puedan implementarse y escalar.",
  },
];

export function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre los Desafíos
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Una iniciativa pionera que une tecnología e impacto social, donde
            desarrolladores, diseñadores y terapeutas colaboran para
            revolucionar la rehabilitación con Inteligencia Artificial.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E53E3E] to-[#C53030] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#553C9A] to-[#2D3748] rounded-3xl p-8 md:p-12 text-white mb-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Nuestra Misión
            </h3>
            <p className="text-xl leading-relaxed mb-8 text-gray-200">
              Transformar la experiencia de rehabilitación en Teletón mediante
              el desarrollo de soluciones tecnológicas innovadoras que mejoren
              la calidad de vida, aumenten la adherencia a tratamientos y
              faciliten la inclusión social de nuestros usuarios.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-[#E53E3E] mb-2">
                  Innovar
                </div>
                <div className="text-gray-300">con propósito social</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#E53E3E] mb-2">
                  Conectar
                </div>
                <div className="text-gray-300">talento y necesidades</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#E53E3E] mb-2">
                  Transformar
                </div>
                <div className="text-gray-300">vidas con tecnología</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ¿Por qué participar?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#E53E3E]/10 to-[#C53030]/10 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-[#E53E3E]" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ¿Cómo funciona?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#E53E3E] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Registro
              </h4>
              <p className="text-gray-600">
                Regístrate en el desafío que más te apasione y forma tu equipo
                multidisciplinario.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#E53E3E] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Desarrollo
              </h4>
              <p className="text-gray-600">
                48 horas intensivas de ideación, prototipado y desarrollo con
                mentorías expertas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#E53E3E] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Impacto
              </h4>
              <p className="text-gray-600">
                Presenta tu solución y ve cómo se implementa para mejorar vidas
                reales.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para hacer historia?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            El 28 y 29 de noviembre, únete a la revolución tecnológica que
            transformará la rehabilitación en Venezuela.
          </p>
          <button className="bg-gradient-to-r from-[#E53E3E] to-[#C53030] hover:from-[#C53030] hover:to-[#A02626] text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
            Únete Ahora
          </button>
        </motion.div>
      </div>
    </section>
  );
}
