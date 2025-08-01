// src/components/Contact.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone, MessageCircle, Send, MapPin, Clock } from "lucide-react";
import { ContactProps } from "@/lib/types";

interface FormData {
  name: string;
  email: string;
  phone: string;
  business: string;
  message: string;
}

export default function Contact({ data, className = "" }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitError(true);
        setTimeout(() => setSubmitError(false), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    }

    setIsSubmitting(false);
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
      },
    },
  };

  return (
    <section
      id="contact"
      className={`section-padding bg-gradient-contact ${className}`}
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.0 }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--neutral-dark)] mb-6">
              ¿Listo para tu nueva página web?
            </h2>
            <p className="text-xl text-[var(--neutral-medium)] max-w-3xl mx-auto">
              Conversemos sobre tu proyecto. Te responderemos en menos de 2
              horas.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-bold text-[var(--neutral-dark)] mb-6">
                  Solicita tu página web
                </h3>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg text-green-700">
                    ¡Gracias! Tu solicitud ha sido enviada. Te contactaremos
                    pronto.
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-200 rounded-lg text-red-700">
                    Hubo un error enviando tu mensaje. Por favor intenta
                    nuevamente o contáctanos directamente.
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--neutral-dark)] mb-2">
                      Nombre completo *
                    </label>
                    <input
                      {...register("name", {
                        required: "El nombre es requerido",
                      })}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-colors"
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--neutral-dark)] mb-2">
                      Email *
                    </label>
                    <input
                      {...register("email", {
                        required: "El email es requerido",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Email inválido",
                        },
                      })}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-colors"
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--neutral-dark)] mb-2">
                      Teléfono *
                    </label>
                    <input
                      {...register("phone", {
                        required: "El teléfono es requerido",
                      })}
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-colors"
                      placeholder="+56 9 1234 5678"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Business */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--neutral-dark)] mb-2">
                      Tu negocio/profesión
                    </label>
                    <input
                      {...register("business")}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-colors"
                      placeholder="Ej: Abogado, Peluquería, Consultoría"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--neutral-dark)] mb-2">
                      Cuéntanos sobre tu proyecto
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-colors"
                      placeholder="Describe brevemente qué tipo de página web necesitas..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-lg py-4 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Solicitar Mi Página Web
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Methods */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-bold text-[var(--neutral-dark)] mb-6">
                  Otras formas de contacto
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <a
                    href={`tel:${data.phone}`}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[var(--neutral-light)] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                      <Phone
                        size={20}
                        className="text-[var(--primary)] group-hover:text-white"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--neutral-dark)]">
                        Llamar ahora
                      </div>
                      <div className="text-[var(--neutral-medium)]">
                        {data.phone}
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${data.email}`}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[var(--neutral-light)] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                      <Mail
                        size={20}
                        className="text-[var(--primary)] group-hover:text-white"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--neutral-dark)]">
                        Enviar email
                      </div>
                      <div className="text-[var(--neutral-medium)]">
                        {data.email}
                      </div>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${data.whatsapp}?text=Hola! Me interesa obtener una página web profesional`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[var(--neutral-light)] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                      <MessageCircle
                        size={20}
                        className="text-green-600 group-hover:text-white"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--neutral-dark)]">
                        WhatsApp
                      </div>
                      <div className="text-[var(--neutral-medium)]">
                        Respuesta inmediata
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Business Hours & Location */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold text-[var(--neutral-dark)] mb-6">
                  Información adicional
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock size={20} className="text-[var(--primary)]" />
                    <div>
                      <div className="font-medium text-[var(--neutral-dark)]">
                        Horario de atención
                      </div>
                      <div className="text-[var(--neutral-medium)]">
                        Lun - Vie: 9:00 - 18:00
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin size={20} className="text-[var(--primary)]" />
                    <div>
                      <div className="font-medium text-[var(--neutral-dark)]">
                        Ubicación
                      </div>
                      <div className="text-[var(--neutral-medium)]">
                        Santiago, Chile
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-green-700 font-medium mb-1">
                    🚀 Respuesta garantizada
                  </div>
                  <div className="text-green-600 text-sm">
                    Te contactaremos en menos de 2 horas hábiles
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
