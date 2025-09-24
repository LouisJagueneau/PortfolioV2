import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 👇 importe les traductions
import fr from "./languages/fr.json";
import en from "./languages/en.json";

i18n
  .use(initReactI18next) // 👈 lie à React
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    fallbackLng: "en", // si la langue du navigateur n’est pas supportée
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage"], 
      // priorité : ?lng=fr > localStorage > langue du navigateur
      caches: ["localStorage"], // stocke le choix pour la prochaine visite
    },
  });

export default i18n;
