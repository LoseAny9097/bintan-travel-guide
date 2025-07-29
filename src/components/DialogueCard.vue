<template>
  <div class="card hover:shadow-md transition-shadow duration-200">
    <div class="flex items-start justify-between mb-3">
      <h4 class="font-medium text-gray-900">{{ dialogue.scenario }}</h4>
      <VoicePlayer
        :text="dialogue.english"
        @start="onSpeechStart"
        @end="onSpeechEnd"
        @error="onSpeechError"
      />
    </div>
    
    <div class="space-y-3">
      <!-- 英文原文 -->
      <div class="bg-blue-50 p-3 rounded-lg">
        <div class="flex items-center justify-between mb-1">
          <span class="text-xs font-medium text-blue-600 uppercase tracking-wide">English</span>
          <button
            @click="copyToClipboard(dialogue.english)"
            class="text-blue-500 hover:text-blue-700 transition-colors"
            title="复制英文"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
          </button>
        </div>
        <p class="text-gray-800 font-medium">{{ dialogue.english }}</p>
      </div>

      <!-- 中文翻译 -->
      <div class="bg-green-50 p-3 rounded-lg">
        <div class="flex items-center mb-1">
          <span class="text-xs font-medium text-green-600 uppercase tracking-wide">中文</span>
        </div>
        <p class="text-gray-800">{{ dialogue.chinese }}</p>
      </div>

      <!-- 发音指导 -->
      <div v-if="dialogue.pronunciation" class="bg-yellow-50 p-3 rounded-lg">
        <div class="flex items-center mb-1">
          <span class="text-xs font-medium text-yellow-600 uppercase tracking-wide">发音</span>
        </div>
        <p class="text-gray-700 font-mono text-sm">{{ dialogue.pronunciation }}</p>
      </div>
    </div>

    <!-- 使用场景提示 -->
    <div v-if="showTips" class="mt-4 pt-3 border-t border-gray-200">
      <div class="flex items-center text-sm text-gray-500">
        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
        </svg>
        <span>点击播放按钮听发音，长按可重复播放</span>
      </div>
    </div>

    <!-- 复制成功提示 -->
    <div
      v-if="showCopySuccess"
      class="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in"
    >
      已复制到剪贴板
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VoicePlayer from './VoicePlayer.vue'

const props = defineProps({
  dialogue: {
    type: Object,
    required: true
  },
  showTips: {
    type: Boolean,
    default: false
  }
})

const showCopySuccess = ref(false)

const onSpeechStart = () => {
  console.log('Speech started for:', props.dialogue.scenario)
}

const onSpeechEnd = () => {
  console.log('Speech ended for:', props.dialogue.scenario)
}

const onSpeechError = (error) => {
  console.error('Speech error for:', props.dialogue.scenario, error)
}

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    showCopySuccess.value = true
    setTimeout(() => {
      showCopySuccess.value = false
    }, 2000)
  } catch (error) {
    console.error('Failed to copy text:', error)
    // 降级方案
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    try {
      document.execCommand('copy')
      showCopySuccess.value = true
      setTimeout(() => {
        showCopySuccess.value = false
      }, 2000)
    } catch (fallbackError) {
      console.error('Fallback copy failed:', fallbackError)
    }
    document.body.removeChild(textArea)
  }
}
</script>
