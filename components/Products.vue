<template>
  <section id="products" class="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold mb-16 text-center font-serif text-gold">Nos Collections</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="(product, index) in products" :key="index" class="bg-black rounded-lg overflow-hidden shadow-lg border border-gold">
          <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-2 text-gold">{{ product.name }}</h3>
            <p class="text-gray-300 mb-4">{{ product.shortDescription }}</p>
            <button @click="openModal(product)" class="inline-block bg-gold text-black px-4 py-2 rounded-full font-semibold hover:bg-white transition duration-300">
              Découvrir
            </button>
          </div>
        </div>
      </div>
    </div>
    <ProductModal :product="selectedProduct" :isOpen="isModalOpen" @close="closeModal" />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ProductModal from './ProductModal.vue';

const products = [
  {
    name: "Collection Classique",
    image: "/images/knife3.jpg",
    shortDescription: "Notre gamme de couteaux classiques allie élégance intemporelle et performance exceptionnelle.",
    longDescription: "La Collection Classique incarne l'essence même de Nobilis Coutellerie. Chaque couteau est fabriqué avec précision, utilisant les meilleurs aciers et des manches en bois nobles. Parfaits pour un usage quotidien, ces couteaux offrent un équilibre parfait entre tradition et fonctionnalité moderne."
  },
  {
    name: "Série Professionnelle",
    image: "/images/knife2.jpg",
    shortDescription: "Conçue pour les chefs exigeants, cette série offre précision et confort pour une expérience culinaire sans égal.",
    longDescription: "Notre Série Professionnelle est le choix des chefs les plus exigeants. Ces couteaux sont forgés à partir d'acier haute performance, offrant une rétention de tranchant exceptionnelle. Ergonomiques et parfaitement équilibrés, ils sont conçus pour résister aux rigueurs des cuisines professionnelles tout en offrant une précision chirurgicale."
  },
  {
    name: "Gamme Artisanale",
    image: "/images/knife.jpg",
    shortDescription: "Notre collection faite main incarne l'excellence artisanale, chaque pièce étant unique et façonnée avec passion.",
    longDescription: "La Gamme Artisanale représente le summum de notre savoir-faire. Chaque couteau est une pièce unique, façonnée à la main par nos maîtres couteliers. Utilisant des matériaux rares et précieux, ces couteaux sont de véritables œuvres d'art fonctionnelles, alliant beauté exceptionnelle et performance inégalée."
  }
];

const selectedProduct = ref(null);
const isModalOpen = ref(false);

const openModal = (product) => {
  selectedProduct.value = product;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style>

</style>
