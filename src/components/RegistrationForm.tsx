"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Users,
  Send,
  CheckCircle,
  AlertCircle,
  Home,
  Heart,
  Briefcase,
} from "lucide-react";

// Validation schema
const registrationSchema = z.object({
  name: z.string().min(2, "Nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  profession: z.string().min(2, "Profesión es requerida"),
  experience: z
    .string()
    .min(10, "Describe tu experiencia (mínimo 10 caracteres)"),
  motivation: z
    .string()
    .min(20, "Cuéntanos tu motivación (mínimo 20 caracteres)"),
  challenge_id: z.number().min(1).max(3, "Selecciona un desafío"),
  terms: z
    .boolean()
    .refine((val) => val === true, "Debes aceptar los términos"),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const challenges = [
  {
    id: 1,
    title: "Rehabilitación en Casa",
    icon: Home,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Motivación Continua",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
  },
  {
    id: 3,
    title: "Inserción Laboral",
    icon: Briefcase,
    color: "from-green-500 to-green-600",
  },
];

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const watchedChallengeId = watch("challenge_id");

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);

    try {
      // TODO: Implement Supabase integration
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Error en el envío");

      setSubmitStatus("success");
      reset();
      setSelectedChallenge(null);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectChallenge = (challengeId: number) => {
    setSelectedChallenge(challengeId);
    setValue("challenge_id", challengeId);
  };

  return (
    <section id="registro" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Únete al Desafío
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Forma parte del equipo que transformará la rehabilitación con
            tecnología e IA
          </p>
        </motion.div>

        {/* Success Message */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <div>
                <h3 className="font-semibold text-green-800">
                  ¡Registro exitoso!
                </h3>
                <p className="text-green-700">
                  Te contactaremos pronto con más detalles del desafío.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <div>
                <h3 className="font-semibold text-red-800">
                  Error en el registro
                </h3>
                <p className="text-red-700">Por favor, intenta nuevamente.</p>
              </div>
            </div>
          </motion.div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Challenge Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              Selecciona tu desafío *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {challenges.map((challenge) => {
                const IconComponent = challenge.icon;
                const isSelected = selectedChallenge === challenge.id;

                return (
                  <button
                    key={challenge.id}
                    type="button"
                    onClick={() => selectChallenge(challenge.id)}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                      isSelected
                        ? "border-[#E53E3E] bg-[#E53E3E]/5 shadow-lg"
                        : "border-gray-200 hover:border-[#E53E3E]/50 hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${challenge.color} flex items-center justify-center mb-3`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Desafío {challenge.id}
                    </h3>
                    <p className="text-sm text-gray-600">{challenge.title}</p>
                  </button>
                );
              })}
            </div>
            {errors.challenge_id && (
              <p className="mt-2 text-red-600 text-sm">
                {errors.challenge_id.message}
              </p>
            )}
          </motion.div>

          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nombre completo *
              </label>
              <input
                {...register("name")}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent transition-all"
                placeholder="Tu nombre completo"
              />
              {errors.name && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                {...register("email")}
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent transition-all"
                placeholder="tu@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Teléfono
              </label>
              <input
                {...register("phone")}
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent transition-all"
                placeholder="+58 (opcional)"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Profesión/Área *
              </label>
              <input
                {...register("profession")}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent transition-all"
                placeholder="Desarrollador, Diseñador, Terapeuta..."
              />
              {errors.profession && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.profession.message}
                </p>
              )}
            </div>
          </motion.div>

          {/* Experience and Motivation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Experiencia relevante *
              </label>
              <textarea
                {...register("experience")}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent transition-all resize-none"
                placeholder="Cuéntanos sobre tu experiencia en tecnología, salud, diseño o áreas relacionadas..."
              />
              {errors.experience && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.experience.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ¿Por qué quieres participar? *
              </label>
              <textarea
                {...register("motivation")}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E53E3E] focus:border-transparent transition-all resize-none"
                placeholder="Compártenos tu motivación para ser parte de este desafío..."
              />
              {errors.motivation && (
                <p className="mt-1 text-red-600 text-sm">
                  {errors.motivation.message}
                </p>
              )}
            </div>
          </motion.div>

          {/* Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-start gap-3"
          >
            <input
              {...register("terms")}
              type="checkbox"
              className="mt-1 w-4 h-4 text-[#E53E3E] border-gray-300 rounded focus:ring-[#E53E3E]"
            />
            <label className="text-sm text-gray-600">
              Acepto los términos y condiciones del evento, así como el uso de
              mis datos para fines de organización y comunicación del desafío.
            </label>
            {errors.terms && (
              <p className="text-red-600 text-sm">{errors.terms.message}</p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="group bg-gradient-to-r from-[#E53E3E] to-[#C53030] hover:from-[#C53030] hover:to-[#A02626] disabled:from-gray-400 disabled:to-gray-500 text-white px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-xl flex items-center gap-3 mx-auto"
            >
              {isSubmitting ? (
                <>
                  <Users className="w-5 h-5 animate-spin" />
                  Enviando registro...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Registrarme al Desafío
                </>
              )}
            </button>
          </motion.div>
        </form>
      </div>
    </section>
  );
}
