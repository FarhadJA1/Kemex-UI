import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translateAz from './translate-az.json'
import translateEn from './translate-en.json'
import translateRu from './translate-ru.json'

const resources = {
  az: { ...translateAz },
  en: { ...translateEn },
  ru: { ...translateRu },
}

void i18n
  .use(initReactI18next)
  .init({
    resources: resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    keySeparator: '.',
  })

export default i18n
