<script setup>
import { RouterView } from 'vue-router'
import { useHead } from '@vueuse/head'
import { SpeedInsights } from '@vercel/speed-insights/vue';

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
  <SpeedInsights />
  <RouterView v-slot="{ Component }">
    <KeepAlive include="Home">
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>
