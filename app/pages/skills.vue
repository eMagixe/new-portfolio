<script setup lang="ts">
const first_skills = ref([
	{
		name: 'Vue.js',
		description:
			'Прогрессивный JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов и одностраничных веб-приложений (SPA)',
		icon: 'i-simple-icons-vuedotjs',
		to: 'https://vuejs.org',
		target: '_blank'
	},
	{
		name: 'Nuxt.js',
		description:
			'Бесплатный фреймворк с открытым исходным кодом на базе Vue.js, который упрощает создание современных, производительных и SEO-дружественных веб-приложений',
		icon: 'i-simple-icons-nuxt',
		to: 'https://nuxt.com',
		target: '_blank'
	},
	{
		name: 'Tailwind CSS',
		description:
			'CSS-фреймворк, который позволяет быстро стилизовать веб-интерфейсы, применяя маленькие, готовые к использованию утилитарные классы прямо в HTML-разметке',
		icon: 'i-simple-icons-tailwindcss',
		to: 'https://tailwindcss.com',
		target: '_blank'
	},
	{
		name: 'JavaScript',
		description:
			'Универсальный язык программирования, который делает веб-страницы интерактивными, позволяя создавать динамический контент, анимации, игры и управлять элементами сайта',
		icon: 'i-simple-icons-javascript',
		to: 'https://learn.javascript.ru',
		target: '_blank'
	},
	{
		name: 'TypeScript',
		description:
			'Надмножество JavaScript, которое добавляет статическую типизацию и другие возможности для создания более надежных и масштабируемых веб-приложений',
		icon: 'i-simple-icons-typescript',
		to: 'https://www.typescriptlang.org',
		target: '_blank'
	},
	{
		name: 'GitHub',
		description: 'Веб-платформа и хостинг для IT-проектов, основанная на системе контроля версий Git',
		icon: 'i-simple-icons-github',
		to: 'https://www.github.com',
		target: '_blank'
	},
	{
		name: 'GitLab',
		description:
			'Веб-приложение для управления репозиториями Git с функциями CI/CD, мониторинга и управления проектами',
		icon: 'i-simple-icons-gitlab',
		to: 'https://www.gitlab.com',
		target: '_blank'
	}
])

const secondary_skills = ref([
	{
		name: 'VueUse',
		description:
			'Богатая коллекция готовых к использованию вспомогательных функций (composable-функций, или useXyz), созданных для Vue.js Composition API',
		icon: 'i-simple-icons-vueuse',
		to: 'https://vueuse.org',
		target: '_blank'
	},
	{
		name: 'Nuxt UI',
		description:
			'Высокопроизводительная библиотека компонентов для фреймворка Nuxt.js, построенная на базе Vue 3 и Tailwind CSS',
		icon: 'i-simple-icons-nuxt',
		to: 'https://ui.nuxt.com',
		target: '_blank'
	},
	{
		name: 'Chart.js',
		description:
			'Бесплатная, с открытым исходным кодом библиотека JavaScript для создания интерактивных и адаптивных диаграмм и графиков в веб-приложениях',
		icon: 'i-simple-icons-chartdotjs',
		to: 'https://www.chartjs.org',
		target: '_blank'
	},
	{
		name: 'Three.js',
		description:
			'Бесплатная JavaScript-библиотека с открытым исходным кодом, которая упрощает создание и отображение анимированной 3D-графики прямо в браузере',
		icon: 'i-simple-icons-threedotjs',
		to: 'https://threejs.org',
		target: '_blank'
	},
	{
		name: 'Node.js',
		description: 'Кроссплатформенная среда выполнения JavaScript, основанная на движке V8 от Chrome',
		icon: 'i-simple-icons-nodedotjs',
		to: 'https://nodejs.org',
		target: '_blank'
	},
	{
		name: 'Strapi',
		description:
			'Бесплатная, open-source headless CMS, написанная на Node.js, которая позволяет разработчикам создавать и управлять контентом',
		icon: 'i-simple-icons-strapi',
		to: 'https://strapi.io',
		target: '_blank'
	},
	{
		name: 'PHP',
		description:
			'Скриптовый язык программирования с открытым исходным кодом, который в основном используется для создания динамических веб-страниц и веб-приложений',
		icon: 'i-simple-icons-php',
		to: 'https://www.php.net',
		target: '_blank'
	}
])
</script>

<template>
	<UContainer>
		<UPageHeader title="Навыки" />
		<div class="w-full flex flex-col md:flex-row justify-start items-start gap-5">
			<section>
				<h3 class="mt-5 mb-5 border-b pb-5 border-b-gray-200">Основные инструменты</h3>
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
				<h3 class="mt-5 mb-5 border-b pb-5 border-b-gray-200">Дополнительные инструменты</h3>
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
			title="Кратная информация"
			description="Так же имеются знания языков C, C++, C# и различных технологий и библеотек их я в данном списке не указываю так как они не относятся к моей основной специализации но я готов использовать их при необходимости."
			icon="i-lucide-info"
			class="my-10"
		/>

		<div class="actions flex flex-row justify-between items-center w-full mb-10">
			<UButton icon="i-lucide-arrow-left" to="/jobs" color="neutral" variant="outline">Опыт работы</UButton>
			<p>Навыки</p>
			<UButton trailing-icon="i-lucide-arrow-right" to="/projects" color="neutral" variant="outline"
				>Проекты</UButton
			>
		</div>
	</UContainer>
</template>
