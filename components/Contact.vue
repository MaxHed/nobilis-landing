<template>
  <section id="contact" class="py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-12 font-serif text-gold">{{ t('contactTitle') }}</h2>
      <p class="text-xl mb-8 leading-relaxed">
        {{ t('contactText') }}
      </p>
      <a 
        href="mailto:contact@nobilis.maxhed.fr" 
        class="bg-gold text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition duration-300 inline-block"
      >
        {{ t('contactButton') }}
      </a>
    </div>
  </section>
</template>

<script setup>
import { useTranslation } from '~/composables/useTranslation'

const { t } = useTranslation()
</script>

<style scoped>
/* Vous pouvez ajouter des styles spécifiques ici si nécessaire */
</style>
