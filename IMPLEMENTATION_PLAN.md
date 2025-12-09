# Binary Capital Implementation Plan

## Changes to Implement

### 1. Header Changes ✓
- [ ] Make header transparent with backdrop blur
- [ ] Implement scroll behavior (hide on scroll down, show on scroll up)
- [ ] Make logo clickable → home page
- [ ] Change from white background to transparent

### 2. Hero Section Changes ✓
- [ ] Change hero font (use more modern/elegant font)
- [ ] Change blue background color (from blue-900 to better gradient)
- [ ] Improve overall hero aesthetics

### 3. Logo Animation ✓
- [ ] Replace video (logo_animation.mp4) with GIF (logo-animation.gif)
- [ ] Update About section to use GIF instead of video

### 4. Statistics Animation ✓
- [ ] Slow down CountUp animation speed
- [ ] Adjust duration and easing

### 5. Remove Transaction Advisory ✓
- [ ] Delete /src/app/transaction-advisory/page.tsx
- [ ] Remove from navigation/services section
- [ ] Remove all references

### 6. Map Section Changes ✓
- [ ] Replace India map image with video (india-map.mp4)
- [ ] Remove states information below map
- [ ] Clean up geographic presence section

### 7. Team Section Changes ✓
- [ ] Remove all team member images
- [ ] Keep text-only format
- [ ] Redesign cards without images

### 8. Testimonials Changes ✓
- [ ] Remove names from testimonials
- [ ] Make sector-wise instead of person-wise
- [ ] Update testimonial structure

### 9. Footer Changes ✓
- [ ] Redesign footer for better visual appeal
- [ ] Remove "LLP" from company name
- [ ] Improve layout and styling

### 10. Branding Updates ✓
- [ ] Remove "LLP" from all occurrences
- [ ] Update to just "Binary Capital"
- [ ] Check structured data, metadata, etc.

### 11. Homepage Structure ✓
- [ ] Move some sections to separate pages
- [ ] Reduce homepage length
- [ ] Improve navigation flow

### 12. General Improvements ✓
- [ ] Upscale all asset quality
- [ ] Ensure full responsiveness (mobile/tablet/desktop)
- [ ] Center align all content text
- [ ] Follow professional standards
- [ ] Test at different zoom levels

## Files to Modify

1. `/src/app/page.tsx` - Main homepage
2. `/src/app/layout.tsx` - Layout and metadata
3. `/src/app/transaction-advisory/page.tsx` - DELETE
4. `/src/components/CountUp.tsx` - Slow down animation
5. `/public/` - Add new assets (GIF, video)
6. Global styles - Update colors, fonts

## Implementation Order

1. Add new assets (GIF, video) ✓
2. Update header (transparent, scroll behavior)
3. Update hero (font, background)
4. Replace logo animation (video → GIF)
5. Slow down statistics animation
6. Remove Transaction Advisory
7. Update map section (image → video)
8. Remove team images
9. Update testimonials (sector-wise)
10. Redesign footer
11. Remove "LLP" everywhere
12. Restructure homepage
13. Test responsiveness
14. Final polish

## Testing Checklist

- [ ] Desktop (1920x1080, 1366x768)
- [ ] Tablet (768x1024, 1024x768)
- [ ] Mobile (375x667, 414x896)
- [ ] Zoom levels (50%, 75%, 100%, 125%, 150%)
- [ ] All links work
- [ ] All animations smooth
- [ ] No console errors
- [ ] Fast load times
- [ ] SEO metadata updated
