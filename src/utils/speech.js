// 语音播放工具类
export class SpeechService {
  constructor() {
    this.synthesis = window.speechSynthesis
    this.voices = []
    this.isSupported = 'speechSynthesis' in window
    this.loadVoices()
  }

  // 加载可用语音
  loadVoices() {
    if (!this.isSupported) return

    const updateVoices = () => {
      this.voices = this.synthesis.getVoices()
    }

    updateVoices()
    
    if (this.synthesis.onvoiceschanged !== undefined) {
      this.synthesis.onvoiceschanged = updateVoices
    }
  }

  // 获取英语语音
  getEnglishVoice() {
    return this.voices.find(voice => 
      voice.lang.startsWith('en') && 
      (voice.name.includes('Google') || voice.name.includes('Microsoft'))
    ) || this.voices.find(voice => voice.lang.startsWith('en'))
  }

  // 播放英文文本
  speak(text, options = {}) {
    if (!this.isSupported) {
      console.warn('Speech synthesis not supported')
      return Promise.reject(new Error('Speech synthesis not supported'))
    }

    return new Promise((resolve, reject) => {
      // 停止当前播放
      this.synthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(text)
      
      // 设置语音参数
      const voice = this.getEnglishVoice()
      if (voice) {
        utterance.voice = voice
      }
      
      utterance.rate = options.rate || 0.8  // 稍慢的语速
      utterance.pitch = options.pitch || 1
      utterance.volume = options.volume || 1
      utterance.lang = 'en-US'

      // 事件监听
      utterance.onend = () => resolve()
      utterance.onerror = (event) => reject(event.error)
      utterance.onstart = () => {
        if (options.onStart) options.onStart()
      }

      // 开始播放
      this.synthesis.speak(utterance)
    })
  }

  // 停止播放
  stop() {
    if (this.isSupported) {
      this.synthesis.cancel()
    }
  }

  // 暂停播放
  pause() {
    if (this.isSupported) {
      this.synthesis.pause()
    }
  }

  // 恢复播放
  resume() {
    if (this.isSupported) {
      this.synthesis.resume()
    }
  }

  // 检查是否正在播放
  isSpeaking() {
    return this.isSupported && this.synthesis.speaking
  }

  // 检查是否暂停
  isPaused() {
    return this.isSupported && this.synthesis.paused
  }
}

// 创建全局实例
export const speechService = new SpeechService()

// Vue 3 组合式 API Hook
export function useSpeech() {
  const speak = (text, options = {}) => {
    return speechService.speak(text, options)
  }

  const stop = () => {
    speechService.stop()
  }

  const pause = () => {
    speechService.pause()
  }

  const resume = () => {
    speechService.resume()
  }

  const isSpeaking = () => {
    return speechService.isSpeaking()
  }

  const isPaused = () => {
    return speechService.isPaused()
  }

  return {
    speak,
    stop,
    pause,
    resume,
    isSpeaking,
    isPaused,
    isSupported: speechService.isSupported
  }
}
