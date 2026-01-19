<script setup lang="ts">
const { locale, t } = useI18n()

const first_skills = computed(() => {
	return locale.value === 'ru' ? useAppConfig().ru.skills.first : useAppConfig().en.skills.first
})

const secondary_skills = computed(() => {
	return locale.value === 'ru' ? useAppConfig().ru.skills.second : useAppConfig().en.skills.second
})

useSeoMeta({
	title: t('skills.seo.title'),
	ogTitle: t('skills.seo.title'),
	description: t('skills.seo.description'),
	ogDescription: t('skills.seo.description'),
	twitterCard: 'summary_large_image'
})
</script>

<template>
	<UContainer>
		<UPageHeader :title="$t('skills.title')" />
		<div class="w-full flex flex-col md:flex-row justify-start items-start gap-5">
			<section>
				<h3 class="mt-5 mb-5 border-b pb-5 border-b-gray-200">{{ $t('skills.subtitle.first') }}</h3>
				<UPageList divide>
					<UPageCard
						v-for="(skill, index) in first_skills"
						:key="index"
						variant="ghost"
						:to="skill.to"
						:target="skill.target"
					>
						<template #body>
							<div class="w-full flex flex-row justify-start items-center gap-5">
								<UIcon :name="skill.icon" class="size-10 shrink-0" />
								<div>
									<h2>{{ skill.name }}</h2>
									<p class="mt-2 text-sm md:h-[50px]">{{ skill.description }}</p>
								</div>
							</div>
						</template>
					</UPageCard>
				</UPageList>
			</section>
			<section>
				<h3 class="mt-5 mb-5 border-b pb-5 border-b-gray-200">{{ $t('skills.subtitle.second') }}</h3>
				<UPageList divide>
					<UPageCard
						v-for="(skill, index) in secondary_skills"
						:key="index"
						variant="ghost"
						:to="skill.to"
						:target="skill.target"
					>
						<template #body>
							<div class="w-full flex flex-row justify-start items-center gap-5">
								<UIcon :name="skill.icon" class="size-10 shrink-0" />
								<div>
									<h2>{{ skill.name }}</h2>
									<p class="mt-2 text-sm md:h-[50px]">{{ skill.description }}</p>
								</div>
							</div>
						</template>
					</UPageCard>
				</UPageList>
			</section>
		</div>
		<UAlert
			color="neutral"
			variant="subtle"
			:title="$t('skills.block_info.title')"
			:description="$t('skills.block_info.description')"
			icon="i-lucide-info"
			class="my-10"
		/>

		<div class="actions flex flex-row justify-between items-center w-full mb-10">
			<UButton
				icon="i-lucide-arrow-left"
				:to="$t('skills.buttons.prev.to')"
				color="neutral"
				variant="outline"
			>
				{{ $t('skills.buttons.prev.text') }}
			</UButton>
			<p>{{ $t('skills.title') }}</p>
			<UButton
				trailing-icon="i-lucide-arrow-right"
				:to="$t('skills.buttons.next.to')"
				color="neutral"
				variant="outline"
			>
				{{ $t('skills.buttons.next.text') }}
			</UButton>
		</div>
	</UContainer>
</template>
