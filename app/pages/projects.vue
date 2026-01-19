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

const projects = computed(() => {
	return (locale.value === 'ru' ? useAppConfig().ru.projects : useAppConfig().en.projects) as Project[]
})

const currentProjectSlug = ref<string | undefined>('charmed-books')
const selectedProject = ref(projects.value[0])

const images = computed(() => {
	selectedProject.value = projects.value.find((i) => i.slug === currentProjectSlug.value)
	return (
		selectedProject.value?.images?.map(
			(i) => `/images/projects/${currentProjectSlug.value}/${i}.${selectedProject.value?.format}`
		) || []
	)
})

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
				v-for="(project, index) in projects" :key="index"
				:ui="{
					description: 'line-clamp-3'
				}"
				class="w-64 h-42 shrink-0 cursor-pointer"
				@click="currentProjectSlug = project.slug"
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

		<UCarousel v-slot="{ item }" class-names arrows :items="images" class="mx-auto w-full mb-5">
			<img :alt="currentProjectSlug" :src="item" class="rounded-lg max-h-[620px] mx-auto object-cover" />
		</UCarousel>

		<div class="actions flex flex-row justify-between items-center w-full mb-10">
			<UButton icon="i-lucide-arrow-left" :to="$t('projects.buttons.prev.to')" color="neutral" variant="outline">
				{{ $t('projects.buttons.prev.text') }}
			</UButton>
			<p>{{ $t('projects.title') }}</p>
			<UButton
				trailing-icon="i-lucide-arrow-right"
				:to="$t('projects.buttons.next.to')"
				color="neutral"
				variant="outline"
			>
				{{ $t('projects.buttons.next.text') }}
			</UButton>
		</div>
	</UContainer>
</template>
