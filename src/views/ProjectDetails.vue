<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { portfolioData } from '../data/portfolioData'
import LazyImage from '../components/LazyImage.vue'

const route = useRoute()
const project = computed(() => 
  portfolioData.projects.find(p => p.id === route.params.id)
)
</script>

<template>
  <div class="container mx-auto px-4 py-20">
    <router-link 
      to="/projects" 
      class="mb-8 inline-flex items-center text-primary hover:text-secondary transition-colors"
    >
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
      </svg>
      Back to Projects
    </router-link>

    <div v-if="project" class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-6">{{ project.title }}</h1>
      
      <LazyImage 
        :src="`/images/projects/${project.image}`"
        :placeholder="`/images/projects/placeholder/${project.image}`"
        :alt="project.title"
        class="rounded-xl mb-8 shadow-lg"
      />

      <div class="prose max-w-none mb-8">
        <p class="text-xl text-gray-600">{{ project.description }}</p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <div>
          <h3 class="text-2xl font-semibold mb-4">Technologies Used</h3>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="(tech, index) in project.tech" 
              :key="index"
              class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div v-if="project.links" class="md:text-right">
          <h3 class="text-2xl font-semibold mb-4">Links</h3>
          <div class="space-y-2">
            <a 
              v-for="(link, name) in project.links" 
              :key="name"
              :href="link"
              class="inline-flex items-center text-primary hover:text-secondary transition-colors"
            >
              <span class="capitalize">{{ name }}</span>
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20">
      <h2 class="text-3xl font-bold mb-4">Project not found</h2>
      <router-link to="/projects" class="text-primary hover:text-secondary">
        View all projects
      </router-link>
    </div>
  </div>
</template>
