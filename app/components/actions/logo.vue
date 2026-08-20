<script setup lang="ts">
const props = defineProps({
	size: {
		type: String,
		default: '16'
	}
})
</script>

<template>
	<NuxtLink to="/" class="flex items-center justify-center gap-1">
		<span
			class=""
			:class="`text-${props.size}`"
		>
			Frontend
		</span>
		<span class="font-bold text-primary!" :class="`text-${props.size}`">Engineer</span>
	</NuxtLink>
</template>