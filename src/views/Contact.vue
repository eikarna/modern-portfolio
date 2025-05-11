<script setup>
import { ref } from 'vue'
import { portfolioData } from '../data/portfolioData'

import Header from '../components/Header.vue'

const contactInfo = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({})

const validateForm = () => {
  errors.value = {}
  
  if (!contactInfo.value.name.trim()) {
    errors.value.name = 'Name must be filled'
  }
  
  if (!contactInfo.value.email.trim()) {
    errors.value.email = 'Email must be filled'
  } else if (!/^\S+@\S+\.\S+$/.test(contactInfo.value.email)) {
    errors.value.email = 'Email format is not valid'
  }
  
  if (!contactInfo.value.message.trim()) {
    errors.value.message = 'Message must be filled'
  }
  
  return Object.keys(errors.value).length === 0
}

const openEmailClient = () => {
  if (!validateForm()) return
  
  const subject = encodeURIComponent('Pesan dari Portfolio Kamu')
  const body = encodeURIComponent(
    `Nama: ${contactInfo.value.name}\n\n` +
    `Pesan:\n${contactInfo.value.message}`
  )
  
  window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}&from=${contactInfo.value.email}`
}
</script>

<template>
  <div class="min-h-screen">
    <Header />
    
    <main class="container mx-auto px-4 py-20">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold mb-8 gradient-text">Get in Touch</h1>

        <div class="bg-blue-100 p-6 rounded-lg mb-8">
          <p class="text-blue-800">
            📧 This form will open your default email client with your message pre-filled.
          </p>
        </div>

        <div class="space-y-6">
          <div>
            <label class="block text-gray-700 mb-2 font-medium">Name</label>
            <input
              v-model="contactInfo.name"
              type="text"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
              :class="{ 'border-red-500': errors.name }"
            >
            <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
          </div>

          <div>
            <label class="block text-gray-700 mb-2 font-medium">Your Email</label>
            <input
              v-model="contactInfo.email"
              type="email"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
              :class="{ 'border-red-500': errors.email }"
            >
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
          </div>

          <div>
            <label class="block text-gray-700 mb-2 font-medium">Message</label>
            <textarea
              v-model="contactInfo.message"
              rows="5"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
              :class="{ 'border-red-500': errors.message }"
            ></textarea>
            <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
          </div>

          <button
            @click="openEmailClient"
            class="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-secondary transition-colors"
          >
            Buka Aplikasi Email
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
