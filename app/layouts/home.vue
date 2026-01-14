<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import Footer from '~/components/section/footer.vue'

const [main] = useAppConfig().sidebar.links as NavigationMenuItem[][]
</script>

<template>
	<UHeader toggle-side="left">
		<template #title>Frontend Developer</template>

		<UNavigationMenu :items="main" />

		<template #right> </template>

		<template #body>
			<UNavigationMenu :items="main" orientation="vertical" />
		</template>
	</UHeader>
	<UMain>
		<NuxtPage />
	</UMain>
</template>
