<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
	<UButton
		icon="i-simple-icons-telegram"
		color="neutral"
		variant="ghost"
		to="https://t.me/max_magixe"
		target="_blank"
		aria-label="Telegram"
	/>
	<UButton
		icon="i-simple-icons-gmail"
		color="neutral"
		variant="ghost"
		to="mailto:emax.mails@gmail.com"
		target="_blank"
		aria-label="X"
	/>
	<UButton
		icon="i-simple-icons-github"
		color="neutral"
		variant="ghost"
		to="https://github.com/emagixe"
		target="_blank"
		aria-label="GitHub"
	/>
	<UButton
		v-if="locale === 'ru'"
		icon="i-lucide-download"
		color="neutral"
		variant="ghost"
		to="https://hh.ru/resume_converter/%D0%95%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE%20%D0%9C%D0%B0%D0%BA%D1%81%D0%B8%D0%BC%20%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D0%B8%D1%87.pdf?hash=55584c38ff0768026f0039ed1f70326b666538&type=pdf&hhtmFrom=&hhtmSource=resume"
		target="_blank"
		aria-label="Download PDF"
	/>
	<UButton
		v-else
		icon="i-lucide-download"
		color="neutral"
		variant="ghost"
		to="https://hh.ru/resume_converter/%D0%95%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE%20%D0%9C%D0%B0%D0%BA%D1%81%D0%B8%D0%BC%20%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D0%B8%D1%87.pdf?hash=55584c38ff0768026f0039ed1f70326b666538&type=pdf&hhtmFrom=&hhtmSource=resume"
		target="_blank"
		aria-label="Download PDF"
	/>
</template>

<style scoped></style>
