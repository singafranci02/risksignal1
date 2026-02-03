# 📸 Image Asset Mapping

## Images Used in Website

### Hero Images (Large Backgrounds)

1. **Home Page Hero**
   - File: `public/images/hero/home-hero.png`
   - Source: Conny Schneider (Network visualization)
   - Used in: `app/page.tsx` - Hero section background
   - Effect: 20% opacity with blue gradient overlay

2. **About Page Hero**
   - File: `public/images/hero/about-hero.png`
   - Source: LinkedIn Sales Solutions (Business meeting)
   - Used in: `app/about/page.tsx` - Hero section background
   - Effect: 25% opacity with blue gradient overlay

3. **Login Page Background**
   - File: `public/images/hero/login-background.png`
   - Source: Invest Europe (Professional business meeting)
   - Used in: `app/login/page.tsx` - Left side branding section
   - Effect: 20% opacity with blue gradient overlay

4. **Profile/Signup Background**
   - File: `public/images/team/team-collaboration.png`
   - Source: Shamin Haky (Team working together)
   - Used in: `app/profile/page.tsx` - Left side branding section
   - Effect: 20% opacity with blue gradient overlay

### Feature Images (Medium Cards)

5. **Digital Helmet Technology**
   - File: `public/images/features/digital-helmet.png`
   - Source: Vitaly Gariev (Developer coding)
   - Used in: `app/page.tsx` - Visual Feature Showcase section
   - Effect: Hover scale with gradient overlay

6. **Real-Time Monitoring**
   - File: `public/images/features/monitoring.png`
   - Source: NASA (Satellite/Network imagery)
   - Used in: `app/page.tsx` - Visual Feature Showcase section
   - Effect: Hover scale with indigo gradient

7. **Verification System**
   - File: `public/images/features/verification.png`
   - Source: Pawel Czerwinski (Abstract tech art)
   - Used in: `app/page.tsx` - Visual Feature Showcase section
   - Effect: Hover scale with purple gradient

8. **Trading Infrastructure**
   - File: `public/images/features/trading-setup.png`
   - Source: Maximalfocus (Multi-monitor trading setup)
   - Used in: `app/page.tsx` - Visual Feature Showcase section
   - Effect: Hover scale with emerald gradient

### Testimonials (Small Avatars)

9. **Client Testimonial 1**
   - File: `public/images/testimonials/client-1.png`
   - Source: Boitumelo (Professional headshot)
   - Used in: `app/page.tsx` - Testimonial section
   - Size: 64x64 (h-16 w-16)
   - Effect: Rounded full circle

10. **Client Testimonial 2** (Reserved)
    - File: `public/images/testimonials/client-2.png`
    - Source: Jurica Koletic (Professional male portrait)
    - Status: Ready for future use

### Team Images

11. **Engineering Team**
    - File: `public/images/team/engineering.png`
    - Source: ThisIsEngineering (Engineers collaborating)
    - Status: Ready for About page team section expansion

### Unused Images (Available for Future Use)

12. **Vitaly Gariev - Developer at Desk**
    - Source: vitaly-gariev-F4coHibryBo-unsplash
    - Suggestion: Could use for "How It Works" page

13. **Jefferson Santos - Team Collaboration**
    - Source: jefferson-santos-9SoCnyQmkzI-unsplash
    - Suggestion: Could use for team section

14. **Vackground.com - Abstract Tech**
    - Source: vackground-com-ZNkiEWL02mI-unsplash
    - Suggestion: Could use for AI Governance pages

15. **Steve Johnson - Liquid Metal Abstract**
    - Source: steve-johnson-_0iV9LmPDn0-unsplash
    - Suggestion: Could use for feature cards

16. **Google DeepMind - AI Concept**
    - Source: google-deepmind-4QVqSh4VvP4-unsplash
    - Suggestion: Could use for AI Governance overview

17. **Luke Jones - Modern Architecture**
    - Source: luke-jones-tBvF46kmwBw-unsplash
    - Suggestion: Could use for About page

18. **Erol Ahmed - Headphones Tech**
    - Source: erol-ahmed-9ZWtkOCMxbM-unsplash
    - Suggestion: Alternative for features

---

## Image Effects Applied

### Opacity Levels
- Hero backgrounds: 20-25% opacity
- Feature cards: Full opacity with gradient overlays

### Gradients
- Blue gradient: `from-blue-900/90 via-blue-800/85 to-indigo-900/90`
- Indigo gradient: `from-indigo-900/90 to-transparent`
- Purple gradient: `from-purple-900/90 to-transparent`
- Emerald gradient: `from-emerald-900/90 to-transparent`

### Hover Effects
- Scale: `transition-transform duration-500 group-hover:scale-110`
- Shadow: Enhanced on hover
- Overlay: Gradient intensifies

---

## Code Patterns Used

### Hero Background Pattern
```tsx
<div className="absolute inset-0">
  <Image 
    src="/images/hero/home-hero.png" 
    alt="Description"
    fill
    className="object-cover opacity-20"
    priority
  />
</div>
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/85 to-blue-900/90" />
```

### Feature Card Pattern
```tsx
<div className="relative h-64 overflow-hidden">
  <Image 
    src="/images/features/feature.png" 
    alt="Description"
    fill
    className="object-cover transition-transform duration-500 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent" />
  {/* Content overlaid on top */}
</div>
```

### Avatar Pattern
```tsx
<div className="relative h-16 w-16 overflow-hidden rounded-full">
  <Image 
    src="/images/testimonials/client-1.png" 
    alt="Name"
    fill
    className="object-cover"
  />
</div>
```

---

## Performance Notes

- Using Next.js `Image` component for automatic optimization
- `priority` prop on hero images for faster LCP
- `fill` prop for responsive sizing
- `object-cover` maintains aspect ratio
- Lazy loading on non-hero images

---

## Total Images Integrated: 8/19

**In Use**: 8 images
**Reserved**: 11 images for future enhancements
