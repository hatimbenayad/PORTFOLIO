# Design Guidelines: Creative Portfolio Website

## Design Approach
**Reference-Based Approach**: Modern minimalist portfolio design inspired by contemporary creative portfolios, emphasizing clean aesthetics, generous white space, and creative typography.

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Black: 0 0% 7% (primary text, header)
- White: 0 0% 100% (backgrounds, contrast)
- Red Accent: 351 81% 58% (CTAs, hover states)

**Neutral Grays:**
- Dark Gray: 0 0% 20% (secondary backgrounds)
- Medium Gray: 0 0% 47% (body text)
- Light Gray: 0 0% 60% (tertiary text)
- Subtle Gray: 0 0% 80% (borders)

**Section Backgrounds:** Alternate between white, light gray (#F9F9F9), and dark gray for visual separation

### B. Typography

**Font Families:**
- Primary Display: "Knewave" (headings, logo, section titles)
- Secondary Display: "Pacifico" (navigation, buttons, body text)

**Scale:**
- H1 (Hero): 56-64px, bold
- H2 (Section Titles): 32-36px, semi-bold  
- H3 (Card Titles): 24px, medium
- Body: 16-18px, regular
- Small/Secondary: 12-14px, light
- Line height: 1.5-1.6
- Letter spacing: +0.5px for uppercase/nav

### C. Layout System

**Grid:** 12-column responsive grid (max-width: 1200-1440px, centered)
- Column gutters: 24-32px
- Section padding: 80-120px vertical (desktop), 60px (tablet), 40px (mobile)
- Container padding: 0 24px horizontal
- Card padding: 32-40px

**Spacing Units:** Consistent use of 4, 8, 12, 16, 24, 32, 40, 60, 80, 100, 120px increments

### D. Component Library

**Navigation Header:**
- Fixed at top, height 80px, semi-transparent white background with backdrop blur
- Logo left-aligned (Knewave font), nav links right-aligned (Pacifico font)
- Mobile: Hamburger menu toggle

**Buttons:**
- Primary: Solid red background, white text, rounded-xl (12-16px radius), 12px × 32px padding
- Secondary: Transparent with black border, black text
- Min width: 160px, height: 48px
- Hover: Background darkens with 0.3s transition

**Cards:**
- White background with soft shadow (rgba(0,0,0,0.1) 0 4px 12px)
- Rounded corners: 16-24px (rounded-2xl)
- Padding: 32-40px
- Hover: Slight lift (-translate-y-2) with 0.3s transition

**Forms:**
- Full-width inputs, 1px gray border, 6px border radius
- White background, inline button for newsletter
- Touch-friendly sizing (minimum 48px height)

**Images:**
- Rounded corners: 8-16px
- object-fit: cover for responsive sizing
- Hover: Subtle zoom (scale 1.03) or dark overlay with 0.3s transition

### E. Section Specifications

**Hero Section:**
- Full viewport height (70vh)
- Background: Mountain/landscape image with dark overlay (black 50% opacity)
- Content: Centered vertically, large heading + subtext + CTA button
- Text: White on dark background

**Projects Gallery:**
- 3-column grid (responsive: 3 → 2 → 1 columns)
- Each card: Project image (h-56 object-cover) + title overlay
- Cards open project HTML pages in new tabs
- Hover effect: Lift animation

**Services Section:**
- Light gray background (#F9F9F9)
- 3 cards in responsive grid
- Each card: Icon + title + description
- White cards with shadow on gray background

**About Section:**
- 2-column grid layout
- Left: Text content (heading + paragraphs)
- Right: Featured image with rounded corners and shadow

**Testimonials:**
- 3 equal-width cards in horizontal row
- Each card: Circular user photo + italic quote + name
- White background with shadow

**Footer:**
- Black background, white text
- 3-column grid: Contact info | Social links | Newsletter signup
- Text size: 12-14px, Pacifico font

## Images

**Hero Background:** 
Large hero image (mountain/creative workspace) full-width and 70vh height, with 50% black overlay for text contrast

**Project Thumbnails:**
Three barber demo images (barber1.jpg, barber2.jpg, barber3.jpg) at 16:9 aspect ratio, professional photography showcasing each project

**About Section:**
One professional portrait/workspace image for the right column, portrait orientation preferred

## Responsiveness

**Desktop (≥1200px):** Full 3-4 column grids, large typography, wide spacing
**Tablet (768-1199px):** 2 columns, reduced vertical padding (60px), medium typography  
**Mobile (≤767px):** Single column stack, hamburger menu, full-width images, reduced padding (40px)

## Visual Style

- Modern minimalist flat design
- Emphasis on large imagery, creative typography, generous white space
- Subtle shadows for depth (never harsh)
- Smooth animations (0.2-0.3s) for all transitions
- Professional, balanced, visually calm aesthetic
- Creative typography as primary visual interest
- Red accent used sparingly for CTAs and emphasis only