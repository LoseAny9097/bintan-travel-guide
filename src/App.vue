<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- 导航栏 -->
    <Navigation />
    
    <!-- 主要内容区域 -->
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 底部信息 -->
    <footer class="bg-white border-t border-gray-200 py-6 mt-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-sm text-gray-500">
            民丹岛旅游攻略 - 专为持STP的中国公民定制
          </p>
          <p class="text-xs text-gray-400 mt-1">
            2024年8月3-4日 · 2天1夜完美行程
          </p>
        </div>
      </div>
    </footer>

    <!-- 全局加载指示器 -->
    <div
      v-if="isLoading"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg p-6 flex items-center space-x-3">
        <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-bintan-blue"></div>
        <span class="text-gray-700">加载中...</span>
      </div>
    </div>

    <!-- 离线提示 -->
    <div
      v-if="!isOnline"
      class="fixed bottom-4 left-4 right-4 bg-yellow-500 text-white p-3 rounded-lg shadow-lg z-40 animate-slide-up"
    >
      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
        </svg>
        <span class="text-sm">您当前处于离线状态，部分功能可能受限</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navigation from './components/Navigation.vue'

const isLoading = ref(false)
const isOnline = ref(navigator.onLine)

// 监听网络状态
const handleOnline = () => {
  isOnline.value = true
}

const handleOffline = () => {
  isOnline.value = false
}

onMounted(() => {
  window.addEventListener('online', handleOnline)
  window.addEventListener('offline', handleOffline)
})

onUnmounted(() => {
  window.removeEventListener('online', handleOnline)
  window.removeEventListener('offline', handleOffline)
})

// 全局加载状态管理
const setLoading = (loading) => {
  isLoading.value = loading
}

// 暴露给子组件使用
window.setGlobalLoading = setLoading
</script>

<style scoped>
/* 页面切换动画 */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* 确保内容区域最小高度 */
main {
  min-height: calc(100vh - 64px - 88px); /* 减去导航栏和底部的高度 */
}
</style>
