@echo off
chcp 65001 >nul
title 民丹岛旅游攻略 - GitHub Pages 部署

echo 🏝️  民丹岛旅游攻略 - GitHub Pages 部署脚本
echo ================================================

REM 检查是否在正确的目录
if not exist package.json (
    echo ❌ 请在项目根目录运行此脚本
    pause
    exit /b 1
)

REM 获取用户的GitHub用户名
echo 📝 请输入您的GitHub用户名：
set /p GITHUB_USERNAME="GitHub用户名: "

if "%GITHUB_USERNAME%"=="" (
    echo ❌ GitHub用户名不能为空
    pause
    exit /b 1
)

echo ✅ GitHub用户名: %GITHUB_USERNAME%

REM 检查Git是否已初始化
if not exist .git (
    echo 🔧 初始化Git仓库...
    git init
    echo ✅ Git仓库初始化完成
)

REM 添加所有文件
echo 📦 添加文件到Git...
git add .

REM 提交更改
echo 💾 提交更改...
git commit -m "🏝️ 民丹岛旅游攻略网站 - 完整版本

✨ 功能特色:
- 交互式时间线（2天1夜详细行程）
- 实时语音播放（英文对话朗读）
- GPS导航集成（一键复制坐标）
- 场景对话库（5大分类，30+对话）
- 包车服务指南（飞猪预订详解）
- 签证指南（STP持有者专用）
- 响应式设计（完美适配手机）
- 离线支持（关键信息缓存）

🎯 专为持新加坡学生准证的中国公民定制"

REM 检查是否已添加远程仓库
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo 🔗 添加GitHub远程仓库...
    git remote add origin https://github.com/%GITHUB_USERNAME%/bintan-travel-guide.git
    echo ✅ 远程仓库添加完成
)

REM 设置主分支
git branch -M main

echo.
echo 🚀 准备推送到GitHub...
echo    仓库地址: https://github.com/%GITHUB_USERNAME%/bintan-travel-guide
echo    网站地址: https://%GITHUB_USERNAME%.github.io/bintan-travel-guide/
echo.

REM 推送到GitHub
echo 📤 推送到GitHub...
git push -u origin main
if %errorlevel% neq 0 (
    echo ❌ 推送失败，请检查：
    echo    1. GitHub仓库是否已创建
    echo    2. 网络连接是否正常
    echo    3. GitHub用户名是否正确
    pause
    exit /b 1
)

echo ✅ 代码推送成功！

echo.
echo 🎉 部署脚本执行完成！
echo.
echo 📋 接下来的步骤：
echo 1. 访问 https://github.com/%GITHUB_USERNAME%/bintan-travel-guide
echo 2. 进入 Settings → Pages
echo 3. Source 选择: Deploy from a branch
echo 4. Branch 选择: gh-pages
echo 5. 点击 Save
echo.
echo ⏰ 等待2-5分钟后，您的网站将在以下地址可用：
echo 🌐 https://%GITHUB_USERNAME%.github.io/bintan-travel-guide/
echo.
echo 📱 您可以将此网址分享给女朋友，随时查看民丹岛旅游攻略！
echo.
echo 🔄 如需更新网站内容，只需：
echo    git add .
echo    git commit -m "更新内容"
echo    git push
echo.
echo 祝您在民丹岛度过愉快的旅程！🏝️✨

pause
