@echo off
chcp 65001 >nul
title 民丹岛旅游攻略网站

echo 🏝️  民丹岛旅游攻略网站启动脚本
echo ================================================

REM 检查 Node.js 是否安装
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js 未安装，请先安装 Node.js 16+ 版本
    echo    下载地址: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js 版本检查通过
node --version

REM 检查是否在正确的目录
if not exist package.json (
    echo ❌ 请在项目根目录运行此脚本
    pause
    exit /b 1
)

REM 检查依赖是否已安装
if not exist node_modules (
    echo 📦 正在安装依赖...
    
    REM 检查包管理器
    pnpm --version >nul 2>&1
    if %errorlevel% equ 0 (
        echo    使用 pnpm 安装依赖...
        pnpm install
    ) else (
        yarn --version >nul 2>&1
        if %errorlevel% equ 0 (
            echo    使用 yarn 安装依赖...
            yarn install
        ) else (
            echo    使用 npm 安装依赖...
            npm install
        )
    )
    
    if %errorlevel% neq 0 (
        echo ❌ 依赖安装失败
        pause
        exit /b 1
    )
    
    echo ✅ 依赖安装完成
) else (
    echo ✅ 依赖已安装
)

echo.
echo 🚀 启动开发服务器...
echo    访问地址: http://localhost:3000
echo    按 Ctrl+C 停止服务器
echo.

REM 启动服务器
pnpm --version >nul 2>&1
if %errorlevel% equ 0 (
    pnpm dev
) else (
    yarn --version >nul 2>&1
    if %errorlevel% equ 0 (
        yarn dev
    ) else (
        npm run dev
    )
)

pause
