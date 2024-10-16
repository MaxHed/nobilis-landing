<template>
  <section id="contact" class="py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-12 font-serif text-gold">Contactez-nous</h2>
      <p class="text-xl mb-10">Pour une création sur-mesure ou toute demande spécifique, notre équipe est à votre écoute.</p>
      
      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          <input v-model="form.name" type="text" name="name" placeholder="Votre nom" required
                 class="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-gold focus:outline-none">
        </div>
        <div>
          <input v-model="form.email" type="email" name="email" placeholder="Votre email" required
                 class="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-gold focus:outline-none">
        </div>
        <div>
          <textarea v-model="form.message" name="message" rows="4" placeholder="Votre message" required
                    class="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-gold focus:outline-none"></textarea>
        </div>
        <div>
          <button type="submit" class="inline-block bg-gold text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-white transition duration-300 uppercase tracking-wider">
            Envoyer
          </button>
        </div>
      </form>
      
      <div v-if="message" :class="messageClass" class="mt-6">
        {{ message }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRuntimeConfig } from '#app'



const config = useRuntimeConfig()

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const message = ref('')
const messageClass = ref('')

const submitForm = async () => {
  if (!validateForm()) {
    return
  }
  
  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })
    
    if (response.status === 'success') {
      showMessage(response.message, 'success')
      resetForm()
    } else {
      showMessage(response.message, 'error')
    }
  } catch (error) {
    showMessage('Une erreur est survenue. Veuillez réessayer.', 'error')
    console.error('Error:', error)
  }
}

const validateForm = () => {
  const name = document.querySelector('input[name="name"]').value.trim()
  const email = document.querySelector('input[name="email"]').value.trim()
  const message = document.querySelector('textarea[name="message"]').value.trim()

  if (name === '' || email === '' || message === '') {
    showMessage('Veuillez remplir tous les champs.', 'error')
    return false
  }

  if (!isValidEmail(email)) {
    showMessage('Veuillez entrer une adresse email valide.', 'error')
    return false
  }

  return true
}

const isValidEmail = (email) => {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return re.test(email)
}

const showMessage = (msg, type) => {
  message.value = msg
  messageClass.value = `message ${type} p-4 rounded-md text-white`
  // Vous pouvez gérer le style directement dans le template avec :style
}

const escapeHtml = (unsafe) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
.message {
  @apply p-4 rounded-md text-white;
}
.message.success {
  @apply bg-green-600;
}
.message.error {
  @apply bg-red-600;
}
</style>
