<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import appConfig from '~/app.config'

const items: NavigationMenuItem[] = []

</script>

<template>
	<UFooter class="border-t border-t-primary/10">
		<template #left>
			<p class="text-ui-muted text-sm">{{ appConfig.footer.credits }}</p>
		</template>

		<UNavigationMenu :items="items" variant="link" />

		<template #right>
			<ActionsLogo size="14" />
		</template>
	</UFooter>
</template>