<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const [main] = useAppConfig().sidebar.links as NavigationMenuItem[][]
</script>

<template>
	<UHeader toggle-side="right">
		<template #title>
			<ActionsLogo />
		</template>

		<UNavigationMenu :items="main" />

		<template #right>
			<ActionsContacts />
		</template>

		<template #body>
			<UNavigationMenu :items="main" orientation="vertical" />
		</template>
	</UHeader>
	<UMain>
		<NuxtPage />
	</UMain>
</template>
