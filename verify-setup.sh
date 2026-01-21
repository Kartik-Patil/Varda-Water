#!/bin/bash

# VARDA Water - Project Setup Verification Script

echo "🌊 VARDA Water - Verifying Project Setup"
echo "========================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in the varda-water directory"
    exit 1
fi

echo "✅ Project directory: OK"

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo "✅ Dependencies installed: OK"
else
    echo "⚠️  Dependencies not installed. Run: npm install"
fi

# Check key directories
directories=("src/pages" "src/components/layout" "src/components/common" "src/styles" "src/utils")
for dir in "${directories[@]}"; do
    if [ -d "$dir" ]; then
        echo "✅ $dir: OK"
    else
        echo "❌ $dir: Missing"
    fi
done

# Check key files
echo ""
echo "Checking key files..."
files=(
    "src/App.jsx"
    "src/main.jsx"
    "src/pages/Home.jsx"
    "src/pages/About.jsx"
    "src/pages/Products.jsx"
    "src/pages/Quality.jsx"
    "src/pages/Distribution.jsx"
    "src/pages/Sustainability.jsx"
    "src/pages/Contact.jsx"
    "src/pages/PrivacyPolicy.jsx"
    "src/pages/TermsAndConditions.jsx"
    "src/components/layout/Navbar.jsx"
    "src/components/layout/Footer.jsx"
    "src/components/layout/Layout.jsx"
    "src/components/common/Button.jsx"
    "src/components/common/Card.jsx"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file: Missing"
    fi
done

echo ""
echo "========================================"
echo "✨ Project setup verification complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Run: npm run dev"
echo "   2. Open: http://localhost:5173"
echo "   3. Start developing!"
echo ""
