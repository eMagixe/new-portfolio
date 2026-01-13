<script setup lang="ts">
const items = Array.from({ length: 30 }, (_, i) => ({
	id: i + 1,
	title: `Item ${i + 1}`,
	description: `Description for item ${i + 1}`
}))
</script>

<template>
	<section class="p-5">
		<h2 class="text-3xl font-bold mb-5">Навыки</h2>
		<h1>{{ $t('welcome') }}</h1>
		<UPageCard v-for="item in items" v-bind="item" class="rounded-none" />
	</section>
</template>

<style>
.skill-item {
	width: calc(100vw / 3);
	height: calc(100vh - 250px);
	background-color: #f0f0f0;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
}

.skill-item:hover {
	transform: scale(1.05);
	transition: transform 0.8s;
}

.skill-item:not(:hover) {
	transition: transform 0.8s;
}
</style>
