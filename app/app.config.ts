export default defineAppConfig({
	global: {
		meetingLink: 'https://cal.com/',
		email: 'ui-pro@nuxt.com',
		available: true
	},
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
					to: '#',
					icon: 'i-lucide-folder-open'
				}
			],
			[
				{
					label: 'Telegram',
					icon: 'i-simple-icons-telegram',
					to: '/'
				},
				{
					label: 'Email',
					icon: 'i-lucide-mail',
					to: '/'
				}
			]
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
				container: 'flex flex-col lg:grid py-5 sm:p-5 lg:p-5 gap-5 sm:gap-5'
			}
		}
	}
})
