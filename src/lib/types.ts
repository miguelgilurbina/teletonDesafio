export interface SiteData {
  site: {
    name: string;
    tagline: string;
    description: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    social: {
      instagram?: string;
      linkedin?: string;
      facebook?: string;
    };
  };
  hero: {
    headline: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    features: string[];
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    benefits: {
      title: string;
      description: string;
    }[];
  };
  services: {
  title: string;
  subtitle: string;
  main_service: {
    title: string;
    description: string;
    price: string;
    features: string[];
  };
  maintenance_plans: {
    name: string;
    price: string;
    period: string;
    description: string;
    popular: boolean;
    features: string[];
  }[];
};
  process: {
  title: string;
  subtitle: string;  // ✨ NUEVO
  steps: {
    number: string;
    title: string;
    description: string;
    timeline: string;      // ✨ NUEVO
    deliverable: string;   // ✨ NUEVO
  }[];
};
  pricing: {
    title: string;
    subtitle: string;
    price: string;
    currency: string;
    features: string[];
    payment: {
      down_payment: string;
      final_payment: string;
    };
  };
  faq: {
    question: string;
    answer: string;
  }[];
}

// Interfaces específicas para cada componente
export interface HeroProps {
  data: SiteData['hero'];
  className?: string;
}

export interface AboutProps {
  data: SiteData['about'];
  className?: string;
}

export interface ServicesProps {
  data: SiteData['services'];
  className?: string;
}

export interface ProcessProps {
  data: SiteData['process'];
  className?: string;
}

export interface PricingProps {
  data: SiteData['pricing'];
  className?: string;
}

export interface ContactProps {
  data: SiteData['contact'];
  className?: string;
}

export interface FAQProps {
  data: SiteData['faq'];
  className?: string;
}

// Interface genérica si necesitas algo flexible
export interface BaseComponentProps<T = unknown> {
  data: T;
  className?: string;
}