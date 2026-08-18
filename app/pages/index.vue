<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui/components/Button.vue'
const { t } = useI18n()
const links = ref([
  { label: t('index.buttons.projects.text'), to: t('index.buttons.projects.to'), variant: 'subtle', icon: 'i-lucide-folder-open', color: 'neutral' },
  { label: t('index.buttons.about.text'), to: t('index.buttons.about.to'), color: 'neutral', variant: 'subtle', trailingIcon: 'i-lucide-arrow-right' }
])
useSeoMeta({ title: t('index.seo.title'), description: t('index.seo.description'), ogTitle: t('index.seo.title'), ogDescription: t('index.seo.description'), ogImage: 'summary_large_image', twitterCard: 'summary_large_image' })
const icons = ['i-simple-icons-vuedotjs', 'i-simple-icons-nuxt', 'i-simple-icons-github', 'i-simple-icons-gitlab', 'i-simple-icons-tailwindcss', 'i-simple-icons-typescript', 'i-simple-icons-javascript'].map(i => ({ icon: i, name: i.replace('i-simple-icons-', '') }))
</script>
<template>
  <UPage class="bg-gray-950">
    <div class="flex flex-col justify-center items-center mt-10 photo">
      <NuxtImg alt="photo" src="/images/photo.png" preload :placeholder="['auto']" loading="lazy" class="mx-auto rounded-[50%] object-cover border-2 border-gray-700 hover:border-amber-400 cursor-pointer" @click="navigateTo('/about')" />
    </div>
    <UPageBody>
      <UPageSection :ui="{ container: 'm-auto !p-5 text-center w-full' }" class="actions" :title="$t('index.name')" :description="$t('index.description')" :links="links as ButtonProps[]" />
      <div class="flex flex-col justify-center items-center">
        <p>{{ $t('index.skills') }}</p>
        <UMarquee pause-on-hover class="w-[50%] mx-auto mt-10 bg-gray-800 text-gray-400 rounded-lg p-2">
          <UTooltip v-for="icon in icons" :key="icon.name" :text="icon.name">
            <UIcon :name="icon.icon" class="size-10 shrink-0" />
          </UTooltip>
        </UMarquee>
      </div>
    </UPageBody>
  </UPage>
</template>