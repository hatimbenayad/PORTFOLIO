# Docklands Barbershop Website

A modern, luxury barber shop website with a dark theme and gold accents. Built with vanilla HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Dark theme with gold accent colors for a premium, luxurious feel
- **Interactive Booking System**: Multi-step appointment booking with a realistic front-end experience
- **Multiple Book Now CTAs**: Strategic placement of booking buttons throughout the site
- **Smooth Animations**: Fade-in animations, parallax effects, and smooth scrolling
- **Fixed Navigation**: Sticky header that hides on scroll down and appears on scroll up
- **Gallery Section**: Beautiful image grid with hover effects
- **Testimonials**: Customer reviews displayed in an elegant card layout
- **Contact Information**: Easy-to-find location, contact details, and business hours

## Booking System

The website features a complete **4-step booking flow** that simulates a real appointment booking experience:

### Step 1: Service Selection
- Classic Haircut ($35 - 30 min)
- Haircut & Beard Trim ($50 - 45 min)
- Premium Package ($75 - 60 min)
- Beard Grooming ($25 - 20 min)

### Step 2: Barber Selection
- Marcus Johnson (Master Barber)
- David Smith (Senior Barber)
- Ryan Williams (Expert Stylist)

### Step 3: Date & Time
- Calendar date picker (starts from tomorrow)
- Time slot selection (9:00 AM - 7:00 PM)

### Step 4: Customer Details
- Full Name
- Email
- Phone Number
- Special Requests (optional)

### Confirmation
After submission, users see a beautiful confirmation screen with a summary of their booking details.

**Note**: This is a front-end demonstration only. No actual booking data is stored or sent to a server.

## Structure

```
barber-1/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with CSS custom properties
├── script.js           # Interactive features and animations
└── README.md          # This file
```

## Design Specifications

### Color Scheme
- **Primary Background**: `#121212` (Dark charcoal)
- **Secondary Background**: `#1a1a1a` (Lighter dark)
- **Accent Color**: `#C8A967` (Gold/Amber)
- **Text Primary**: `#FFFFFF` (White)
- **Text Muted**: `#999999` (Grey)

### Typography
- **Font Family**: Montserrat (Google Fonts)
- **Hero Title**: 64px, weight 800, uppercase
- **Section Titles**: 36px, weight 700, uppercase
- **Body Text**: 15-16px, weight 400
- **Navigation**: 12px, weight 600, uppercase

### Spacing System
Based on an 8-point grid system:
- XS: 8px
- SM: 16px
- MD: 24px
- LG: 32px
- XL: 64px
- XXL: 96px

### Layout
- **Container Max Width**: 1200px
- **Header Height**: 60px (fixed/sticky)
- **Hero Section**: 100vh with background image and overlay
- **Two-Column Layout**: 60/40 split for feature section
- **Grid Layouts**: 4-column gallery, 3-column testimonials and info

## Running the Website

1. **Open in Browser**:
   Simply double-click `index.html` or right-click and select "Open with" your preferred browser.

2. **Using Python HTTP Server**:
   ```bash
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`

3. **Using VS Code Live Server**:
   - Right-click on `index.html`
   - Select "Open with Live Server"

4. **Try the Booking System**:
   - Click any "BOOK NOW" or "BOOK APPOINTMENT" button
   - Follow the 4-step booking process
   - See your booking confirmation!

## Customization

### Changing Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
    --color-accent: #C8A967;  /* Change accent color */
    --color-primary-bg: #121212;  /* Change background */
}
```

### Updating Content
- **Text**: Edit content directly in `index.html`
- **Images**: Replace Unsplash URLs with your own image URLs
- **Contact Info**: Update the contact section with your business details

### Adding Sections
Follow the existing pattern:
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add any interactive features in `script.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Images**: Uses optimized Unsplash images with proper sizing parameters
- **Fonts**: Google Fonts with `display=swap` for better loading
- **CSS**: Organized with clear sections and comments
- **JavaScript**: Vanilla JS with no dependencies for fast loading

## Future Enhancements

- [ ] Booking system integration
- [ ] Image lazy loading
- [ ] Service pricing page
- [ ] Team member profiles
- [ ] Blog section
- [ ] Multi-language support

## Credits

- **Design**: Custom luxury barber shop design
- **Images**: Unsplash (placeholder images)
- **Fonts**: Google Fonts (Montserrat)
- **Icons**: Unicode symbols (can be replaced with Font Awesome or custom icons)

## License

This project is free to use for personal and commercial purposes.

---

**Barbería Docklands** - Where tradition meets modern style.
