# 🏥 Desafíos Teletón 2025

> Landing page para registrar participantes en los desafíos de IA del Teletón Venezuela

## ¿De qué trata?

El **28 y 29 de noviembre de 2025**, Teletón Venezuela organiza un hackathon de 48 horas enfocado en desarrollar soluciones con Inteligencia Artificial para mejorar la rehabilitación. Este repo contiene la landing page donde las personas se pueden registrar para participar.

## Los 3 Desafíos

### 1. 🏠 Rehabilitación en Casa

**¿Cómo podemos mejorar los resultados de rehabilitación en casa?**

- Focus: IA + Monitoreo Remoto

### 2. ❤️ Motivación Continua

**¿Cómo motivamos y comprometemos a usuarios y familias a continuar con sus terapias?**

- Focus: Gamificación + Psicología

### 3. 💼 Inserción Laboral

**¿Cómo apoyar la inserción laboral de usuarios Teletón?**

- Focus: Matching + Capacitación

## Stack Tecnológico

- **Frontend:** Next.js 15 + TypeScript + Tailwind CSS
- **Backend:** Supabase (PostgreSQL + Auth)
- **Deploy:** Vercel

## Quick Start

```bash
# Clonar el repo
git clone https://github.com/tuweben7dias/desafios-teleton.git
cd desafios-teleton

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales de Supabase

# Ejecutar en desarrollo
npm run dev
```

## Variables de Entorno

```bash
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

## Base de Datos (Supabase)

```sql
-- Tabla principal para registros
CREATE TABLE registrations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  challenge_id INTEGER NOT NULL, -- 1, 2, o 3
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  profession VARCHAR(100) NOT NULL,
  experience TEXT NOT NULL,
  motivation TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de desafíos (data estática)
CREATE TABLE challenges (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  focus_area TEXT NOT NULL
);
```

## Roadmap Actual

### ✅ Completado

- [x] Setup del repo con Next.js 15
- [x] Diseño de componentes base (Hero, ChallengeGrid, RegistrationForm)
- [x] Integración con Tailwind CSS
- [x] Validaciones con Zod + React Hook Form

### 🔥 En progreso

- [ ] Configuración de Supabase
- [ ] API Routes para el formulario
- [ ] Deploy en Vercel

### 📋 Por hacer

- [ ] Dashboard básico para ver registros
- [ ] Notificaciones por email
- [ ] Testing completo
- [ ] Optimizaciones mobile

## Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx              # Landing principal
│   ├── layout.tsx            # Layout base
│   └── api/register/         # API para formulario
├── components/
│   ├── Hero.tsx              # Sección principal
│   ├── ChallengeGrid.tsx     # Grid de desafíos
│   ├── RegistrationForm.tsx  # Formulario de registro
│   └── About.tsx             # Info del evento
├── types/
│   └── index.ts              # Tipos TypeScript
└── data/
    └── challenges.json       # Data de los desafíos
```

## Contribuir

1. Fork el repo
2. Crea una rama (`git checkout -b feature/nueva-feature`)
3. Commit tus cambios (`git commit -m 'Add nueva feature'`)
4. Push a la rama (`git push origin feature/nueva-feature`)
5. Abre un Pull Request

## Contacto

**Desarrollado por:** Tu Web en 7 Días  
**Para:** Teletón Venezuela  
**Evento:** 28-29 Noviembre 2025
