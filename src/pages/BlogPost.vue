<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div v-if="post">
      <!-- Header -->
      <div class="mb-10 text-center">
        <div class="flex items-center justify-center text-sm text-gray-500 mb-3">
          <span>{{ post.date }}</span>
          <span class="mx-2">•</span>
          <span>{{ post.category }}</span>
        </div>
        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">{{ post.title }}</h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">{{ post.excerpt }}</p>
      </div>
      
      <!-- Featured Image -->
      <div v-if="post.image" class="mb-10 rounded-xl overflow-hidden shadow-lg">
        <img :src="post.image" :alt="post.title" class="w-full h-auto object-cover">
      </div>
      
      <!-- Content -->
      <div v-html="post.content"></div>
      
      <!-- Author Info -->
      <div class="mt-16 pt-8 border-t border-gray-200">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img src="/src/assets/images/team-meeting.png" alt="Jean Malan" class="h-16 w-16 rounded-full object-cover shadow-md">
          </div>
          <div class="ml-4">
            <h3 class="text-xl font-medium text-gray-900">Jean Malan</h3>
            <p class="text-gray-600">Insights at the intersection of business, tech, and politics.</p>
          </div>
        </div>
      </div>
      
      <!-- Social Share -->
      <div class="mt-8 pt-6 border-t border-gray-200">
        <div class="flex items-center justify-between">
          <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Share this article</h4>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-blue-500">
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-700">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-700">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Back to Blog -->
      <div class="mt-8">
        <router-link to="/blog" class="inline-flex items-center text-indigo-600 hover:text-indigo-900 font-medium">
          <svg class="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all articles
        </router-link>
      </div>
    </div>
    <div v-else class="text-center py-16">
      <p class="text-xl text-gray-600">Loading post...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import blogPosts from '../data/blogPosts';

// Lazy load the DataStrategyVisual component
const DataStrategyVisual = defineAsyncComponent(() => 
  import('../components/blog/tech/DataStrategyVisual.vue')
);

const route = useRoute();
const slug = computed(() => route.params.slug);

const post = ref(null);

onMounted(() => {
  // Find the post with the matching slug
  post.value = blogPosts.find(p => p.slug === slug.value);
  
  // If post not found, could redirect to 404 or blog index
  if (!post.value) {
    console.error('Post not found');
    // Could add router.push('/blog') here
  }
  
  // Scroll to top on page load
  window.scrollTo(0, 0);
});
</script>

<style>
/* Add additional prose styles to complement TailwindCSS */
.prose h2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1.25rem;
  color: #1e293b;
  line-height: 1.3;
}

.prose h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #334155;
}

.prose p {
  margin-bottom: 1.25rem;
  line-height: 1.7;
}

.prose strong {
  font-weight: 600;
  color: #334155;
}

.prose ul {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.prose ul li {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.prose blockquote {
  font-style: italic;
  color: #4b5563;
  border-left-width: 4px;
  border-left-color: #e5e7eb;
  padding-left: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
</style>