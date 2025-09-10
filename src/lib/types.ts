// src/types/index.ts
export interface Challenge {
  id: number;
  title: string;
  description: string;
  icon: string;
  focus: string;
  details?: string;
}

export interface Registration {
  id?: string;
  challenge_id: number;
  name: string;
  email: string;
  phone?: string;
  profession: string;
  experience: string;
  motivation: string;
  created_at?: string;
}

export interface TemplateData {
  hero: {
    headline: string;
    subtitle: string;
    cta_text: string;
    background_image?: string;
  };
  challenges: Challenge[];
  about: {
    title: string;
    description: string;
    mission: string;
  };
  contact: {
    title: string;
    subtitle: string;
    success_message: string;
  };
}