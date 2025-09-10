"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Quién puede participar en los Desafíos Teletón?",
    answer:
      "Desarrolladores, diseñadores, terapeutas, médicos, estudiantes y cualquier persona con ganas de crear soluciones tecnológicas para mejorar vidas. No importa tu nivel de experiencia, buscamos equipos multidisciplinarios.",
  },
  {
    question: "¿Es necesario tener experiencia previa con IA?",
    answer:
      "No es obligatorio. Habrá mentores disponibles para guiar a los equipos en el uso de herramientas de IA. Lo más importante es tu motivación para crear soluciones que generen impacto social.",
  },
  {
    question: "¿Cómo se forman los equipos?",
    answer:
      "Puedes registrarte solo o con un equipo ya formado. Durante el evento facilitaremos espacios para que los participantes se conozcan y formen equipos balanceados de 3-5 personas.",
  },
  {
    question: "¿Qué herramientas y tecnologías puedo usar?",
    answer:
      "Cualquier tecnología que consideres apropiada para tu solución: APIs de IA, frameworks web, apps móviles, IoT, etc. Proporcionaremos acceso a algunas herramientas y APIs premium durante el evento.",
  },
  {
    question: "¿Dónde se realizará el evento?",
    answer:
      "El evento se realizará en las instalaciones del Teletón en Caracas. También habrá opciones de participación híbrida para personas de otras ciudades del país.",
  },
  {
    question: "¿Qué incluye la participación?",
    answer:
      "Alimentación durante las 48 horas, acceso a mentores expertos, herramientas de desarrollo, espacios de trabajo colaborativo y la oportunidad de que tu proyecto se implemente en Teletón.",
  },
  {
    question: "¿Hay premios o reconocimientos?",
    answer:
      "Sí, habrá reconocimientos para las mejores soluciones de cada desafío. Pero el mayor premio es ver tu proyecto implementado para ayudar a usuarios reales del Teletón.",
  },
  {
    question: "¿Cómo será el proceso de evaluación?",
    answer:
      "Un jurado compuesto por profesionales de Teletón, expertos en tecnología y usuarios evaluará las soluciones basándose en impacto, viabilidad técnica e innovación.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-[#E53E3E] to-[#C53030] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre los Desafíos Teletón 2025
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 group"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-[#E53E3E] transition-colors">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#E53E3E]" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 group-hover:text-[#E53E3E] transition-colors" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#553C9A] to-[#2D3748] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Tienes más preguntas?</h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Nuestro equipo está disponible para resolver cualquier duda sobre
              los desafíos, el evento o el proceso de registro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#E53E3E] hover:bg-[#C53030] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Contactar por Email
              </button>
              <button className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
                WhatsApp Soporte
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
