<template>
  <section class="hero-section relative h-screen flex items-center justify-center">
    <img src="~/assets/images/blade.jpg" alt="Couteau artisanal Nobilis" class="absolute inset-0 w-full h-full object-cover opacity-50">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
    <div class="relative z-10 text-center px-6 flex flex-col items-center">
      <img src="~/assets/images/Nobilis2.svg" alt="Nobilis Coutellerie Logo" class="w-64 md:w-80 mx-auto mb-4">
      <h1 class="text-6xl md:text-8xl font-bold mb-6 font-serif text-gold leading-tight sr-only">Nobilis Coutellerie</h1>
      <p class="hero-title mb-24">{{ t('heroTitle') }}</p>
      <a href="#products" class="bg-gold text-black px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white transition duration-300 uppercase tracking-wider inline-block">{{ t('heroButton') }}</a>
    </div>
    
    <!-- Indicateur de défilement -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2" v-show="showScrollIndicator">
      <div class="scroll-indicator animate-bounce" @click="scrollToContent">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTranslation } from '~/composables/useTranslation'

const { t } = useTranslation()

const showScrollIndicator = ref(true)

const scrollToContent = () => {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
}

const handleScroll = () => {
  showScrollIndicator.value = window.scrollY < 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-indicator {
  cursor: pointer;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.hero-title {
  font-family: 'AmsterdamOne';
  font-size: clamp(1.5rem, 5vw , 4rem);
  line-height: 1.2;
  color: #D4B34A;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  margin-top: -1rem; /* Remonte légèrement la signature */
}

@media (max-width: 768px) {
  .hero-title {
    line-height: 1.4; /* Augmente l'interligne pour le format mobile */
    max-width: 90%; /* Limite la largeur du texte sur mobile */
    margin: -0.5rem auto 3rem; /* Ajuste la marge pour mobile, augmente l'espacement en bas */
  }
}
</style>
