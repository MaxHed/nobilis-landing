<template>
  <section id="products" class="py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold mb-12 font-serif text-gold text-center">{{ t('productsTitle') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div v-for="(product, index) in products" :key="index" 
             class="flex-1 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col justify-between"
             @click="openModal(index)">
          <img :src="product.image" :alt="t(product.name)" class="w-full h-64 object-cover">
          <div class="p-6 flex-1 flex flex-col gap-4">
            <div class="w-full text-center">
              <h3 class="text-2xl font-bold mb-2 text-gold amsterdam-one">{{ t(product.name) }}</h3>
            </div>
            <p class="text-gray-300 mb-4">{{ t(product.shortDescription) }}</p>
          </div>
        </div>
      </div>
    </div>

    <ProductModal 
      v-if="selectedProduct" 
      :product="selectedProduct" 
      :isOpen="isModalOpen" 
      @close="closeModal"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useTranslation } from '~/composables/useTranslation';
import ProductModal from './ProductModal.vue';

const { t } = useTranslation();

const products = ref([
  {
    name: 'products.classicCollection.name',
    image: "/images/knife3.jpg",
    shortDescription: 'products.classicCollection.shortDescription',
    longDescription: 'products.classicCollection.longDescription'
  },
  {
    name: 'products.professionalSeries.name',
    image: "/images/knife2.jpg",
    shortDescription: 'products.professionalSeries.shortDescription',
    longDescription: 'products.professionalSeries.longDescription'
  },
  {
    name: 'products.artisanalRange.name',
    image: "/images/knife.jpg",
    shortDescription: 'products.artisanalRange.shortDescription',
    longDescription: 'products.artisanalRange.longDescription'
  }
]);

const selectedProduct = ref(null);
const isModalOpen = ref(false);

const openModal = (index) => {
  selectedProduct.value = {
    ...products.value[index],
    name: t(products.value[index].name),
    shortDescription: t(products.value[index].shortDescription),
    longDescription: t(products.value[index].longDescription)
  };
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden'; // Bloquer le défilement
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = ''; // Rétablir le défilement
};
</script>

<style>

</style>
