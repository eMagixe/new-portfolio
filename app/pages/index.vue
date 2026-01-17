<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui/components/Button.vue'

const { t } = useI18n()

const links = ref([
	{
		label: t('buttons.projects.text'),
		to: t('buttons.projects.to'),
		variant: 'subtle',
		icon: 'i-lucide-rocket',
		color: 'neutral'
	},
	{
		label: t('buttons.about.text'),
		to: t('buttons.about.to'),
		color: 'neutral',
		variant: 'subtle',
		trailingIcon: 'i-lucide-arrow-right'
	}
])

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
			<UAvatar src="/images/photo.jpg" size="3xl" />
		</div>
		<UPageBody>
			<UPageSection
				:ui="{
					container: 'm-auto !p-5 text-center w-full'
				}"
				class="actions"
				:title="$t('name')"
				:description="$t('description')"
				:links="links as ButtonProps[]"
			/>
			<div class="flex flex-col justify-center items-center">
				<p>{{ $t('skills') }}</p>
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