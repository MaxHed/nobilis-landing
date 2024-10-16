<template>
   <div ref="sideMenu" id="sideMenu" class="fixed top-0 right-0 w-full md:w-80 h-full bg-black bg-opacity-95 backdrop-filter backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-50" :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }">
        <div class="p-8">
            <button @click="closeMenu" id="closeMenu" class="text-gold mb-8 absolute top-4 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <nav class="mt-16">
                <ul class="space-y-6">
                    <li><a href="#" class="block py-2 hover:text-gold transition-colors">Accueil</a></li>
                    <li><a href="#about" class="block py-2 hover:text-gold transition-colors">À propos</a></li>
                    <li><a href="#products" class="block py-2 hover:text-gold transition-colors">Produits</a></li>
                    <li><a href="#contact" class="block py-2 hover:text-gold transition-colors">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const sideMenu = ref(null)
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

onMounted(() => {
  if (sideMenu.value) {
    const menuLinks = sideMenu.value.querySelectorAll('a')
    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu)
    })
  }
})

// Exposer la méthode toggleMenu, closeMenu et la variable isOpen pour le composant parent
defineExpose({ toggleMenu, closeMenu, isOpen })
</script>

<style>

</style>
