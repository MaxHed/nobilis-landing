<template>
  <Transition name="modal" appear>
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <Transition name="modal-backdrop" appear>
          <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-75 transition-opacity" aria-hidden="true" @click="$emit('close')"></div>
        </Transition>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <Transition name="modal-content" appear>
          <div v-if="isOpen" class="inline-block align-bottom bg-black border-2 border-gold rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
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
                Fermer
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  product: Object,
  isOpen: Boolean
});

defineEmits(['close']);
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-backdrop-enter-active,
.modal-backdrop-leave-active {
  transition: opacity 0.3s ease;
}

.modal-backdrop-enter-from,
.modal-backdrop-leave-to {
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
