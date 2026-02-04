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

		<ActionsNavigation page="about" class="mt-10" />
	</UContainer>
</template>

<style scoped></style>
