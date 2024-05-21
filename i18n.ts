import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import zh_HK from "./src/translations/zh-HK.json";

const resources = {

  zh_HK: {
    translation: zh_HK,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "zh_HK",
  fallbackLng: "zh_HK",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
});
