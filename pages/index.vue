<template>
  <Header ref="headerRef" />
  <SideMenu ref="sideMenuRef" />
  <Hero />
  <About />
  <Products />
  <Contact />
  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '~/components/Header.vue'
import SideMenu from '~/components/SideMenu.vue'
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Products from '~/components/Products.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'

// add meta tags in french
useHead({
  title: 'Nobilis Coutellerie - Couteaux de Luxe Personnalisables et Artisanaux',
  meta: [
    { name: 'description', content: 'Découvrez Nobilis Coutellerie, créateur de couteaux pliants haut de gamme. Des couteaux personnalisables, faits main avec des matériaux rares, pour un luxe unique. Explorez nos collections : Essentiel, Signature, et Héritage.' },
    { name: 'keywords', content: 'Nobilis Coutellerie, couteaux personnalisables, couteaux pliants, couteaux de luxe, artisanat français, couteaux haut de gamme, couteaux sur mesure, couteaux en édition limitée, gravures d\'artistes, matériaux rares, coutellerie de luxe' },
  ]
})



const headerRef = ref(null)
const sideMenuRef = ref(null)

onMounted(() => {
  if (headerRef.value && sideMenuRef.value) {
    headerRef.value.sideMenuRef = sideMenuRef.value
  }
})
</script>

<style>

</style>
