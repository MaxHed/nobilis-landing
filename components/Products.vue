<template>
  <section id="products" class="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold mb-16 text-center font-serif text-gold">Nos Collections</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <!-- Carte de produit 1 -->
                <div class="bg-black rounded-lg overflow-hidden shadow-lg border border-gold">
                    <img src="~/assets/images/knife3.jpg" alt="Couteau de luxe" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2 text-gold">Collection Classique</h3>
                        <p class="text-gray-300 mb-4">Notre gamme de couteaux classiques allie élégance intemporelle et performance exceptionnelle.</p>
                        <a href="#" class="inline-block bg-gold text-black px-4 py-2 rounded-full font-semibold hover:bg-white transition duration-300">Découvrir</a>
                    </div>
                </div>
                
                <!-- Carte de produit 2 -->
                <div class="bg-black rounded-lg overflow-hidden shadow-lg border border-gold">
                    <img src="~/assets/images/knife2.jpg" alt="Couteau de chef" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2 text-gold">Série Professionnelle</h3>
                        <p class="text-gray-300 mb-4">Conçue pour les chefs exigeants, cette série offre précision et confort pour une expérience culinaire sans égal.</p>
                        <a href="#" class="inline-block bg-gold text-black px-4 py-2 rounded-full font-semibold hover:bg-white transition duration-300">Explorer</a>
                    </div>
                </div>
                
                <!-- Nouvelle carte de produit 3 -->
                <div class="bg-black rounded-lg overflow-hidden shadow-lg border border-gold">
                    <img src="~/assets/images/knife.jpg" alt="Couteau fait main" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-2 text-gold">Gamme Artisanale</h3>
                        <p class="text-gray-300 mb-4">Notre collection faite main incarne l'excellence artisanale, chaque pièce étant unique et façonnée avec passion.</p>
                        <a href="#" class="inline-block bg-gold text-black px-4 py-2 rounded-full font-semibold hover:bg-white transition duration-300">Découvrir</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
