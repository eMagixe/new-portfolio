<script setup lang="ts">
const props = defineProps({
	size: {
		type: String,
		default: '16'
	}
})
</script>

<template>
	<NuxtLink to="/" class="flex items-center justify-center">
		<span
			class="bg-gray-500 text-gray-100! border-gray-500 border-2 border-r-0 px-0.5"
			:class="`text-${props.size}`"
			>DEV</span
		>
		<span class="border-2 border-gray-500 px-1 text-gray-500!" :class="`text-${props.size}`">Frontend</span>
	</NuxtLink>
</template>
