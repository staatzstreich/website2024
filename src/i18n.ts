import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      WelcomeTitle: "Hi, I'm Michael Staatz",
      Job: "web developer",
      About:
        "I spend my time with my family, like web development using React, TypeScript, PHP and love to explore other technologies.",
      ButtonText: "Get in touch",
      ImageDescription: "Portrait of Michael Staatz",
      "404": "Nothing found here: 404!",
    },
  },
  de: {
    translation: {
      WelcomeTitle: "Hi, ich bin Michael Staatz",
      Job: "webentwickler",
      About:
        "Ich verbringe meine Zeit mit meiner Familie, mag Web-Entwicklung mit React, TypeScript und PHP und liebe es, andere Technologien zu erforschen.",
      ButtonText: "E-Mail an mich",
      ImageDescription: "Portrait von Michael Staatz",
      "404": "Nicht's gefunden hier: 404!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
