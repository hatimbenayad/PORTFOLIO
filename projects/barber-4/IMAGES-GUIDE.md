# Image Requirements Guide

This document explains what images you need to add to complete the website.

## Required Images

### 1. hero-bg.jpg
- **Location**: `images/hero-bg.jpg`
- **Purpose**: Main homepage hero background
- **Recommended Size**: 1920 x 1080 pixels
- **Subject**: Black and white barber portrait or barbershop interior
- **Style**: Professional, high contrast, slightly dark to ensure white text is readable
- **Example**: A barber cutting hair, barbershop tools, classic barber chair

### 2. page-hero-bg.jpg
- **Location**: `images/page-hero-bg.jpg`
- **Purpose**: Hero background for interior pages (About, Services, Appointment, Contact)
- **Recommended Size**: 1920 x 800 pixels
- **Subject**: Barbershop interior or tools
- **Style**: Dark overlay-ready, professional
- **Example**: Barber tools arranged neatly, vintage barbershop interior, barber pole

### 3. promo-bg.jpg
- **Location**: `images/promo-bg.jpg`
- **Purpose**: Background for the "Team of Professionals" section on homepage
- **Recommended Size**: 1920 x 600 pixels
- **Subject**: Barbershop interior
- **Style**: Busy barbershop scene, multiple chairs, professional setting
- **Example**: Full barbershop view with chairs, mirrors, and professional equipment

### 4. about-image.jpg
- **Location**: `images/about-image.jpg`
- **Purpose**: Image on the About Us page
- **Recommended Size**: 800 x 600 pixels (or 500px height)
- **Subject**: Barbershop interior or team photo
- **Style**: Professional, welcoming
- **Example**: Team photo of barbers, interior shot showing the atmosphere

## Image Sources (Royalty-Free)

You can get professional images from these sources:

1. **Unsplash** (https://unsplash.com/)
   - Search: "barber shop", "barbershop interior", "barber cutting hair"
   
2. **Pexels** (https://www.pexels.com/)
   - Search: "barber", "haircut", "barbershop"
   
3. **Pixabay** (https://pixabay.com/)
   - Search: "barber shop", "hairdresser"

## Quick Setup with Placeholder Images

If you want to test the site immediately, you can use solid color backgrounds temporarily:

### Option 1: Use Unsplash's URL service
Replace the background image URLs in `css/styles.css`:

```css
/* For hero section */
background-image: url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920');

/* For page hero */
background-image: url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920');

/* For promo banner */
background-image: url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1920');
```

### Option 2: Create simple placeholder backgrounds
Use tools like:
- **Placeholder.com**: https://placeholder.com/
- **Unsplash Source**: https://source.unsplash.com/1920x1080/?barbershop

## Image Optimization Tips

Before adding images:

1. **Resize** images to recommended dimensions
2. **Compress** using tools like:
   - TinyPNG (https://tinypng.com/)
   - Squoosh (https://squoosh.app/)
3. **Format**: Use JPG for photos (quality: 80-85%)
4. **File size**: Keep under 200KB per image when possible

## Current Status

The website is fully functional with all code in place. Only these 4 images need to be added:

- [ ] hero-bg.jpg
- [ ] page-hero-bg.jpg
- [ ] promo-bg.jpg
- [ ] about-image.jpg

The logo (logo.svg) has been created and is ready to use.

## Testing Without Images

The site will still work without images - you'll just see the dark background with the gradient overlay. The text and all functionality will work perfectly.

---

**Need help?** Contact your developer or refer to the README.md file.
