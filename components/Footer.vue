<template>
  <footer class="bg-black text-white py-16 px-6">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <img src="~/assets/images/Nobilis.svg" alt="Nobilis Coutellerie Logo" class="h-16 mb-8 md:mb-0 filter brightness-0 invert">
      <p class="text-lg">&copy; {{ currentYear }} Nobilis Coutellerie. {{ t('footerText') }}</p>
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

</style>
