<template>
  <div class="relative w-full">
    <!-- Closed State: Let's Play Button -->
    <div v-if="!isGameVisible" class="flex justify-center py-6">
      <button 
        @click="toggleGame" 
        class="bg-blue-50 hover:bg-blue-100 text-blue-700 py-3 px-6 rounded-lg shadow-sm border border-blue-100 transition-all flex items-center space-x-2"
      >
        <svg class="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
        </svg>
        <span>Let's Play: AI Strategy Navigator</span>
      </button>
    </div>
    
    <!-- Open State: Game UI -->
    <div v-else class="relative w-full bg-white rounded-xl overflow-hidden shadow-sm border border-blue-50 p-6">
      <!-- Close Button -->
      <button 
        @click="toggleGame" 
        class="absolute top-3 right-3 text-gray-300 hover:text-gray-500 z-10"
        aria-label="Close game"
      >
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    
      <!-- Game Header -->
      <div class="text-center mb-6">
        <h2 class="text-2xl font-bold text-gray-700">AI Strategy Navigator</h2>
        <p class="text-sm text-gray-500 max-w-md mx-auto mt-1">
          Build a balanced AI strategy while avoiding overcommitment
        </p>
      </div>

      <!-- Game Status Information -->
      <div class="flex justify-between mb-6 px-4">
        <!-- Round Info -->
        <div class="bg-blue-50 p-3 rounded-lg shadow-sm border border-blue-100">
          <span class="text-xs text-blue-400">Round</span>
          <div class="text-xl font-bold text-blue-700">{{ currentRound }}/{{ totalRounds }}</div>
        </div>
        
        <!-- Resources -->
        <div class="bg-amber-50 p-3 rounded-lg shadow-sm border border-amber-100">
          <span class="text-xs text-amber-400">Resources</span>
          <div class="text-xl font-bold text-amber-700">{{ resources }}</div>
        </div>
        
        <!-- Agility Score -->
        <div class="bg-green-50 p-3 rounded-lg shadow-sm border border-green-100">
          <span class="text-xs text-green-400">Agility</span>
          <div class="text-xl font-bold text-green-700">{{ agility }}</div>
        </div>
      </div>

      <!-- Game Board -->
      <div v-if="!gameOver" class="relative bg-white rounded-lg shadow-sm border border-blue-50 p-4 mb-6">
        <!-- Scenario Display -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-700">{{ currentScenario.title }}</h3>
          <p class="text-gray-600 mt-2">{{ currentScenario.description }}</p>
        </div>

        <!-- Strategy Options -->
        <div class="space-y-3">
          <div 
            v-for="(option, index) in currentScenario.options" 
            :key="index"
            @click="selectOption(option)"
            class="flex p-4 rounded-lg transition-all cursor-pointer hover:shadow-sm"
            :class="selectedOption === option ? 'bg-blue-50 border-2 border-blue-200' : 'bg-white border border-gray-200'"
          >
            <div class="flex-1">
              <p class="font-medium text-gray-700">{{ option.text }}</p>
              <div class="mt-2 flex flex-wrap gap-2">
                <span v-if="option.practical > 0" class="text-xs px-2 py-1 bg-amber-50 text-amber-700 rounded-full">Practical +{{ option.practical }}</span>
                <span v-if="option.innovative > 0" class="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full">Innovative +{{ option.innovative }}</span>
                <span v-if="option.foundational > 0" class="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full">Foundational +{{ option.foundational }}</span>
                <span v-if="option.agile > 0" class="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded-full">Agility +{{ option.agile }}</span>
                <span v-if="option.resources < 0" class="text-xs px-2 py-1 bg-red-50 text-red-700 rounded-full">Resources {{ option.resources }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Button -->
        <div class="mt-6 flex justify-end">
          <button 
            @click="confirmSelection" 
            class="px-6 py-2 rounded-lg transition-all"
            :disabled="!selectedOption"
            :class="selectedOption ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'"
          >
            Confirm Strategy
          </button>
        </div>
      </div>

      <!-- Game Over Screen -->
      <div v-else class="relative bg-white rounded-lg shadow-sm border border-blue-50 p-6 mb-6">
        <h3 class="text-xl font-bold text-center text-gray-700 mb-4">Strategy Development Complete</h3>
        
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="bg-gradient-to-br from-amber-50 to-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 class="font-medium text-gray-700">AI Balance</h4>
            <div class="mt-3 h-6 bg-white rounded-full overflow-hidden shadow-sm">
              <div 
                class="h-full bg-gradient-to-r from-amber-100 to-blue-100" 
                :style="{ width: `${balancePercentage}%` }"
              ></div>
            </div>
            <div class="flex justify-between mt-1 text-xs">
              <span class="text-amber-600">Practical</span>
              <span class="text-blue-600">Innovative</span>
            </div>
            <p class="mt-3 text-sm text-gray-600">{{ balanceFeedback }}</p>
          </div>
          
          <div class="bg-gradient-to-br from-green-50 to-purple-50 p-4 rounded-lg border border-green-100">
            <h4 class="font-medium text-gray-700">Future Readiness</h4>
            <div class="flex items-center justify-center h-24">
              <span class="text-4xl font-bold" :class="readinessTextColor">{{ readinessScore }}</span>
            </div>
            <p class="mt-3 text-sm text-gray-600">{{ readinessFeedback }}</p>
          </div>
        </div>
        
        <div class="text-center">
          <p class="text-lg text-gray-600 mb-4">{{ finalMessage }}</p>
          <button @click="resetGame" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
            Play Again
          </button>
        </div>
      </div>

      <!-- Balance Meter -->
      <div class="relative my-6 mx-auto w-3/4 h-6">
        <div 
          class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-50 via-green-50 to-green-100"
        ></div>
        <div class="absolute inset-y-0 left-1/2 w-0.5 bg-white transform -translate-x-1/2"></div>
        <div 
          class="absolute top-1/2 w-5 h-5 bg-white border-2 border-gray-600 rounded-full transform -translate-y-1/2 transition-all duration-500 shadow-sm"
          :style="{ left: `calc(${balancePercentage}% - 10px)` }"
        ></div>
        <div class="absolute -bottom-6 left-0 text-xs font-medium text-gray-600">Practical</div>
        <div class="absolute -bottom-6 right-0 text-xs font-medium text-gray-600">Innovative</div>
      </div>

      <!-- AI Initiative Portfolio -->
      <div class="mt-8">
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Your AI Portfolio</h3>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h4 class="text-sm font-medium text-amber-700 mb-2">Practical Initiatives</h4>
            <ul class="space-y-2">
              <li 
                v-for="initiative in practicalInitiatives" 
                :key="initiative.id"
                class="bg-amber-50 px-3 py-2 rounded-lg border border-amber-100 text-sm text-gray-700"
              >
                {{ initiative.name }}
              </li>
              <li v-if="!practicalInitiatives.length" class="italic text-xs text-gray-400">
                No practical initiatives yet
              </li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-blue-700 mb-2">Innovative Initiatives</h4>
            <ul class="space-y-2">
              <li 
                v-for="initiative in innovativeInitiatives" 
                :key="initiative.id"
                class="bg-blue-50 px-3 py-2 rounded-lg border border-blue-100 text-sm text-gray-700"
              >
                {{ initiative.name }}
              </li>
              <li v-if="!innovativeInitiatives.length" class="italic text-xs text-gray-400">
                No innovative initiatives yet
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Event Log -->
      <div class="mt-6 bg-slate-50 rounded-lg p-3 max-h-36 overflow-y-auto border border-slate-100">
        <h4 class="text-xs font-medium text-slate-500 mb-2">Event Log</h4>
        <ul class="space-y-1">
          <li 
            v-for="(event, index) in eventLog" 
            :key="index"
            class="text-xs text-slate-600"
          >
            <span class="text-slate-400">Round {{ event.round }}:</span> {{ event.message }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive, onMounted } from 'vue';

// Toggle state for showing/hiding game
const isGameVisible = ref(false);
const toggleGame = () => {
  isGameVisible.value = !isGameVisible.value;
  
  // Reset game when opening
  if (isGameVisible.value && gameOver.value) {
    resetGame();
  }
};

// Game configuration
const totalRounds = ref(6);
const currentRound = ref(1);
const resources = ref(10);
const practicalScore = ref(0);
const innovativeScore = ref(0);
const foundationalScore = ref(0);
const agility = ref(5);
const selectedOption = ref(null);
const gameOver = ref(false);
const eventLog = ref([]);
const practicalInitiatives = ref([]);
const innovativeInitiatives = ref([]);

// Game scenarios based on the article
const scenarios = reactive([
  {
    title: "Data Foundation Challenge",
    description: "Your team has identified significant data quality issues that could impact future AI initiatives. How do you proceed?",
    options: [
      {
        text: "Launch a comprehensive data cleansing project that addresses all systems",
        practical: 2,
        innovative: 0,
        foundational: 3,
        agile: 0,
        resources: -3,
        result: "You've established a solid data foundation, but at a high cost and delay to showing immediate value.",
        initiative: { id: "p1", name: "Enterprise Data Cleansing", type: "practical" }
      },
      {
        text: "Clean data incrementally as you build specific AI use cases",
        practical: 1,
        innovative: 1,
        foundational: 1,
        agile: 2,
        resources: -1,
        result: "Your 'cleansing as you build' approach balances immediate progress with gradual data improvement.",
        initiative: { id: "p2", name: "Incremental Data Cleansing", type: "practical" }
      }
    ]
  },
  {
    title: "Operational Efficiency",
    description: "The operations team is struggling with manual workflows that are error-prone and time-consuming. What AI approach do you recommend?",
    options: [
      {
        text: "Deploy targeted process automation for the most critical workflows",
        practical: 3,
        innovative: 0,
        foundational: 1,
        agile: 1,
        resources: -2,
        result: "You've focused on high-value, low-disruption automation that delivers immediate ROI.",
        initiative: { id: "p3", name: "Process Automation", type: "practical" }
      },
      {
        text: "Create an autonomous agent system that can handle multiple operational tasks",
        practical: 0,
        innovative: 3,
        foundational: 1,
        agile: 0,
        resources: -4,
        result: "Your ambitious agent system promises dramatic efficiency gains but requires significant investment and adjustment.",
        initiative: { id: "i1", name: "Autonomous Operations Agent", type: "innovative" }
      }
    ]
  },
  {
    title: "Manufacturing Challenge",
    description: "Production equipment failures are causing costly downtime. The maintenance team wants to be more proactive.",
    options: [
      {
        text: "Implement predictive maintenance using sensor data from existing equipment",
        practical: 2,
        innovative: 1,
        foundational: 1,
        agile: 1,
        resources: -2,
        result: "Your targeted predictive maintenance solution reduces downtime while demonstrating AI's value to skeptical stakeholders.",
        initiative: { id: "p4", name: "Predictive Maintenance", type: "practical" }
      },
      {
        text: "Build a comprehensive 'digital twin' system that models all factory operations",
        practical: 0,
        innovative: 3,
        foundational: 2,
        agile: 0,
        resources: -5,
        result: "Your digital twin initiative is ambitious and could transform operations, but requires significant change management.",
        initiative: { id: "i2", name: "Factory Digital Twin", type: "innovative" }
      }
    ]
  },
  {
    title: "Customer Experience Innovation",
    description: "Marketing wants to leverage AI to create more personalized customer experiences. What approach do you recommend?",
    options: [
      {
        text: "Implement customer segmentation using existing data",
        practical: 2,
        innovative: 0,
        foundational: 1,
        agile: 2,
        resources: -1,
        result: "Your pragmatic approach improves targeting without disrupting existing processes.",
        initiative: { id: "p5", name: "Customer Segmentation", type: "practical" }
      },
      {
        text: "Build a generative AI content system for hyper-personalized communications",
        practical: 0,
        innovative: 3,
        foundational: 1,
        agile: 1,
        resources: -3,
        result: "Your innovative approach could dramatically improve engagement but requires content governance processes.",
        initiative: { id: "i3", name: "Generative Content Platform", type: "innovative" }
      }
    ]
  },
  {
    title: "AI Research Investment",
    description: "The CEO asks about establishing dedicated AI research capabilities. How do you advise structuring this initiative?",
    options: [
      {
        text: "Create a small, federated team of AI product managers embedded in business units",
        practical: 1,
        innovative: 1,
        foundational: 1,
        agile: 3,
        resources: -2,
        result: "Your federated model maintains business alignment while creating space for innovation.",
        initiative: { id: "p6", name: "Federated AI Team", type: "practical" }
      },
      {
        text: "Establish a centralized AI research center with dedicated resources and long-term charter",
        practical: 0,
        innovative: 4,
        foundational: 2,
        agile: 0,
        resources: -4,
        result: "Your research center creates space for breakthrough innovation but risks disconnection from immediate business needs.",
        initiative: { id: "i4", name: "AI Research Center", type: "innovative" }
      }
    ]
  },
  {
    title: "Technology Infrastructure",
    description: "You need to make decisions about the technical foundation for your AI initiatives. What approach do you take?",
    options: [
      {
        text: "Adopt a cloud-agnostic architecture that prevents vendor lock-in",
        practical: 1,
        innovative: 1,
        foundational: 2,
        agile: 3,
        resources: -3,
        result: "Your flexible architecture sacrifices some immediate efficiency for long-term adaptability.",
        initiative: { id: "p7", name: "Cloud-Agnostic Platform", type: "practical" }
      },
      {
        text: "Build a comprehensive internal AI platform with standardized tools and pipelines",
        practical: 1,
        innovative: 2,
        foundational: 4,
        agile: 0,
        resources: -5,
        result: "Your platform approach builds lasting capabilities but requires significant upfront investment.",
        initiative: { id: "i5", name: "Enterprise AI Platform", type: "innovative" }
      }
    ]
  }
]);

// Shuffle the scenarios for replayability
const shuffleScenarios = () => {
  // Fisher-Yates shuffle algorithm
  for (let i = scenarios.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [scenarios[i], scenarios[j]] = [scenarios[j], scenarios[i]];
  }
};

// Current scenario is determined by the current round
const currentScenario = computed(() => {
  return scenarios[currentRound.value - 1];
});

// Calculate balance percentage (0% = fully practical, 100% = fully innovative)
const balancePercentage = computed(() => {
  const total = practicalScore.value + innovativeScore.value;
  if (total === 0) return 50; // Default to middle
  return Math.min(100, Math.max(0, (innovativeScore.value / total) * 100));
});

// Generate feedback based on balance
const balanceFeedback = computed(() => {
  const percentage = balancePercentage.value;
  if (percentage < 30) return "Your strategy is heavily practical, focusing on immediate returns.";
  if (percentage < 45) return "Your approach leans practical, with some innovation.";
  if (percentage <= 55) return "You've achieved a balanced approach between practical and innovative initiatives.";
  if (percentage <= 70) return "Your strategy leans innovative, with some practical elements.";
  return "Your strategy is heavily focused on innovation and future possibilities.";
});

// Generate readiness score (combination of foundational and agility scores)
const readinessScore = computed(() => {
  return Math.round((foundationalScore.value * 0.6 + agility.value * 0.4) * 10);
});

// Text color for readiness score
const readinessTextColor = computed(() => {
  const score = readinessScore.value;
  if (score < 30) return "text-red-600";
  if (score < 60) return "text-amber-600";
  if (score < 80) return "text-blue-600";
  return "text-green-600";
});

// Generate readiness feedback
const readinessFeedback = computed(() => {
  const score = readinessScore.value;
  if (score < 30) return "Your strategy lacks the foundation and agility needed for long-term success.";
  if (score < 60) return "Your approach has some adaptability but may struggle with rapid change.";
  if (score < 80) return "You've built good foundations with reasonable flexibility for the future.";
  return "Your strategy is well-positioned to adapt and evolve as AI technology changes.";
});

// Final message based on overall performance
const finalMessage = computed(() => {
  const balance = Math.abs(balancePercentage.value - 50);
  const readiness = readinessScore.value;
  
  if (balance <= 10 && readiness >= 70) {
    return "Outstanding! You've created a balanced AI strategy with strong foundations and adaptability.";
  } else if (readiness >= 70) {
    return "Solid performance! Your strategy has good future-readiness, though balance could be improved.";
  } else if (balance <= 10) {
    return "Promising approach! You've balanced practical and innovative, but could strengthen foundations.";
  } else if (resources.value <= 0) {
    return "You've overcommitted resources and may struggle to sustain your AI initiatives.";
  } else {
    return "Your AI strategy has some promising elements but needs more cohesion and future-proofing.";
  }
});

// Game actions
const selectOption = (option) => {
  selectedOption.value = option;
};

const confirmSelection = () => {
  if (!selectedOption.value) return;
  
  const option = selectedOption.value;
  
  // Update scores
  practicalScore.value += option.practical;
  innovativeScore.value += option.innovative;
  foundationalScore.value += option.foundational;
  agility.value += option.agile;
  resources.value += option.resources;
  
  // Add selected initiative to portfolio
  if (option.initiative) {
    if (option.initiative.type === "practical") {
      practicalInitiatives.value.push(option.initiative);
    } else {
      innovativeInitiatives.value.push(option.initiative);
    }
  }
  
  // Log the event
  eventLog.value.unshift({
    round: currentRound.value,
    message: option.result
  });
  
  // Check for resource depletion
  if (resources.value <= 0) {
    gameOver.value = true;
    eventLog.value.unshift({
      round: currentRound.value,
      message: "You've depleted your resources! Strategy development ended early."
    });
    return;
  }
  
  // Advance to next round or end game
  if (currentRound.value >= totalRounds.value) {
    gameOver.value = true;
  } else {
    currentRound.value++;
    selectedOption.value = null;
  }
};

const resetGame = () => {
  // Reset all game state
  currentRound.value = 1;
  resources.value = 10;
  practicalScore.value = 0;
  innovativeScore.value = 0;
  foundationalScore.value = 0;
  agility.value = 5;
  selectedOption.value = null;
  gameOver.value = false;
  eventLog.value = [];
  practicalInitiatives.value = [];
  innovativeInitiatives.value = [];
  
  // Shuffle scenarios for a new experience
  shuffleScenarios();
};

// Initialize the game
onMounted(() => {
  shuffleScenarios();
  eventLog.value.push({
    round: 0,
    message: "Your AI strategy development journey begins!"
  });
});
</script>