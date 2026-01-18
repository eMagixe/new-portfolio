<script setup lang="ts">
const { setLocale, locale } = useI18n()
</script>

<template>
	<UFieldGroup class="ml-5">
		<UButton
			class="cursor-pointer bg-neutral-100 text-[10px]"
			:class="{
				'bg-neutral-200 text-[10px]': locale === 'ru'
			}"
			@click="setLocale('ru')"
			variant="outline"
			label="RUS"
		/>
		<UButton
			class="cursor-pointer lang-button bg-neutral-100 text-[10px]"
			:class="{
				'bg-neutral-200 text-[10px]': locale === 'en'
			}"
			@click="setLocale('en')"
			variant="outline"
			label="ENG"
		/>
	</UFieldGroup>
</template>