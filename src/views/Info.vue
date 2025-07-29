<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- 页面标题 -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">ℹ️ 实用信息</h1>
      <p class="text-gray-600">餐厅推荐、购物指南、联系方式等全面信息</p>
    </div>

    <!-- 信息分类导航 -->
    <div class="flex flex-wrap justify-center gap-2 mb-8">
      <button
        v-for="category in infoCategories"
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

    <!-- 信息内容 -->
    <div class="space-y-8">
      <!-- 餐厅推荐 -->
      <div v-if="selectedCategory === 'restaurants' || selectedCategory === 'all'" class="animate-fade-in">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <span class="text-3xl mr-3">🍽️</span>
          餐厅推荐
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="restaurant in restaurants"
            :key="restaurant.name"
            class="card hover:shadow-md transition-shadow duration-200"
          >
            <div class="flex items-start justify-between mb-3">
              <h3 class="font-semibold text-gray-900">{{ restaurant.name }}</h3>
              <div class="flex">
                <span v-for="i in restaurant.rating" :key="i" class="text-yellow-400 text-sm">⭐</span>
              </div>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex items-center text-gray-600">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
                <span>{{ restaurant.distance }}</span>
              </div>
              <div class="flex items-center text-gray-600">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                </svg>
                <span>{{ restaurant.hours }}</span>
              </div>
              <div class="flex items-center text-gray-600">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
                <span>{{ restaurant.price }}</span>
              </div>
              <p class="text-gray-500 mt-2">{{ restaurant.description }}</p>
              <div class="mt-3">
                <span class="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {{ restaurant.cuisine }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 购物指南 -->
      <div v-if="selectedCategory === 'shopping' || selectedCategory === 'all'" class="animate-fade-in">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <span class="text-3xl mr-3">🛍️</span>
          购物指南
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card">
            <h3 class="font-semibold text-gray-900 mb-4">🏪 推荐商品</h3>
            <div class="space-y-3">
              <div v-for="item in shoppingItems" :key="item.name" class="flex items-start">
                <span class="text-lg mr-3">{{ item.icon }}</span>
                <div>
                  <h4 class="font-medium text-gray-800">{{ item.name }}</h4>
                  <p class="text-sm text-gray-600">{{ item.description }}</p>
                  <p class="text-sm text-bintan-blue font-medium">{{ item.price }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3 class="font-semibold text-gray-900 mb-4">💡 购物小贴士</h3>
            <div class="space-y-2 text-sm text-gray-600">
              <div class="flex items-start">
                <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>小店商品可以砍价，通常可降20-30%</span>
              </div>
              <div class="flex items-start">
                <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>批量购买通常有折扣</span>
              </div>
              <div class="flex items-start">
                <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>避开景区内商店，价格较高</span>
              </div>
              <div class="flex items-start">
                <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>易碎品要求店家包装好</span>
              </div>
              <div class="flex items-start">
                <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>大部分小店只接受现金支付</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 货币支付 -->
      <div v-if="selectedCategory === 'payment' || selectedCategory === 'all'" class="animate-fade-in">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <span class="text-3xl mr-3">💳</span>
          货币与支付
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card">
            <h3 class="font-semibold text-gray-900 mb-4">💱 汇率参考</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span>1美元</span>
                <span class="font-medium">≈ 15,300印尼盾</span>
              </div>
              <div class="flex justify-between">
                <span>1人民币</span>
                <span class="font-medium">≈ 2,150印尼盾</span>
              </div>
              <div class="flex justify-between">
                <span>1新币</span>
                <span class="font-medium">≈ 11,300印尼盾</span>
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3 class="font-semibold text-gray-900 mb-4">💵 现金建议</h3>
            <div class="space-y-2 text-sm text-gray-600">
              <div>• 美元现金：300-500美元</div>
              <div>• 印尼盾现金：1-2百万盾</div>
              <div>• 新币现金：100-200新币</div>
              <div class="text-xs text-gray-500 mt-2">
                用于签证、小费、紧急情况
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3 class="font-semibold text-gray-900 mb-4">💳 信用卡使用</h3>
            <div class="space-y-2 text-sm text-gray-600">
              <div>• 酒店：普遍接受</div>
              <div>• 高档餐厅：多数接受</div>
              <div>• 购物中心：大部分接受</div>
              <div>• 小店/街边：多数只收现金</div>
              <div class="text-xs text-gray-500 mt-2">
                境外取现手续费1-3%
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 通讯网络 -->
      <div v-if="selectedCategory === 'communication' || selectedCategory === 'all'" class="animate-fade-in">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <span class="text-3xl mr-3">📱</span>
          通讯网络
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card">
            <h3 class="font-semibold text-gray-900 mb-4">📶 当地SIM卡</h3>
            <div class="space-y-4">
              <div class="bg-blue-50 p-3 rounded">
                <h4 class="font-medium text-blue-900">Telkomsel（推荐）</h4>
                <div class="text-sm text-blue-800 mt-1">
                  <div>• 3天套餐：50,000印尼盾（2GB）</div>
                  <div>• 7天套餐：100,000印尼盾（5GB）</div>
                  <div>• 覆盖最好，信号稳定</div>
                </div>
              </div>
              <div class="bg-green-50 p-3 rounded">
                <h4 class="font-medium text-green-900">XL Axiata</h4>
                <div class="text-sm text-green-800 mt-1">
                  <div>• 价格稍低</div>
                  <div>• 覆盖稍差</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3 class="font-semibold text-gray-900 mb-4">📡 WiFi情况</h3>
            <div class="space-y-2 text-sm text-gray-600">
              <div class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>酒店：免费WiFi</span>
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>餐厅：多数提供免费WiFi</span>
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>购物中心：免费WiFi</span>
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>码头：有免费WiFi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 紧急联系 -->
      <div v-if="selectedCategory === 'emergency' || selectedCategory === 'all'" class="animate-fade-in">
        <h2 class="text-2xl font-semibold mb-6 flex items-center">
          <span class="text-3xl mr-3">🆘</span>
          紧急联系方式
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="card bg-red-50 border-red-200">
            <h3 class="font-semibold text-red-900 mb-4">🚨 紧急电话</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span>报警电话：</span>
                <a href="tel:110" class="font-medium text-red-700">110</a>
              </div>
              <div class="flex justify-between">
                <span>医疗急救：</span>
                <a href="tel:118" class="font-medium text-red-700">118</a>
              </div>
              <div class="flex justify-between">
                <span>火警电话：</span>
                <a href="tel:113" class="font-medium text-red-700">113</a>
              </div>
              <div class="flex justify-between">
                <span>综合紧急：</span>
                <a href="tel:112" class="font-medium text-red-700">112</a>
              </div>
            </div>
          </div>
          
          <div class="card bg-blue-50 border-blue-200">
            <h3 class="font-semibold text-blue-900 mb-4">🏛️ 领事馆</h3>
            <div class="space-y-2 text-sm">
              <div>
                <div class="font-medium">中国驻印尼领事馆</div>
                <a href="tel:+622157610403" class="text-blue-700">+62 21 5761 0403</a>
              </div>
              <div>
                <div class="font-medium">中国驻新加坡领事馆</div>
                <a href="tel:+6564185200" class="text-blue-700">+65 6418 5200</a>
              </div>
            </div>
          </div>
          
          <div class="card bg-green-50 border-green-200">
            <h3 class="font-semibold text-green-900 mb-4">🏥 医疗服务</h3>
            <div class="space-y-2 text-sm">
              <div>
                <div class="font-medium">Bintan International Hospital</div>
                <a href="tel:+62770692888" class="text-green-700">+62 770 692 888</a>
                <div class="text-xs text-green-600">24小时急诊，英语服务</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedCategory = ref('all')

const infoCategories = [
  { id: 'all', name: '全部', icon: '📋' },
  { id: 'restaurants', name: '餐厅', icon: '🍽️' },
  { id: 'shopping', name: '购物', icon: '🛍️' },
  { id: 'payment', name: '支付', icon: '💳' },
  { id: 'communication', name: '通讯', icon: '📱' },
  { id: 'emergency', name: '紧急', icon: '🆘' }
]

const restaurants = [
  {
    name: 'The Cove',
    rating: 5,
    distance: '步行8分钟',
    hours: '11:00-23:00',
    price: '人均150,000-300,000印尼盾',
    cuisine: '西餐',
    description: '海景用餐，国际料理，浪漫氛围'
  },
  {
    name: 'FlyBoyz Beach Bar',
    rating: 4,
    distance: '步行6分钟',
    hours: '10:00-24:00',
    price: '人均100,000-200,000印尼盾',
    cuisine: '海滩酒吧',
    description: '海滩BBQ，鸡尾酒，现场音乐'
  },
  {
    name: 'Banyan Tree Restaurant',
    rating: 5,
    distance: '车程5分钟',
    hours: '18:00-22:00',
    price: '人均300,000-500,000印尼盾',
    cuisine: '高档亚洲菜',
    description: '精致亚洲料理，需要预订'
  },
  {
    name: 'Asli & Yang Pertama Ayam Presto',
    rating: 4,
    distance: '车程15分钟',
    hours: '10:00-21:00',
    price: '人均50,000-100,000印尼盾',
    cuisine: '印尼菜',
    description: '当地特色炸鸡，椰浆饭'
  },
  {
    name: 'Warung Kopi Bintan',
    rating: 4,
    distance: '车程10分钟',
    hours: '07:00-22:00',
    price: '人均30,000-80,000印尼盾',
    cuisine: '咖啡厅',
    description: '印尼咖啡，当地小食'
  }
]

const shoppingItems = [
  {
    name: '印尼咖啡豆',
    icon: '☕',
    description: '当地特产，品质优良，价格实惠',
    price: '50,000-150,000印尼盾/包'
  },
  {
    name: '椰子制品',
    icon: '🥥',
    description: '椰子油、椰子糖、椰子片等',
    price: '30,000-100,000印尼盾'
  },
  {
    name: '蜡染布料（Batik）',
    icon: '🎨',
    description: '印尼传统手工艺品，图案精美',
    price: '100,000-500,000印尼盾'
  },
  {
    name: '木雕工艺品',
    icon: '🗿',
    description: '手工雕刻，具有当地特色',
    price: '80,000-300,000印尼盾'
  },
  {
    name: '香料调料包',
    icon: '🌶️',
    description: '印尼特色香料，烹饪必备',
    price: '20,000-80,000印尼盾'
  }
]
</script>
