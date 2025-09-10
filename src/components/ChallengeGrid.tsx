"use client";

import { motion } from "framer-motion";
import {
  Home,
  Heart,
  Briefcase,
  ArrowRight,
  Lightbulb,
  Target,
} from "lucide-react";
import { Challenge } from "@/lib/types";

interface ChallengeGridProps {
  challenges: Challenge[];
}

const iconMap = {
  home: Home,
  heart: Heart,
  briefcase: Briefcase,
  lightbulb: Lightbulb,
  target: Target,
};

export function ChallengeGrid({ challenges }: ChallengeGridProps) {
  return (
    <section className="py-20 bg-gray-50">
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
            Los Desafíos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tres retos fundamentales que transformarán el futuro de la
            rehabilitación a través de la inteligencia artificial y la
            innovación tecnológica.
          </p>
        </motion.div>

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => {
            const IconComponent =
              iconMap[challenge.icon as keyof typeof iconMap] || Target;

            return (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 h-full border border-gray-100">
                  {/* Challenge Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#E53E3E] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {challenge.id}
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#E53E3E] to-[#C53030] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#E53E3E] transition-colors">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      {challenge.description}
                    </p>

                    {/* Focus Area */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E53E3E]/10 to-[#C53030]/10 text-[#E53E3E] px-4 py-2 rounded-full text-sm font-semibold">
                      <Lightbulb className="w-4 h-4" />
                      {challenge.focus}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <button className="group/btn w-full bg-gradient-to-r from-[#E53E3E] to-[#C53030] hover:from-[#C53030] hover:to-[#A02626] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                      Unirme al Desafío
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E53E3E]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#553C9A] to-[#2D3748] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Listo para el desafío?</h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Únete a desarrolladores, diseñadores, terapeutas y visionarios en
              48 horas de innovación pura que cambiarán vidas.
            </p>
            <button className="bg-[#E53E3E] hover:bg-[#C53030] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Registrarse Ahora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
