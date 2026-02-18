import jobs from '~/payload/jobs'
import skills from '~/payload/skills'
import projects from '~/payload/projects'
import links from '~/payload/links'

export default defineAppConfig({
	global: {
		email: 'emax.mails@gmail.com',
		available: true
	},
	ru: {
		sidebar: {
			links: links.ru
		},
		jobs: jobs.ru,
		skills: skills.ru,
		projects: projects.ru
	},
	en: {
		sidebar: {
			links: links.en
		},
		jobs: jobs.en,
		skills: skills.en,
		projects: projects.en
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
