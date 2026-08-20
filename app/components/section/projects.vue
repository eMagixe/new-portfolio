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

const fullscreen = ref(false)
const currentImageUrl = ref('')

const selectImage = (item: string) => {
	currentImageUrl.value = item
	fullscreen.value = true
}
</script>

<template>
	<div id="projects" class="not-sm:py-10 sm:py-20 min-h-screen bg-welcome">
		<UContainer class="bg-ui-background">
			<h2 class="title not-sm:text-center">{{ $t('projects.title') }}</h2>

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
					class="w-64 h-42 shrink-0 cursor-pointer bg-ui-surface border-ui-border hover:bg-border focus:ring-2 focus:ring-offset-2 focus:ring-primary"
					@click="currentProjectSlug = project.slug ? project.slug : 'charmed-books'"
				>
					<template #header>
						<h3 class="font-semibold text-ui-text">{{ project.name }}</h3>
					</template>

					<template #body>
						<UTooltip :text="project.description">
							<p class="text-[14px] text-ui-text">{{ project.quote }}</p>
						</UTooltip>
					</template>

					<template #footer>
						<p class="text-[12px] text-ui-muted">{{ project.stack.join(', ') }}</p>
					</template>
				</UPageCard>
			</UMarquee>

			<div class="w-full bg-ui-surface px-4 py-2 my-5">
				{{ selectedProject?.name }} - {{ selectedProject?.description }}
			</div>
			<UCarousel
				v-slot="{ item }"
				class-names
				:arrows="images && images.length > 1"
				:items="images"
				class="mx-auto w-full mb-15 rounded-xl"
			>
				<img
					:alt="currentProjectSlug + useId()"
					:src="item as string"
					@click="selectImage(item as string)"
					loading="lazy"
					class="mx-auto w-full object-cover border border-primary"
				/>
			</UCarousel>

			<UModal
				:open="fullscreen"
				@update:open="fullscreen = false"
				fullscreen
				:title="selectedProject?.name + ' - ' + selectedProject?.description"
			>
				<template #body>
					<img
						:alt="currentProjectSlug + useId()"
						:src="currentImageUrl"
						loading="lazy"
						class="mx-auto w-full object-cover"
					/>
				</template>
			</UModal>
		</UContainer>
	</div>
</template>
