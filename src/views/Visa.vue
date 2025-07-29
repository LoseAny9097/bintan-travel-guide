<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- 页面标题 -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">📋 签证指南</h1>
      <p class="text-gray-600">专为持新加坡学生准证（STP）的中国公民定制</p>
    </div>

    <!-- 重要提醒 -->
    <div class="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
      <div class="flex items-start">
        <svg class="w-6 h-6 text-red-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
        </svg>
        <div>
          <h3 class="font-semibold text-red-900 mb-2">🚨 重要提醒</h3>
          <p class="text-red-800">
            虽然您持有新加坡学生准证（STP），但前往民丹岛仍需按<strong>中国公民身份</strong>办理印尼签证。
            STP不能替代签证要求。
          </p>
        </div>
      </div>
    </div>

    <!-- 签证选项对比 -->
    <div class="card mb-8">
      <h2 class="text-xl font-semibold mb-6">🎯 签证选项对比</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 7天短期签证 -->
        <div class="border-2 border-green-200 rounded-lg p-6 bg-green-50">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-semibold text-green-900">7天短期签证</h3>
            <span class="bg-green-500 text-white text-xs px-2 py-1 rounded-full">推荐</span>
          </div>
          <div class="space-y-3 text-sm">
            <div class="flex justify-between">
              <span class="text-green-700">费用：</span>
              <span class="font-medium">250,000印尼盾 (~17美元)</span>
            </div>
            <div class="flex justify-between">
              <span class="text-green-700">停留期限：</span>
              <span class="font-medium">最长7天</span>
            </div>
            <div class="flex justify-between">
              <span class="text-green-700">适用范围：</span>
              <span class="font-medium">廖内群岛</span>
            </div>
            <div class="flex justify-between">
              <span class="text-green-700">延期：</span>
              <span class="font-medium">不可延期</span>
            </div>
          </div>
          <div class="mt-4 p-3 bg-green-100 rounded">
            <p class="text-green-800 text-xs">
              ✅ 适合2天1夜短期旅游<br>
              ✅ 费用便宜<br>
              ✅ 办理快速
            </p>
          </div>
        </div>

        <!-- 30天标准签证 -->
        <div class="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-semibold text-blue-900">30天标准签证</h3>
            <span class="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">备选</span>
          </div>
          <div class="space-y-3 text-sm">
            <div class="flex justify-between">
              <span class="text-blue-700">费用：</span>
              <span class="font-medium">500,000印尼盾 (~35美元)</span>
            </div>
            <div class="flex justify-between">
              <span class="text-blue-700">停留期限：</span>
              <span class="font-medium">最长30天</span>
            </div>
            <div class="flex justify-between">
              <span class="text-blue-700">适用范围：</span>
              <span class="font-medium">整个印尼</span>
            </div>
            <div class="flex justify-between">
              <span class="text-blue-700">延期：</span>
              <span class="font-medium">可延期30天</span>
            </div>
          </div>
          <div class="mt-4 p-3 bg-blue-100 rounded">
            <p class="text-blue-800 text-xs">
              ✅ 停留时间长<br>
              ✅ 可延期<br>
              ❌ 费用较高
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 办理流程 -->
    <div class="card mb-8">
      <h2 class="text-xl font-semibold mb-6">📝 办理流程</h2>
      <div class="space-y-6">
        <!-- 步骤1 -->
        <div class="flex items-start">
          <div class="flex-shrink-0 w-8 h-8 bg-bintan-blue text-white rounded-full flex items-center justify-center font-semibold text-sm">
            1
          </div>
          <div class="ml-4">
            <h3 class="font-medium text-gray-900 mb-2">抵达民丹岛码头</h3>
            <p class="text-gray-600 text-sm mb-2">
              在班达班丹特拉尼码头下船后，跟随"Visa on Arrival"指示牌前往签证办理区域。
            </p>
            <div class="bg-yellow-50 p-3 rounded text-sm">
              <strong>小贴士：</strong> 让包车司机在码头等候，不要让他离开。
            </div>
          </div>
        </div>

        <!-- 步骤2 -->
        <div class="flex items-start">
          <div class="flex-shrink-0 w-8 h-8 bg-bintan-blue text-white rounded-full flex items-center justify-center font-semibold text-sm">
            2
          </div>
          <div class="ml-4">
            <h3 class="font-medium text-gray-900 mb-2">准备所需材料</h3>
            <ul class="text-gray-600 text-sm space-y-1 mb-2">
              <li>• 中国护照（有效期6个月以上）</li>
              <li>• 新加坡学生准证（STP）复印件</li>
              <li>• 返程渡轮票</li>
              <li>• 酒店预订确认单</li>
              <li>• 现金（美元或印尼盾）</li>
            </ul>
          </div>
        </div>

        <!-- 步骤3 -->
        <div class="flex items-start">
          <div class="flex-shrink-0 w-8 h-8 bg-bintan-blue text-white rounded-full flex items-center justify-center font-semibold text-sm">
            3
          </div>
          <div class="ml-4">
            <h3 class="font-medium text-gray-900 mb-2">填写申请表格</h3>
            <p class="text-gray-600 text-sm mb-2">
              工作人员会提供签证申请表格，用英文填写个人信息。
            </p>
            <div class="bg-blue-50 p-3 rounded text-sm">
              <strong>常用英文填写：</strong><br>
              Purpose of visit: Tourism<br>
              Duration of stay: 2 days<br>
              Accommodation: Kamuela Villa Lagoi Bay
            </div>
          </div>
        </div>

        <!-- 步骤4 -->
        <div class="flex items-start">
          <div class="flex-shrink-0 w-8 h-8 bg-bintan-blue text-white rounded-full flex items-center justify-center font-semibold text-sm">
            4
          </div>
          <div class="ml-4">
            <h3 class="font-medium text-gray-900 mb-2">支付签证费用</h3>
            <p class="text-gray-600 text-sm mb-2">
              选择7天签证（250,000印尼盾）或30天签证（500,000印尼盾），只接受现金支付。
            </p>
            <div class="bg-green-50 p-3 rounded text-sm">
              <strong>推荐：</strong> 选择7天签证，费用便宜且足够2天1夜行程使用。
            </div>
          </div>
        </div>

        <!-- 步骤5 -->
        <div class="flex items-start">
          <div class="flex-shrink-0 w-8 h-8 bg-bintan-green text-white rounded-full flex items-center justify-center font-semibold text-sm">
            5
          </div>
          <div class="ml-4">
            <h3 class="font-medium text-gray-900 mb-2">获得签证贴纸</h3>
            <p class="text-gray-600 text-sm">
              等待5-10分钟审核，工作人员会在护照上贴上签证贴纸，然后就可以入境了。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 常用对话 -->
    <div class="card mb-8">
      <h2 class="text-xl font-semibold mb-6">💬 签证办理常用对话</h2>
      <div class="space-y-4">
        <DialogueCard
          v-for="dialogue in visaDialogues"
          :key="dialogue.scenario"
          :dialogue="dialogue"
        />
      </div>
    </div>

    <!-- 注意事项 -->
    <div class="card">
      <h2 class="text-xl font-semibold mb-6">⚠️ 注意事项</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="font-medium text-gray-900 mb-3">✅ 必须携带</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              护照原件（有效期6个月以上）
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              返程船票确认单
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              现金（美元或印尼盾）
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              酒店预订确认单
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-medium text-gray-900 mb-3">❌ 注意避免</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center">
              <svg class="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
              不要使用信用卡支付签证费
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
              不要让司机离开码头
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
              不要忘记携带返程船票
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
              不要超过签证有效期
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DialogueCard from '../components/DialogueCard.vue'

const visaDialogues = [
  {
    scenario: '申请7天签证',
    english: 'I need a 7-day visa, please. How much does it cost?',
    chinese: '我需要办理7天签证，请问多少钱？',
    pronunciation: 'aɪ nid ə ˈsevən deɪ ˈvizə pliːz haʊ mʌtʃ dʌz ɪt kɔst'
  },
  {
    scenario: '询问支付方式',
    english: 'Do you accept US dollars? Or Indonesian rupiah only?',
    chinese: '你们接受美元吗？还是只收印尼盾？',
    pronunciation: 'du ju ækˈsept ju es ˈdɑlərz ɔr ˌɪndoʊˈniʒən ruˈpiə ˈoʊnli'
  },
  {
    scenario: '提供材料',
    english: 'Here is my passport and return ticket. I am staying for 2 days.',
    chinese: '这是我的护照和返程票，我要停留2天。',
    pronunciation: 'hɪr ɪz maɪ ˈpæspɔrt ænd rɪˈtɜrn ˈtɪkɪt aɪ æm ˈsteɪɪŋ fɔr tu deɪz'
  },
  {
    scenario: '询问处理时间',
    english: 'How long does it take to process the visa?',
    chinese: '办理签证需要多长时间？',
    pronunciation: 'haʊ lɔŋ dʌz ɪt teɪk tu ˈprɑses ðə ˈvizə'
  }
]
</script>
