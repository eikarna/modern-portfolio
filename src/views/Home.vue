<template>
  <div class="min-h-screen">
    <Header />
    
    <main class="container pt-24 pb-16 space-y-24">
      <!-- Skills Section -->
      <section v-if="portfolioData.skills.length">
        <h2 class="text-4xl font-bold text-center mb-12 gradient-text">Technical Expertise</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard 
            v-for="skill in portfolioData.skills" 
            :key="skill.name" 
            :skill="skill" 
          />
        </div>
      </section>

      <!-- Projects Section -->
      <section v-if="portfolioData.projects.length">
        <h2 class="text-4xl font-bold text-center mb-12 gradient-text">Featured Work</h2>
        <ProjectGrid />
      </section>

      <!-- Experience Section -->
      <section v-if="portfolioData.experience.length">
        <h2 class="text-4xl font-bold text-center mb-16 gradient-text">Professional Journey</h2>
        <ExperienceTimeline />
      </section>
    </main>
  </div>
  <div class="text-center py-4 text-sm text-gray-500">
      ©  {{ year }} {{ portfolioData.fullName }}. All rights reserved.
  </div>
</template>

<script setup>
import { portfolioData } from '../data/portfolioData'
import Header from '../components/Header.vue'
import SkillCard from '../components/SkillCard.vue'
import ProjectGrid from '../components/ProjectGrid.vue'
import ExperienceTimeline from '../components/ExperienceTimeline.vue'

const year = new Date().getFullYear()
</script>
