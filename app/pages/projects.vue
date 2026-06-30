<script setup lang="ts">
const { locale, t } = useI18n()

type Project = {
	name: string
	image: string
	quote: string
	description: string
	stack: string[]
	slug?: string
	format?: string
	images?: number[]
}

const currentProjectSlug = ref<string>('charmed-books')
const selectedProject = ref<Project | undefined>()

const projects = computed(() => {
	return (locale.value === 'ru' ? useAppConfig().ru.projects : useAppConfig().en.projects) as Project[]
})

selectedProject.value = projects.value[0]

const makeImageUrl = (project: Project, numberImage: number) => {
	return `/images/projects/${project.slug}/${numberImage}.${project?.format}`
}

const findProjectBySlug = (items: Ref, slug: Ref<string>) => {
	return items.value?.find((i: Project) => i.slug === slug.value)
}

const getImagesProject = (project: Ref) => {
	return project.value?.images?.map((numberImage: number) => {
		return makeImageUrl(project.value, numberImage)
	})
}

const getImages = (project: Ref, allProjects: Ref, slug: Ref<string>) => {
	if (allProjects.value.length > 0) {
		project.value = findProjectBySlug(allProjects, slug)
		return getImagesProject(project)
	} else {
		return []
	}
}

const images = computed(() => getImages(selectedProject, projects, currentProjectSlug))

useSeoMeta({
	title: t('projects.seo.title'),
	ogTitle: t('projects.seo.title'),
	description: t('projects.seo.description'),
	ogDescription: t('projects.seo.description'),
	twitterCard: 'summary_large_image'
})
</script>

<template>
	<UContainer>
		<UPageHeader :title="$t('projects.title')" />

		<UMarquee
			pause-on-hover
			reverse
			:overlay="false"
			:ui="{ root: '[--gap:--spacing(4)] my-5', content: 'w-auto py-1' }"
		>
			<UPageCard
				v-for="(project, index) in projects"
				:key="index"
				:ui="{
					description: 'line-clamp-3'
				}"
				class="w-64 h-42 shrink-0 cursor-pointer"
				@click="currentProjectSlug = project.slug ? project.slug : 'charmed-books'"
			>
				<template #header>
					<h3 class="font-semibold">{{ project.name }}</h3>
				</template>

				<template #body>
					<UTooltip :text="project.description">
						<p class="text-[14px]">{{ project.quote }}</p>
					</UTooltip>
				</template>

				<template #footer>
					<p class="text-[12px]">{{ project.stack.join(', ') }}</p>
				</template>
			</UPageCard>
		</UMarquee>

		<div class="w-full bg-neutral-100 px-4 py-2 my-5">
			{{ selectedProject?.name }} - {{ selectedProject?.description }}
		</div>
		<UCarousel v-slot="{ item }" class-names :arrows="images && images.length > 1" :items="images" class="mx-auto w-full mb-5">
			<img
				:alt="currentProjectSlug + useId()"
				:src="item as string"
				loading="lazy"
				class="mx-auto w-full object-cover"
			/>
		</UCarousel>
		<ActionsNavigation page="projects" class="mt-10" />
	</UContainer>
</template>
