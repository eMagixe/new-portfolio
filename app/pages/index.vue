<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui/components/Button.vue'

const links = ref([
	{
		label: 'Опыт работы',
		to: '/jobs',
		variant: 'subtle',
		icon: 'i-lucide-rocket',
		color: 'neutral'
	},
	{
		label: 'Краткая биография',
		to: '/about',
		color: 'neutral',
		variant: 'subtle',
		trailingIcon: 'i-lucide-arrow-right'
	}
])

definePageMeta({
	layout: 'home'
})

useSeoMeta({
	title: 'Frontend Developer - Евченко Максим',
	ogTitle: 'Frontend Developer - Евченко Максим',
	description:
		'Евченко Максим - Frontend-разработчик с многолетним опытом создания современных веб-приложений. Имеет навыки работы с Vue.js, Nuxt.js, TypeScript, Tailwind CSS и другими технологиями для разработки высококачественных пользовательских интерфейсов.',
	ogDescription:
		'Евченко Максим - Frontend-разработчик с многолетним опытом создания современных веб-приложений. Имеет навыки работы с Vue.js, Nuxt.js, TypeScript, Tailwind CSS и другими технологиями для разработки высококачественных пользовательских интерфейсов.',
	twitterCard: 'summary_large_image'
})
</script>

<template>
	<UPage>
		<div class="flex flex-col justify-center items-center mt-10">
			<UAvatar src="./images/photo.jpg" size="3xl" />
		</div>
		<UPageBody>
			<UPageSection
				:ui="{
					container: 'm-auto !p-5 text-center w-full'
				}"
				class="actions"
				title="Евченко Максим"
				description="Frontend-разработчик с многолетним опытом создания современных веб-приложений. Имею навыки работы с Vue.js, Nuxt.js, TypeScript, Tailwind CSS и другими технологиями для разработки высококачественных пользовательских интерфейсов."
				:links="links as ButtonProps[]"
			/>
			<div class="flex flex-col justify-center items-center">
				<p>Основные инструменты разработки</p>
				<UMarquee class="w-[50%] mx-auto mt-10">
					<UIcon name="i-simple-icons-vuedotjs" class="size-10 shrink-0" />
					<UIcon name="i-simple-icons-nuxt" class="size-10 shrink-0" />
					<UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
					<UIcon name="i-simple-icons-gitlab" class="size-10 shrink-0" />
					<UIcon name="i-simple-icons-tailwindcss" class="size-10 shrink-0" />
					<UIcon name="i-simple-icons-typescript" class="size-10 shrink-0" />
					<UIcon name="i-simple-icons-javascript" class="size-10 shrink-0" />
				</UMarquee>
			</div>
		</UPageBody>
	</UPage>
</template>