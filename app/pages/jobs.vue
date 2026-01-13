<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const items: TimelineItem[] = [
	{
		date: 'Ноябрь, 2023',
		title: 'ООО Беллфорд',
		description: 'Middle+ Frontend Developer',
		skills: [
			'Разработка SPA/SSR-платформ на Nuxt 3/4',
			'Работа с Python/Django API',
			'Работа с Nuxt.js архитектурой, FSD и микросервисной архитектурой',
			'Разработка и поддержка высоконагруженных CRM систем',
			'Работа с VueUse, Nuxt UI, PrimeVue, TailwindCSS и другими популярными библиотеками',
			'TypeScript (Generics, Utility Types, типизация API, типизация компонентов и пропсов)',
			'Vitest (модульное тестирование компонентов)',
			'Lighthouse-оптимизация, оптимизация и кеширование запросов'
		],
		icon: 'i-lucide-check-circle'
	},
	{
		date: 'Сентябрь, 2022',
		title: 'Студия AWA.agency',
		icon: 'i-lucide-check-circle',
		description: 'Middle Frontend Developer',
		skills: [
			'Разработка интерфейсов на Nuxt3 / Vue3',
			'Визуализация данных и форм с PrimeVue и Tailwind CSS',
			'Разработка и поддержка клиентской части веб-приложения',
			'Написание тестов и исправление выявленных багов'
		]
	},
	{
		date: 'Февраль, 2020',
		title: 'ООО "Авакс"',
		description: 'Junior Fullstack Developer',
		icon: 'i-lucide-check-circle',
		skills: [
			'Микросервисы на Node.js + Vue, интеграция с API Laravel',
			'PHP (Laravel, October CMS). - программирование бизнес логики',
			'Работа с библиотекамии парсинга Google-таблиц и PDF документов',
			'Работа с API CDEK и Яндекс Карты',
			'Боты для Telegram, VK'
		]
	},
	{
		date: 'Май, 2019',
		title: 'МАУ "АРТ"',
		description: 'Web-программист',
		icon: 'i-lucide-rocket',
		skills: [
			'JavaScript, Vue.js, (Vuex, Vue-router), Vuetify, React - программирование пользовательского интерфейса',
			'PHP (Laravel, October CMS). - программирование бизнес логики',
			'Работа с MySQL, PostgreSQL, MongoDB',
			'Администрирование внутренней сети и сервера компании'
		]
	}
]
</script>

<template>
	<UContainer>
		<UPageHeader>Опыт работы</UPageHeader>
		<UTimeline :items="items" class="mt-5">
			<template #title="{ item }">
				<h2>{{ item.title }}</h2>
			</template>
			<template #description="{ item }">
				<h3 class="my-5">Должность: {{ item.description }}</h3>
				<p class="mb-2">Обязанности:</p>
				<ul>
					<li v-for="skill in item.skills">
						{{ skill }}
					</li>
				</ul>
				<USeparator class="mt-5" />
			</template>
		</UTimeline>

		<UAlert
			color="neutral"
			variant="subtle"
			title="Дополнительная информация"
			description="На протяжении жизненного пути я работал программистом еще в ряде мест и изучил такие языки как
			PHP, C, C++, C# но их я в данном списке не указываю так как они не относятся к моей основной специализации"
			icon="i-lucide-info"
			class="mb-10"
		/>

		<div class="flex flex-row justify-between items-center w-full mb-10">
			<UButton icon="i-lucide-arrow-left" to="/" color="neutral" variant="outline">Главная</UButton>
			<UButton trailing-icon="i-lucide-arrow-right" to="/skills" color="neutral" variant="outline"
				>Навыки</UButton
			>
		</div>
	</UContainer>
</template>
