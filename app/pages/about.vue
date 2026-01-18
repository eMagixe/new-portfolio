<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
	title: t('about.seo.title'),
	ogTitle: t('about.seo.title'),
	description: t('about.seo.description'),
	ogDescription: t('about.seo.description'),
	twitterCard: 'summary_large_image'
})
</script>

<template>
	<UContainer>
		<UPageHeader :title="$t('about.title')" />
		<h2 class="my-5">{{ $t('about.content.start_block.title') }}</h2>
		<p>
			{{ $t('about.content.start_block.text') }}
		</p>
		<h2 class="my-5">{{ $t('about.content.vue_block.title') }}</h2>
		<p>
			{{ $t('about.content.vue_block.text') }}
			<NuxtLink class="underline" :to="$t('about.content.vue_block.link.to')">
				{{ $t('about.content.vue_block.link.text') }}
			</NuxtLink>
		</p>
		<h2 class="my-5">{{ $t('about.content.nuxt_block.title') }}</h2>
		<p>
			{{ $t('about.content.nuxt_block.text') }}
		</p>

		<h2 class="my-5">{{ $t('about.content.future_block.title') }}</h2>
		<p>
			{{ $t('about.content.future_block.text') }}
			<NuxtLink class="underline" :to="$t('about.content.future_block.link.to')">
				{{ $t('about.content.future_block.link.text') }}
			</NuxtLink>
		</p>

		<div class="actions flex flex-row justify-between items-center w-full my-10">
			<UButton
				icon="i-lucide-arrow-left"
				:to="$t('about.buttons.prev.to')"
				color="neutral"
				variant="outline"
			>
				{{ $t('about.buttons.prev.text') }}
			</UButton>
			<p>{{ $t('about.title') }}</p>
			<UButton
				trailing-icon="i-lucide-arrow-right"
				:to="$t('about.buttons.next.to')"
				color="neutral"
				variant="outline"
			>
				{{ $t('about.buttons.next.text') }}
			</UButton
			>
		</div>
	</UContainer>
</template>

<style scoped></style>
