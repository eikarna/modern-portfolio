<script setup>
import { computed } from 'vue'

const props = defineProps({
  skill: {
    type: Object,
    required: true
  }
})

const progressStyle = computed(() => ({
  width: `${props.skill.level}%`
}))
</script>

<template>
  <div class="group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
    <div class="flex justify-between items-center mb-4">
      <span class="text-lg font-semibold text-gray-800">{{ skill.name }}</span>
      <span class="text-primary font-bold">{{ skill.level }}%</span>
    </div>
    <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
      <div 
        class="h-full bg-gradient-to-r transition-all duration-1000 ease-out"
        :class="skill.color"
        :style="progressStyle"
      />
    </div>
  </div>
</template>
