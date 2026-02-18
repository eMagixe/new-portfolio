import jobs from '~/payload/jobs'
import skills from '~/payload/skills'
import projects from '~/payload/projects'
import links from '~/payload/links'

export default defineAppConfig({
	global: {
		email: 'emax.mails@gmail.com',
		telegram: 'https://t.me/max_magixe',
		github: 'https://github.com/emagixe',
		resume: {
			ru: 'https://hh.ru/resume_converter/%D0%95%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE%20%D0%9C%D0%B0%D0%BA%D1%81%D0%B8%D0%BC%20%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D0%B8%D1%87.pdf?hash=55584c38ff0768026f0039ed1f70326b666538&type=pdf&hhtmFrom=&hhtmSource=resume',
			en: 'https://hh.ru/resume_converter/%D0%95%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE%20%D0%9C%D0%B0%D0%BA%D1%81%D0%B8%D0%BC%20%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D0%B8%D1%87.pdf?hash=55584c38ff0768026f0039ed1f70326b666538&type=pdf&hhtmFrom=&hhtmSource=resume'
		},
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
