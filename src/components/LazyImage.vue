<template>
  <img 
    :src="placeholder" 
    :data-src="src" 
    :alt="alt"
    class="lazy-load"
    @load="handleImageLoad"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  src: String,
  alt: String,
  placeholder: String
})

const imageLoaded = ref(false)

const handleImageLoad = () => {
  imageLoaded.value = true
}

onMounted(() => {
  const img = document.querySelector('.lazy-load')
  const { stop } = useIntersectionObserver(img, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      img.src = img.dataset.src
      stop()
    }
  })
})
</script>
