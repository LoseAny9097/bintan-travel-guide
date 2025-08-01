# 🚀 快速启动指南

## 方法一：使用启动脚本（推荐）

### Windows 用户
1. 双击运行 `start.bat` 文件
2. 等待依赖安装完成
3. 浏览器会自动打开 http://localhost:3000

### Mac/Linux 用户
1. 在终端中运行：
```bash
chmod +x start.sh
./start.sh
```
2. 等待依赖安装完成
3. 浏览器会自动打开 http://localhost:3000

## 方法二：手动启动

### 1. 安装依赖
```bash
cd bintan-travel-guide
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

### 3. 打开浏览器
访问 http://localhost:3000

## 🎯 主要功能演示

### 1. 首页概览
- 查看旅行倒计时
- 快速导航到各个功能模块
- 了解行程概览

### 2. 时间线功能
- 点击左侧导航的"时间线"
- 查看详细的2天1夜行程安排
- 点击每个时间点展开详细信息
- 尝试语音播放功能

### 3. 对话练习
- 点击"对话"页面
- 选择不同的场景分类
- 点击绿色播放按钮听英文发音
- 复制英文文本进行练习

### 4. 地图导航
- 点击"地图"页面
- 查看所有重要地点的GPS坐标
- 点击"GPS"按钮复制坐标
- 点击"导航"按钮在地图中打开

### 5. 包车服务
- 查看详细的包车预订指南
- 复制飞猪预订模板
- 了解价格对比和注意事项

## 📱 移动端体验

1. 在手机浏览器中打开网站
2. 体验响应式设计
3. 尝试语音播放功能
4. 测试GPS坐标复制功能

## 🔧 自定义修改

### 修改旅行日期
编辑 `src/data/timeline.js` 文件中的日期信息

### 添加新对话
在 `src/data/dialogues.js` 文件中添加新的对话内容

### 修改主题颜色
在 `tailwind.config.js` 文件中调整颜色配置

## ❓ 常见问题

### Q: 语音播放不工作？
A: 确保使用 Chrome 或 Safari 浏览器，Firefox 支持有限

### Q: 端口 3000 被占用？
A: 脚本会自动尝试其他端口，或手动指定端口：
```bash
npm run dev -- --port 3001
```

### Q: 依赖安装失败？
A: 尝试清除缓存：
```bash
rm -rf node_modules package-lock.json
npm install
```

### Q: 如何部署到服务器？
A: 构建生产版本：
```bash
npm run build
```
然后将 `dist` 文件夹上传到服务器

## 📞 技术支持

如果遇到问题，请检查：
1. Node.js 版本是否为 16+
2. 网络连接是否正常
3. 浏览器是否支持现代 JavaScript 特性

---

**祝您使用愉快！** 🏝️✨
