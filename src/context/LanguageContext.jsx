import React, { createContext, useContext, useState, useMemo } from 'react';

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
      title: 'AMPLIFY YOUR',
      titleHighlight: 'AMAZON SALES',
      subtitle: 'BFarm: Built for Bold Brands',
      description: 'Selling on Amazon felt like a jungle? We\'ve already cut the trail—from your first shipment all the way to seven‑figure revenue. Since 2015 we\'ve been turning ambitious Amazon‑marketplace brands into category leaders, powered by data, creativity and rock‑solid processes.',
      startProject: 'Start Your Project',
      watchWork: 'Watch Our Work',
      scroll: 'Scroll Down',
      features: {
        strategy: 'Data × Creativity',
        creative: 'Rock-solid Processes', 
        execution: 'Category Leaders'
      },
      dashboard: {
        title: 'Amazon Growth Dashboard',
        status: 'Live',
        chartTitle: 'Monthly Performance',
        metrics: {
          growth: 'Growth',
          revenue: 'Revenue'
        },
        platforms: {
          google: 'Google',
          amazon: 'Amazon ads',
          telegram: 'Telegram'
        }
      },
      floatingCards: {
        strategy: {
          title: 'STRATEGY',
          description: 'Demand Gen &<br/>Demand Capture'
        },
        creative: {
          title: 'CREATIVE',
          description: 'All-Day VISUAL<br/>Display, Product Focus'
        },
        execution: {
          title: 'EXECUTION',
          description: 'Campaign Structure<br/>Budgets, Media Mix'
        }
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
        backToHome: '← Back to All Services',
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
    },

    // Services Page
    servicesPage: {
      title: 'Our Amazon Services',
      description: 'Complete Amazon management solutions to grow your business',
      services: {
        fullAccount: {
          title: 'Full Account Management',
          description: 'Complete end-to-end Amazon account management with dedicated account managers.',
          features: ['Account Setup', 'Daily Monitoring', '24/7 Support', 'Performance Reports']
        },
        advertising: {
          title: 'Amazon Advertising/Management',
          description: 'Professional Amazon PPC management to maximize your advertising ROI.',
          features: ['PPC Campaign Setup', 'Keyword Research', 'Bid Management', 'Performance Optimization']
        },
        optimization: {
          title: 'Product/Page Optimization',
          description: 'Optimize your product listings for maximum visibility and conversions.',
          features: ['Listing Optimization', 'A+ Content', 'SEO Enhancement', 'Conversion Rate Optimization']
        },
        launching: {
          title: 'Launching/on Amazon',
          description: 'Strategic product launch services to ensure successful market entry.',
          features: ['Launch Strategy', 'Market Research', 'Competitor Analysis', 'Pre-launch Preparation']
        },
        design: {
          title: 'DESIGN Suite',
          description: 'Complete design services for your Amazon presence.',
          features: ['Product Photography', 'A+ Content Design', 'Storefront Design', 'Brand Assets']
        },
        consulting: {
          title: 'Consulting',
          description: 'Expert Amazon consulting to guide your business strategy.',
          features: ['Strategic Planning', 'Market Analysis', 'Growth Strategies', 'Expert Guidance']
        },
        cataloging: {
          title: 'Cataloging',
          description: 'Professional product cataloging and inventory management.',
          features: ['Product Catalog Setup', 'Inventory Management', 'SKU Organization', 'Data Management']
        },
        training: {
          title: 'Training',
          description: 'Comprehensive training programs for your team.',
          features: ['Amazon Best Practices', 'Team Training', 'Skill Development', 'Ongoing Education']
        }
      }
    },

    // Service Pages Details
    servicePages: {
      fullAccount: {
        title: 'Full Account Management',
        subtitle: 'We remove the grunt work, giving you back time for R&D and brand building.',
        heading: '360° Amazon Care',
        description: '360° care: purchasing & FBA logistics, KPI‑driven stock management, Seller Central / Brand Registry admin.',
        featuresTitle: 'What\'s Included:',
        features: [
          'Automated SOPs → zero errors and full transparency in Slack + Looker Studio',
          'Average client net‑profit uplift after 6 months: +42%',
          'Daily account monitoring and optimization',
          'Inventory management and forecasting',
          'Performance reporting and analytics'
        ],
        trackRecordTitle: 'Our Track Record',
        statsHeaders: ['KPI', 'Before BFarm', 'After 6 mo.', 'Δ'],
        stats: [
          ['Revenue', '$120K/mo', '$170K/mo', '+42%'],
          ['Sessions', '58K', '78K', '+34%'],
          ['Avg. CPC', '$1.18', '$0.94', '–20%']
        ]
      },
      advertising: {
        title: 'Amazon Advertising Management',
        subtitle: 'We don\'t "run ads"—we hunt profit. We blend rule‑based bid‑management with an ML conversion‑forecast model.',
        heading: 'Advanced PPC Management',
        description: 'All formats covered: Sponsored Products, Brands, Display, DSP.',
        approachTitle: 'Our Approach:',
        features: [
          'In‑house bid‑management scripts cut CPC by up to –25% without losing traffic',
          'DSP retargeting wins back up to 14% of "lost" visitors',
          'ML-powered conversion forecasting',
          'Rule-based bid optimization',
          'Multi-format campaign management'
        ],
        caseStudyTitle: 'Case Study',
        caseStudyBrand: 'Pet Supplements Brand',
        roasLabel: 'ROAS Improvement',
        roasValue: '2.8 → 5.1',
        roasTime: 'in 3 months',
        tacosLabel: 'TACoS Reduction', 
        tacosValue: '18% → 11%',
        tacosTime: 'sustained',
        ctaTitle: 'Ready to Optimize Your Amazon Ads?',
        ctaText: 'Let\'s turn your advertising spend into profitable growth.',
        ctaButton: 'Start Optimizing'
      },
      optimization: {
        title: 'Product Page Optimization',
        subtitle: 'Data‑Driven SEO: Brand Analytics + Helium 10 → 100/100 relevance.',
        heading: 'Optimization That Converts',
        description: 'Copy that sells: Hook—Problem—Solution—Proof formula.',
        processTitle: 'Our Process:',
        features: [
          'Copy that sells: Hook—Problem—Solution—Proof formula',
          'Open A/B panel shows you which tweaks deliver +15‑30% CVR',
          'Keyword research and optimization',
          'Image and video optimization',
          'A+ Content creation',
          'Competitor analysis'
        ],
        optimizationTitle: 'Optimization Process',
        steps: [
          {
            title: 'Audit & Analysis',
            description: 'Complete listing audit with competitor analysis'
          },
          {
            title: 'Keyword Research',
            description: 'Data-driven keyword strategy using Brand Analytics'
          },
          {
            title: 'Content Optimization',
            description: 'Hook—Problem—Solution—Proof copywriting'
          },
          {
            title: 'A/B Testing',
            description: 'Continuous testing for +15‑30% CVR improvement'
          }
        ],
        ctaTitle: 'Ready to Optimize Your Listings?',
        ctaText: 'Let\'s maximize your conversion rates and visibility.',
        ctaButton: 'Optimize Now'
      },
      launching: {
        title: 'Launching on Amazon',
        subtitle: '"Launch & Lead" package: Niche analysis & white‑space strategy → we dodge the "red ocean."',
        heading: 'Strategic Product Launch',
        packageTitle: '"Launch & Lead" Package:',
        steps: [
          {
            title: 'Positioning & Price-Point Selection',
            description: 'Strategic market positioning for maximum impact'
          },
          {
            title: 'Creation of Killer Listing, EBC and Video',
            description: 'Complete content creation optimized for conversions'
          },
          {
            title: 'Kick-off Ads (SP + SB + SD) + "White-hat" Review Plan',
            description: 'Multi-format advertising launch with review strategy'
          }
        ],
        featuresTitle: 'What You Get:',
        features: [
          'Step‑by‑step 0‑90 day plan: from listings to first review',
          'Amazon\'s Choice guaranteed or the service fee is refunded',
          'Niche analysis and competition research',
          'White-space opportunity identification',
          'Complete launch strategy and execution'
        ],
        resultsTitle: 'Average Results',
        results: [
          { label: 'Break-even', value: 'Day 38' },
          { label: 'Revenue', value: '$100K in first 90 days' },
          { label: 'Success Rate', value: 'Amazon\'s Choice guarantee' }
        ],
        ctaTitle: 'Ready to Launch Successfully?',
        ctaText: 'Let\'s create a winning launch strategy for your product.',
        ctaButton: 'Plan My Launch'
      }
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
      title: 'ЗБІЛЬШУЙТЕ',
      titleHighlight: 'ПРОДАЖІ НА AMAZON',
      subtitle: 'BFarm: Створені для сміливих брендів',
      description: 'Продажі на Amazon здавались джунглями? Ми вже прорубали стежку—від вашої першої відправки до семизначного доходу. З 2015 року ми перетворюємо амбітні Amazon бренди на лідерів категорій, використовуючи дані, креативність та надійні процеси.',
      startProject: 'Почати проект',
      watchWork: 'Подивитись роботи',
      scroll: 'Прокрутити вниз',
      features: {
        strategy: 'Дані × Креативність',
        creative: 'Надійні процеси',
        execution: 'Лідери категорій'
      },
      dashboard: {
        title: 'Панель зростання Amazon',
        status: 'Онлайн',
        chartTitle: 'Місячна продуктивність',
        metrics: {
          growth: 'Зростання',
          revenue: 'Доходи'
        },
        platforms: {
          google: 'Google',
          amazon: 'Amazon реклама',
          klaviyo: 'klaviyo',
          telegram: 'Telegram'
        }
      },
      floatingCards: {
        strategy: {
          title: 'СТРАТЕГІЯ',
          description: 'Генерація попиту і<br/>захоплення попиту'
        },
        creative: {
          title: 'КРЕАТИВ',
          description: 'Цілодобовий ВІЗУАЛ<br/>Display, фокус на продукт'
        },
        execution: {
          title: 'ВИКОНАННЯ',
          description: 'Структура кампаній<br/>Бюджети, медіа мікс'
        }
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
        backToHome: '← Назад до всіх сервісів',
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
    },

    // Services Page
    servicesPage: {
      title: 'Наші послуги Amazon',
      description: 'Комплексні рішення для управління Amazon для розвитку вашого бізнесу',
      services: {
        fullAccount: {
          title: 'Повне управління аккаунтом',
          description: 'Комплексне управління аккаунтом Amazon від початку до кінця з присвяченими менеджерами.',
          features: ['Налаштування аккаунту', 'Щоденний моніторинг', 'Підтримка 24/7', 'Звіти про продуктивність']
        },
        advertising: {
          title: 'Управління Amazon рекламою',
          description: 'Професійне управління Amazon PPC для максимізації ROI вашої реклами.',
          features: ['Налаштування PPC кампаній', 'Дослідження ключових слів', 'Управління ставками', 'Оптимізація продуктивності']
        },
        optimization: {
          title: 'Оптимізація продукту/сторінки',
          description: 'Оптимізуйте ваші лістинги продуктів для максимальної видимості та конверсій.',
          features: ['Оптимізація лістингів', 'A+ Контент', 'SEO покращення', 'Оптимізація конверсій']
        },
        launching: {
          title: 'Запуск на Amazon',
          description: 'Стратегічні послуги запуску продукту для забезпечення успішного входу на ринок.',
          features: ['Стратегія запуску', 'Дослідження ринку', 'Аналіз конкурентів', 'Підготовка до запуску']
        },
        design: {
          title: 'Дизайн пакет',
          description: 'Повні послуги дизайну для вашої присутності на Amazon.',
          features: ['Фотографія продуктів', 'Дизайн A+ контенту', 'Дизайн магазину', 'Брендові активи']
        },
        consulting: {
          title: 'Консалтинг',
          description: 'Експертний консалтинг Amazon для керівництва стратегією вашого бізнесу.',
          features: ['Стратегічне планування', 'Аналіз ринку', 'Стратегії зростання', 'Експертне керівництво']
        },
        cataloging: {
          title: 'Каталогізація',
          description: 'Професійна каталогізація продуктів та управління інвентарем.',
          features: ['Налаштування каталогу продуктів', 'Управління інвентарем', 'Організація SKU', 'Управління даними']
        },
        training: {
          title: 'Навчання',
          description: 'Комплексні програми навчання для вашої команди.',
          features: ['Кращі практики Amazon', 'Навчання команди', 'Розвиток навичок', 'Постійна освіта']
        }
      }
    },

    // Service Pages Details
    servicePages: {
      fullAccount: {
        title: 'Повне управління аккаунтом',
        subtitle: 'Ми усуваємо рутинну роботу, повертаючи вам час для R&D та побудови бренду.',
        heading: '360° турбота Amazon',
        description: '360° турбота: закупівлі та FBA логістика, управління запасами на основі KPI, адміністрування Seller Central / Brand Registry.',
        featuresTitle: 'Що включено:',
        features: [
          'Автоматизовані SOP → нуль помилок та повна прозорість у Slack + Looker Studio',
          'Середнє підвищення чистого прибутку клієнта через 6 місяців: +42%',
          'Щоденний моніторинг та оптимізація аккаунту',
          'Управління інвентарем та прогнозування',
          'Звітність про продуктивність та аналітика'
        ],
        trackRecordTitle: 'Наш послужний список',
        statsHeaders: ['KPI', 'До BFarm', 'Після 6 міс.', 'Δ'],
        stats: [
          ['Доходи', '$120K/міс', '$170K/міс', '+42%'],
          ['Сесії', '58K', '78K', '+34%'],
          ['Сер. CPC', '$1.18', '$0.94', '–20%']
        ]
      },
      advertising: {
        title: 'Управління Amazon рекламою',
        subtitle: 'Ми не просто "ведемо рекламу" — ми полюємо на прибуток. Ми поєднуємо управління ставками на основі правил з ML моделлю прогнозування конверсій.',
        heading: 'Просунуте управління PPC',
        description: 'Всі формати покриті: Sponsored Products, Brands, Display, DSP.',
        approachTitle: 'Наш підхід:',
        features: [
          'Власні скрипти управління ставками знижують CPC до –25% без втрати трафіку',
          'DSP ретаргетинг повертає до 14% "втрачених" відвідувачів',
          'ML-прогнозування конверсій',
          'Оптимізація ставок на основі правил',
          'Управління кампаніями різних форматів'
        ],
        caseStudyTitle: 'Кейс',
        caseStudyBrand: 'Бренд добавок для тварин',
        roasLabel: 'Покращення ROAS',
        roasValue: '2.8 → 5.1',
        roasTime: 'за 3 місяці',
        tacosLabel: 'Зниження TACoS', 
        tacosValue: '18% → 11%',
        tacosTime: 'стабільно',
        ctaTitle: 'Готові оптимізувати рекламу Amazon?',
        ctaText: 'Давайте перетворимо ваші витрати на рекламу в прибутковий ріст.',
        ctaButton: 'Почати оптимізацію'
      },
      optimization: {
        title: 'Оптимізація сторінки продукту',
        subtitle: 'SEO на основі даних: Brand Analytics + Helium 10 → 100/100 релевантність.',
        heading: 'Оптимізація що конвертує',
        description: 'Копірайт що продає: Хук—Проблема—Рішення—Доказ формула.',
        processTitle: 'Наш процес:',
        features: [
          'Копірайт що продає: Хук—Проблема—Рішення—Доказ формула',
          'Відкрита A/B панель показує які зміни дають +15‑30% CVR',
          'Дослідження та оптимізація ключових слів',
          'Оптимізація зображень та відео',
          'Створення A+ контенту',
          'Аналіз конкурентів'
        ],
        optimizationTitle: 'Процес оптимізації',
        steps: [
          {
            title: 'Аудит та аналіз',
            description: 'Повний аудит лістингу з аналізом конкурентів'
          },
          {
            title: 'Дослідження ключових слів',
            description: 'Стратегія ключових слів на основі даних з Brand Analytics'
          },
          {
            title: 'Оптимізація контенту',
            description: 'Копірайтинг за формулою Хук—Проблема—Рішення—Доказ'
          },
          {
            title: 'A/B тестування',
            description: 'Постійне тестування для покращення CVR на +15‑30%'
          }
        ],
        ctaTitle: 'Готові оптимізувати ваші лістинги?',
        ctaText: 'Давайте максимізуємо ваші конверсії та видимість.',
        ctaButton: 'Оптимізувати зараз'
      },
      launching: {
        title: 'Запуск на Amazon',
        subtitle: 'Пакет "Запуск і лідерство": Аналіз ніші та стратегія білих плям → ми уникаємо "червоного океану."',
        heading: 'Стратегічний запуск продукту',
        packageTitle: 'Пакет "Запуск і лідерство":',
        steps: [
          {
            title: 'Позиціонування та вибір цінової точки',
            description: 'Стратегічне позиціонування на ринку для максимального впливу'
          },
          {
            title: 'Створення вбивчого лістингу, EBC та відео',
            description: 'Повне створення контенту оптимізованого для конверсій'
          },
          {
            title: 'Запуск реклами (SP + SB + SD) + план "білих" відгуків',
            description: 'Запуск реклами різних форматів зі стратегією відгуків'
          }
        ],
        featuresTitle: 'Що ви отримуєте:',
        features: [
          'Покроковий план 0‑90 днів: від лістингів до першого відгуку',
          'Amazon\'s Choice гарантовано або вартість послуги повертається',
          'Аналіз ніші та дослідження конкуренції',
          'Виявлення можливостей білих плям',
          'Повна стратегія та виконання запуску'
        ],
        resultsTitle: 'Середні результати',
        results: [
          { label: 'Беззбитковість', value: 'День 38' },
          { label: 'Доходи', value: '$100K за перші 90 днів' },
          { label: 'Відсоток успіху', value: 'Гарантія Amazon\'s Choice' }
        ],
        ctaTitle: 'Готові до успішного запуску?',
        ctaText: 'Давайте створимо виграшну стратегію запуску для вашого продукту.',
        ctaButton: 'Спланувати мій запуск'
      },
      design: {
        title: 'Дизайн для Amazon',
        subtitle: 'Створюємо візуальний контент, який перетворює переглядачів на покупців',
        heading: 'Професійний дизайн = більше продажів',
        description: 'На Amazon користувачі приймають рішення про покупку за лічені секунди. Якісний візуальний контент є ключовим фактором успіху. Ми створюємо дизайн, який не лише привертає увагу, але й ефективно передає переваги вашого продукту, підвищуючи конверсію до 40%.',
        featuresTitle: 'Що входить в наші послуги дизайну',
        features: [
          'Професійні фото продукції з відповідною підсвіткою',
          'A+ контент із залученням користувачів', 
          'Інфографіка для виділення ключових переваг',
          'Брендбук та фірмовий стиль Amazon-магазину',
          'Адаптивний дизайн для мобільних пристроїв',
          'Аналіз конкурентів та трендів дизайну'
        ],
        processTitle: 'Наш процес роботи',
        processSteps: [
          { title: 'Аналіз продукту', description: 'Вивчаємо ваш товар, цільову аудиторію та конкурентів' },
          { title: 'Концепт дизайну', description: 'Розробляємо креативну концепцію та мудборди' },
          { title: 'Створення контенту', description: 'Виготовляємо фото, відео та графічні матеріали' },
          { title: 'Оптимізація', description: 'Адаптуємо контент під вимоги Amazon та SEO' }
        ],
        caseStudyTitle: 'Приклад нашої роботи',
        caseStudyBrand: 'Кейс: Косметичний бренд',
        caseStudyText: 'Після редизайну листингу та створення A+ контенту конверсія збільшилась на 38%, а середній чек - на 25%. Час, проведений на сторінці, збільшився вдвічі.',
        ctaTitle: 'Готові вивести ваш продукт на новий рівень?',
        ctaText: 'Обговоримо ваш проект та створимо дизайн, який продає',
        ctaButton: 'Отримати консультацію'
      },
      consulting: {
        title: 'Консультації з Amazon',
        subtitle: 'Експертні рекомендації для зростання та оптимізації вашого Amazon-бізнесу',
        heading: 'Експертиза, що трансформує ваш бізнес',
        description: 'Маєте питання щодо Amazon стратегії? Потребуєте експертної оцінки поточного стану справ? Наші консультації допомагають підприємцям приймати обґрунтовані рішення, уникати дорогих помилок та швидше досягати цілей на найбільшому маркетплейсі світу.',
        areasTitle: 'Напрямки консультування',
        areas: [
          'Аудит поточного стану Amazon-аккаунту',
          'Розробка стратегії просування на Amazon',
          'Підбір найприбутковіших ніш та продуктів',
          'Оптимізація операційних процесів',
          'Навчання внутрішньої команди',
          'Супровід виходу на нові ринки Amazon'
        ],
        consultingTypesTitle: 'Формати консультування',
        consultingTypes: [
          {
            title: 'Експрес-аудит',
            duration: '1-2 дні',
            description: 'Швидкий аналіз аккаунту з конкретними рекомендаціями',
            includes: ['Технічний аудит', 'SEO аналіз', 'Конкурентний аналіз', 'План дій на 30 днів']
          },
          {
            title: 'Повний аудит', 
            duration: '1-2 тижні',
            description: 'Комплексний аналіз усіх аспектів Amazon-бізнесу',
            includes: ['Детальний фінансовий аналіз', 'Маркетингова стратегія', 'Операційна оптимізація', 'Дорожня карта на рік']
          },
          {
            title: 'Стратегічне консультування',
            duration: 'Місячні сесії',
            description: 'Довготривале партнерство для масштабування бізнесу', 
            includes: ['Щомісячні стратегічні сесії', 'Аналіз метрик', 'Корекція стратегії', 'Доступ до експертизи']
          }
        ],
        resultsTitle: 'Результати наших консультацій',
        results: [
          { label: 'Середня економія', value: '$15,000' },
          { label: 'Підвищення ROI', value: '+65%' },
          { label: 'Час імплементації', value: '-40%' }
        ],
        caseStudyTitle: 'Успішна історія клієнта',
        caseStudyBrand: 'Кейс: Технологічна компанія',
        caseStudyText: 'Після стратегічного консультування щодо виходу на європейські ринки Amazon, компанія збільшила оборот на 180% за 6 місяців, відкривши 4 нові країни та оптимізувавши логістичні процеси.',
        ctaTitle: 'Потребуєте експертної поради?',
        ctaText: 'Замовте консультацію та отримайте персоналізовані рекомендації для вашого бізнесу',
        ctaButton: 'Замовити консультацію'
      },
      cataloging: {
        title: 'Каталогізація товарів',
        subtitle: 'Професійне створення та структурування каталогу для максимальної ефективності продажів',
        heading: 'Правильна структура = більше продажів',
        description: 'Якісна каталогізація товарів на Amazon є фундаментом успішних продажів. Правильно структурований каталог не лише покращує користувацький досвід, але й значно підвищує видимість ваших товарів у пошукових результатах. Ми створюємо каталоги, які працюють на збільшення конверсії.',
        featuresTitle: 'Що включає каталогізація',
        features: [
          'Створення та оптимізація каталогу товарів',
          'Правильне структурування категорій і підкатегорій',
          'SEO-оптимізація назв і описів товарів',
          'Налаштування варіантів продукту (розмір, колір, комплектація)',
          'Керування інвентарем та наявністю',
          'Масове завантаження та оновлення каталогу'
        ],
        processTitle: 'Наш процес каталогізації',
        processSteps: [
          { title: 'Аналіз асортименту', description: 'Вивчаємо ваші товари та визначаємо оптимальну структуру каталогу' },
          { title: 'Підготовка даних', description: 'Збираємо та систематизуємо всю необхідну інформацію про продукти' },
          { title: 'Створення каталогу', description: 'Структуруємо каталог відповідно до вимог Amazon та стандартів SEO' },
          { title: 'Тестування і оптимізація', description: 'Перевіряємо працездатність та оптимізуємо для кращої видимості' }
        ],
        benefitsTitle: 'Переваги професійної каталогізації',
        benefits: [
          { title: 'Покращена навігація', description: 'Користувачі легше знаходять потрібні товари', icon: '🧭' },
          { title: 'Вища конверсія', description: 'Правильна структура підвищує ймовірність покупки', icon: '📈' },
          { title: 'SEO переваги', description: 'Оптимізований каталог краще ранжується в пошуку', icon: '🔍' },
          { title: 'Легке управління', description: 'Зручність оновлення та додавання нових товарів', icon: '⚙️' }
        ],
        resultsTitle: 'Результати нашої роботи',
        results: [
          { label: 'Швидкість пошуку', value: '+60%' },
          { label: 'Конверсія', value: '+35%' },
          { label: 'Час обслуговування', value: '-50%' }
        ],
        caseStudyTitle: 'Кейс успішної каталогізації',
        caseStudyBrand: 'Кейс: Спортивний магазин',
        caseStudyText: 'Реструктуризація каталогу спортивного магазину з 500+ товарів дозволила підвищити конверсію на 42%, скоротити час пошуку товарів на 65% та збільшити середню кількість товарів у кошику на 28%.',
        ctaTitle: 'Готові оптимізувати ваш каталог?',
        ctaText: 'Створимо структуру, яка збільшить ваші продажі та покращить досвід користувачів',
        ctaButton: 'Розпочати каталогізацію'
      },
      training: {
        title: 'Навчання Amazon',
        subtitle: 'Комплексні програми навчання для успішної роботи на найбільшому маркетплейсі світу',
        heading: 'Знання = конкурентна перевага',
        description: 'Amazon постійно змінюється, і щоб залишатися конкурентоспроможними, важливо постійно оновлювати свої знання. Наші навчальні програми базуються на реальному досвіді та найсучасніших стратегіях, що дозволяють нашим студентам досягати видатних результатів.',
        programsTitle: 'Наші навчальні програми',
        programs: [
          {
            title: 'Amazon Starter',
            duration: '2 тижні',
            level: 'Початковий',
            description: 'Основи роботи з Amazon для новачків',
            topics: [
              'Реєстрація та налаштування аккаунту',
              'Створення першого листинга',
              'Основи Amazon SEO',
              'Управління замовленнями',
              'Базові метрики та аналітика'
            ]
          },
          {
            title: 'Amazon Professional',
            duration: '1 місяць',
            level: 'Середній',
            description: 'Поглиблене вивчення просування та оптимізації',
            topics: [
              'Просунута оптимізація листингів',
              'PPC реклама та стратегії',
              'Аналіз конкурентів',
              'Управління відгуками та рейтингом',
              'Міжнародна експансія'
            ]
          },
          {
            title: 'Amazon Expert',
            duration: '6 тижнів',
            level: 'Просунутий',
            description: 'Експертні стратегії для масштабування бізнесу',
            topics: [
              'Просунуті стратегії PPC',
              'Брендинг та захист торгової марки',
              'Оптимізація supply chain',
              'Автоматизація процесів',
              'Фінансове планування та аналітика'
            ]
          }
        ],
        formatsTitle: 'Формати навчання',
        formats: [
          { title: 'Індивідуальне навчання', description: 'Персоналізована програма з урахуванням ваших цілей', icon: '👨‍🏫' },
          { title: 'Корпоративне навчання', description: 'Навчання команд і відділів компанії', icon: '👥' },
          { title: 'Онлайн курси', description: 'Самостійне навчання у зручному темпі', icon: '💻' },
          { title: 'Воркшопи', description: 'Інтенсивні практичні заняття', icon: '🏢' }
        ],
        resultsTitle: 'Результати наших випускників',
        results: [
          { label: 'Підвищення продажів', value: '+156%' },
          { label: 'Економія на PPC', value: '-35%' },
          { label: 'Час до результату', value: '3 місяці' }
        ],
        caseStudyTitle: 'Історія успіху учня',
        caseStudyBrand: 'Кейс: Малий бізнес з України',
        caseStudyText: 'Після проходження програми "Amazon Professional" підприємець зміг збільшити продажі свого handmade бренду на 280%, вийти на 5 нових ринків та автоматизувати 70% процесів. ROI від навчання склав 1500% за перший рік.',
        launchStepsTitle: 'Як розпочати навчання',
        launchSteps: [
          { title: 'Консультація', description: 'Обговорюємо ваші цілі та підбираємо оптимальну програму', icon: '📞' },
          { title: 'Тестування', description: 'Оцінюємо поточний рівень знань та складаємо індивідуальний план', icon: '📋' },
          { title: 'Навчання', description: 'Проходите курс з персональним ментором та практичними завданнями', icon: '🎓' }
        ],
        ctaTitle: 'Готові стати експертом Amazon?',
        ctaText: 'Оберіть програму навчання та розпочніть шлях до успіху на маркетплейсі',
        ctaButton: 'Записатися на навчання'
      }
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Безпечна ініціалізація з localStorage
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language');
      return savedLanguage || 'uk';
    }
    return 'uk'; // Default to Ukrainian
  });

  const switchLanguage = (lang) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      // Форсуємо перезавантаження щоб скинути кеш
      window.location.reload();
    }
  };

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[language];
    
    for (const key of keys) {
      value = value?.[key];
    }
    
    return value || path;
  };

  const value = useMemo(() => ({
    language,
    switchLanguage,
    t,
    translations: translations[language]
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
