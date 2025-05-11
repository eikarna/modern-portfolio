<script setup>
import { portfolioData } from '../data/portfolioData'

const experiences = portfolioData.experience
</script>

<template>
  <div class="relative max-w-4xl mx-auto">
    <!-- Garis vertikal tengah -->
    <div class="absolute left-1/2 w-1 bg-gray-200 h-full -translate-x-1/2 hidden md:block"></div>
    
    <!-- Container utama untuk timeline -->
    <div class="space-y-12">
      <!-- Item timeline -->
      <div 
        v-for="(exp, index) in experiences"
        :key="index"
        class="relative flex md:justify-between odd:md:flex-row-reverse"
      >
        <!-- Dot timeline -->
        <div class="hidden md:flex w-1/2 items-center justify-center">
          <div class="w-4 h-4 bg-primary rounded-full ring-4 ring-white z-10"></div>
        </div>

        <!-- Konten timeline -->
        <div class="w-full md:w-1/2 p-4">
          <div class="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
            
            <!-- Konten -->
            <div class="space-y-3">
              <div>
                <h3 class="text-xl font-bold text-gray-800">{{ exp.role }}</h3>
                <p class="text-gray-500">{{ exp.company }}</p>
                <p class="text-sm text-primary mt-1">{{ exp.duration }}</p>
              </div>
              
              <ul class="space-y-2 text-gray-600">
                <li 
                  v-for="(achievement, i) in exp.achievements"
                  :key="i"
                  class="flex items-start gap-2"
                >
                  <svg class="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>{{ achievement }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
