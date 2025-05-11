<script setup>
import { portfolioData } from '../data/portfolioData'
import Header from '../components/Header.vue'
import ProjectGrid from '../components/ProjectGrid.vue'
</script>

<template>
  <div class="min-h-screen">
    <Header />
    
    <main class="container mx-auto px-4 py-20">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8 gradient-text">All Projects</h1>
        <div v-if="portfolioData.projects.length">
          <ProjectGrid />
        </div>
        <div v-else class="text-center py-12">
          <p class="text-xl text-gray-600 mb-4">No projects to display yet</p>
          <router-link 
            to="/" 
            class="text-primary hover:text-secondary transition-colors"
          >
            Back to Home
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>
