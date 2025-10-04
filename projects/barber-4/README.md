# Professional Barber Shop Website

A modern, responsive website for a premium barber shop in Soho, Manhattan. Built with HTML5, CSS3, and vanilla JavaScript.

## Features

- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, bold design with high contrast and premium aesthetics
- **Multiple Pages**:
  - Home
  - About Us
  - Services
  - Appointment Booking
  - Contact
- **Interactive Elements**: 
  - Mobile-friendly navigation
  - Smooth scroll animations
  - Form validation
  - Animated counters
- **SEO Optimized**: Semantic HTML structure
- **Performance**: Optimized images and efficient CSS

## Tech Stack

- HTML5
- CSS3 (Grid & Flexbox)
- JavaScript (ES6+)
- Google Fonts (Montserrat)
- Font Awesome Icons

## Color Scheme

- **Primary Black**: #000000
- **Secondary Black**: #111111
- **White**: #FFFFFF
- **Accent Red**: #E10600
- **Accent Gold**: #D4A017
- **Gray Light**: #CCCCCC

## Typography

- **Primary Font**: Montserrat
- **Weights**: 400 (Regular), 600 (Semi-Bold), 700 (Bold), 800 (Extra-Bold)
- **Style**: Modern, geometric sans-serif

## File Structure

```
barber-shop/
├── index.html          # Homepage
├── about.html          # About Us page
├── services.html       # Services page
├── appointment.html    # Booking page
├── contact.html        # Contact page
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── images/
│   ├── logo.svg        # Logo
│   ├── hero-bg.jpg     # Hero background (add your own)
│   ├── page-hero-bg.jpg # Interior pages hero (add your own)
│   ├── promo-bg.jpg    # Promo section background (add your own)
│   └── about-image.jpg # About page image (add your own)
└── README.md           # This file
```

## Setup Instructions

1. **Add Images**: Replace placeholder images in the `images/` folder with your own:
   - `hero-bg.jpg` - Main hero background (recommended: 1920x1080px)
   - `page-hero-bg.jpg` - Interior pages hero (recommended: 1920x800px)
   - `promo-bg.jpg` - Promo banner background (recommended: 1920x600px)
   - `about-image.jpg` - About page image (recommended: 800x600px)

2. **Customize Content**:
   - Update contact information (phone, email, address)
   - Modify service descriptions and prices
   - Add your actual business hours
   - Update social media links

3. **Deploy**:
   - Upload all files to your web hosting
   - Ensure directory structure is maintained
   - Test all pages and forms

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Desktop**: ≥1200px
- **Tablet**: 768px - 1199px
- **Mobile**: ≤767px
- **Small Mobile**: ≤480px

## Features to Implement (Optional)

- [ ] Backend integration for appointment booking
- [ ] Email notifications
- [ ] Payment gateway integration
- [ ] Gallery/portfolio section
- [ ] Customer testimonials
- [ ] Blog functionality
- [ ] Online store for products
- [ ] Live chat support

## Performance Optimization Tips

1. Compress all images before uploading
2. Enable gzip compression on your server
3. Minimize CSS and JavaScript for production
4. Use a CDN for Font Awesome and Google Fonts
5. Implement lazy loading for images

## Customization

### Changing Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary-black: #000000;
    --accent-red: #E10600;
    --accent-gold: #D4A017;
    /* ... modify as needed ... */
}
```

### Modifying Layout

The site uses CSS Grid and Flexbox. Key grid layouts:
- 12-column grid system for overall structure
- 3-column service grids
- 2-column content sections

### Adding New Pages

1. Copy an existing HTML file
2. Update the navbar active state
3. Add your content following the established pattern
4. Update all navigation links

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Alt text for images (add to your image elements)
- Color contrast meets WCAG AA standards

## License

This template is free to use for personal and commercial projects.

## Credits

- Design: Custom barber shop theme
- Icons: Font Awesome
- Fonts: Google Fonts (Montserrat)

## Support

For issues or questions, please contact: info@barbershop.com

---

**Built with ❤️ for professional barber shops**
