# 🏝️ 民丹岛旅游攻略 Vue 网站

专为持新加坡学生准证（STP）的中国公民定制的民丹岛2天1夜旅游攻略网站。

## ✨ 功能特色

### 🎯 核心功能
- **交互式时间线** - 2天1夜详细行程展示，分钟级精确安排
- **实时语音播放** - 英文对话语音朗读，支持标准发音
- **GPS导航集成** - 一键复制坐标到地图APP，精确定位
- **场景对话库** - 分类整理的实用英文对话，涵盖各种场景
- **离线支持** - 关键信息本地缓存，无网络也能使用
- **响应式设计** - 完美适配手机、平板、电脑

### 📱 页面功能
- **🏠 首页** - 旅行概览、倒计时、快速导航
- **⏰ 时间线** - 详细行程安排，实时进度跟踪
- **📋 签证指南** - STP持有者专用签证信息
- **🚗 包车服务** - 飞猪预订指南、司机信息
- **🗺️ 地图导航** - GPS坐标、导航APP推荐
- **💬 场景对话** - 分类英文对话，语音播放
- **ℹ️ 实用信息** - 餐厅、购物、联系方式

### 🔧 技术特性
- **Vue 3** + Composition API
- **Tailwind CSS** 响应式设计
- **Web Speech API** 语音播放
- **LocalStorage** 离线数据存储
- **PWA就绪** 可安装到手机桌面

## 🚀 快速开始

### 环境要求
- Node.js 16+ 
- npm 或 yarn

### 安装依赖
```bash
cd bintan-travel-guide
npm install
```

### 启动开发服务器
```bash
npm run dev
```

访问 http://localhost:3000 查看网站

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 📁 项目结构

```
bintan-travel-guide/
├── public/                 # 静态资源
├── src/
│   ├── components/         # Vue组件
│   │   ├── Navigation.vue  # 导航栏
│   │   ├── TimelineItem.vue # 时间线项目
│   │   ├── DialogueCard.vue # 对话卡片
│   │   └── VoicePlayer.vue  # 语音播放器
│   ├── views/              # 页面组件
│   │   ├── Home.vue        # 首页
│   │   ├── Timeline.vue    # 时间线
│   │   ├── Visa.vue        # 签证指南
│   │   ├── Transport.vue   # 包车服务
│   │   ├── Map.vue         # 地图导航
│   │   ├── Dialogue.vue    # 场景对话
│   │   └── Info.vue        # 实用信息
│   ├── data/               # 数据文件
│   │   ├── timeline.js     # 时间线数据
│   │   └── dialogues.js    # 对话数据
│   ├── utils/              # 工具函数
│   │   ├── speech.js       # 语音服务
│   │   └── storage.js      # 存储服务
│   ├── App.vue             # 根组件
│   ├── main.js             # 入口文件
│   └── style.css           # 全局样式
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 设计系统

### 颜色主题
- **bintan-blue**: #0ea5e9 - 主色调（海洋蓝）
- **bintan-sand**: #fbbf24 - 沙滩金
- **bintan-green**: #10b981 - 热带绿
- **bintan-coral**: #f97316 - 珊瑚橙

### 组件样式
- **btn-primary**: 主要按钮样式
- **btn-secondary**: 次要按钮样式
- **card**: 卡片容器样式
- **timeline-item**: 时间线项目样式
- **voice-btn**: 语音播放按钮
- **gps-btn**: GPS坐标按钮

## 📊 数据结构

### 时间线数据
```javascript
{
  day: 1,
  date: "2024-08-03",
  title: "Day 1 - 抵达与海滩休闲",
  timeline: [
    {
      time: "07:00",
      title: "新加坡出发",
      location: "丹那美拉渡轮码头",
      gps: "1.3274,103.9462",
      description: "提前30分钟到达码头办理登船手续",
      actions: ["check-in", "boarding"],
      dialogues: [...],
      tips: [...]
    }
  ]
}
```

### 对话数据
```javascript
{
  scenario: "购票确认",
  english: "Two tickets to Bintan, please.",
  chinese: "请给我两张去民丹岛的票。",
  pronunciation: "tu ˈtɪkɪts tu ˈbɪntən pliːz"
}
```

## 🔊 语音功能

网站集成了Web Speech API，支持：
- 英文文本自动朗读
- 可调节语速和音量
- 支持暂停和停止
- 自动选择最佳英语语音

### 浏览器兼容性
- ✅ Chrome/Edge (推荐)
- ✅ Safari
- ⚠️ Firefox (部分支持)

## 📱 移动端优化

- 响应式布局，完美适配各种屏幕
- 触摸友好的交互设计
- 优化的字体大小和间距
- 快速加载和流畅动画

## 🔧 自定义配置

### 修改旅行日期
编辑 `src/data/timeline.js` 中的日期信息

### 添加新对话
在 `src/data/dialogues.js` 中添加新的对话分类和内容

### 修改主题颜色
在 `tailwind.config.js` 中调整颜色配置

## 🌐 部署建议

### Vercel (推荐)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# 上传 dist 文件夹到 Netlify
```

### GitHub Pages
```bash
npm run build
# 将 dist 文件夹内容推送到 gh-pages 分支
```

## 📝 使用说明

1. **出发前准备**
   - 浏览完整攻略，熟悉行程安排
   - 下载离线地图和保存重要信息
   - 练习常用英文对话

2. **旅行中使用**
   - 实时查看时间线，跟踪行程进度
   - 使用GPS坐标导航到目的地
   - 播放对话练习与当地人交流

3. **离线使用**
   - 关键信息已缓存，无网络也能查看
   - 建议提前加载所有页面

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目！

### 开发流程
1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 发起 Pull Request

## 📄 许可证

MIT License - 详见 LICENSE 文件

## 🙏 致谢

感谢所有为民丹岛旅游攻略提供信息和建议的朋友们！

---

**祝您在民丹岛度过愉快的旅程！** 🏖️✨
