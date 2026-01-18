<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const { locale, t } = useI18n()

const items = computed(() => {
	return locale.value === 'ru'
		? (useAppConfig().ru.jobs as TimelineItem[])
		: (useAppConfig().en.jobs as TimelineItem[])
})

useSeoMeta({
	title: t('jobs.seo.title'),
	ogTitle: t('jobs.seo.title'),
	description: t('jobs.seo.description'),
	ogDescription: t('jobs.seo.description'),
	twitterCard: 'summary_large_image'
})
</script>

<template>
	<UContainer>
		<UPageHeader :title="$t('jobs.title')" />
		<UTimeline :items="items" class="mt-5">
			<template #title="{ item }">
				<h2>{{ item.title }}</h2>
			</template>
			<template #description="{ item }">
				<h3 class="p-3 my-2 bg-neutral-100 shadow border-t-gray-500 mb-5">{{ item.description }}</h3>
				<ul>
					<li v-for="skill in item.skills" :key="skill" class="list-disc ml-5 mb-1">
						{{ skill }}
					</li>
				</ul>
				<USeparator class="mt-5" />
			</template>
		</UTimeline>

		<UAlert
			color="neutral"
			variant="subtle"
			:title="$t('jobs.block_info.title')"
			:description="$t('jobs.block_info.description')"
			icon="i-lucide-info"
			class="mb-10"
		/>

		<div class="actions flex flex-row justify-between items-center w-full mb-10">
			<UButton
				icon="i-lucide-arrow-left"
				:to="$t('jobs.buttons.prev.to')"
				color="neutral"
				variant="outline"
			>
				{{ $t('jobs.buttons.prev.text') }}
			</UButton>
			<p>{{ $t('jobs.title') }}</p>
			<UButton
				trailing-icon="i-lucide-arrow-right"
				:to="$t('jobs.buttons.next.to')"
				color="neutral"
				variant="outline"
			>
				{{ $t('jobs.buttons.next.text') }}
			</UButton>
		</div>
	</UContainer>
</template>
