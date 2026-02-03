# 📸 Professional Image Integration Guide

## Overview

This guide shows you exactly where to add professional images to enhance your Kuneo website and make it look like a premium business consulting platform.

---

## 🎯 Priority Images (High Impact)

### 1. Hero Images (Most Important)

#### Home Page Hero
**Location**: `app/page.tsx` - Hero section (line ~6-80)
**Current**: Gradient background with pattern
**Recommendation**: Add a professional business/technology image

**How to Add**:
```tsx
// Replace the hero section background with:
<section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
  {/* Add background image */}
  <div className="absolute inset-0 opacity-20">
    <img 
      src="/images/hero-business-meeting.jpg" 
      alt="" 
      className="h-full w-full object-cover"
    />
  </div>
  
  {/* Gradient overlay on top of image */}
  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-900/80 to-blue-900/90" />
  
  {/* Rest of hero content... */}
</section>
```

**Image Specs**:
- Size: 1920x1080px minimum
- Format: JPG or WebP
- Subject: Professional office, team collaboration, or modern technology
- Sources: Unsplash, Pexels (free)

**Recommended Images**:
- Business team in modern office
- Professional handshake
- Modern tech workspace
- Data visualization screens

#### About Page Hero
**Location**: `app/about/page.tsx` - Hero section
**Current**: Gradient background
**Add**: Company culture or team photo

#### Login/Signup Pages
**Location**: `app/login/page.tsx` & `app/profile/page.tsx`
**Current**: Left side has gradient with text
**Add**: Professional business imagery on left side

---

## 📁 Folder Structure

Create this structure in your project:

```
/Users/francescotomatis/Desktop/RiskSignal/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   │   ├── home-hero.jpg
│   │   │   ├── about-hero.jpg
│   │   │   └── ai-governance-hero.jpg
│   │   ├── features/
│   │   │   ├── digital-helmet.jpg
│   │   │   ├── monitoring.jpg
│   │   │   └── compliance.jpg
│   │   ├── team/
│   │   │   ├── ceo.jpg
│   │   │   ├── cto.jpg
│   │   │   └── team-photo.jpg
│   │   ├── use-cases/
│   │   │   ├── trading.jpg
│   │   │   └── treasury.jpg
│   │   └── testimonials/
│   │       ├── client-1.jpg
│   │       └── client-2.jpg
```

---

## 🖼️ Where to Add Images

### 1. Home Page (`app/page.tsx`)

#### Hero Section (Line ~6)
```tsx
<section className="relative overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img 
      src="/images/hero/home-hero.jpg" 
      alt="Professional business environment"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-indigo-900/95" />
  </div>
  
  {/* Content stays the same... */}
</section>
```

#### Use Cases Section (Line ~350)
```tsx
<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
  {/* Add image at top */}
  <div className="h-48 overflow-hidden">
    <img 
      src="/images/use-cases/trading.jpg" 
      alt="Autonomous trading"
      className="h-full w-full object-cover"
    />
  </div>
  
  {/* Rest of card content... */}
</div>
```

#### Testimonial Section (Line ~400)
```tsx
<div className="flex items-center justify-center gap-4">
  <img 
    src="/images/testimonials/client-1.jpg" 
    alt="Sarah Chen"
    className="h-16 w-16 rounded-full object-cover"
  />
  <div className="text-left">
    <div className="font-semibold text-gray-900">Sarah Chen</div>
    <div className="text-sm text-gray-600">CTO, Apex Capital</div>
  </div>
</div>
```

### 2. About Page (`app/about/page.tsx`)

#### Hero Section
```tsx
<section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
  {/* Background Image */}
  <div className="absolute inset-0 opacity-30">
    <img 
      src="/images/hero/about-hero.jpg" 
      alt="Our team"
      className="h-full w-full object-cover"
    />
  </div>
  
  {/* Content... */}
</section>
```

#### Team Section
```tsx
<div className="grid gap-8 lg:grid-cols-3">
  {/* Add team member photos */}
  <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
    <div className="mb-6 h-48 overflow-hidden rounded-xl">
      <img 
        src="/images/team/engineering.jpg" 
        alt="Engineering team"
        className="h-full w-full object-cover"
      />
    </div>
    <h3 className="mb-3 text-2xl font-bold text-gray-900">Engineering</h3>
    {/* Rest of content... */}
  </div>
</div>
```

### 3. AI Governance Pages

#### Overview Page (`app/ai-governance/page.tsx`)
```tsx
{/* Add feature images to cards */}
<div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
  <div className="mb-6 h-40 overflow-hidden rounded-xl">
    <img 
      src="/images/features/digital-helmet.jpg" 
      alt="Digital Helmet technology"
      className="h-full w-full object-cover transition-transform group-hover:scale-105"
    />
  </div>
  <h3 className="mb-3 text-xl font-bold text-gray-900">The Digital Helmet</h3>
  {/* Rest of content... */}
</div>
```

### 4. Login/Signup Pages

#### Left Side Branding
```tsx
<div className="hidden w-1/2 lg:flex lg:flex-col lg:justify-between">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img 
      src="/images/hero/login-background.jpg" 
      alt=""
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-indigo-900/95" />
  </div>
  
  {/* Content stays relative... */}
</div>
```

---

## 🎨 Image Sources (Free & Professional)

### Recommended Free Sources

#### 1. Unsplash (Best Quality)
**URL**: https://unsplash.com

**Search Terms**:
- "business meeting professional"
- "modern office technology"
- "team collaboration"
- "data visualization"
- "financial technology"
- "professional handshake"
- "corporate team"

**Recommended Collections**:
- Business & Work: https://unsplash.com/s/photos/business
- Technology: https://unsplash.com/s/photos/technology
- Office: https://unsplash.com/s/photos/office

#### 2. Pexels
**URL**: https://www.pexels.com

**Search Terms**:
- "business consulting"
- "professional team"
- "modern workspace"
- "technology meeting"

#### 3. Pixabay
**URL**: https://pixabay.com

**Search Terms**:
- "business professional"
- "office meeting"
- "technology"

---

## 📥 How to Download & Add Images

### Step 1: Download Images

1. Go to Unsplash.com
2. Search for your desired image
3. Click "Download free" (choose Large or Original size)
4. Save to your computer

### Step 2: Optimize Images

**Before adding to your project, optimize them:**

**Option A: Online Tool (Easiest)**
- Go to https://tinypng.com or https://squoosh.app
- Upload your images
- Download optimized versions

**Option B: Command Line (Mac)**
```bash
# Install ImageMagick (one time)
brew install imagemagick

# Resize and optimize
convert input.jpg -resize 1920x1080^ -quality 85 output.jpg
```

### Step 3: Add to Project

```bash
# Create images directory
mkdir -p /Users/francescotomatis/Desktop/RiskSignal/public/images/hero
mkdir -p /Users/francescotomatis/Desktop/RiskSignal/public/images/features
mkdir -p /Users/francescotomatis/Desktop/RiskSignal/public/images/team
mkdir -p /Users/francescotomatis/Desktop/RiskSignal/public/images/use-cases
mkdir -p /Users/francescotomatis/Desktop/RiskSignal/public/images/testimonials

# Copy your downloaded images
cp ~/Downloads/home-hero.jpg /Users/francescotomatis/Desktop/RiskSignal/public/images/hero/
```

### Step 4: Update Code

Add image tags as shown in the examples above.

---

## 🎯 Priority Image List

### Must-Have (High Priority)

1. **Home Hero** (1920x1080)
   - Professional business meeting or modern office
   - File: `/images/hero/home-hero.jpg`

2. **About Hero** (1920x1080)
   - Team photo or company culture
   - File: `/images/hero/about-hero.jpg`

3. **Testimonial Avatar** (200x200)
   - Professional headshot (can use placeholder)
   - File: `/images/testimonials/client-1.jpg`

### Nice-to-Have (Medium Priority)

4. **Use Case Images** (800x600)
   - Trading dashboard screenshot
   - Treasury management interface
   - Files: `/images/use-cases/trading.jpg`, `treasury.jpg`

5. **Feature Images** (800x600)
   - Technology/security concepts
   - Files: `/images/features/*.jpg`

### Optional (Low Priority)

6. **Team Photos** (600x600)
   - Individual team members or departments
   - Files: `/images/team/*.jpg`

7. **Login/Signup Background** (1920x1080)
   - Professional office or technology
   - File: `/images/hero/login-background.jpg`

---

## 💡 Quick Start (30 Minutes)

### Minimal Setup (3 Images)

1. **Home Hero Image**
   - Download: https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-while-holding-pens-during-daytime-QckxruozjRg
   - Save as: `public/images/hero/home-hero.jpg`

2. **About Hero Image**
   - Download: https://unsplash.com/photos/group-of-people-sitting-beside-rectangular-wooden-table-with-laptops-gMsnXqILjp4
   - Save as: `public/images/hero/about-hero.jpg`

3. **Testimonial Avatar**
   - Download: https://unsplash.com/photos/woman-wearing-blue-top-beside-table-mEZ3PoFGs_k
   - Save as: `public/images/testimonials/client-1.jpg`

Then update the code in the 3 locations shown above.

---

## 🚀 Next.js Image Optimization

For better performance, use Next.js Image component:

```tsx
import Image from 'next/image'

// Instead of <img>, use:
<Image 
  src="/images/hero/home-hero.jpg" 
  alt="Professional business environment"
  width={1920}
  height={1080}
  className="h-full w-full object-cover"
  priority // For hero images
/>
```

**Benefits**:
- Automatic optimization
- Lazy loading
- Responsive images
- WebP conversion

---

## 📋 Image Checklist

- [ ] Create `/public/images/` folder structure
- [ ] Download 3 priority images from Unsplash
- [ ] Optimize images (TinyPNG or Squoosh)
- [ ] Add images to `/public/images/` folders
- [ ] Update Home page hero section
- [ ] Update About page hero section
- [ ] Update testimonial avatar
- [ ] Test on local dev server
- [ ] Commit and push to GitHub
- [ ] Verify on production

---

## 🎨 Image Style Guidelines

### For Hero Images
- **Subject**: Professional, aspirational
- **Lighting**: Bright, natural
- **Colors**: Blues, whites, modern
- **Mood**: Confident, trustworthy

### For Feature Images
- **Subject**: Technology, security, data
- **Style**: Clean, modern, abstract OK
- **Colors**: Match brand (blue/white)

### For Team Photos
- **Subject**: Professional headshots
- **Background**: Neutral or office
- **Style**: Consistent across team

---

## 🔧 Troubleshooting

### Images Not Showing?
1. Check file path: `/images/` not `/public/images/`
2. Verify file exists in `public/images/`
3. Check file extension matches code
4. Clear browser cache (Cmd+Shift+R)

### Images Too Large?
1. Optimize with TinyPNG
2. Resize to recommended dimensions
3. Use WebP format
4. Use Next.js Image component

### Images Look Blurry?
1. Use higher resolution source
2. Don't upscale small images
3. Use 2x resolution for retina displays

---

## 📞 Need Help?

If you need help finding specific images or implementing them, let me know which pages you want to prioritize and I can:
1. Find specific image recommendations
2. Write the exact code for you
3. Help with image optimization

---

**Ready to add images? Start with the 3 priority images and you'll see an immediate improvement!** 🚀
