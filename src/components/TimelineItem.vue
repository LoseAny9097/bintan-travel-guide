<template>
  <div 
    :class="[
      'timeline-item',
      {
        'active': isActive,
        'completed': isCompleted,
        'border-bintan-coral': isActive,
        'border-bintan-green': isCompleted
      }
    ]"
  >
    <!-- 时间标签 -->
    <div class="flex items-center mb-2">
      <span 
        :class="[
          'inline-block px-3 py-1 rounded-full text-sm font-medium',
          {
            'bg-bintan-coral text-white': isActive,
            'bg-bintan-green text-white': isCompleted,
            'bg-gray-200 text-gray-600': !isActive && !isCompleted
          }
        ]"
      >
        {{ item.time }}
      </span>
      <span v-if="isActive" class="ml-2 text-sm text-bintan-coral font-medium animate-pulse">
        进行中
      </span>
    </div>

    <!-- 主要内容 -->
    <div class="card mb-4">
      <div class="flex items-start justify-between mb-3">
        <h3 class="text-lg font-semibold text-gray-900">{{ item.title }}</h3>
        <button
          @click="toggleExpanded"
          class="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg 
            :class="['w-5 h-5 transform transition-transform', { 'rotate-180': isExpanded }]"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>

      <!-- 位置信息 -->
      <div v-if="item.location" class="flex items-center mb-3">
        <svg class="w-4 h-4 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
        </svg>
        <span class="text-gray-700">{{ item.location }}</span>
        <button
          v-if="item.gps"
          @click="copyGPS"
          class="gps-btn ml-2"
          title="复制GPS坐标"
        >
          <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
          </svg>
          GPS
        </button>
      </div>

      <!-- 描述 -->
      <p class="text-gray-600 mb-4">{{ item.description }}</p>

      <!-- 展开内容 -->
      <div v-if="isExpanded" class="space-y-4 animate-slide-up">
        <!-- 行动清单 -->
        <div v-if="item.actions && item.actions.length" class="bg-blue-50 p-4 rounded-lg">
          <h4 class="font-medium text-blue-900 mb-2">需要做的事情</h4>
          <ul class="space-y-1">
            <li v-for="action in item.actions" :key="action" class="flex items-center text-blue-800">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ getActionText(action) }}
            </li>
          </ul>
        </div>

        <!-- 相关对话 -->
        <div v-if="item.dialogues && item.dialogues.length" class="bg-green-50 p-4 rounded-lg">
          <h4 class="font-medium text-green-900 mb-3">常用对话</h4>
          <div class="space-y-3">
            <div 
              v-for="(dialogue, index) in item.dialogues" 
              :key="index"
              class="bg-white p-3 rounded border border-green-200"
            >
              <div class="flex items-start justify-between mb-2">
                <span class="text-sm font-medium text-green-700">{{ dialogue.scenario }}</span>
                <VoicePlayer :text="dialogue.english" />
              </div>
              <div class="space-y-1">
                <p class="text-gray-800 font-medium">{{ dialogue.english }}</p>
                <p class="text-gray-600">{{ dialogue.chinese }}</p>
                <p v-if="dialogue.pronunciation" class="text-xs text-gray-500 font-mono">
                  {{ dialogue.pronunciation }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 小贴士 -->
        <div v-if="item.tips && item.tips.length" class="bg-yellow-50 p-4 rounded-lg">
          <h4 class="font-medium text-yellow-900 mb-2">💡 小贴士</h4>
          <ul class="space-y-1">
            <li v-for="tip in item.tips" :key="tip" class="text-yellow-800 text-sm">
              • {{ tip }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- GPS复制成功提示 -->
    <div
      v-if="showGPSCopied"
      class="fixed top-4 right-4 bg-bintan-sand text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in"
    >
      GPS坐标已复制
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import VoicePlayer from './VoicePlayer.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  currentTime: {
    type: String,
    default: ''
  }
})

const isExpanded = ref(false)
const showGPSCopied = ref(false)

const isActive = computed(() => {
  return props.currentTime === props.item.time
})

const isCompleted = computed(() => {
  if (!props.currentTime) return false
  return props.item.time < props.currentTime
})

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

const copyGPS = async () => {
  if (!props.item.gps) return
  
  try {
    await navigator.clipboard.writeText(props.item.gps)
    showGPSCopied.value = true
    setTimeout(() => {
      showGPSCopied.value = false
    }, 2000)
  } catch (error) {
    console.error('Failed to copy GPS:', error)
  }
}

const getActionText = (action) => {
  const actionMap = {
    'check-in': '办理登记手续',
    'boarding': '登船/登车',
    'arrival': '抵达目的地',
    'visa': '办理签证',
    'meet-driver': '与司机会面',
    'transport': '交通出行',
    'hotel-checkin': '酒店入住',
    'sightseeing': '观光游览',
    'shopping': '购物',
    'breakfast': '享用早餐',
    'confirm-itinerary': '确认行程',
    'photography': '拍照留念',
    'lunch': '午餐时间',
    'local-food': '品尝当地美食',
    'souvenirs': '购买纪念品',
    'checkout': '办理退房',
    'farewell': '告别',
    'departure': '出发离开',
    'sailing': '航行中'
  }
  return actionMap[action] || action
}
</script>
