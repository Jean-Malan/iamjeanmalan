<template>
  <div class="relative h-screen w-full overflow-hidden">
    <!-- Background image -->
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('../../src/assets/images/background.jpg')"></div>
    
    <!-- Overlay to ensure text readability -->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    
    <!-- Content -->
    <div class="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
      <h1 class="text-5xl md:text-6xl font-bold mb-2">Jean Malan</h1>
      <p class="text-xl md:text-2xl font-light uppercase tracking-widest mb-6">Insights, Innovation, Impact</p>
      <p class="text-lg md:text-xl max-w-2xl">Bridging Business, Tech, and Politics</p>
      
      <!-- Call to action -->
      <div class="mt-8">
        <a href="/blog" class="bg-white text-gray-900 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors">
          Read My Blog
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// No imports needed
</script>