<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui/components/Button.vue'

const { t } = useI18n()

const links = ref([
	{
		label: t('index.buttons.projects.text'),
		to: t('index.buttons.projects.to'),
		variant: 'subtle',
		icon: 'i-lucide-folder-open',
		color: 'neutral'
	},
	{
		label: t('index.buttons.about.text'),
		to: t('index.buttons.about.to'),
		color: 'neutral',
		variant: 'subtle',
		trailingIcon: 'i-lucide-arrow-right'
	}
])

useSeoMeta({
	title: t('index.seo.title'),
	description: t('index.seo.description'),
	ogTitle: t('index.seo.title'),
	ogDescription: t('index.seo.description'),
	ogImage: 'summary_large_image',
	twitterCard: 'summary_large_image'
})
</script>

<template>
	<UPage>
		<div class="flex flex-col justify-center items-center mt-10 photo">
			<NuxtImg
				alt="photo"
				src="/images/photo.jpg"
				preload
				:placeholder="['auto']"
				loading="lazy"
				class="mx-auto rounded-[50%] object-cover"
			/>
		</div>
		<UPageBody>
			<UPageSection
				:ui="{
					container: 'm-auto !p-5 text-center w-full'
				}"
				class="actions"
				:title="$t('index.name')"
				:description="$t('index.description')"
				:links="links as ButtonProps[]"
			/>
			<div class="flex flex-col justify-center items-center">
				<p>{{ $t('index.skills') }}</p>
				<UMarquee pause-on-hover class="w-[50%] mx-auto mt-10">
					<UTooltip text="Vue.js">
						<UIcon name="i-simple-icons-vuedotjs" class="size-10 shrink-0" />
					</UTooltip>
					<UTooltip text="Nuxt.js">
						<UIcon name="i-simple-icons-nuxt" class="size-10 shrink-0" />
					</UTooltip>
					<UTooltip text="github.com">
						<UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
					</UTooltip>
					<UTooltip text="gitlab.com">
						<UIcon name="i-simple-icons-gitlab" class="size-10 shrink-0" />
					</UTooltip>
					<UTooltip text="Tailwind CSS">
						<UIcon name="i-simple-icons-tailwindcss" class="size-10 shrink-0" />
					</UTooltip>
					<UTooltip text="TypeScript">
						<UIcon name="i-simple-icons-typescript" class="size-10 shrink-0" />
					</UTooltip>
					<UTooltip text="JavaScript">
						<UIcon name="i-simple-icons-javascript" class="size-10 shrink-0" />
					</UTooltip>
				</UMarquee>
			</div>
		</UPageBody>
	</UPage>
</template>