<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
	title: t('index.seo.title'),
	description: t('index.seo.description'),
	ogTitle: t('index.seo.title'),
	ogDescription: t('index.seo.description'),
	ogImage: 'summary_large_image',
	twitterCard: 'summary_large_image'
})

const links = ref([
	{ label: t('index.buttons.projects.text'), to: t('index.buttons.projects.to'), icon: 'i-lucide-folder-open' },
	{ label: t('index.buttons.about.text'), to: t('index.buttons.about.to'), trailingIcon: 'i-lucide-arrow-right' }
])

const icons = [
	'i-simple-icons-vuedotjs',
	'i-simple-icons-nuxt',
	'i-simple-icons-github',
	'i-simple-icons-gitlab',
	'i-simple-icons-tailwindcss',
	'i-simple-icons-typescript',
	'i-simple-icons-javascript'
].map((i) => ({ icon: i, name: i.replace('i-simple-icons-', '') }))
</script>

<template>
	<div class="h-screen bg-welcome">
		<div class="flex flex-col justify-center items-center pt-10 photo">
			<NuxtImg
				alt="photo"
				src="/images/photo.png"
				preload
				loading="lazy"
				class="mx-auto rounded-[50%] object-cover"
				@click="navigateTo('#about')"
			/>
		</div>
		<div>
			<div class="flex flex-col justify-center items-center text-center py-10 space-y-6">
				<h1 class="text-3xl font-bold text-primary!">{{ $t('index.name') }}</h1>
				<p class="text-[clamp(1rem,1vw+0.3rem,1.2rem)] not-md:w-4/5 md:w-1/2 m-5">
					{{ $t('index.description') }}
				</p>
				<div class="flex flex-wrap gap-4 justify-center mt-5">
					<AnimatedButton
						v-for="link in links"
						:key="link.label"
						:label="link.label"
						:to="link.to"
						:icon="link.icon"
						:trailing-icon="link.trailingIcon"
					/>
				</div>
			</div>
			<div class="flex flex-col justify-center items-center">
				<p class="text-primary! text-sm">{{ $t('index.skills').toUpperCase() }}</p>
				<UMarquee pause-on-hover class="w-[50%] mx-auto mt-10 p-4">
					<UTooltip v-for="icon in icons" :key="icon.name" :text="icon.name">
						<UIcon :name="icon.icon" class="size-10 shrink-0" />
					</UTooltip>
				</UMarquee>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
