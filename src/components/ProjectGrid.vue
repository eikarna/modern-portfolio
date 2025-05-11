<script setup>
import { portfolioData } from '../data/portfolioData'
import LazyImage from './LazyImage.vue'

const projects = portfolioData.projects
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    <router-link 
      v-for="project in projects"
      :key="project.id"
      :to="`/projects/${project.id}`"
      class="group block overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div class="relative aspect-video overflow-hidden">
        <LazyImage 
          :src="`/images/projects/${project.image}`"
          :placeholder="`/images/projects/placeholder/${project.image}`"
          :alt="project.title"
          class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      </div>
      
      <div class="p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
        <p class="text-gray-600 line-clamp-3 mb-4">{{ project.description }}</p>
        
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="(tech, index) in project.tech"
            :key="index"
            class="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </router-link>
  </div>
</template>
