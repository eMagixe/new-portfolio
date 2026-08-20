<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const { locale } = useI18n()

const items = computed(() => {
	return locale.value === 'ru'
		? (useAppConfig().ru.jobs as TimelineItem[])
		: (useAppConfig().en.jobs as TimelineItem[])
})
</script>

<template>
	<div id="jobs" class="bg-primary/30 not-sm:py-10 sm:py-20 min-h-screen bg-jobs">
		<UContainer>
			<h2 class="title not-sm:text-center">{{ $t('jobs.title') }}</h2>

			<UTimeline :items="items" class="mt-10">
				<template #title="{ item }">
					<h2 class="text-ui-text">{{ item.title }}</h2>
				</template>
				<template #description="{ item }">
					<h3 class="p-3 my-2 mb-5">{{ item.description }}</h3>
					<ul>
						<li v-for="skill in item.skills" :key="skill" class="list-disc ml-5 mb-1">
							{{ skill }}
						</li>
					</ul>
				</template>
			</UTimeline>

			<UAlert
				color="neutral"
				:title="$t('jobs.block_info.title')"
				:description="$t('jobs.block_info.description')"
				icon="i-lucide-info"
				class="mb-10 bg-ui-surface text-ui-text border-0"
			/>
		</UContainer>
	</div>
</template>
