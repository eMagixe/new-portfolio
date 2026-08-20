<script setup lang="ts">
const { setLocale, locale } = useI18n()
</script>

<template>
	<UFieldGroup class="ml-5">
		<UButton
			label="RUS"
			:disabled="locale === 'ru'"
			@click="setLocale('ru')"
		/>
		<UButton
			label="ENG"
			:disabled="locale === 'en'"
			@click="setLocale('en')"
		/>
	</UFieldGroup>
</template>