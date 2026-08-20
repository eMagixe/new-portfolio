<script setup lang="ts"></script>
<template>
	<div id="about" class="bg-primary/60 border-t border-primary/60 min-h-screen bg-about">
		<div class="backdrop-blur-sm not-sm:py-10 sm:py-20 min-h-screen">
			<UContainer>
				<h2 class="my-5 title not-sm:text-center">{{ $t('about.content.start_block.title') }}</h2>
				<p>
					{{ $t('about.content.start_block.text') }}
				</p>
				<h2 class="my-5">{{ $t('about.content.vue_block.title') }}</h2>
				<p>
					{{ $t('about.content.vue_block.text') }}
					<NuxtLink class="underline" :to="$t('about.content.vue_block.link.to')">
						{{ $t('about.content.vue_block.link.text') }}
					</NuxtLink>
				</p>
				<h2 class="my-5">{{ $t('about.content.nuxt_block.title') }}</h2>
				<p>
					{{ $t('about.content.nuxt_block.text') }}
				</p>

				<h2 class="my-5">{{ $t('about.content.future_block.title') }}</h2>
				<p>
					{{ $t('about.content.future_block.text') }}
					<NuxtLink class="underline" :to="$t('about.content.future_block.link.to')">
						{{ $t('about.content.future_block.link.text') }}
					</NuxtLink>
				</p>
			</UContainer>
		</div>
	</div>
</template>
