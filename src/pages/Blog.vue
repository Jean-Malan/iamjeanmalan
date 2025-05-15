<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Blog</h1>
    
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <!-- Feature post -->
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="h-48 bg-gray-200 overflow-hidden">
          <img src="/src/assets/images/women-tablet-metrics.png" alt="AI Without Overcommitting" class="w-full h-full object-cover">
        </div>
        <div class="p-6">
          <div class="flex items-center text-sm text-gray-500 mb-2">
            <span>May 13, 2025</span>
            <span class="mx-2">•</span>
            <span>Technology</span>
          </div>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">The Art of Building AI Without Overcommitting</h2>
          <p class="text-gray-600 mb-4">Navigating the balance between innovation and practical implementation in AI projects.</p>
          <router-link to="/blog/ai-without-overcommitting" class="text-indigo-600 hover:text-indigo-900 font-medium">
            Read more →
          </router-link>
        </div>
      </div>
      
      <!-- Other posts -->
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="h-48 bg-gray-200 overflow-hidden">
          <img src="/src/assets/images/team-meeting.png" alt="Business Strategy" class="w-full h-full object-cover">
        </div>
        <div class="p-6">
          <div class="flex items-center text-sm text-gray-500 mb-2">
            <span>Apr 25, 2025</span>
            <span class="mx-2">•</span>
            <span>Business</span>
          </div>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">Business Strategy for Uncertain Times</h2>
          <p class="text-gray-600 mb-4">How to develop resilient business strategies that can weather economic and social changes.</p>
          <span class="text-gray-400 text-sm italic">Coming soon</span>
        </div>
      </div>
      
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="h-48 bg-gray-200 overflow-hidden">
          <img src="/src/assets/images/women-tablet.png" alt="Politics and Innovation" class="w-full h-full object-cover">
        </div>
        <div class="p-6">
          <div class="flex items-center text-sm text-gray-500 mb-2">
            <span>Apr 15, 2025</span>
            <span class="mx-2">•</span>
            <span>Politics</span>
          </div>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">The Intersection of Politics and Innovation</h2>
          <p class="text-gray-600 mb-4">Understanding how policy decisions shape the trajectory of technological innovation.</p>
          <span class="text-gray-400 text-sm italic">Coming soon</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Hardcoded blog posts for now, will be moved to data files when more posts are added
</script>