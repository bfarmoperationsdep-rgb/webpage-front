import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Header
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      portfolio: 'Portfolio',
      blog: 'Blog',
      contact: 'Contact'
    },
    cta: {
      consultation: 'Free Consultation',
      getStarted: 'Get Started',
      viewWork: 'View Our Work'
    },
    
    // Hero Section
    hero: {
      title: 'AMPLIFY YOUR AMAZON SALES',
      subtitle: 'Full-Service Amazon Growth for Serious Brands',
      description: 'We are a leading Amazon growth agency specializing in A-to-Z Amazon growth management for health and wellness brands up to $100k. Our done-for-you service helps you maximize, save costs, and expand marketplace.',
      startProject: 'Start Your Project',
      watchWork: 'Watch Our Work',
      features: {
        strategy: 'Strategic Approach',
        creative: 'Creative Excellence', 
        execution: 'Flawless Execution'
      }
    },
    
    // About Section
    about: {
      title: 'Full Account Management',
      description: 'More text here',
      amazonPPC: {
        title: 'Amazon Advertising/Management',
        description: 'More text here'
      },
      productOptimization: {
        title: 'Product/Page Optimization',
        description: 'More text here'
      },
      launching: {
        title: 'Launching/on Amazon',
        description: 'More text here'
      },
      designSuite: {
        title: 'DESIGN/Suite',
        description: 'More text here'
      },
      consulting: {
        title: 'Consulting',
        description: 'More text here'
      },
      cataloging: {
        title: 'Cataloging',
        description: 'More text here'
      },
      training: {
        title: 'Training',
        description: 'More text here'
      },
      scaling: {
        title: 'Scaling/Off Amazon (inactive)',
        description: 'text not needed now.'
      }
    },
    
    // Clients Section
    clients: {
      title: 'WHO WE WORK WITH',
      subtitle: 'Trusted by leading brands and Amazon FBA sellers'
    },
    
    // Services Section
    services: {
      title: 'Our Amazon Services',
      subtitle: 'Complete Amazon management solutions',
      items: {
        ppc: {
          title: 'Amazon PPC',
          description: 'The key to driving traffic to your listings lies in Amazon PPC. Higher revenue, lower ACOS, and transparent ad management.'
        },
        seo: {
          title: 'SEO Optimization',
          description: 'Our 4-phase Amazon SEO plan is best-in-class and can show dramatic results in search rankings in 90 days.'
        },
        creative: {
          title: 'Creative Services',
          description: 'All-Day VISUAL Display, Product Focus'
        },
        strategy: {
          title: 'Strategy & Execution',
          description: 'Campaign Structure, Budgets, Media Mix'
        }
      }
    },
    
    // Features Section
    features: {
      title: "What's the formula for creating consistent, profitable growth for your brand?",
      description: "It's finding the proper mix of Demand Generation and Demand Capture activities, crafting the right creatives for every step of the shopping journey and establishing clear creative directions."
    },
    
    // Language Switcher
    language: {
      switch: 'Switch Language',
      en: 'English',
      uk: 'Українська'
    }
  },
  
  uk: {
    // Header
    nav: {
      home: 'Головна',
      services: 'Послуги',
      about: 'Про нас',
      portfolio: 'Портфоліо',
      blog: 'Блог',
      contact: 'Контакти'
    },
    cta: {
      consultation: 'Безкоштовна консультація',
      getStarted: 'Почати проект',
      viewWork: 'Наші роботи'
    },
    
    // Hero Section
    hero: {
      title: 'ЗБІЛЬШУЙТЕ ПРОДАЖІ НА AMAZON',
      subtitle: 'Повний сервіс Amazon для серйозних брендів',
      description: 'Ми - провідне Amazon-агентство, що спеціалізується на A-to-Z управлінні зростанням Amazon для брендів здоров\'я та велнесу до $100k. Наш готовий сервіс допомагає максимізувати, заощаджувати витрати та розширювати ринок.',
      startProject: 'Почати проект',
      watchWork: 'Подивитись роботи',
      features: {
        strategy: 'Стратегічний підхід',
        creative: 'Творча досконалість',
        execution: 'Бездоганне виконання'
      }
    },
    
    // Clients Section
    clients: {
      title: 'З КИМ МИ ПРАЦЮЄМО',
      subtitle: 'Нам довіряють провідні бренди та Amazon FBA продавці'
    },
    
    // Services Section
    services: {
      title: 'Наші Amazon послуги',
      subtitle: 'Комплексні рішення для управління Amazon',
      items: {
        ppc: {
          title: 'Amazon PPC',
          description: 'Ключ до залучення трафіку на ваші лістинги лежить у Amazon PPC. Вищий дохід, нижчий ACOS та прозоре управління рекламою.'
        },
        seo: {
          title: 'SEO Оптимізація',
          description: 'Наш 4-фазний план Amazon SEO є найкращим у класі та може показати драматичні результати в рейтингу пошуку за 90 днів.'
        },
        creative: {
          title: 'Креативні послуги',
          description: 'Цілодобовий ВІЗУАЛЬНИЙ дисплей, фокус на продукті'
        },
        strategy: {
          title: 'Стратегія та виконання',
          description: 'Структура кампанії, бюджети, медіа-мікс'
        }
      }
    },
    
    // Features Section
    features: {
      title: 'Яка формула для створення послідовного, прибуткового зростання вашого бренду?',
      description: 'Це знаходження правильного поєднання діяльності з генерації попиту та захоплення попиту, створення правильних креативів для кожного кроку покупки та встановлення чітких креативних напрямків.'
    },
    
    // Language Switcher
    language: {
      switch: 'Змінити мову',
      en: 'English',
      uk: 'Українська'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('uk'); // Default to Ukrainian

  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[language];
    
    for (const key of keys) {
      value = value?.[key];
    }
    
    return value || path;
  };

  const value = {
    language,
    switchLanguage,
    t,
    translations: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
