<template>
  <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
    <div class="bg-gray-100 px-6 py-5 border-b border-gray-200">
      <h2 class="text-gray-700 text-xl font-semibold">AI Data Strategy Approaches</h2>
      <p class="text-gray-500 text-sm mt-1">
        Your AI capabilities will only be as strong as the quality of your data
      </p>
    </div>
    
    <div class="p-5">
      <div class="flex gap-4 mb-6">
        <button
          @click="activeApproach = 'cleansing'"
          :class="[
            'flex items-center px-4 py-2 rounded-lg transition-all duration-200',
            activeApproach === 'cleansing' 
              ? 'bg-amber-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          ]"
        >
          <div :class="[
            'p-1 mr-2 rounded-full flex items-center justify-center',
            activeApproach === 'cleansing' ? 'bg-white bg-opacity-20' : 'bg-amber-100'
          ]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-zap"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
          </div>
          <span class="font-medium">Cleansing as You Build</span>
        </button>
        
        <button
          @click="activeApproach = 'foundation'"
          :class="[
            'flex items-center px-4 py-2 rounded-lg transition-all duration-200',
            activeApproach === 'foundation' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          ]"
        >
          <div :class="[
            'p-1 mr-2 rounded-full flex items-center justify-center',
            activeApproach === 'foundation' ? 'bg-white bg-opacity-20' : 'bg-blue-100'
          ]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
          </div>
          <span class="font-medium">Foundational Cleansing</span>
        </button>
      </div>
      
      <div v-if="activeApproach === 'cleansing'">
        <div class="bg-gray-50 rounded-lg p-5 mb-6">
          <div class="flex items-center mb-4">
            <div class="p-3 rounded-full mr-3 bg-amber-100 text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-zap"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
            </div>
            <div>
              <h3 class="font-bold text-lg text-amber-600">Cleansing as You Build</h3>
            </div>
          </div>
          
          <p class="text-gray-600 mb-4">Data refinement is embedded directly into the development of each new AI use case. For example, when building a customer support model, teams might begin by cleaning and standardizing ticket data.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-medium text-sm text-gray-500 uppercase flex items-center mb-3">
                <span class="text-green-500 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                </span>
                <span>Advantages</span>
              </h4>
              <ul class="space-y-2">
                <li class="text-sm text-gray-700 flex items-start">
                  <div class="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div class="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  </div>
                  <span>Shows value immediately</span>
                </li>
                <li class="text-sm text-gray-700 flex items-start">
                  <div class="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div class="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  </div>
                  <span>Ties directly to business outcomes</span>
                </li>
                <li class="text-sm text-gray-700 flex items-start">
                  <div class="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div class="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  </div>
                  <span>Iterative, outcome-driven investment</span>
                </li>
                <li class="text-sm text-gray-700 flex items-start">
                  <div class="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div class="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  </div>
                  <span>Builds momentum for AI adoption</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-medium text-sm text-gray-500 uppercase flex items-center mb-3">
                <span class="text-red-500 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-x-circle"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                </span>
                <span>Challenges</span>
              </h4>
              <ul class="space-y-2">
                <li class="text-sm text-gray-700 flex items-start">
                  <div class="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div class="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  </div>
                  <span>May create inconsistent data practices</span>
                </li>
                <li class="text-sm text-gray-700 flex items-start">
                  <div class="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div class="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  </div>
                  <span>Requires strong data/AI team alignment</span>
                </li>
                <li class="text-sm text-gray-700 flex items-start">
                  <div class="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div class="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  </div>
                  <span>Can result in duplicated efforts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="activeApproach === 'foundation'">
        <div class="bg-gray-50 rounded-lg p-5 mb-6">
          <div class="flex items-center mb-4">
            <div class="p-3 rounded-full mr-3 bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
            </div>
            <div>
              <h3 class="font-bold text-lg text-blue-600">Foundational Cleansing</h3>
            </div>
          </div>
          
          <p class="text-gray-600 mb-4">Organizations launch standalone data improvement projects that aren't tied to a specific AI use case but are intended to serve as a backbone for many, such as harmonizing customer records across systems.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-medium text-sm text-gray-500 uppercase flex items-center mb-3">
                <span class="text-green-500 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                </span>
                <span>Advantages</span>
              </h4>
              <ul class="space-y-2">
                <li class="text-sm text-gray-700 flex items-start">
                  <div class="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div class="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  </div>
                  <span>Creates consistent, reusable datasets</span>
                </li>
                <li class="text-sm text-gray-700 flex items-start">
                  <div class="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div class="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  </div>
                  <span>Enables faster AI development long-term</span>
                </li>
                <li class="text-sm text-gray-700 flex items-start">
                  <div class="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div class="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  </div>
                  <span>Establishes enterprise data standards</span>
                </li>
                <li class="text-sm text-gray-700 flex items-start">
                  <div class="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div class="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  </div>
                  <span>Exponential returns over time</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-medium text-sm text-gray-500 uppercase flex items-center mb-3">
                <span class="text-red-500 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-x-circle"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                </span>
                <span>Challenges</span>
              </h4>
              <ul class="space-y-2">
                <li class="text-sm text-gray-700 flex items-start">
                  <div class="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div class="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  </div>
                  <span>Long time-to-value (months or years)</span>
                </li>
                <li class="text-sm text-gray-700 flex items-start">
                  <div class="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div class="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  </div>
                  <span>May not align with high-value AI cases</span>
                </li>
                <li class="text-sm text-gray-700 flex items-start">
                  <div class="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div class="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  </div>
                  <span>Harder to demonstrate immediate ROI</span>
                </li>
                <li class="text-sm text-gray-700 flex items-start">
                  <div class="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                    <div class="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  </div>
                  <span>Risk of stalled AI initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-amber-50 border border-amber-100 rounded-lg p-4">
        <div class="flex">
          <span class="text-amber-500 mr-3 flex-shrink-0 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
          </span>
          <div>
            <h3 class="font-bold text-amber-800 mb-1">Pragmatic Recommendation</h3>
            <p class="text-amber-700 text-sm">
              Unless data quality is actively impeding day-to-day operations, the "Cleansing as You Build" approach 
              is often the more pragmatic path forward. It allows you to show value early, build momentum, and 
              refine data with clear purpose, tied directly to business outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeApproach = ref('cleansing');
</script>