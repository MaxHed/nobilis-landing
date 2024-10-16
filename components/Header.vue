<template>
  <header 
    class="fixed w-full z-50 transition-all duration-300" 
    :class="{ 'bg-black bg-opacity-70 backdrop-blur-md': isScrolled }"
    id="header"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" @click="scrollToTop" class="text-white text-2xl font-bold">
        <img src="~/assets/images/Nobilis.svg" alt="Nobilis Coutellerie Logo" class="h-12 filter brightness-0 invert">
      </a>
      <div class="hidden md:flex items-center space-x-6">
        <nav class="flex space-x-6">
          <a href="#about" class="text-white hover:text-gold transition-colors">{{ t('about') }}</a>
          <a href="#products" class="text-white hover:text-gold transition-colors">{{ t('productsMenu') }}</a>
          <a href="#contact" class="text-white hover:text-gold transition-colors">{{ t('contact') }}</a>
        </nav>
        <button 
          @click="toggleLanguage" 
          class="w-6 h-6 rounded-full overflow-hidden hover:opacity-80 transition-opacity bg-center bg-cover"
          :style="{ backgroundImage: `url(${languageFlag})` }"
          :title="currentLanguage === 'fr' ? 'Switch to English' : 'Passer en français'"
        ></button>
      </div>
      <div class="md:hidden flex items-center space-x-4">
        <button 
          @click="toggleLanguage" 
          class="w-6 h-6 rounded-full overflow-hidden hover:opacity-80 transition-opacity bg-center bg-cover"
          :style="{ backgroundImage: `url(${languageFlag})` }"
          :title="currentLanguage === 'fr' ? 'Switch to English' : 'Passer en français'"
        ></button>
        <button @click="toggleMenu" class="text-white" id="menuToggle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useTranslation } from '~/composables/useTranslation'

const { t, currentLanguage, toggleLanguage } = useTranslation()

const isScrolled = ref(false)
const sideMenuRef = ref(null)

const languageFlag = computed(() => {
  return currentLanguage.value === 'fr' ? '/images/Flag_uk.png' : '/images/Flag_fr.png'
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const toggleMenu = () => {
  if (sideMenuRef.value) {
    sideMenuRef.value.toggleMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

defineExpose({ sideMenuRef })
</script>

<style scoped>
/* Vous pouvez ajouter des styles spécifiques ici si nécessaire */
</style>
