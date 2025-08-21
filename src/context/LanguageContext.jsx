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
      subtitle: 'BFarm: Built for Bold Brands',
      description: 'Selling on Amazon felt like a jungle? We\'ve already cut the trail—from your first shipment all the way to seven‑figure revenue. Since 2015 we\'ve been turning ambitious Amazon‑marketplace brands into category leaders, powered by data, creativity and rock‑solid processes.',
      startProject: 'Start Your Project',
      watchWork: 'Watch Our Work',
      features: {
        strategy: 'Data × Creativity',
        creative: 'Rock-solid Processes', 
        execution: 'Category Leaders'
      }
    },
    
    // About Section
    about: {
      title: 'About BFarm',
      description: 'We are a leading Amazon growth agency specializing in comprehensive Amazon management for health and wellness brands.',
      mission: 'Our Mission',
      missionText: 'BFarm is dedicated to helping brands amplify their Amazon sales through strategic, data-driven approaches. We specialize in full-service Amazon growth management, helping businesses navigate the complex Amazon ecosystem.',
      approach: 'Our Approach',
      approachText: 'We focus on finding the proper mix of Demand Generation and Demand Capture activities, crafting the right creatives for every step of the shopping journey, and establishing clear creative directions that drive results.',
      whyChoose: 'Why Choose BFarm?',
      whyChooseText: 'With years of experience in Amazon management, we understand what it takes to succeed on the platform. Our team combines strategic thinking with creative execution to deliver measurable results for our clients.',
      stats: {
        brands: 'Successful Brands',
        revenue: 'Revenue Generated', 
        satisfaction: 'Client Satisfaction'
      }
    },
    
    // Clients Section
    clients: {
      title: 'WHO WE WORK WITH',
      subtitle: 'Trusted by leading brands and Amazon FBA sellers'
    },
    
    // Services Section
    services: {
      title: 'Full‑spectrum services for Amazon brands',
      subtitle: 'We handle everything—strategy, listings, ads and scaling beyond Amazon. Choose an all‑inclusive package or refuel exactly where your business needs it.',
      teaser: 'We\'re a one‑stop shop: strategy, creative, advertising, consulting and flawless account management—all under one roof. Pick the service you need and go break some records.',
      whyBfarm: 'Choose BFarm and you\'re not hiring a vendor—you\'re gaining co‑founders of your growth. 98% of clients stay with us longer than 18 months because we speak the language of profit and open dashboards, not pretty promises.',
      items: {
        fullAccount: {
          title: 'Full Account Management',
          description: '360° care: purchasing & FBA logistics, KPI‑driven stock management, Seller Central / Brand Registry admin.',
          features: ['Automated SOPs → zero errors and full transparency in Slack + Looker Studio', 'Average client net‑profit uplift after 6 months: +42%']
        },
        advertising: {
          title: 'Amazon Advertising Management',
          description: 'All formats covered: Sponsored Products, Brands, Display, DSP.',
          features: ['In‑house bid‑management scripts cut CPC by up to –25% without losing traffic', 'DSP retargeting wins back up to 14% of "lost" visitors']
        },
        optimization: {
          title: 'Product Page Optimization',
          description: 'Data‑Driven SEO: Brand Analytics + Helium 10 → 100/100 relevance.',
          features: ['Copy that sells: Hook—Problem—Solution—Proof formula', 'Open A/B panel shows you which tweaks deliver +15‑30% CVR']
        },
        launching: {
          title: 'Launching on Amazon',
          description: 'Niche analysis & white‑space strategy → we dodge the "red ocean."',
          features: ['Step‑by‑step 0‑90 day plan: from listings to first review', 'Amazon\'s Choice guaranteed or the service fee is refunded']
        }
      }
    },
    
    // Features Section
    features: {
      title: 'Data × Creativity × Speed = The BFarm Way',
      data: 'Data — decisions based solely on Market Intelligence, not intuition.',
      creativity: 'Creativity — make the brand stand out in an ocean of copy‑paste products.',
      speed: 'Speed — KPI dashboards refresh every 24 h → instant reaction.'
    },
    
    // Testimonials
    testimonials: {
      title: 'What Our Clients Say',
      quote: '"In nine months BFarm took our cosmetics brand from zero to $400K/month and dropped TACoS to 9%. Finally found partners who speak in numbers, not poetry."',
      author: 'Anna R., Co‑Founder, Beauty Lab'
    },
    
    // Founder Quote
    founder: {
      quote: '"I once realized: Amazon rewards those who play by its rules—then add their own creativity. That\'s exactly how BFarm helps brands worldwide: we mixed the platform\'s cold data with human creativity and got an explosive growth cocktail. Join us and see how 1 + 1 can equal 11."',
      name: 'MAKSYM LAZUTO',
      title: 'Founder & CEO'
    },
    
    // Common Elements
    common: {
      learnMore: 'Learn More',
      backToServices: '← Back to Services',
      getStarted: 'Get Started Today',
      readyToScale: 'Ready to Scale Your Amazon Business?',
      letsDiscuss: 'Let\'s discuss how our full account management can transform your results.',
      contact: 'Contact Us'
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
      subtitle: 'BFarm: Створені для сміливих брендів',
      description: 'Продажі на Amazon здавались джунглями? Ми вже прорубали стежку—від вашої першої відправки до семизначного доходу. З 2015 року ми перетворюємо амбітні Amazon бренди на лідерів категорій, використовуючи дані, креативність та надійні процеси.',
      startProject: 'Почати проект',
      watchWork: 'Подивитись роботи',
      features: {
        strategy: 'Дані × Креативність',
        creative: 'Надійні процеси',
        execution: 'Лідери категорій'
      }
    },
    
    // Clients Section
    clients: {
      title: 'З КИМ МИ ПРАЦЮЄМО',
      subtitle: 'Нам довіряють провідні бренди та Amazon FBA продавці'
    },
    
    // About Section
    about: {
      title: 'Про BFarm',
      description: 'Ми провідне Amazon-агентство, що спеціалізується на комплексному управлінні Amazon для брендів здоров\'я та велнесу.',
      mission: 'Наша місія',
      missionText: 'BFarm присвячена допомозі брендам у збільшенні продажів Amazon через стратегічні, керовані даними підходи. Ми спеціалізуємося на повному управлінні зростанням Amazon, допомагаючи бізнесам орієнтуватися в складній екосистемі Amazon.',
      approach: 'Наш підхід',
      approachText: 'Ми зосереджуємося на знаходженні правильного поєднання діяльності з генерації попиту та захоплення попиту, створенні правильних креативів для кожного кроку покупки та встановленні чітких креативних напрямків, які приносять результати.',
      whyChoose: 'Чому обрати BFarm?',
      whyChooseText: 'З роками досвіду в управлінні Amazon, ми розуміємо, що потрібно для успіху на платформі. Наша команда поєднує стратегічне мислення з креативним виконанням для досягнення вимірюваних результатів для наших клієнтів.',
      stats: {
        brands: 'Успішних брендів',
        revenue: 'Доходу згенеровано',
        satisfaction: 'Задоволеність клієнтів'
      }
    },
    
    // Services Section
    services: {
      title: 'Повний спектр послуг для Amazon брендів',
      subtitle: 'Ми обробляємо все—стратегія, лістинги, реклама та масштабування поза Amazon. Оберіть комплексний пакет або підзарядіть саме те, що потрібно вашому бізнесу.',
      teaser: 'Ми універсальний магазин: стратегія, креатив, реклама, консалтинг та бездоганне управління аккаунтом—все під одним дахом. Оберіть потрібну послугу та підіть бити рекорди.',
      whyBfarm: 'Обираючи BFarm, ви не наймаєте підрядника—ви отримуєте співзасновників вашого зростання. 98% клієнтів залишаються з нами понад 18 місяців, бо ми говоримо мовою прибутку та відкритих дашбордів, а не красивих обіцянок.',
      items: {
        fullAccount: {
          title: 'Повне управління аккаунтом',
          description: '360° турбота: закупівлі та FBA логістика, управління запасами на основі KPI, адміністрування Seller Central / Brand Registry.',
          features: ['Автоматизовані SOP → нуль помилок та повна прозорість у Slack + Looker Studio', 'Середнє підвищення чистого прибутку клієнта через 6 місяців: +42%']
        },
        advertising: {
          title: 'Управління Amazon рекламою',
          description: 'Всі формати покриті: Sponsored Products, Brands, Display, DSP.',
          features: ['Власні скрипти управління ставками знижують CPC до –25% без втрати трафіку', 'DSP ретаргетинг повертає до 14% "втрачених" відвідувачів']
        },
        optimization: {
          title: 'Оптимізація сторінки продукту',
          description: 'SEO на основі даних: Brand Analytics + Helium 10 → 100/100 релевантність.',
          features: ['Копірайт що продає: Хук—Проблема—Рішення—Доказ формула', 'Відкрита A/B панель показує які зміни дають +15‑30% CVR']
        },
        launching: {
          title: 'Запуск на Amazon',
          description: 'Аналіз ніші та стратегія білих плям → ми уникаємо "червоного океану."',
          features: ['Покроковий план 0‑90 днів: від лістингів до першого відгуку', 'Amazon\'s Choice гарантовано або вартість послуги повертається']
        }
      }
    },
    
    // Features Section
    features: {
      title: 'Дані × Креативність × Швидкість = Шлях BFarm',
      data: 'Дані — рішення базуються виключно на ринковій аналітиці, а не на інтуїції.',
      creativity: 'Креативність — виділити бренд в океані копіпаст продуктів.',
      speed: 'Швидкість — KPI дашборди оновлюються кожні 24 години → миттєва реакція.'
    },
    
    // Testimonials
    testimonials: {
      title: 'Що кажуть наші клієнти',
      quote: '"За дев\'ять місяців BFarm підняв наш косметичний бренд з нуля до $400K/місяць і знизив TACoS до 9%. Нарешті знайшли партнерів, які говорять цифрами, а не поезією."',
      author: 'Анна Р., Співзасновник, Beauty Lab'
    },
    
    // Founder Quote
    founder: {
      quote: '"Я колись зрозумів: Amazon винагороджує тих, хто грає за його правилами—а потім додає власну креативність. Саме так BFarm допомагає брендам по всьому світу: ми змішали холодні дані платформи з людською креативністю і отримали вибуховий коктейль зростання. Приєднуйтесь і подивіться, як 1 + 1 може дорівнювати 11."',
      name: 'МАКСИМ ЛАЗУТО',
      title: 'Засновник і CEO'
    },
    
    // Common Elements
    common: {
      learnMore: 'Дізнатися більше',
      backToServices: '← Назад до послуг',
      getStarted: 'Почати зараз',
      readyToScale: 'Готові масштабувати ваш Amazon бізнес?',
      letsDiscuss: 'Давайте обговоримо як наше повне управління аккаунтом може трансформувати ваші результати.',
      contact: 'Зв\'язатися'
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
