<script setup lang="ts">
const { locale } = useI18n()

const first_skills = computed(() => {
	return locale.value === 'ru' ? useAppConfig().ru.skills.first : useAppConfig().en.skills.first
})

const secondary_skills = computed(() => {
	return locale.value === 'ru' ? useAppConfig().ru.skills.second : useAppConfig().en.skills.second
})
</script>

<template>
	<div id="skills" class="bg-primary/10 not-sm:py-10 sm:py-20 min-h-screen bg-skills">
		<UContainer>
			<h2 class="title not-sm:text-center">{{ $t('skills.title') }}</h2>
			<div class="w-full flex flex-col md:flex-row justify-start items-start gap-5">
				<section>
					<h3 class="mt-5 mb-5 pb-5 not-sm:text-center text-ui-text">
						{{ $t('skills.subtitle.first').toUpperCase() }}
					</h3>
					<UPageList>
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
										<p class="mt-2 text-sm md:h-[50px] text-ui-muted">{{ skill.description }}</p>
									</div>
								</div>
							</template>
						</UPageCard>
					</UPageList>
				</section>
				<section>
					<h3 class="mt-5 mb-5 pb-5 not-sm:text-center text-ui-text">
						{{ $t('skills.subtitle.second').toUpperCase() }}
					</h3>
					<UPageList>
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
										<p class="mt-2 text-sm md:h-[50px] text-ui-muted">{{ skill.description }}</p>
									</div>
								</div>
							</template>
						</UPageCard>
					</UPageList>
				</section>
			</div>
			<UAlert
				color="neutral"
				:title="$t('skills.block_info.title')"
				:description="$t('skills.block_info.description')"
				icon="i-lucide-info"
				class="my-10 bg-ui-surface text-ui-text"
			/>
		</UContainer>
	</div>
</template>

<style scoped></style>
