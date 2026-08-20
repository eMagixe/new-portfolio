<script setup lang="ts">
const { page } = defineProps<{
	page: string
}>()
</script>

<template>
	<div class="actions flex flex-row justify-between items-center w-full mb-10">
		<AnimatedButton
			icon="i-lucide-arrow-left"
			:label="$t(`${page}.buttons.prev.text`)"
			:to="$t(`${page}.buttons.prev.to`)"
		/>
		<p>{{ $t(`${page}.title`) }}</p>
		<AnimatedButton
			:label="$t(`${page}.buttons.next.text`)"
			trailing-icon="i-lucide-arrow-right"
			:to="$t(`${page}.buttons.next.to`)"
		/>
	</div>
</template>