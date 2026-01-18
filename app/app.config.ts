export default defineAppConfig({
	global: {
		meetingLink: 'https://cal.com/',
		email: 'ui-pro@nuxt.com',
		available: true
	},
	ru: {
		sidebar: {
			links: [
				[
					{
						label: 'Главная',
						to: '/',
						icon: 'i-lucide-home'
					},
					{
						label: 'Карьера',
						to: '/jobs',
						icon: 'i-lucide-rocket'
					},
					{
						label: 'Навыки',
						to: '/skills',
						icon: 'i-lucide-code'
					},
					{
						label: 'Проекты',
						to: '/projects',
						icon: 'i-lucide-folder-open'
					},
					{
						label: 'Биография',
						to: '/about',
						icon: 'i-lucide-user'
					}
				]
			]
		},
		jobs: [
			{
				date: 'Ноябрь, 2023',
				title: 'ООО Беллфорд',
				description: 'Middle+ Frontend Developer',
				skills: [
					'Разработка SPA/SSR-платформ на Nuxt 3/4',
					'Работа с Python/Django API',
					'Работа с Nuxt.js архитектурой, FSD и микросервисной архитектурой',
					'Разработка и поддержка высоконагруженных CRM систем',
					'Работа с VueUse, Nuxt UI, PrimeVue, TailwindCSS и другими популярными библиотеками',
					'TypeScript (Generics, Utility Types, типизация API, типизация компонентов и пропсов)',
					'Vitest (модульное тестирование компонентов)',
					'Lighthouse-оптимизация, оптимизация и кеширование запросов'
				],
				icon: 'i-lucide-check-circle'
			},
			{
				date: 'Сентябрь, 2022',
				title: 'Студия AWA.agency',
				icon: 'i-lucide-check-circle',
				description: 'Middle Frontend Developer',
				skills: [
					'Разработка интерфейсов на Nuxt3 / Vue3',
					'Визуализация данных и форм с PrimeVue и Tailwind CSS',
					'Разработка и поддержка клиентской части веб-приложения',
					'Написание тестов и исправление выявленных багов'
				]
			},
			{
				date: 'Февраль, 2020',
				title: 'ООО "Авакс"',
				description: 'Junior Fullstack Developer',
				icon: 'i-lucide-check-circle',
				skills: [
					'Микросервисы на Node.js + Vue, интеграция с API Laravel',
					'PHP (Laravel, October CMS). - программирование бизнес логики',
					'Работа с библиотекамии парсинга Google-таблиц и PDF документов',
					'Работа с API CDEK и Яндекс Карты',
					'Боты для Telegram, VK'
				]
			},
			{
				date: 'Май, 2019',
				title: 'МАУ "АРТ"',
				description: 'Web-программист',
				icon: 'i-lucide-rocket',
				skills: [
					'JavaScript, Vue.js, (Vuex, Vue-router), Vuetify, React - программирование пользовательского интерфейса',
					'PHP (Laravel, October CMS). - программирование бизнес логики',
					'Работа с MySQL, PostgreSQL, MongoDB',
					'Администрирование внутренней сети и сервера компании'
				]
			}
		]
	},
	en: {
		sidebar: {
			links: [
				[
					{
						label: 'Index',
						to: '/en/',
						icon: 'i-lucide-home'
					},
					{
						label: 'Jobs',
						to: '/en/jobs',
						icon: 'i-lucide-rocket'
					},
					{
						label: 'Skills',
						to: '/en/skills',
						icon: 'i-lucide-code'
					},
					{
						label: 'Projects',
						to: '/en/projects',
						icon: 'i-lucide-folder-open'
					},
					{
						label: 'About Me',
						to: '/en/about',
						icon: 'i-lucide-user'
					}
				]
			]
		},
		jobs: [
			{
				date: 'November, 2023',
				title: 'Bellford LLC',
				description: 'Middle+ Frontend Developer',
				skills: [
					'Develop SPA/SSR platforms with Nuxt 3/4',
					'Working with Python/Django APIs',
					'Working with Nuxt.js architecture, FSD and microservice architecture',
					'Development and maintenance of high-load CRM systems',
					'Working with VueUse, Nuxt UI, PrimeVue, TailwindCSS and other popular libraries',
					'TypeScript (Generics, Utility Types, API typing, component and props typing)',
					'Vitest (unit testing of components)',
					'Lighthouse optimization, request optimization and caching'
				],
				icon: 'i-lucide-check-circle'
			},
			{
				date: 'September, 2022',
				title: 'AWA.agency Studio',
				icon: 'i-lucide-check-circle',
				description: 'Middle Frontend Developer',
				skills: [
					'Building interfaces with Nuxt3 / Vue3',
					'Data and form visualization using PrimeVue and Tailwind CSS',
					'Development and maintenance of the client-side of web applications',
					'Writing tests and fixing discovered bugs'
				]
			},
			{
				date: 'February, 2020',
				title: 'Avaks LLC',
				description: 'Junior Fullstack Developer',
				icon: 'i-lucide-check-circle',
				skills: [
					'Microservices on Node.js + Vue, integration with Laravel APIs',
					'PHP (Laravel, October CMS) — business logic programming',
					'Working with libraries for parsing Google Sheets and PDF documents',
					'Working with CDEK API and Yandex.Maps',
					'Bots for Telegram, VK'
				]
			},
			{
				date: 'May, 2019',
				title: 'MAU "ART"',
				description: 'Web Developer',
				icon: 'i-lucide-rocket',
				skills: [
					'JavaScript, Vue.js (Vuex, Vue-router), Vuetify, React — user interface development',
					'PHP (Laravel, October CMS) — business logic programming',
					'Working with MySQL, PostgreSQL, MongoDB',
					'Administration of the company\'s internal network and server'
				]
			}
		]
	},
	footer: {
		credits: `Magixe © ${new Date().getFullYear()}`
	},
	ui: {
		avatar: {
			variants: {
				size: {
					'3xl': {
						root: 'lg:size-80 md:size-60 sm:size-40 size-30'
					}
				}
			}
		},
		pageSection: {
			slots: {
				container: 'flex flex-col lg:grid py-5 sm:projects-5 lg:projects-5 gap-5 sm:gap-5'
			}
		}
	}
})
