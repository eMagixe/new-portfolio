export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	css: ['~/assets/css/main.css'],
	modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxt/image'],
	icon: {
		serverBundle: 'local'
	},
	image: {
		screens: {
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			'2xl': 1536
		}
	},
	devtools: { enabled: false },
	sourcemap: {
		server: false,
		client: false
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'ru'
			},
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico'
				},
				{
					rel: 'canonical',
					href: 'https://magixe-dev.ru/'
				}
			]
		}
	},
	ui: {
		colorMode: true,
		experimental: {
			componentDetection: true
		}
	},
	i18n: {
		defaultLocale: 'ru',
		locales: [
			{ code: 'ru', name: 'Русский', file: 'ru.json' },
			{ code: 'en', name: 'English', file: 'en.json' }
		]
	}
})
