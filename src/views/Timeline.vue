<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- 页面标题 -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">⏰ 详细时间线</h1>
      <p class="text-gray-600">2天1夜完整行程安排，包含GPS坐标和实用对话</p>
    </div>

    <!-- 当前时间显示 -->
    <div class="card mb-8 text-center">
      <h2 class="text-lg font-semibold mb-2">🕐 当前时间</h2>
      <div class="text-2xl font-mono text-bintan-blue">{{ currentTime }}</div>
      <p class="text-sm text-gray-500 mt-1">{{ currentDate }}</p>
      
      <!-- 模拟时间控制（开发用） -->
      <div v-if="isDevelopment" class="mt-4 pt-4 border-t border-gray-200">
        <p class="text-sm text-gray-500 mb-2">开发模式 - 模拟时间</p>
        <div class="flex items-center justify-center space-x-2">
          <button
            @click="setSimulatedTime('2024-08-03T07:00:00')"
            class="btn-secondary text-xs"
          >
            Day 1 开始
          </button>
          <button
            @click="setSimulatedTime('2024-08-03T12:00:00')"
            class="btn-secondary text-xs"
          >
            Day 1 中午
          </button>
          <button
            @click="setSimulatedTime('2024-08-04T09:00:00')"
            class="btn-secondary text-xs"
          >
            Day 2 开始
          </button>
          <button
            @click="resetTime"
            class="btn-secondary text-xs"
          >
            重置
          </button>
        </div>
      </div>
    </div>

    <!-- 日期切换 -->
    <div class="flex justify-center mb-8">
      <div class="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
        <button
          v-for="day in timelineData"
          :key="day.day"
          @click="selectedDay = day.day"
          :class="[
            'px-4 py-2 rounded-md font-medium transition-colors duration-200',
            selectedDay === day.day
              ? 'bg-bintan-blue text-white'
              : 'text-gray-600 hover:text-gray-900'
          ]"
        >
          {{ day.title }}
        </button>
      </div>
    </div>

    <!-- 时间线内容 -->
    <div class="space-y-6">
      <div
        v-for="day in filteredTimeline"
        :key="day.day"
        class="animate-fade-in"
      >
        <!-- 日期标题 -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center bg-gradient-to-r from-bintan-blue to-bintan-green text-white px-6 py-3 rounded-full">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
            </svg>
            <span class="font-semibold">{{ day.date }} - {{ day.title }}</span>
          </div>
        </div>

        <!-- 时间线项目 -->
        <div class="relative">
          <TimelineItem
            v-for="item in day.timeline"
            :key="`${day.day}-${item.time}`"
            :item="item"
            :current-time="getCurrentTimeForDay(day.date)"
          />
        </div>
      </div>
    </div>

    <!-- 底部操作 -->
    <div class="mt-12 text-center space-y-4">
      <div class="flex justify-center space-x-4">
        <router-link to="/dialogue" class="btn-primary">
          查看常用对话
        </router-link>
        <router-link to="/map" class="btn-secondary">
          查看地图导航
        </router-link>
      </div>
      
      <!-- 进度指示 -->
      <div class="bg-gray-200 rounded-full h-2 max-w-md mx-auto">
        <div
          :style="{ width: `${progress}%` }"
          class="bg-gradient-to-r from-bintan-blue to-bintan-green h-2 rounded-full transition-all duration-500"
        ></div>
      </div>
      <p class="text-sm text-gray-500">行程进度: {{ Math.round(progress) }}%</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { timelineData } from '../data/timeline.js'
import TimelineItem from '../components/TimelineItem.vue'

const selectedDay = ref(1)
const currentTime = ref('')
const currentDate = ref('')
const simulatedTime = ref(null)
const isDevelopment = ref(import.meta.env.DEV)

let timeInterval = null

const filteredTimeline = computed(() => {
  return timelineData.filter(day => day.day === selectedDay.value)
})

const progress = computed(() => {
  const totalItems = timelineData.reduce((sum, day) => sum + day.timeline.length, 0)
  let completedItems = 0
  
  const now = simulatedTime.value || new Date()
  
  for (const day of timelineData) {
    const dayDate = new Date(day.date)
    if (now.toDateString() === dayDate.toDateString()) {
      const currentTimeStr = now.toTimeString().slice(0, 5) // HH:MM format
      for (const item of day.timeline) {
        if (item.time <= currentTimeStr) {
          completedItems++
        }
      }
    } else if (now > dayDate) {
      completedItems += day.timeline.length
    }
  }
  
  return Math.min((completedItems / totalItems) * 100, 100)
})

const updateCurrentTime = () => {
  const now = simulatedTime.value || new Date()
  currentTime.value = now.toLocaleTimeString('zh-CN', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  currentDate.value = now.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  })
}

const getCurrentTimeForDay = (dayDate) => {
  const now = simulatedTime.value || new Date()
  const targetDate = new Date(dayDate)
  
  if (now.toDateString() === targetDate.toDateString()) {
    return now.toTimeString().slice(0, 5) // HH:MM format
  }
  return ''
}

const setSimulatedTime = (timeString) => {
  simulatedTime.value = new Date(timeString)
  updateCurrentTime()
  
  // 自动切换到对应的日期
  const simDate = simulatedTime.value.toISOString().slice(0, 10)
  const matchingDay = timelineData.find(day => day.date === simDate)
  if (matchingDay) {
    selectedDay.value = matchingDay.day
  }
}

const resetTime = () => {
  simulatedTime.value = null
  updateCurrentTime()
}

onMounted(() => {
  updateCurrentTime()
  timeInterval = setInterval(updateCurrentTime, 1000)
  
  // 根据当前日期自动选择对应的天数
  const today = new Date().toISOString().slice(0, 10)
  const matchingDay = timelineData.find(day => day.date === today)
  if (matchingDay) {
    selectedDay.value = matchingDay.day
  }
})

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval)
  }
})
</script>
