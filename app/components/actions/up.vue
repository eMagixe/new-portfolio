<script setup lang="ts">
onMounted(() => {
	const scrollToTopBtn = document.getElementById('scrollToTopBtn')

	if (scrollToTopBtn) {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 600) {
				scrollToTopBtn.classList.add('show')

				const scrolled = window.scrollY || window.pageYOffset
				const windowHeight = window.innerHeight
				const documentHeight = document.documentElement.scrollHeight
				if (scrolled + windowHeight >= documentHeight - 5) {
					scrollToTopBtn.classList.add('end-to-up')
				} else {
					scrollToTopBtn.classList.remove('end-to-up')
				}
			} else {
				scrollToTopBtn.classList.remove('show')
			}
		})
	}
})
</script>

<template>
	<AnimatedButton
		id="scrollToTopBtn"
		class="scroll-to-top"
		icon="i-lucide-arrow-up"
		aria-label="Scroll to top"
		to="#welcome"
	/>
</template>

<style>
.scroll-to-top {
	position: fixed;
	bottom: 20px;
	right: calc(50% - 25px);
	width: 50px;
	cursor: pointer;
	display: flex;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

	opacity: 0;
	visibility: hidden;
	transition:
		opacity 0.3s ease,
		visibility 0.3s ease,
		transform 0.2s ease;
	z-index: 1000;
}

.scroll-to-top.end-to-up {
	@media (min-width: 1024px) {
		bottom: 90px;
	}

	@media (max-width: 1024px) {
		bottom: 160px;
	}
}

.scroll-to-top.show {
	opacity: 1;
	visibility: visible;
}
</style>
