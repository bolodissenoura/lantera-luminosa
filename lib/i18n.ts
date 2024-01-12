import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ptTranslations from '../locale/pt.json';
import enTranslations from '../locale/en.json';

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      ...ptTranslations
    },
    en: {
      ...enTranslations,
    },
  },
  lng: 'pt',
})