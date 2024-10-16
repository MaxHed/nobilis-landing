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
