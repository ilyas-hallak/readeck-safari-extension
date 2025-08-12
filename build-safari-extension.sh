#!/bin/bash

set -e

# Parse command line arguments
VERBOSE=false
for arg in "$@"; do
    case $arg in
        --verbose)
            VERBOSE=true
            shift
            ;;
        *)
            ;;
    esac
done

# Set output redirection based on verbose mode
if [ "$VERBOSE" = true ]; then
    REDIRECT=""
else
    REDIRECT=">/dev/null 2>&1"
fi

# Configuration
GIT_REPO="https://codeberg.org/readeck/browser-extension.git"
GIT_BRANCH="main"
BUILD_DIR=".build"
SAFARI_EXTENSION_DIR="./safari-extension"
XCODE_PROJECT_NAME="readeck"

echo "🚀 Building Safari Extension for Readeck"
echo "========================================"

# Step 1: Clone or update repository in build directory
if [ -d "$BUILD_DIR/.git" ]; then
    echo "📦 Updating existing repository..."
    cd "$BUILD_DIR"
    if [ "$VERBOSE" = true ]; then
        git fetch origin
        git checkout "$GIT_BRANCH"
        git pull origin "$GIT_BRANCH"
    else
        git fetch origin >/dev/null 2>&1
        git checkout "$GIT_BRANCH" >/dev/null 2>&1
        git pull origin "$GIT_BRANCH" >/dev/null 2>&1
    fi
    cd ..
else
    echo "📦 Cloning repository to build directory..."
    rm -rf "$BUILD_DIR"
    if [ "$VERBOSE" = true ]; then
        git clone "$GIT_REPO" "$BUILD_DIR"
        cd "$BUILD_DIR"
        git checkout "$GIT_BRANCH"
    else
        git clone "$GIT_REPO" "$BUILD_DIR" >/dev/null 2>&1
        cd "$BUILD_DIR"
        git checkout "$GIT_BRANCH" >/dev/null 2>&1
    fi
    cd ..
fi

# Step 2: Install dependencies
echo "📚 Installing dependencies..."
cd "$BUILD_DIR"
if [ "$VERBOSE" = true ]; then
    npm install
else
    npm install >/dev/null 2>&1
fi

# Step 3: Build the extension
echo "🔨 Building extension..."
if [ "$VERBOSE" = true ]; then
    make
else
    make >/dev/null 2>&1
fi
cd ..

# Step 4: Generate or update Safari extension
if [ -d "$SAFARI_EXTENSION_DIR" ]; then
    echo "🍎 Safari extension already exists - keeping project settings..."
    echo "🔄 Copying updated web extension files..."
    # Copy only the web extension content, preserve Xcode project
    if [ "$VERBOSE" = true ]; then
        cp -r "$BUILD_DIR/addon"/* "$SAFARI_EXTENSION_DIR/$XCODE_PROJECT_NAME/Shared (Extension)/"
    else
        cp -r "$BUILD_DIR/addon"/* "$SAFARI_EXTENSION_DIR/$XCODE_PROJECT_NAME/Shared (Extension)/" >/dev/null 2>&1
    fi
    echo "⚠️  Web extension files updated. You may need to refresh Xcode."
else
    echo "🍎 Creating new Safari extension..."
    if [ "$VERBOSE" = true ]; then
        xcrun safari-web-extension-converter "$BUILD_DIR/addon" --project-location "$SAFARI_EXTENSION_DIR"
    else
        xcrun safari-web-extension-converter "$BUILD_DIR/addon" --project-location "$SAFARI_EXTENSION_DIR" >/dev/null 2>&1
    fi
    echo "⚠️  Remember to set your Bundle ID in Xcode (e.g., com.yourname.readeck.extension)"
fi

echo "✅ Safari extension build complete!"
echo "📁 Xcode project: $SAFARI_EXTENSION_DIR/$XCODE_PROJECT_NAME/"
echo ""

# Step 6: Ask to open Xcode project
read -p "📱 Open Xcode project now? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 Opening Xcode project..."
    open "$SAFARI_EXTENSION_DIR/$XCODE_PROJECT_NAME/$XCODE_PROJECT_NAME.xcodeproj"
fi

echo ""
echo "🎉 Ready to start your work!"
echo "   Have fun building your Safari extension!"