<script setup lang="ts"></script>

<template>
	<ActionsTop />
	<UMain>
		<UApp :tooltip="{ delayDuration: 300 }">
			<NuxtPage />
		</UApp>
		<ActionsUp />
	</UMain>
	<SectionFooter />
</template>
