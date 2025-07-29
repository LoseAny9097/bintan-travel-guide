<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- 欢迎横幅 -->
    <div class="bg-gradient-to-r from-bintan-blue to-bintan-green rounded-2xl p-8 text-white mb-8">
      <div class="max-w-3xl">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">
          🏝️ 民丹岛2天1夜攻略
        </h1>
        <p class="text-xl mb-6 opacity-90">
          专为持新加坡学生准证（STP）的中国公民定制
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
            </svg>
            <span>2024年8月3-4日</span>
          </div>
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
            </svg>
            <span>2天1夜</span>
          </div>
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
            </svg>
            <span>预算2500-3500元</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 倒计时 -->
    <div v-if="countdown.show" class="card mb-8 text-center">
      <h2 class="text-xl font-semibold mb-4">🎯 距离出发还有</h2>
      <div class="grid grid-cols-4 gap-4 max-w-md mx-auto">
        <div class="bg-bintan-blue text-white rounded-lg p-3">
          <div class="text-2xl font-bold">{{ countdown.days }}</div>
          <div class="text-sm">天</div>
        </div>
        <div class="bg-bintan-green text-white rounded-lg p-3">
          <div class="text-2xl font-bold">{{ countdown.hours }}</div>
          <div class="text-sm">时</div>
        </div>
        <div class="bg-bintan-sand text-white rounded-lg p-3">
          <div class="text-2xl font-bold">{{ countdown.minutes }}</div>
          <div class="text-sm">分</div>
        </div>
        <div class="bg-bintan-coral text-white rounded-lg p-3">
          <div class="text-2xl font-bold">{{ countdown.seconds }}</div>
          <div class="text-sm">秒</div>
        </div>
      </div>
    </div>

    <!-- 快速导航 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <router-link
        v-for="item in quickNavItems"
        :key="item.path"
        :to="item.path"
        class="card hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
      >
        <div class="flex items-center mb-4">
          <div :class="['w-12 h-12 rounded-lg flex items-center justify-center text-2xl', item.bgColor]">
            {{ item.icon }}
          </div>
          <div class="ml-4">
            <h3 class="font-semibold text-gray-900">{{ item.title }}</h3>
            <p class="text-sm text-gray-500">{{ item.subtitle }}</p>
          </div>
        </div>
        <p class="text-gray-600 text-sm">{{ item.description }}</p>
      </router-link>
    </div>

    <!-- 重要提醒 -->
    <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
      <div class="flex items-start">
        <svg class="w-6 h-6 text-yellow-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
        </svg>
        <div>
          <h3 class="font-semibold text-yellow-800 mb-2">🚨 重要提醒</h3>
          <ul class="space-y-1 text-yellow-700 text-sm">
            <li>• 虽持有STP，仍需按中国公民身份办理印尼落地签证</li>
            <li>• 民丹岛无公共交通，强烈建议提前预订包车服务</li>
            <li>• 签证费只接受现金，建议携带美元</li>
            <li>• 建议提前3天预订包车，确保有中文司机</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 行程概览 -->
    <div class="card">
      <h2 class="text-xl font-semibold mb-6">📅 行程概览</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Day 1 -->
        <div class="bg-blue-50 rounded-lg p-4">
          <h3 class="font-semibold text-blue-900 mb-3">Day 1 - 8月3日</h3>
          <div class="space-y-2 text-sm text-blue-800">
            <div class="flex items-center">
              <span class="w-16 text-blue-600">07:00</span>
              <span>新加坡出发</span>
            </div>
            <div class="flex items-center">
              <span class="w-16 text-blue-600">09:05</span>
              <span>抵达民丹岛</span>
            </div>
            <div class="flex items-center">
              <span class="w-16 text-blue-600">10:00</span>
              <span>酒店入住</span>
            </div>
            <div class="flex items-center">
              <span class="w-16 text-blue-600">11:00</span>
              <span>周边游览</span>
            </div>
            <div class="flex items-center">
              <span class="w-16 text-blue-600">14:30</span>
              <span>水上运动</span>
            </div>
            <div class="flex items-center">
              <span class="w-16 text-blue-600">15:45</span>
              <span>SPA体验</span>
            </div>
            <div class="flex items-center">
              <span class="w-16 text-blue-600">17:00</span>
              <span>购物漫步</span>
            </div>
            <div class="flex items-center">
              <span class="w-16 text-blue-600">18:00</span>
              <span>日落下午茶</span>
            </div>
            <div class="flex items-center">
              <span class="w-16 text-blue-600">19:30</span>
              <span>海滩晚餐</span>
            </div>
          </div>
        </div>

        <!-- Day 2 -->
        <div class="bg-green-50 rounded-lg p-4">
          <h3 class="font-semibold text-green-900 mb-3">Day 2 - 8月4日</h3>
          <div class="space-y-2 text-sm text-green-800">
            <div class="flex items-center">
              <span class="w-16 text-green-600">08:00</span>
              <span>酒店早餐</span>
            </div>
            <div class="flex items-center">
              <span class="w-16 text-green-600">09:00</span>
              <span>包车接车</span>
            </div>
            <div class="flex items-center">
              <span class="w-16 text-green-600">10:15</span>
              <span>黄金山丘</span>
            </div>
            <div class="flex items-center">
              <span class="w-16 text-green-600">12:30</span>
              <span>当地午餐</span>
            </div>
            <div class="flex items-center">
              <span class="w-16 text-green-600">13:30</span>
              <span>购物时间</span>
            </div>
            <div class="flex items-center">
              <span class="w-16 text-green-600">17:00</span>
              <span>返程渡轮</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 text-center">
        <router-link
          to="/timeline"
          class="btn-primary inline-flex items-center"
        >
          查看详细时间线
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const countdown = ref({
  show: false,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

const quickNavItems = [
  {
    path: '/timeline',
    title: '详细时间线',
    subtitle: '分钟级行程',
    description: '2天1夜完整行程安排，包含GPS坐标和实用对话',
    icon: '⏰',
    bgColor: 'bg-blue-100'
  },
  {
    path: '/visa',
    title: '签证指南',
    subtitle: 'STP专用',
    description: '持学生准证的签证政策、费用和办理流程',
    icon: '📋',
    bgColor: 'bg-green-100'
  },
  {
    path: '/transport',
    title: '包车服务',
    subtitle: '必备交通',
    description: '飞猪预订指南、司机联系和价格对比',
    icon: '🚗',
    bgColor: 'bg-yellow-100'
  },
  {
    path: '/map',
    title: '地图导航',
    subtitle: 'GPS坐标',
    description: '所有景点的精确位置和导航指引',
    icon: '🗺️',
    bgColor: 'bg-purple-100'
  },
  {
    path: '/dialogue',
    title: '实用对话',
    subtitle: '语音播放',
    description: '分类英文对话，支持语音播放和发音指导',
    icon: '💬',
    bgColor: 'bg-pink-100'
  },
  {
    path: '/info',
    title: '实用信息',
    subtitle: '全面指南',
    description: '餐厅推荐、购物指南、联系方式等',
    icon: 'ℹ️',
    bgColor: 'bg-indigo-100'
  }
]

let countdownInterval = null

const updateCountdown = () => {
  const targetDate = new Date('2024-08-03T07:00:00+08:00') // 新加坡时间
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()

  if (diff > 0) {
    countdown.value.show = true
    countdown.value.days = Math.floor(diff / (1000 * 60 * 60 * 24))
    countdown.value.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    countdown.value.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    countdown.value.seconds = Math.floor((diff % (1000 * 60)) / 1000)
  } else {
    countdown.value.show = false
  }
}

onMounted(() => {
  updateCountdown()
  countdownInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})
</script>
