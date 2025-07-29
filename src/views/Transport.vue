<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- 页面标题 -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">🚗 包车服务指南</h1>
      <p class="text-gray-600">民丹岛无公共交通，包车是最佳选择</p>
    </div>

    <!-- 为什么需要包车 -->
    <div class="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
      <div class="flex items-start">
        <svg class="w-6 h-6 text-red-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
        </svg>
        <div>
          <h3 class="font-semibold text-red-900 mb-2">🚨 为什么必须包车？</h3>
          <ul class="text-red-800 text-sm space-y-1">
            <li>• 民丹岛几乎没有公共交通系统</li>
            <li>• 出租车数量极少且价格昂贵</li>
            <li>• 主要景点距离较远，步行不现实</li>
            <li>• 黄金山丘距离酒店35公里，必须包车前往</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 包车平台对比 -->
    <div class="card mb-8">
      <h2 class="text-xl font-semibold mb-6">📱 预订平台对比</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-gray-200">
              <th class="text-left py-3 px-4">平台</th>
              <th class="text-left py-3 px-4">价格范围</th>
              <th class="text-left py-3 px-4">优势</th>
              <th class="text-left py-3 px-4">劣势</th>
              <th class="text-left py-3 px-4">推荐指数</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr class="bg-green-50">
              <td class="py-3 px-4 font-medium">飞猪</td>
              <td class="py-3 px-4">500-800元/天</td>
              <td class="py-3 px-4">中文服务、支付方便、平台保障</td>
              <td class="py-3 px-4">可能是代理、价格稍高</td>
              <td class="py-3 px-4">
                <div class="flex">
                  <span v-for="i in 4" :key="i" class="text-yellow-400">⭐</span>
                  <span class="text-gray-300">⭐</span>
                </div>
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-medium">GetYourGuide</td>
              <td class="py-3 px-4">55-80美元/天</td>
              <td class="py-3 px-4">国际平台、服务标准化</td>
              <td class="py-3 px-4">英文界面、价格较高</td>
              <td class="py-3 px-4">
                <div class="flex">
                  <span v-for="i in 4" :key="i" class="text-yellow-400">⭐</span>
                  <span class="text-gray-300">⭐</span>
                </div>
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-medium">Klook</td>
              <td class="py-3 px-4">400-700元/天</td>
              <td class="py-3 px-4">中文界面、优惠活动多</td>
              <td class="py-3 px-4">选择相对较少</td>
              <td class="py-3 px-4">
                <div class="flex">
                  <span v-for="i in 4" :key="i" class="text-yellow-400">⭐</span>
                  <span class="text-gray-300">⭐</span>
                </div>
              </td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-medium">当地直接联系</td>
              <td class="py-3 px-4">40-60美元/天</td>
              <td class="py-3 px-4">价格最低、直接沟通</td>
              <td class="py-3 px-4">语言障碍、无平台保障</td>
              <td class="py-3 px-4">
                <div class="flex">
                  <span v-for="i in 3" :key="i" class="text-yellow-400">⭐</span>
                  <span v-for="i in 2" :key="i" class="text-gray-300">⭐</span>
                </div>
              </td>
            </tr>
            <tr class="bg-blue-50">
              <td class="py-3 px-4 font-medium">酒店代订</td>
              <td class="py-3 px-4">70-100美元/天</td>
              <td class="py-3 px-4">服务可靠、沟通方便</td>
              <td class="py-3 px-4">价格最高、选择有限</td>
              <td class="py-3 px-4">
                <div class="flex">
                  <span v-for="i in 5" :key="i" class="text-yellow-400">⭐</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 飞猪预订指南 -->
    <div class="card mb-8">
      <h2 class="text-xl font-semibold mb-6">🥇 飞猪预订详细指南</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 class="font-medium text-gray-900 mb-4">📱 预订步骤</h3>
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 bg-bintan-blue text-white rounded-full flex items-center justify-center text-xs font-semibold">
                1
              </div>
              <div class="ml-3">
                <p class="text-sm text-gray-700">打开飞猪APP，搜索"民丹岛包车"</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 bg-bintan-blue text-white rounded-full flex items-center justify-center text-xs font-semibold">
                2
              </div>
              <div class="ml-3">
                <p class="text-sm text-gray-700">选择日期：8月3-4日，人数：2人</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 bg-bintan-blue text-white rounded-full flex items-center justify-center text-xs font-semibold">
                3
              </div>
              <div class="ml-3">
                <p class="text-sm text-gray-700">选择"金牌商家"，评分4.8+</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 bg-bintan-blue text-white rounded-full flex items-center justify-center text-xs font-semibold">
                4
              </div>
              <div class="ml-3">
                <p class="text-sm text-gray-700">填写备注信息（见右侧模板）</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="flex-shrink-0 w-6 h-6 bg-bintan-green text-white rounded-full flex items-center justify-center text-xs font-semibold">
                5
              </div>
              <div class="ml-3">
                <p class="text-sm text-gray-700">支付定金，等待司机联系</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="font-medium text-gray-900 mb-4">📝 预订备注模板</h3>
          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">复制以下内容到备注栏：</span>
              <button
                @click="copyBookingTemplate"
                class="text-bintan-blue hover:text-blue-700 text-sm"
              >
                复制
              </button>
            </div>
            <pre class="text-xs text-gray-600 whitespace-pre-wrap">{{ bookingTemplate }}</pre>
          </div>
          <div v-if="showCopySuccess" class="mt-2 text-sm text-green-600">
            ✅ 已复制到剪贴板
          </div>
        </div>
      </div>
    </div>

    <!-- 包车价格明细 -->
    <div class="card mb-8">
      <h2 class="text-xl font-semibold mb-6">💰 价格明细</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-blue-50 p-4 rounded-lg">
          <h3 class="font-medium text-blue-900 mb-3">小型轿车（1-4人）</h3>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span>全天包车：</span>
              <span class="font-medium">600-800元</span>
            </div>
            <div class="flex justify-between">
              <span>半天包车：</span>
              <span class="font-medium">300-400元</span>
            </div>
            <div class="flex justify-between">
              <span>超时费用：</span>
              <span class="font-medium">50元/小时</span>
            </div>
          </div>
        </div>
        
        <div class="bg-green-50 p-4 rounded-lg">
          <h3 class="font-medium text-green-900 mb-3">SUV（5-7人）</h3>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span>全天包车：</span>
              <span class="font-medium">800-1200元</span>
            </div>
            <div class="flex justify-between">
              <span>半天包车：</span>
              <span class="font-medium">400-600元</span>
            </div>
            <div class="flex justify-between">
              <span>超时费用：</span>
              <span class="font-medium">80元/小时</span>
            </div>
          </div>
        </div>
        
        <div class="bg-yellow-50 p-4 rounded-lg">
          <h3 class="font-medium text-yellow-900 mb-3">商务车（8-12人）</h3>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span>全天包车：</span>
              <span class="font-medium">1200-1500元</span>
            </div>
            <div class="flex justify-between">
              <span>半天包车：</span>
              <span class="font-medium">600-800元</span>
            </div>
            <div class="flex justify-between">
              <span>超时费用：</span>
              <span class="font-medium">100元/小时</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 class="font-medium text-gray-900 mb-2">费用包含</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600">
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            司机费用
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            油费
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            停车费
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            过路费
          </div>
        </div>
        
        <h4 class="font-medium text-gray-900 mb-2 mt-4">费用不包含</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600">
          <div class="flex items-center">
            <svg class="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
            景点门票
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
            餐费
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
            司机餐费
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
            小费
          </div>
        </div>
      </div>
    </div>

    <!-- 包车对话 -->
    <div class="card">
      <h2 class="text-xl font-semibold mb-6">💬 包车常用对话</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DialogueCard
          v-for="dialogue in transportDialogues"
          :key="dialogue.scenario"
          :dialogue="dialogue"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DialogueCard from '../components/DialogueCard.vue'

const showCopySuccess = ref(false)

const bookingTemplate = `预订信息：
- 日期：2024年8月3日-4日（2天）
- 人数：2人（情侣）
- 需求：中文司机优先

行程安排：
Day 1: 码头接机 → Kamuela Villa Lagoi Bay酒店 → 周边游览 → 送回酒店
Day 2: 酒店接车 → 黄金山丘 → 午餐 → 购物 → 送码头

特殊要求：
- 司机需要熟悉景点路线
- 希望推荐当地美食
- 车辆干净，空调正常
- 提供司机WhatsApp联系方式

联系方式：[您的WhatsApp号码]`

const transportDialogues = [
  {
    scenario: '确认包车司机',
    english: 'Are you our driver? We booked a car service.',
    chinese: '您是我们的司机吗？我们预订了包车服务。',
    pronunciation: 'ɑr ju aʊər ˈdraɪvər wi bʊkt ə kɑr ˈsɜrvɪs'
  },
  {
    scenario: '确认行程',
    english: 'Today we want to visit the Golden Sand Hill, then shopping, and finally go to the ferry terminal.',
    chinese: '今天我们想去黄金山丘，然后购物，最后去码头。',
    pronunciation: 'təˈdeɪ wi wɑnt tu ˈvɪzɪt ðə ˈɡoʊldən sænd hɪl ðen ˈʃɑpɪŋ ænd ˈfaɪnəli ɡoʊ tu ðə ˈferi ˈtɜrmɪnəl'
  },
  {
    scenario: '询问等候',
    english: 'Can you wait for us here? We will be back in one hour.',
    chinese: '您能在这里等我们吗？我们一小时后回来。',
    pronunciation: 'kæn ju weɪt fɔr ʌs hɪr wi wɪl bi bæk ɪn wʌn aʊər'
  },
  {
    scenario: '感谢司机',
    english: 'Thank you so much for these two days. You have been very helpful.',
    chinese: '非常感谢这两天的服务，您帮了我们很多。',
    pronunciation: 'θæŋk ju soʊ mʌtʃ fɔr ðiz tu deɪz ju hæv bin ˈveri ˈhelpfəl'
  }
]

const copyBookingTemplate = async () => {
  try {
    await navigator.clipboard.writeText(bookingTemplate)
    showCopySuccess.value = true
    setTimeout(() => {
      showCopySuccess.value = false
    }, 2000)
  } catch (error) {
    console.error('Failed to copy:', error)
  }
}
</script>
