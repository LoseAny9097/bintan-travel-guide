<template>
  <nav class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo和标题 -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-gradient-to-br from-bintan-blue to-bintan-green rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">🏝️</span>
            </div>
            <div class="hidden sm:block">
              <h1 class="text-lg font-semibold text-gray-900">民丹岛攻略</h1>
              <p class="text-xs text-gray-500">STP专用版</p>
            </div>
          </router-link>
        </div>

        <!-- 桌面端导航菜单 -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            :class="[
              'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
              $route.path === item.path
                ? 'bg-bintan-blue text-white'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            ]"
          >
            <span>{{ item.icon }}</span>
            <span>{{ item.name }}</span>
          </router-link>
        </div>

        <!-- 移动端菜单按钮 -->
        <div class="md:hidden flex items-center">
          <button
            @click="toggleMobileMenu"
            class="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- 移动端菜单 -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-white border-t border-gray-200 animate-slide-up"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          @click="closeMobileMenu"
          :class="[
            'flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200',
            $route.path === item.path
              ? 'bg-bintan-blue text-white'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          ]"
        >
          <span class="text-lg">{{ item.icon }}</span>
          <span>{{ item.name }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const navItems = [
  { path: '/', name: '首页', icon: '🏠' },
  { path: '/timeline', name: '时间线', icon: '⏰' },
  { path: '/visa', name: '签证', icon: '📋' },
  { path: '/transport', name: '包车', icon: '🚗' },
  { path: '/map', name: '地图', icon: '🗺️' },
  { path: '/dialogue', name: '对话', icon: '💬' },
  { path: '/info', name: '信息', icon: 'ℹ️' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// 路由变化时关闭移动端菜单
watch(route, () => {
  closeMobileMenu()
})
</script>
