// Grainless — JavaScript logic placeholder
document.querySelector('.btn-primary')?.addEventListener('click', () => {
  alert('Перехід до каталогу скоро буде реалізовано 😉');
});

 function setLanguage(lang) {
      document.querySelectorAll('[data-en]').forEach(el => {
        const translation = el.getAttribute(`data-${lang}`);
        if (translation) {
          el.textContent = translation;
        }
      });
      localStorage.setItem('lang', lang);
      document.documentElement.lang = lang;
    }

    document.addEventListener('DOMContentLoaded', () => {
      const savedLang = localStorage.getItem('lang') || 'uk';
      setLanguage(savedLang);
    });
