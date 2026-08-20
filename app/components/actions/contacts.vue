<script setup lang="ts">
import appConfig from '~/app.config'

const { locale } = useI18n()
</script>

<template>
	<UButton
		variant="ghost"
		icon="i-simple-icons-telegram"
		:href="appConfig.global.telegram"
		target="_blank"
		:aria-label="'Telegram'"
	/>
	<UButton
		variant="ghost"
		icon="i-simple-icons-gmail"
		:href="`mailto:${appConfig.global.email}?subject=Hello, from your site}`"
		target="_blank"
		:aria-label="'X'"
	/>
	<UButton
		variant="ghost"
		icon="i-simple-icons-github"
		:href="appConfig.global.github"
		target="_blank"
		:aria-label="'GitHub'"
	/>
	<UButton
		variant="ghost"
		v-if="locale === 'ru'"
		icon="i-lucide-download"
		:href="appConfig.global.resume.ru"
		target="_blank"
		:aria-label="'Download PDF'"
	/>
	<UButton
		variant="ghost"
		v-else
		icon="i-lucide-download"
		:href="appConfig.global.resume.en"
		target="_blank"
		:aria-label="'Download PDF'"
	/>
</template>

<style scoped></style>