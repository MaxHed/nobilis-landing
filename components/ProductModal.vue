<template>
  <Transition name="modal">
    <div v-if="isOpen" class="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="$emit('close')"></div>
      
      <Transition name="modal-content" appear>
        <div v-if="isOpen" class="bg-black border-2 border-gold rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full m-3 z-10">
          <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 class="text-2xl leading-6 font-bold text-gold mb-4" id="modal-title">
                  {{ product.name }}
                </h3>
                <div class="mt-2">
                  <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover mb-4 rounded">
                  <p class="text-sm text-white">
                    {{ product.longDescription }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-black px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button @click="$emit('close')" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gold text-base font-medium text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold sm:ml-3 sm:w-auto sm:text-sm transition duration-300">
              {{ t('closeButton') }}
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { useTranslation } from '~/composables/useTranslation'

const { t } = useTranslation()

defineProps({
  product: Object,
  isOpen: Boolean
});

defineEmits(['close']);
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-content-enter-active,
.modal-content-leave-active {
  transition: all 0.3s ease;
}

.modal-content-enter-from,
.modal-content-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
