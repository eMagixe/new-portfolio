<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = []
</script>

<template>
	<UFooter class="border border-t-gray-200 border-b-0 border-x-0">
		<template #left>
			<p class="text-muted text-sm">Max Evchenko © {{ new Date().getFullYear() }}</p>
		</template>

		<UNavigationMenu :items="items" variant="link" />

		<template #right>
			<ActionsLogo size="14" />
		</template>
	</UFooter>
</template>
