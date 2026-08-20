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

		<UNavigationMenu class="h-full navigation" :items="main" />

		<template #right>
			<ActionsContacts />
			<div class="not-lg:hidden!">
				<SelectLocale />
			</div>
		</template>

		<template #body>
			<UNavigationMenu class="bg-border" :items="main" orientation="vertical" />
		</template>
	</UHeader>
</template>
