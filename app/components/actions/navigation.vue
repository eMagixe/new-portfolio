<script setup lang="ts">
const {page} = defineProps<{
	page: string
}>()
</script>

<template>
	<div class="actions flex flex-row justify-between items-center w-full mb-10">
		<UButton icon="i-lucide-arrow-left" :to="$t(`${page}.buttons.prev.to`)" color="neutral" variant="outline">
			{{ $t(`${page}.buttons.prev.text`) }}
		</UButton>
		<p>{{ $t(`${page}.title`) }}</p>
		<UButton
			trailing-icon="i-lucide-arrow-right"
			:to="$t(`${page}.buttons.next.to`)"
			color="neutral"
			variant="outline"
		>
			{{ $t(`${page}.buttons.next.text`) }}
		</UButton>
	</div>
</template>