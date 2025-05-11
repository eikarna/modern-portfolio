<template>
  <header class="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
    <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
      <router-link to="/" class="text-xl font-bold text-primary hover:text-secondary transition-colors">
        Your Logo
      </router-link>
      <div class="flex space-x-6">
        <router-link 
          v-for="(link, index) in navLinks"
          :key="index"
          :to="link.path"
          class="hover:text-secondary transition-colors"
          active-class="text-secondary font-medium"
        >
          {{ link.name }}
        </router-link>
      </div>
    </nav>
    <div class="absolute bottom-0 h-1 bg-primary/20 w-full">
      <div 
        class="h-full bg-primary transition-all duration-300"
        :style="{ width: `${progress}%` }"
      ></div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const navLinks = ref([
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
])
import useScrollProgress from '../composables/useScrollProgress.js'
const { progress } = useScrollProgress()
</script>
