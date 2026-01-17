// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	css: ['~/assets/css/main.css'],
	modules: ['@nuxt/ui', '@nuxtjs/i18n'],
	devtools: { enabled: false },
	ui: {
		colorMode: false
	},
	i18n: {
		defaultLocale: 'ru',
		locales: [
			{ code: 'ru', name: 'Русский', file: 'ru.json' },
			{ code: 'en', name: 'English', file: 'en.json' }
		]
	},
})
