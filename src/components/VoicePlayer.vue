<template>
  <button
    @click="togglePlay"
    :disabled="!isSupported"
    :class="[
      'voice-btn',
      {
        'opacity-50 cursor-not-allowed': !isSupported,
        'bg-red-500 hover:bg-red-600': isPlaying,
        'animate-pulse': isPlaying
      }
    ]"
    :title="isSupported ? (isPlaying ? '停止播放' : '播放英文') : '浏览器不支持语音播放'"
  >
    <svg
      v-if="!isPlaying"
      class="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clip-rule="evenodd"
      />
    </svg>
    <svg
      v-else
      class="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h1a1 1 0 001-1V8a1 1 0 00-1-1H8zm5 0a1 1 0 00-1 1v4a1 1 0 001 1h1a1 1 0 001-1V8a1 1 0 00-1-1h-1z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useSpeech } from '../utils/speech.js'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
    default: 0.8
  },
  autoStop: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['start', 'end', 'error'])

const { speak, stop, isSupported } = useSpeech()
const isPlaying = ref(false)

const togglePlay = async () => {
  if (isPlaying.value) {
    stopPlay()
  } else {
    await startPlay()
  }
}

const startPlay = async () => {
  if (!props.text || !isSupported) return

  try {
    isPlaying.value = true
    emit('start')
    
    await speak(props.text, {
      rate: props.rate,
      onStart: () => {
        console.log('Speech started')
      }
    })
    
    isPlaying.value = false
    emit('end')
  } catch (error) {
    console.error('Speech error:', error)
    isPlaying.value = false
    emit('error', error)
  }
}

const stopPlay = () => {
  stop()
  isPlaying.value = false
  emit('end')
}

// 组件卸载时停止播放
onUnmounted(() => {
  if (isPlaying.value) {
    stopPlay()
  }
})

// 暴露方法给父组件
defineExpose({
  startPlay,
  stopPlay,
  isPlaying
})
</script>
