#!/bin/bash

# ILEAGENT Platform Quick Start

echo "🎯 ILEAGENT - Full-Stack Platform Setup"
echo "=========================================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 18+"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
echo ""

# Create .env files
echo "⚙️  Setting up environment variables..."

if [ ! -f "apps/web/.env.local" ]; then
    cp apps/web/.env.example apps/web/.env.local
    echo "✅ Created apps/web/.env.local"
fi

if [ ! -f "apps/backend/.env" ]; then
    cp apps/backend/.env.example apps/backend/.env
    echo "✅ Created apps/backend/.env"
fi

if [ ! -f "apps/mobile/.env" ]; then
    cp apps/mobile/.env.example apps/mobile/.env
    echo "✅ Created apps/mobile/.env"
fi
echo ""

echo "🚀 Setup Complete!"
echo ""
echo "📖 Next Steps:"
echo "  1. Configure environment variables in .env files"
echo "  2. Setup PostgreSQL database"
echo "  3. Run: npm run dev"
echo ""
echo "📚 Documentation:"
echo "  - PROJECT_SETUP.md - Complete setup guide"
echo "  - DEVELOPMENT.md - Development workflow"
echo "  - BUILD_COMPLETE.md - What was built"
echo ""
