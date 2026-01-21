<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { useRoute } from '#imports'

const route = useRoute()

const { locale, setLocale } = useI18n()

if (route.name === 'index__en') setLocale('en')

const main = computed(() => {
	return locale.value === 'ru'
		? (useAppConfig().ru.sidebar.links as NavigationMenuItem[])
		: (useAppConfig().en.sidebar.links as NavigationMenuItem[])
})
</script>

<template>
	<UHeader toggle-side="left">
		<template #left>
			<ActionsLogo />
		</template>

		<UNavigationMenu :items="main" />

		<template #right>
			<ActionsContacts />
			<SelectLocale />
		</template>

		<template #body>
			<UNavigationMenu :items="main" orientation="vertical" />
		</template>
	</UHeader>
</template>

<style scoped></style>
