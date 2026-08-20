<script setup lang="ts">
import { NuxtLink } from '#components'

const props = withDefaults(
	defineProps<{
		label?: string
		to?: string
		href?: string
		icon?: string
		trailingIcon?: string
		target?: string
		disabled?: boolean
		ariaLabel?: string
	}>(),
	{
		label: '',
		to: undefined,
		href: undefined,
		icon: undefined,
		trailingIcon: undefined,
		target: undefined,
		disabled: false,
		ariaLabel: undefined
	}
)
</script>

<template>
	<component
		:is="NuxtLink"
		:to="to"
		:href="href"
		:target="target"
		:disabled="disabled"
		:aria-label="ariaLabel"
		class="animated-btn relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden cursor-pointer select-none"
		:class="[disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '']"
	>
		<svg
			class="absolute inset-0 w-full h-full pointer-events-none"
			viewBox="0 0 180 60"
			preserveAspectRatio="none"
			fill="none"
		>
			<polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
			<polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
		</svg>
		<span class="relative flex items-center gap-2 whitespace-nowrap">
			<UIcon v-if="icon" :name="icon" />
			<span v-if="label">{{ label }}</span>
			<UIcon v-if="trailingIcon" :name="trailingIcon" />
		</span>
	</component>
</template>

<style scoped>
.animated-btn {
	border-radius: 0;
	border: 1px solid var(--ui-primary);
	outline: none;
	transition: 0.5s ease-in-out;
	background: rgb(114 139 176 / 0.5);
	color: var(--ui-primary);
}

.animated-btn svg {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	fill: none;
	stroke: currentColor;
	stroke-dasharray: 150 480;
	stroke-dashoffset: 150;
	transition: 0.9s ease-in-out;
	pointer-events: none;
}

.animated-btn:hover {
	background: var(--ui-primary);
	color: #fff;
}

.animated-btn:hover svg {
	stroke-dashoffset: -480;
}
</style>
