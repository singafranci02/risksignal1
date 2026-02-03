#!/bin/bash

# Image Setup Script for Kuneo Website
# This script creates the folder structure for professional images

echo "🎨 Setting up image directories for Kuneo..."

# Create main images directory
mkdir -p public/images

# Create subdirectories
mkdir -p public/images/hero
mkdir -p public/images/features
mkdir -p public/images/team
mkdir -p public/images/use-cases
mkdir -p public/images/testimonials
mkdir -p public/images/logos

echo "✅ Created image directories:"
echo "   📁 public/images/hero/ - For hero section backgrounds"
echo "   📁 public/images/features/ - For feature section images"
echo "   📁 public/images/team/ - For team member photos"
echo "   📁 public/images/use-cases/ - For use case illustrations"
echo "   📁 public/images/testimonials/ - For client avatars"
echo "   📁 public/images/logos/ - For partner/client logos"

echo ""
echo "📥 Next steps:"
echo "1. Download images from Unsplash.com or Pexels.com"
echo "2. Optimize them at tinypng.com or squoosh.app"
echo "3. Copy them to the appropriate folders above"
echo "4. Update your page components to use the images"
echo ""
echo "📖 See IMAGE_INTEGRATION_GUIDE.md for detailed instructions"
echo ""
echo "🎯 Priority images to add:"
echo "   • public/images/hero/home-hero.jpg (1920x1080)"
echo "   • public/images/hero/about-hero.jpg (1920x1080)"
echo "   • public/images/testimonials/client-1.jpg (200x200)"
echo ""
echo "✨ Done! Image folders are ready."
