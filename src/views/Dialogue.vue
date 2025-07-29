<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- 页面标题 -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">💬 实用对话库</h1>
      <p class="text-gray-600">分类整理的英文对话，支持语音播放和发音指导</p>
    </div>

    <!-- 语音功能说明 -->
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
      <div class="flex items-start">
        <svg class="w-6 h-6 text-blue-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.369 4.369 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path>
        </svg>
        <div>
          <h3 class="font-semibold text-blue-900 mb-1">🎵 语音播放功能</h3>
          <p class="text-blue-800 text-sm">
            点击绿色播放按钮可以听到标准英文发音，帮助您练习正确的语音语调。
            建议使用耳机获得更好的听音效果。
          </p>
        </div>
      </div>
    </div>

    <!-- 分类导航 -->
    <div class="flex flex-wrap justify-center gap-2 mb-8">
      <button
        v-for="category in dialogueCategories"
        :key="category.id"
        @click="selectedCategory = category.id"
        :class="[
          'flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200',
          selectedCategory === category.id
            ? 'bg-bintan-blue text-white shadow-md'
            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
        ]"
      >
        <span>{{ category.icon }}</span>
        <span>{{ category.title }}</span>
        <span class="text-xs opacity-75">({{ category.dialogues.length }})</span>
      </button>
    </div>

    <!-- 搜索框 -->
    <div class="max-w-md mx-auto mb-8">
      <div class="relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索对话场景..."
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bintan-blue focus:border-transparent"
        >
        <svg class="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
    </div>

    <!-- 对话列表 -->
    <div class="space-y-6">
      <div
        v-for="category in filteredCategories"
        :key="category.id"
        class="animate-fade-in"
      >
        <!-- 分类标题 -->
        <div class="flex items-center mb-4">
          <div class="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
            <span class="text-2xl mr-3">{{ category.icon }}</span>
            <h2 class="text-xl font-semibold text-gray-900">{{ category.title }}</h2>
            <span class="ml-2 bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">
              {{ filteredDialogues(category).length }}
            </span>
          </div>
        </div>

        <!-- 对话卡片网格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DialogueCard
            v-for="(dialogue, index) in filteredDialogues(category)"
            :key="`${category.id}-${index}`"
            :dialogue="dialogue"
            :show-tips="index === 0"
          />
        </div>
      </div>
    </div>

    <!-- 空状态 -->
    <div v-if="filteredCategories.length === 0" class="text-center py-12">
      <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
      <h3 class="text-lg font-medium text-gray-900 mb-2">没有找到相关对话</h3>
      <p class="text-gray-500">尝试使用不同的关键词搜索</p>
      <button
        @click="clearSearch"
        class="mt-4 btn-primary"
      >
        清除搜索
      </button>
    </div>

    <!-- 使用技巧 -->
    <div class="mt-12 bg-gray-50 rounded-lg p-6">
      <h3 class="font-semibold text-gray-900 mb-4">💡 使用技巧</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
        <div class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>点击播放按钮练习发音</span>
        </div>
        <div class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>复制英文文本到翻译软件</span>
        </div>
        <div class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>参考发音标记练习语调</span>
        </div>
        <div class="flex items-start">
          <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>出发前多练习几遍</span>
        </div>
      </div>
    </div>

    <!-- 底部导航 -->
    <div class="mt-8 text-center">
      <router-link to="/timeline" class="btn-primary mr-4">
        查看时间线
      </router-link>
      <router-link to="/transport" class="btn-secondary">
        包车服务
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { dialogueCategories } from '../data/dialogues.js'
import DialogueCard from '../components/DialogueCard.vue'

const selectedCategory = ref('transport')
const searchQuery = ref('')

const filteredCategories = computed(() => {
  let categories = dialogueCategories

  // 如果选择了特定分类，只显示该分类
  if (selectedCategory.value !== 'all') {
    categories = categories.filter(cat => cat.id === selectedCategory.value)
  }

  // 如果有搜索查询，进一步过滤
  if (searchQuery.value.trim()) {
    categories = categories.filter(category => {
      const hasMatchingDialogue = category.dialogues.some(dialogue =>
        dialogue.scenario.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        dialogue.english.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        dialogue.chinese.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
      return hasMatchingDialogue || category.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    })
  }

  return categories
})

const filteredDialogues = (category) => {
  if (!searchQuery.value.trim()) {
    return category.dialogues
  }

  return category.dialogues.filter(dialogue =>
    dialogue.scenario.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    dialogue.english.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    dialogue.chinese.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
}

const clearSearch = () => {
  searchQuery.value = ''
  selectedCategory.value = 'transport'
}
</script>
