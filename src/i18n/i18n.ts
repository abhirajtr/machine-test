import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import config from "@src/config";
import en from "@src/i18n/locales/en/en.json";
import de from "@src/i18n/locales/de/de.json";
import { SESSION_STORAGE } from "@src/constants/storage";
import EnvConfig from "@src/config";

export const resources = {
  en: {
    translation: {
      ...en
    }
  },
  de: {
    translation: {
      ...de
    }
  }
} as const;

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: config.I18N_DEFAULT_LANGUAGE,
    resources,
    debug: EnvConfig.IS_DEV_MODE,
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: SESSION_STORAGE.I18N_LANGUAGE,
      caches: ["localStorage", "cookie"]
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
