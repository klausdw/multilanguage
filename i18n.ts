import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import portugueseTranslate from './public/locales/pt/common.json'
import germanTranslate from './public/locales/de/common.json'
// the translations
// (tip move them in a JSON file and import them)
const resources = {
	pt: {
		translation: portugueseTranslate,
	},
	de: {
		translation: germanTranslate,
	},
}

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: 'pt',

		keySeparator: false, // we do not use keys in form messages.welcome

		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	})

export default i18n
