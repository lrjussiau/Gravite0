import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import fr from './translations/fr.json';
import de from './translations/de.json';

// Translation resource map
const resources = {
  en: { translation: en },
  fr: { translation: fr },
  de: { translation: de },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources, // Load translations
    lng: 'fr', // Default language
    fallbackLng: 'fr', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
