// src/i18n.js
import { createI18n } from 'vue-i18n';

// Çeviri metinleri
const messages = {
  en: {
    Home: 'Home',
    Work: 'Work',
    Blog: 'Blog',
    About: 'About',
    Contact: 'Contact',
  },
  tr: {
    Home: 'Ana sayfa',
    Work: 'Çalışmalarım',
    Blog: 'Bloglarım',
    About: 'Hakkımda',
    Contact: 'İletişim',
  },
};

const i18n = createI18n({
  locale: 'en', // Varsayılan dil
  fallbackLocale: 'en',
  messages,
});

export default i18n;
