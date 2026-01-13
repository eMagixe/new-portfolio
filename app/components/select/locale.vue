<script setup lang="ts">
const { setLocale, locale } = useI18n()

setLocale('ru')
</script>

<template>
	<UFieldGroup>
		<UButton
			class="lang-button"
			:class="{
				'bg-[#c1c4eb] text-[#7b83f1]': locale === 'ru'
			}"
			@click="setLocale('ru')"
			variant="outline"
			label="RUS"
		/>
		<UButton
			class="lang-button"
			:class="{
				'bg-[#c1c4eb] text-[#7b83f1]': locale === 'en'
			}"
			@click="setLocale('en')"
			variant="outline"
			label="ENG"
		/>
	</UFieldGroup>
</template>

<style scoped>
.lang-button {
	cursor: pointer;
}

.lang-button:hover {
	cursor: pointer;
	color: #c1c4eb;
	background: #7b83f1;
}
</style>
