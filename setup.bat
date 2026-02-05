@echo off
REM ILEAGENT Platform Quick Start for Windows

echo.
echo 🎯 ILEAGENT - Full-Stack Platform Setup
echo ==========================================
echo.

REM Check Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js not found. Please install Node.js 18+
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✅ Node.js version: %NODE_VERSION%

for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo ✅ npm version: %NPM_VERSION%
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install --legacy-peer-deps
if %errorlevel% equ 0 (
    echo ✅ Dependencies installed
) else (
    echo ❌ Failed to install dependencies
    exit /b 1
)
echo.

REM Create .env files
echo ⚙️  Setting up environment variables...

if not exist "apps\web\.env.local" (
    copy apps\web\.env.example apps\web\.env.local
    echo ✅ Created apps\web\.env.local
)

if not exist "apps\backend\.env" (
    copy apps\backend\.env.example apps\backend\.env
    echo ✅ Created apps\backend\.env
)

if not exist "apps\mobile\.env" (
    copy apps\mobile\.env.example apps\mobile\.env
    echo ✅ Created apps\mobile\.env
)
echo.

echo 🚀 Setup Complete!
echo.
echo 📖 Next Steps:
echo   1. Configure environment variables in .env files
echo   2. Setup PostgreSQL database
echo   3. Run: npm run dev
echo.
echo 📚 Documentation:
echo   - PROJECT_SETUP.md - Complete setup guide
echo   - DEVELOPMENT.md - Development workflow
echo   - BUILD_COMPLETE.md - What was built
echo.
