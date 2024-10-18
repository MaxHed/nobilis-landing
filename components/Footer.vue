<template>
  <footer class="bg-black text-white py-16 px-6">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <img src="~/assets/images/Nobilis.svg" alt="Nobilis Coutellerie Logo" class="h-16 mb-8 md:mb-0 filter brightness-0 invert">
      <p class="text-lg">&copy; {{ currentYear }} Nobilis Coutellerie. {{ t('footerText') }}</p>
    </div>
    <div class="max-w-6xl mx-auto mt-8 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
      <p>{{ t('disclaimerText') }}</p>
      <p class="mt-2">{{ t('createdBy') }} Aurélien Heckenbenner & Hédouin Maxence</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useTranslation } from '~/composables/useTranslation'

const { t } = useTranslation()

const currentYear = computed(() => new Date().getFullYear())
</script>

<style>
/* Styles inchangés */
</style>
