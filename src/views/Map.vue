<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- 页面标题 -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">🗺️ 地图导航</h1>
      <p class="text-gray-600">所有重要地点的GPS坐标和导航指引</p>
    </div>

    <!-- 导航APP推荐 -->
    <div class="card mb-8">
      <h2 class="text-xl font-semibold mb-6">📱 推荐导航APP</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-blue-50 p-4 rounded-lg">
          <h3 class="font-medium text-blue-900 mb-2">Google Maps</h3>
          <p class="text-sm text-blue-800 mb-3">最准确的GPS定位，支持离线地图</p>
          <div class="space-y-1 text-xs text-blue-700">
            <div>✅ 中文界面</div>
            <div>✅ 离线地图</div>
            <div>✅ 实时路况</div>
          </div>
        </div>
        
        <div class="bg-green-50 p-4 rounded-lg">
          <h3 class="font-medium text-green-900 mb-2">Waze</h3>
          <p class="text-sm text-green-800 mb-3">实时路况，当地司机常用</p>
          <div class="space-y-1 text-xs text-green-700">
            <div>✅ 实时路况</div>
            <div>✅ 事故提醒</div>
            <div>✅ 社区更新</div>
          </div>
        </div>
        
        <div class="bg-yellow-50 p-4 rounded-lg">
          <h3 class="font-medium text-yellow-900 mb-2">Maps.me</h3>
          <p class="text-sm text-yellow-800 mb-3">完全离线使用，不消耗流量</p>
          <div class="space-y-1 text-xs text-yellow-700">
            <div>✅ 完全离线</div>
            <div>✅ 详细POI</div>
            <div>✅ 不耗流量</div>
          </div>
        </div>
        
        <div class="bg-purple-50 p-4 rounded-lg">
          <h3 class="font-medium text-purple-900 mb-2">百度地图国际版</h3>
          <p class="text-sm text-purple-800 mb-3">中文语音导航，海外数据准确</p>
          <div class="space-y-1 text-xs text-purple-700">
            <div>✅ 中文语音</div>
            <div>✅ 界面友好</div>
            <div>✅ 海外优化</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 地点分类 -->
    <div class="flex flex-wrap justify-center gap-2 mb-8">
      <button
        v-for="category in locationCategories"
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
        <span>{{ category.name }}</span>
      </button>
    </div>

    <!-- 地点列表 -->
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
            <h2 class="text-xl font-semibold text-gray-900">{{ category.name }}</h2>
          </div>
        </div>

        <!-- 地点卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="location in category.locations"
            :key="location.name"
            class="card hover:shadow-md transition-shadow duration-200"
          >
            <div class="flex items-start justify-between mb-3">
              <h3 class="font-semibold text-gray-900">{{ location.name }}</h3>
              <div class="flex space-x-2">
                <button
                  @click="copyGPS(location.gps, location.name)"
                  class="gps-btn"
                  title="复制GPS坐标"
                >
                  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                  </svg>
                  GPS
                </button>
                <button
                  @click="openInMaps(location.gps, location.name)"
                  class="btn-primary text-xs px-2 py-1"
                  title="在地图中打开"
                >
                  导航
                </button>
              </div>
            </div>
            
            <div class="space-y-2 text-sm text-gray-600">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
                <span class="font-mono">{{ location.gps }}</span>
              </div>
              
              <div v-if="location.address" class="flex items-start">
                <svg class="w-4 h-4 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v8h12V6H4z" clip-rule="evenodd"></path>
                </svg>
                <span>{{ location.address }}</span>
              </div>
              
              <div v-if="location.distance" class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                </svg>
                <span>{{ location.distance }}</span>
              </div>
              
              <div v-if="location.description" class="text-gray-500">
                {{ location.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 使用技巧 -->
    <div class="mt-12 bg-gray-50 rounded-lg p-6">
      <h3 class="font-semibold text-gray-900 mb-4">💡 导航使用技巧</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-medium text-gray-800 mb-2">📱 与司机沟通</h4>
          <ul class="space-y-1 text-sm text-gray-600">
            <li>• 提前在地图上标记目的地</li>
            <li>• 截图保存路线图</li>
            <li>• 使用"分享位置"功能发送给司机</li>
            <li>• 准备目的地的印尼语名称</li>
          </ul>
        </div>
        <div>
          <h4 class="font-medium text-gray-800 mb-2">🔧 离线准备</h4>
          <ul class="space-y-1 text-sm text-gray-600">
            <li>• 出发前下载离线地图</li>
            <li>• 保存重要地点为收藏</li>
            <li>• 截图保存重要路线</li>
            <li>• 标记最近的医院和警察局</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 复制成功提示 -->
    <div
      v-if="showCopySuccess"
      class="fixed top-4 right-4 bg-bintan-sand text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in"
    >
      {{ copyMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('transport')
const showCopySuccess = ref(false)
const copyMessage = ref('')

const locationCategories = [
  {
    id: 'transport',
    name: '交通枢纽',
    icon: '🚢',
    locations: [
      {
        name: '新加坡丹那美拉码头',
        gps: '1.3274,103.9462',
        address: '50 Tanah Merah Ferry Road, Singapore 498833',
        description: '出发码头，地铁East West Line可达'
      },
      {
        name: '民丹岛班达班丹特拉尼码头',
        gps: '1.1547,104.3189',
        address: 'Jalan Hang Lekiu, Lagoi, Bintan Regency',
        description: '抵达码头，包车司机接机地点'
      }
    ]
  },
  {
    id: 'accommodation',
    name: '住宿酒店',
    icon: '🏨',
    locations: [
      {
        name: 'Kamuela Villa Lagoi Bay',
        gps: '1.1389,104.3167',
        address: 'Jalan Gurindam Duabelas, Lagoi Bay, Bintan Regency 29155',
        distance: '距离码头15分钟车程',
        description: '您预订的酒店'
      }
    ]
  },
  {
    id: 'attractions',
    name: '主要景点',
    icon: '🏖️',
    locations: [
      {
        name: 'Lagoi Bay Beach',
        gps: '1.1378,104.3156',
        distance: '距离酒店步行5分钟',
        description: '酒店正前方海滩，免费开放'
      },
      {
        name: 'Gurun Pasir Bintan（黄金山丘）',
        gps: '0.9167,104.4500',
        distance: '距离酒店车程45分钟',
        description: '网红景点，门票50,000印尼盾/人'
      },
      {
        name: 'Bintan Elephant Park',
        gps: '1.1500,104.2833',
        distance: '距离酒店车程20分钟',
        description: '大象互动体验，门票400,000印尼盾/人'
      },
      {
        name: 'Treasure Bay Bintan',
        gps: '1.1547,104.3189',
        distance: '距离酒店车程10分钟',
        description: '人工海滩和水上乐园'
      }
    ]
  },
  {
    id: 'dining',
    name: '餐厅美食',
    icon: '🍽️',
    locations: [
      {
        name: 'The Cove',
        gps: '1.1392,104.3170',
        distance: '距离酒店步行8分钟',
        description: '海景西餐厅，人均150,000-300,000印尼盾'
      },
      {
        name: 'FlyBoyz Beach Bar',
        gps: '1.1385,104.3165',
        distance: '距离酒店步行6分钟',
        description: '海滩酒吧，人均100,000-200,000印尼盾'
      },
      {
        name: 'Asli & Yang Pertama Ayam Presto',
        gps: '1.1200,104.3000',
        distance: '距离酒店车程15分钟',
        description: '当地特色炸鸡，人均50,000-100,000印尼盾'
      }
    ]
  },
  {
    id: 'shopping',
    name: '购物中心',
    icon: '🛍️',
    locations: [
      {
        name: 'Plaza Lagoi',
        gps: '1.1405,104.3195',
        distance: '距离酒店步行15分钟',
        description: '综合购物中心，营业时间10:00-22:00'
      }
    ]
  },
  {
    id: 'services',
    name: '实用服务',
    icon: '🏥',
    locations: [
      {
        name: 'Bintan International Hospital',
        gps: '1.1500,104.2800',
        address: 'Jalan Raya Lagoi, Bintan',
        description: '24小时急诊，英语服务'
      },
      {
        name: '民丹岛旅游信息中心',
        gps: '1.1400,104.3200',
        description: '旅游咨询和帮助'
      },
      {
        name: '当地警察局',
        gps: '1.1350,104.3150',
        description: '紧急情况联系'
      }
    ]
  }
]

const filteredCategories = computed(() => {
  if (selectedCategory.value === 'all') {
    return locationCategories
  }
  return locationCategories.filter(cat => cat.id === selectedCategory.value)
})

const copyGPS = async (gps, name) => {
  try {
    await navigator.clipboard.writeText(gps)
    copyMessage.value = `${name} GPS坐标已复制`
    showCopySuccess.value = true
    setTimeout(() => {
      showCopySuccess.value = false
    }, 2000)
  } catch (error) {
    console.error('Failed to copy GPS:', error)
  }
}

const openInMaps = (gps, name) => {
  const [lat, lng] = gps.split(',')
  const url = `https://www.google.com/maps?q=${lat},${lng}&z=15`
  window.open(url, '_blank')
}
</script>
