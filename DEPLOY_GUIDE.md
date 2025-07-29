# 🚀 GitHub Pages 部署指南

## 📋 部署前准备

### 1. 创建GitHub仓库
1. 登录 [GitHub](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名称：`bintan-travel-guide`
4. 设置为 Public（GitHub Pages免费版需要公开仓库）
5. 不要初始化README、.gitignore或license（我们已经有了）

### 2. 本地Git初始化
在项目根目录运行以下命令：

```bash
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交初始版本
git commit -m "🏝️ 初始版本：民丹岛旅游攻略网站"

# 添加远程仓库（替换YOUR_USERNAME为您的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/bintan-travel-guide.git

# 推送到GitHub
git branch -M main
git push -u origin main
```

## 🔧 自动部署配置

### 方法一：GitHub Actions自动部署（推荐）

1. **推送代码后自动触发**
   - 每次推送到main分支时自动构建和部署
   - 无需手动操作

2. **启用GitHub Pages**
   - 进入仓库 → Settings → Pages
   - Source选择：Deploy from a branch
   - Branch选择：gh-pages
   - 点击Save

3. **等待部署完成**
   - 查看Actions标签页的部署进度
   - 通常需要2-5分钟完成

4. **访问网站**
   - 网址：`https://YOUR_USERNAME.github.io/bintan-travel-guide/`

### 方法二：手动部署

```bash
# 安装gh-pages依赖
npm install

# 构建并部署
npm run deploy
```

## 🌐 访问您的网站

部署成功后，您的网站将在以下地址可用：
```
https://YOUR_USERNAME.github.io/bintan-travel-guide/
```

例如，如果您的GitHub用户名是 `zhangsan`，那么网址就是：
```
https://zhangsan.github.io/bintan-travel-guide/
```

## 📱 分享给朋友

部署完成后，您可以：
1. 将网址分享给女朋友和朋友
2. 在手机浏览器中添加到主屏幕
3. 离线使用（支持PWA功能）

## 🔄 更新网站内容

### 修改内容后重新部署

1. **修改文件**（如时间线、对话等）
2. **提交更改**：
   ```bash
   git add .
   git commit -m "更新行程安排"
   git push
   ```
3. **自动部署**：GitHub Actions会自动重新部署

### 常见修改

#### 修改旅行日期
编辑 `src/data/timeline.js`：
```javascript
date: "2024-08-03"  // 改为您的实际日期
```

#### 添加新对话
编辑 `src/data/dialogues.js`，在相应分类中添加：
```javascript
{
  scenario: "新场景",
  english: "English text",
  chinese: "中文翻译",
  pronunciation: "发音标记"
}
```

#### 修改酒店信息
在时间线中搜索并替换酒店名称和GPS坐标

## 🛠️ 故障排除

### 部署失败
1. 检查GitHub Actions的错误日志
2. 确保所有文件都已提交
3. 检查package.json中的依赖是否正确

### 网站无法访问
1. 确认GitHub Pages已启用
2. 检查仓库是否为Public
3. 等待DNS传播（可能需要几分钟）

### 样式或功能异常
1. 检查浏览器控制台错误
2. 确认所有资源路径正确
3. 清除浏览器缓存

## 📊 网站统计

部署后可以添加：
- Google Analytics（网站访问统计）
- 百度统计（国内用户统计）

## 🔒 安全注意事项

1. **不要提交敏感信息**：
   - 个人电话号码
   - 详细住址
   - 信用卡信息

2. **公开仓库注意**：
   - 所有代码都是公开的
   - 不要包含私人信息

## 📞 技术支持

如果遇到部署问题：
1. 检查GitHub Actions日志
2. 查看浏览器开发者工具
3. 确认所有步骤都已正确执行

---

**部署成功后，您就有了一个专业的民丹岛旅游攻略网站！** 🏝️✨

记得将网址分享给女朋友，让她也能随时查看行程安排！
