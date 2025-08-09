#!/bin/bash

# Build script for multiple domains
echo "Building for all domains..."

# Clean previous builds
echo "Cleaning previous builds..."
rm -rf dist-sr dist-de dist-en

# Build Serbian version (default)
echo "Building Serbian version..."
export VITE_DEFAULT_LANG=sr
npm run build:sr

# Build German version
echo "Building German version..."
export VITE_DEFAULT_LANG=de
npm run build:de

# Build English version
echo "Building English version..."
export VITE_DEFAULT_LANG=en
npm run build:en

echo "✅ All builds completed!"
echo "📁 Serbian build: dist-sr"
echo "📁 German build: dist-de"
echo "📁 English build: dist-en"

# Rename index files for clarity
cd dist-sr && mv index-sr.html index.html && cd ..
cd dist-de && mv index-de.html index.html && cd ..
cd dist-en && mv index-en.html index.html && cd ..

echo "✅ Build files renamed for deployment"
