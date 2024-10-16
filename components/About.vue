<template>
  <section id="about" class="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-12 font-serif text-gold">{{ t('aboutTitle') }}</h2>
      <p class="text-xl mb-8 leading-relaxed">{{ t('aboutText') }}</p>
    </div>
  </section>
</template>

<script setup>
import { useTranslation } from '~/composables/useTranslation'

const { t } = useTranslation()
</script>

<style>

</style>
