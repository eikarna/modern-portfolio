import { ref, onMounted, onUnmounted } from 'vue'
import { useScroll } from '@vueuse/core'

export default function useScrollProgress() {
  const progress = ref(0)
  const { y: scrollY } = useScroll(window)

  const calculateProgress = () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight
    progress.value = (scrollY.value / windowHeight) * 100
  }

  onMounted(() => {
    window.addEventListener('scroll', calculateProgress)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', calculateProgress)
  })

  return {
    progress
  }
}
