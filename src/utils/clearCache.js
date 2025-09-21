// Автоматичне очищення кешу браузера БЕЗ reload loop
export const clearCache = () => {
  // Очищення Service Worker кешу
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for(let registration of registrations) {
        registration.unregister();
      }
    });
  }

  // Очищення всіх кешів
  if ('caches' in window) {
    caches.keys().then(function(names) {
      names.forEach(function(name) {
        caches.delete(name);
      });
    });
  }

  // Очищення localStorage і sessionStorage
  try {
    localStorage.clear();
    sessionStorage.clear();
  } catch (e) {
    console.log('Storage clear failed:', e);
  }
};

// Очищення тільки раз при завантаженні
if (process.env.NODE_ENV === 'development' && !sessionStorage.getItem('cache_cleared')) {
  clearCache();
  sessionStorage.setItem('cache_cleared', 'true');
}
