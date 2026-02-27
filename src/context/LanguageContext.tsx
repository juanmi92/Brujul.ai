import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    talk: string;
  };
  hero: {
    subtitle: string;
    future: string;
    now: string;
    description: string;
  };
  about: {
    label: string;
    title: string;
    titleHighlight: string;
    titleEnd: string;
    p1: string;
    p2: string;
  };
  services: {
    label: string;
    title: string;
    titleHighlight: string;
    items: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  footer: {
    start: string;
    talk: string;
    contact: string;
    location: string;
    emailPlaceholder: string;
    send: string;
    rights: string;
    reminder: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      talk: "Let's Talk",
    },
    hero: {
      future: "Future",
      now: "Now",
      description: "Ready to blast your business into the future? Forget Excel, we use AI in what actually works. We create videos, images, beats – you name it – while you chill out and watch your brand soar. Or keep doing things the old way... you know.",
      subtitle: "",
    },
    about: {
      label: "About Us",
      title: "Fueling Brands with",
      titleHighlight: "Artificial Creativity",
      titleEnd: "& Bold Results",
      p1: "brujul.ai was built on the belief that the future is shaped by those who embrace AI.",
      p2: "We don't just use tools—we design smart systems that work for your business. From predictive analytics to generative design, we connect human creativity with the power of AI.",
    },
    services: {
      label: "Services",
      title: "All-in-One",
      titleHighlight: "Intelligence",
      items: [
        {
          id: "01",
          title: "AI Strategy",
          description: "We chart the smartest paths for your business to grow, spotting the best opportunities for AI and automation.",
        },
        {
          id: "02",
          title: "Generative Design",
          description: "Creating endless variations of visuals and content that feel like your brand, every single time.",
        },
        {
          id: "03",
          title: "Process Automation",
          description: "Building smart bots to take care of the boring stuff, so your team can focus on the big creative ideas.",
        },
        {
          id: "04",
          title: "Text/Voice Chatbots",
          description: "Creating chatbots that handle customer conversations, so your team can focus on what really matters.",
        },
        {
          id: "05",
          title: "Social Media Content",
          description: "Crafting engaging social media content that speaks your brand's language, while you focus on growing your community",
        },
        {
          id: "06",
          title: "Web creation",
          description: "Designing and building modern, high-performance websites that integrate seamlessly with AI tools to drive your digital presence.",
        },
      ],
    },
    footer: {
      start: "Start a Project",
      talk: "LET'S TALK",
      contact: "Contact",
      location: "Location",
      emailPlaceholder: "Your Email Address",
      send: "Send Message",
      rights: "© 2025 brujul.ai. All rights reserved.",
      reminder: "And remember... use AI to help you with the dAI-to-dAI",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      talk: "Hablemos",
    },
    hero: {
      future: "Futuro",
      now: "Ahora",
      description: "¿Listo para llevar tu negocio al futuro? Olvídate del Excel. Aquí, impulsamos con IA lo que funciona. Creamos videos, imágenes, temazos... lo que necesites, mientras tú te relajas y ves cómo tu marca despega. O sigue haciéndolo a la antigua... como tú veas.",
      subtitle: "",
    },
    about: {
      label: "Sobre Nosotros",
      title: "Impulsando Marcas con",
      titleHighlight: "Imaginación Artificial",
      titleEnd: "y Gran Impacto",
      p1: "brujul.ai se fundó con la creencia de que el futuro pertenece lo definen aquellos que colaboran con la IA.",
      p2: "No solo implementamos herramientas; diseñamos sistemas inteligentes para tu negocio. Desde análisis predictivo hasta diseño generativo, conectamos la creatividad humana con el poder de la IA.",
    },
    services: {
      label: "Servicios",
      title: "Inteligencia",
      titleHighlight: "Todo en Uno",
      items: [
        {
          id: "01",
          title: "Estrategia de IA",
          description: "Trazamos los caminos más inteligentes para que tu negocio crezca, identificando las mejores oportunidades para la IA y la automatización.",
        },
        {
          id: "02",
          title: "Diseño Generativo",
          description: "Creamos variaciones infinitas de contenido visual y textual que siempre se sienten como tu marca.",
        },
        {
          id: "03",
          title: "Automatización de Procesos",
          description: "Creamos bots inteligentes para encargarse de las tareas repetitivas, dejando a tu equipo libre para pensar en ideas creativas.",
        },
        {
          id: "04",
          title: "Chatbots de texto/voz",
          description: "Creamos chatbots que gestionan las conversaciones con clientes, dejando a tu equipo libre para lo que realmente importa",
        },
        {
          id: "05",
          title: "Contenido para redes sociales",
          description: "Creamos contenido atractivo para redes sociales que habla el idioma de tu marca, mientras tú te enfocas en hacer crecer tu comunidad",
        },
        {
          id: "06",
          title: "Creación web",
          description: "Diseñamos y construimos sitios web modernos y de alto rendimiento que se integran perfectamente con herramientas de IA para potenciar tu presencia digital.",
        },
      ],
    },
    footer: {
      start: "Iniciar un Proyecto",
      talk: "HABLEMOS",
      contact: "Contacto",
      location: "Ubicación",
      emailPlaceholder: "Tu Correo Electrónico",
      send: "Enviar Mensaje",
      rights: "© 2025 brujul.ai. Todos los derechos reservados.",
      reminder: "y recuerda... usa la IA para que te ayude con el dIA a dIA",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
