// 本地存储工具类
export class StorageService {
  constructor() {
    this.isSupported = typeof Storage !== 'undefined'
  }

  // 保存数据
  set(key, value) {
    if (!this.isSupported) return false

    try {
      const data = {
        value,
        timestamp: Date.now(),
        version: '1.0'
      }
      localStorage.setItem(key, JSON.stringify(data))
      return true
    } catch (error) {
      console.error('Storage set error:', error)
      return false
    }
  }

  // 获取数据
  get(key, defaultValue = null) {
    if (!this.isSupported) return defaultValue

    try {
      const item = localStorage.getItem(key)
      if (!item) return defaultValue

      const data = JSON.parse(item)
      return data.value
    } catch (error) {
      console.error('Storage get error:', error)
      return defaultValue
    }
  }

  // 删除数据
  remove(key) {
    if (!this.isSupported) return false

    try {
      localStorage.removeItem(key)
      return true
    } catch (error) {
      console.error('Storage remove error:', error)
      return false
    }
  }

  // 清空所有数据
  clear() {
    if (!this.isSupported) return false

    try {
      localStorage.clear()
      return true
    } catch (error) {
      console.error('Storage clear error:', error)
      return false
    }
  }

  // 检查数据是否过期
  isExpired(key, maxAge = 24 * 60 * 60 * 1000) { // 默认24小时
    if (!this.isSupported) return true

    try {
      const item = localStorage.getItem(key)
      if (!item) return true

      const data = JSON.parse(item)
      const age = Date.now() - data.timestamp
      return age > maxAge
    } catch (error) {
      console.error('Storage isExpired error:', error)
      return true
    }
  }

  // 获取存储大小
  getSize() {
    if (!this.isSupported) return 0

    let total = 0
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        total += localStorage[key].length + key.length
      }
    }
    return total
  }
}

// 创建全局实例
export const storage = new StorageService()

// 预定义的存储键
export const STORAGE_KEYS = {
  TIMELINE_DATA: 'bintan_timeline_data',
  DIALOGUE_DATA: 'bintan_dialogue_data',
  USER_PREFERENCES: 'bintan_user_preferences',
  OFFLINE_DATA: 'bintan_offline_data',
  CURRENT_STEP: 'bintan_current_step'
}

// Vue 3 组合式 API Hook
export function useStorage() {
  const setItem = (key, value) => {
    return storage.set(key, value)
  }

  const getItem = (key, defaultValue = null) => {
    return storage.get(key, defaultValue)
  }

  const removeItem = (key) => {
    return storage.remove(key)
  }

  const clearAll = () => {
    return storage.clear()
  }

  const isExpired = (key, maxAge) => {
    return storage.isExpired(key, maxAge)
  }

  return {
    setItem,
    getItem,
    removeItem,
    clearAll,
    isExpired,
    isSupported: storage.isSupported,
    KEYS: STORAGE_KEYS
  }
}
