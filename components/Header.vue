<template>
  <header 
    class="fixed w-full z-50 transition-all duration-300" 
    :class="{ 'bg-black bg-opacity-70 backdrop-blur-md': isScrolled }"
    id="header"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" @click.prevent="scrollToTop">
        <img src="~/assets/images/Nobilis.svg" alt="Nobilis Coutellerie Logo" class="h-12 md:h-16 filter brightness-0 invert">
      </a>
      <nav class="hidden md:block">
        <ul class="flex space-x-8">
          <li><a href="#about" class="text-white hover:text-gold transition-colors">À propos</a></li>
          <li><a href="#products" class="text-white hover:text-gold transition-colors">Produits</a></li>
          <li><a href="#contact" class="text-white hover:text-gold transition-colors">Contact</a></li>
        </ul>
      </nav>
      <button class="md:hidden text-white" id="menuToggle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Vous pouvez ajouter des styles spécifiques ici si nécessaire */
</style>
