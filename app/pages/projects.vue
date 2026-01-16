<script setup lang="ts">
const projects: {
	name: string
	image: string
	quote: string
	stack: string[]
	slug?: string
	format?: string
	images?: number[]
}[] = [
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
		images: [1, 2, 3],
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
		name: 'ЛКKK',
		image: '',
		quote: 'Автоматизация процессов сбора анализов',
		stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
	},
	{
		name: 'Raimbek',
		image: '',
		quote: 'Казахский спиртоводочный и соковый завод',
		stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
	},
	{
		name: 'Portal',
		image: '',
		quote: 'Интернет магазин книг по изотерике',
		stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
	},
	{
		name: 'IdoArt',
		image: '',
		quote: 'Портал по продаже курсов и обучающих материалов',
		stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
	},
	{
		name: 'SDEK парсинг отчетов',
		image: '',
		quote: 'Парсинг и обработка отчетов СДЭК',
		stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
	}
]

const currentProjectSlug = ref<string | undefined>('charmed-books')
const selectedProject = ref(projects[0])

const images = computed(() => {
	selectedProject.value = projects.find((i) => i.slug === currentProjectSlug.value)
	return (
		selectedProject.value?.images?.map(
			(i) => `/images/projects/${currentProjectSlug.value}/${i}.${selectedProject.value?.format}`
		) || []
	)
})
</script>

<template>
	<UContainer>
		<UPageHeader title="Проекты" />

		<UMarquee
			pause-on-hover
			reverse
			:overlay="false"
			:ui="{ root: '[--gap:--spacing(4)] my-5', content: 'w-auto py-1' }"
		>
			<UPageCard
				v-for="(project, index) in projects"
				:key="index"
				:description="project.quote"
				:ui="{
					description: 'line-clamp-3',
				}"
				class="w-64 shrink-0 cursor-pointer"
				@click="currentProjectSlug = project.slug"
			>
				<template #header>
					<h3 class="text-[14px] font-semibold">{{ project.name }}</h3>
				</template>
				<template #footer>
					<p class="text-[12px]">{{ project.stack.join(', ') }}</p>
				</template>
			</UPageCard>
		</UMarquee>

		<div class="w-full bg-neutral-100 px-4 py-2 my-5">
			{{ selectedProject?.name }} - {{ selectedProject?.quote }}
		</div>

		<UCarousel v-slot="{ item }" class-names arrows :items="images" class="mx-auto w-full mb-5">
			<img :alt="currentProjectSlug" :src="item" class="rounded-lg w-full object-cover" />
		</UCarousel>
		
		<div class="actions flex flex-row justify-between items-center w-full mb-10">
			<UButton icon="i-lucide-arrow-left" to="/skills" color="neutral" variant="outline">Навыки</UButton>
			<p>Проекты</p>
			<UButton trailing-icon="i-lucide-arrow-right" to="/about" color="neutral" variant="outline"
				>Биография</UButton
			>
		</div>
	</UContainer>
</template>
