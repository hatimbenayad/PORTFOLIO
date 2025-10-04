# Jack Rabbit Slims - Barbershop Website

A modern, responsive barbershop website featuring a clean design with urban/street branding elements.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, minimalist design with neon accents and bold typography
- **Sections Include**:
  - Hero section with full-width background image
  - Merchandise showcase with 4-column grid
  - Booking and Instagram promotional blocks
  - Our Story section with company history
  - Services list with pricing
  - Photo gallery (Instagram feed style)
  - Customer testimonials
  - Contact information with embedded map
  - Social media links

## Design Specifications

### Color Scheme
- **Primary Black**: `#000000`
- **White**: `#FFFFFF`
- **Neon Green**: `#39FF14`
- **Neon Pink**: `#FF1AFF`
- **Gray backgrounds**: `#f9f9f9`

### Typography
- **Headings**: Oswald (Bold, Uppercase, Letter-spacing: 0.1em)
  - H1: 48-56px
  - H2: 32px
  - H3: 20-24px
- **Body**: Open Sans (Regular, 16px, Line-height: 1.6)

### Spacing
- Section padding: 64px top/bottom
- Grid gutters: 24px
- Consistent vertical rhythm: 32px

### Layout
- Max container width: 1200px
- Mobile-first responsive approach
- CSS Grid and Flexbox for layouts

## Setup Instructions

1. **Add Images**: Place your images in the `images/` folder with the following names:
   - `hero-bg.jpg` - Hero background (barber cutting hair)
   - `merch-1.jpg` through `merch-4.jpg` - Product images
   - `neon-sign.jpg` - Neon "BOOK NOW" sign background
   - `barber-work.jpg` - Barber at work for Instagram promo
   - `story.jpg` - Barbershop interior/team photo
   - `barber-chair.jpg` - Vintage barber chair
   - `gallery-1.jpg` through `gallery-8.jpg` - Gallery photos

2. **Open in Browser**: Simply open `index.html` in your web browser

3. **Customize Content**:
   - Update business information in the HTML
   - Replace placeholder images with your own
   - Modify services and pricing
   - Update contact information and Google Maps embed
   - Add your social media links

## File Structure

```
barber-1/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All CSS styles
├── images/             # Image assets (add your images here)
└── README.md          # This file
```

## Responsive Breakpoints

- **Desktop**: ≥1200px (4-column layouts)
- **Tablet**: 768px - 1199px (2-column layouts)
- **Mobile**: ≤767px (single-column stack)
- **Small Mobile**: ≤480px (optimized for small screens)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization Tips

1. **Colors**: Update CSS custom color values in `styles.css`
2. **Fonts**: Change Google Fonts imports in `index.html` header
3. **Sections**: Add or remove sections by copying section blocks in HTML
4. **Images**: Use high-quality images (recommended: 1920x1080 for hero, 800x800 for products/gallery)

## License

Free to use for personal and commercial projects.

---

**Created**: October 2025  
**Version**: 1.0
