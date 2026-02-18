<script setup lang="ts">
import appConfig from '~/app.config'

const { locale } = useI18n()
</script>

<template>
	<UButton
		icon="i-simple-icons-telegram"
		color="neutral"
		variant="ghost"
		:to="appConfig.global.telegram"
		target="_blank"
		aria-label="Telegram"
	/>
	<UButton
		icon="i-simple-icons-gmail"
		color="neutral"
		variant="ghost"
		:to="`mailto:${appConfig.global.email}?subject=Hello, from your site}`"
		target="_blank"
		aria-label="X"
	/>
	<UButton
		icon="i-simple-icons-github"
		color="neutral"
		variant="ghost"
		:to="appConfig.global.github"
		target="_blank"
		aria-label="GitHub"
	/>
	<UButton
		v-if="locale === 'ru'"
		icon="i-lucide-download"
		color="neutral"
		variant="ghost"
		:to="appConfig.global.resume.ru"
		target="_blank"
		aria-label="Download PDF"
	/>
	<UButton
		v-else
		icon="i-lucide-download"
		color="neutral"
		variant="ghost"
		:to="appConfig.global.resume.en"
		target="_blank"
		aria-label="Download PDF"
	/>
</template>

<style scoped></style>
