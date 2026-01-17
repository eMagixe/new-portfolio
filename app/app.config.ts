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
		}
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
				],
			]
		}
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
