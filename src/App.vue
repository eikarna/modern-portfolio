<script setup>
import { RouterView } from 'vue-router'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Your Name - Portfolio',
  meta: [
    { name: 'description', content: 'Professional portfolio showcasing skills and projects' },
    { name: 'keywords', content: 'Vue.js, Web Development, Portfolio' }
  ],
  link: [
    { rel: 'preload', href: '/public/images/hero-bg.webp', as: 'image' }
  ]
})
</script>

<template>
  <RouterView v-slot="{ Component }">
    <KeepAlive include="Home">
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>
