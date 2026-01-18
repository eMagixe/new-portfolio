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
						label: 'Опыт работы',
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
		],
		skills: {
			first: [
				{
					name: 'Vue.js',
					description:
						'Прогрессивный JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов и одностраничных веб-приложений (SPA)',
					icon: 'i-simple-icons-vuedotjs',
					to: 'https://vuejs.org',
					target: '_blank'
				},
				{
					name: 'Nuxt.js',
					description:
						'Бесплатный фреймворк с открытым исходным кодом на базе Vue.js, который упрощает создание современных, производительных и SEO-дружественных веб-приложений',
					icon: 'i-simple-icons-nuxt',
					to: 'https://nuxt.com',
					target: '_blank'
				},
				{
					name: 'Tailwind CSS',
					description:
						'CSS-фреймворк, который позволяет быстро стилизовать веб-интерфейсы, применяя маленькие, готовые к использованию утилитарные классы прямо в HTML-разметке',
					icon: 'i-simple-icons-tailwindcss',
					to: 'https://tailwindcss.com',
					target: '_blank'
				},
				{
					name: 'JavaScript',
					description:
						'Универсальный язык программирования, который делает веб-страницы интерактивными, позволяя создавать динамический контент, анимации, игры и управлять элементами сайта',
					icon: 'i-simple-icons-javascript',
					to: 'https://learn.javascript.ru',
					target: '_blank'
				},
				{
					name: 'TypeScript',
					description:
						'Надмножество JavaScript, которое добавляет статическую типизацию и другие возможности для создания более надежных и масштабируемых веб-приложений',
					icon: 'i-simple-icons-typescript',
					to: 'https://www.typescriptlang.org',
					target: '_blank'
				},
				{
					name: 'GitHub',
					description: 'Веб-платформа и хостинг для IT-проектов, основанная на системе контроля версий Git',
					icon: 'i-simple-icons-github',
					to: 'https://www.github.com',
					target: '_blank'
				},
				{
					name: 'GitLab',
					description:
						'Веб-приложение для управления репозиториями Git с функциями CI/CD, мониторинга и управления проектами',
					icon: 'i-simple-icons-gitlab',
					to: 'https://www.gitlab.com',
					target: '_blank'
				}
			],
			second: [
				{
					name: 'VueUse',
					description:
						'Богатая коллекция готовых к использованию вспомогательных функций (composable-функций, или useXyz), созданных для Vue.js Composition API',
					icon: 'i-simple-icons-vueuse',
					to: 'https://vueuse.org',
					target: '_blank'
				},
				{
					name: 'Nuxt UI',
					description:
						'Высокопроизводительная библиотека компонентов для фреймворка Nuxt.js, построенная на базе Vue 3 и Tailwind CSS',
					icon: 'i-simple-icons-nuxt',
					to: 'https://ui.nuxt.com',
					target: '_blank'
				},
				{
					name: 'Chart.js',
					description:
						'Бесплатная, с открытым исходным кодом библиотека JavaScript для создания интерактивных и адаптивных диаграмм и графиков в веб-приложениях',
					icon: 'i-simple-icons-chartdotjs',
					to: 'https://www.chartjs.org',
					target: '_blank'
				},
				{
					name: 'Three.js',
					description:
						'Бесплатная JavaScript-библиотека с открытым исходным кодом, которая упрощает создание и отображение анимированной 3D-графики прямо в браузере',
					icon: 'i-simple-icons-threedotjs',
					to: 'https://threejs.org',
					target: '_blank'
				},
				{
					name: 'Node.js',
					description: 'Кроссплатформенная среда выполнения JavaScript, основанная на движке V8 от Chrome',
					icon: 'i-simple-icons-nodedotjs',
					to: 'https://nodejs.org',
					target: '_blank'
				},
				{
					name: 'Strapi',
					description:
						'Бесплатная, open-source headless CMS, написанная на Node.js, которая позволяет разработчикам создавать и управлять контентом',
					icon: 'i-simple-icons-strapi',
					to: 'https://strapi.io',
					target: '_blank'
				},
				{
					name: 'PHP',
					description:
						'Скриптовый язык программирования с открытым исходным кодом, который в основном используется для создания динамических веб-страниц и веб-приложений',
					icon: 'i-simple-icons-php',
					to: 'https://www.php.net',
					target: '_blank'
				}
			]
		},
		projects: [
			{
				name: 'Sharmed Books',
				image: '',
				quote: 'Интерактивные книжки для детей',
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
				slug: 'charmed-books',
				format: 'png',
				images: [1, 2, 3]
			},
			{
				name: 'DCLI',
				image: '',
				quote: 'Центр лабораторных исследований',
				format: 'jpg',
				slug: 'dcli',
				images: [1, 2, 3, 4],
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
			},
			{
				name: 'Kit Tracker',
				image: '',
				quote: 'Отслеживание поставок анализа крови и др',
				format: 'jpg',
				slug: 'kit',
				images: [1, 2, 3],
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
			},
			{
				name: 'Raimbek',
				image: '',
				quote: 'Первый казахский молочный завод',
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
				slug: 'raimbek',
				format: 'jpg',
				images: [1, 2]
			},
			{
				name: 'Portal',
				image: '',
				quote: 'Интернет магазин книг по изотерике',
				slug: 'portal',
				format: 'png',
				images: [1, 2],
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
			},
			{
				name: 'IdoArt',
				image: '',
				quote: 'Портал по продаже курсов и обучающих материалов',
				slug: 'idoArt',
				format: 'png',
				images: [1, 2, 3],
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
			},
			{
				name: 'Русхимальянс',
				image: '',
				quote: 'Газоперерабатывающий завод в России',
				slug: 'rca',
				format: 'png',
				images: [1, 2],
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
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
						label: 'Work Experience',
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
				title: 'MAI "ART"',
				description: 'Web Developer',
				icon: 'i-lucide-rocket',
				skills: [
					'JavaScript, Vue.js (Vuex, Vue-router), Vuetify, React — user interface development',
					'PHP (Laravel, October CMS) — business logic programming',
					'Working with MySQL, PostgreSQL, MongoDB',
					"Administration of the company's internal network and server"
				]
			}
		],
		skills: {
			first: [
				{
					name: 'Vue.js',
					description:
						'Progressive, open-source JavaScript framework for building user interfaces and single-page applications (SPA).',
					icon: 'i-simple-icons-vuedotjs',
					to: 'https://vuejs.org',
					target: '_blank'
				},
				{
					name: 'Nuxt.js',
					description:
						'Open-source framework based on Vue.js that simplifies creating modern, high-performance, and SEO-friendly web applications.',
					icon: 'i-simple-icons-nuxt',
					to: 'https://nuxt.com',
					target: '_blank'
				},
				{
					name: 'Tailwind CSS',
					description:
						'A utility-first CSS framework that enables rapid interface styling using small, reusable classes directly in HTML markup.',
					icon: 'i-simple-icons-tailwindcss',
					to: 'https://tailwindcss.com',
					target: '_blank'
				},
				{
					name: 'JavaScript',
					description:
						'A versatile programming language that makes web pages interactive, allowing creation of dynamic content, animations, games, and DOM manipulation.',
					icon: 'i-simple-icons-javascript',
					to: 'https://learn.javascript.ru',
					target: '_blank'
				},
				{
					name: 'TypeScript',
					description:
						'A superset of JavaScript that adds static typing and other features for building more reliable and scalable web applications.',
					icon: 'i-simple-icons-typescript',
					to: 'https://www.typescriptlang.org',
					target: '_blank'
				},
				{
					name: 'GitHub',
					description:
						'Web platform and hosting for software projects based on the Git version control system.',
					icon: 'i-simple-icons-github',
					to: 'https://www.github.com',
					target: '_blank'
				},
				{
					name: 'GitLab',
					description:
						'A web application for managing Git repositories with CI/CD, monitoring, and project management features.',
					icon: 'i-simple-icons-gitlab',
					to: 'https://www.gitlab.com',
					target: '_blank'
				}
			],
			second: [
				{
					name: 'VueUse',
					description:
						'A rich collection of ready-to-use utility functions (composables, e.g. useXyz) created for the Vue.js Composition API.',
					icon: 'i-simple-icons-vueuse',
					to: 'https://vueuse.org',
					target: '_blank'
				},
				{
					name: 'Nuxt UI',
					description:
						'High-performance component library for the Nuxt.js framework, built on Vue 3 and Tailwind CSS.',
					icon: 'i-simple-icons-nuxt',
					to: 'https://ui.nuxt.com',
					target: '_blank'
				},
				{
					name: 'Chart.js',
					description:
						'Free, open-source JavaScript library for creating interactive and responsive charts and graphs in web applications.',
					icon: 'i-simple-icons-chartdotjs',
					to: 'https://www.chartjs.org',
					target: '_blank'
				},
				{
					name: 'Three.js',
					description:
						'Open-source JavaScript library that simplifies creating and rendering animated 3D graphics directly in the browser.',
					icon: 'i-simple-icons-threedotjs',
					to: 'https://threejs.org',
					target: '_blank'
				},
				{
					name: 'Node.js',
					description: "Cross-platform JavaScript runtime built on Chrome's V8 engine.",
					icon: 'i-simple-icons-nodedotjs',
					to: 'https://nodejs.org',
					target: '_blank'
				},
				{
					name: 'Strapi',
					description:
						'Free, open-source headless CMS written in Node.js that enables developers to create and manage content.',
					icon: 'i-simple-icons-strapi',
					to: 'https://strapi.io',
					target: '_blank'
				},
				{
					name: 'PHP',
					description:
						'Open-source scripting language mainly used for building dynamic web pages and web applications.',
					icon: 'i-simple-icons-php',
					to: 'https://www.php.net',
					target: '_blank'
				}
			]
		},
		projects: [
			{
				name: 'Sharmed Books',
				image: '',
				quote: 'Interactive books for children',
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
				slug: 'charmed-books',
				format: 'png',
				images: [1, 2, 3]
			},
			{
				name: 'DCLI',
				image: '',
				quote: 'Laboratory Research Center',
				format: 'jpg',
				slug: 'dcli',
				images: [1, 2, 3, 4],
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
			},
			{
				name: 'Kit Tracker',
				image: '',
				quote: 'Tracking deliveries of blood tests and more',
				format: 'jpg',
				slug: 'kit',
				images: [1, 2, 3],
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
			},
			{
				name: 'Raimbek',
				image: '',
				quote: 'The first Kazakh dairy plant',
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
				slug: 'raimbek',
				format: 'jpg',
				images: [1, 2]
			},
			{
				name: 'Portal',
				image: '',
				quote: 'Online store of esoteric books',
				slug: 'portal',
				format: 'png',
				images: [1, 2],
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
			},
			{
				name: 'IdoArt',
				image: '',
				quote: 'Portal for selling courses and educational materials',
				slug: 'idoArt',
				format: 'png',
				images: [1, 2, 3],
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
			},
			{
				name: 'Ruskhimalyans',
				image: '',
				quote: 'Russian gas processing plant',
				slug: 'rca',
				format: 'png',
				images: [1, 2],
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
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
