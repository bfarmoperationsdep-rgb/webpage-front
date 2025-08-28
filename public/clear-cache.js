// АНТИКЕШ СКРИПТ - ОЧИЩАЄ ВСЕ ЛАЙНО!
(function() {
  'use strict';
  
  console.log('🔥 CLEARING ALL CACHE SHIT!');
  
  // Очищуємо localStorage (крім language)
  const savedLanguage = localStorage.getItem('language');
  localStorage.clear();
  if (savedLanguage) {
    localStorage.setItem('language', savedLanguage);
  }
  
  // Очищуємо sessionStorage
  sessionStorage.clear();
  
  // Видаляємо всі service workers
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for(let registration of registrations) {
        registration.unregister();
        console.log('🗑️ Service Worker unregistered');
      }
    });
  }
  
  // Очищуємо cache API
  if ('caches' in window) {
    caches.keys().then(function(names) {
      for (let name of names) {
        caches.delete(name);
        console.log('🗑️ Cache deleted:', name);
      }
    });
  }
  
  // Додаємо timestamp до всіх CSS/JS запитів
  const links = document.querySelectorAll('link[rel="stylesheet"]');
  links.forEach(link => {
    if (link.href.indexOf('?v=') === -1) {
      link.href += '?v=' + Date.now();
    }
  });
  
  const scripts = document.querySelectorAll('script[src]');
  scripts.forEach(script => {
    if (script.src.indexOf('?v=') === -1) {
      const newScript = document.createElement('script');
      newScript.src = script.src + '?v=' + Date.now();
      script.parentNode.replaceChild(newScript, script);
    }
  });
  
  console.log('✅ Cache cleared! No more caching bullshit!');
})();
