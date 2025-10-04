# Customization Guide

This guide helps you customize the barber shop website for your business.

## 🎨 Quick Customization Checklist

### 1. Business Information

**Files to edit:** All HTML files (index.html, about.html, services.html, appointment.html, contact.html)

#### Contact Information
Find and replace these throughout all HTML files:

- **Phone Number:** `(212) 555-CUTS` → Your actual phone number
- **Email:** `info@barbershop.com` → Your business email
- **Address:** `123 Prince Street, Soho, Manhattan, NY 10012` → Your actual address

#### Business Name
Find and replace:
- `Professional Barber Shop` → Your business name

### 2. Working Hours

**File:** `index.html` (and other pages if shown)

**Location:** In the "WORKING HOURS" section

```html
<div class="hours-item">
    <span class="day">MONDAY - FRIDAY</span>
    <span class="time">9:00 AM - 8:00 PM</span>
</div>
```

Update the days and times to match your actual schedule.

### 3. Services & Pricing

**File:** `services.html`

Find this section and update prices:

```html
<div class="service-price">$45</div>
```

Update service descriptions, names, and prices to match your offerings.

### 4. Social Media Links

**Files:** All HTML files (in the footer)

**Location:** Footer section

```html
<div class="social-icons">
    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
    <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
</div>
```

Replace `#` with your actual social media URLs:
- Facebook: `https://facebook.com/yourbusiness`
- Instagram: `https://instagram.com/yourbusiness`
- Twitter: `https://twitter.com/yourbusiness`
- YouTube: `https://youtube.com/yourbusiness`

### 5. Google Maps Integration

**File:** `contact.html`

**Location:** Find the iframe in the contact section

Replace the `src` URL with your Google Maps embed URL:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the existing iframe in contact.html

### 6. Color Scheme

**File:** `css/styles.css`

**Location:** Top of the file in the `:root` section

```css
:root {
    /* Colors */
    --primary-black: #000000;      /* Main background */
    --secondary-black: #111111;    /* Navbar background */
    --white: #FFFFFF;              /* Main text color */
    --gray-light: #CCCCCC;         /* Secondary text */
    --gray-medium: #999999;        /* Tertiary text */
    --accent-red: #E10600;         /* Primary CTA buttons */
    --accent-gold: #D4A017;        /* Highlight headings */
}
```

Change these hex color codes to match your brand colors.

### 7. Fonts

**File:** All HTML files

**Location:** In the `<head>` section

Current font: Montserrat

To change:

1. Go to [Google Fonts](https://fonts.google.com/)
2. Select your preferred font
3. Copy the embed code
4. Replace the existing Google Fonts link in all HTML files
5. Update `css/styles.css`:

```css
:root {
    --font-primary: 'YourFontName', sans-serif;
}
```

### 8. Appointment Form Services

**File:** `appointment.html`

**Location:** Service selection dropdown

```html
<select id="service" name="service" required>
    <option value="">Choose a service...</option>
    <option value="haircut">Men's Haircut - $45</option>
    <!-- Add/edit/remove services here -->
</select>
```

Add or remove `<option>` elements to match your services.

### 9. Barber Names

**File:** `appointment.html`

**Location:** Preferred barber dropdown

```html
<select id="barber" name="barber">
    <option value="">No preference</option>
    <option value="john">John Martinez</option>
    <!-- Add your barbers' names here -->
</select>
```

Replace with your actual barbers' names.

### 10. About Us Content

**File:** `about.html`

Update the "OUR STORY" section with your actual business history and story.

Update the timeline years and milestones:

```html
<div class="timeline-item">
    <div class="timeline-year">2013</div>
    <div class="timeline-content">
        <h3>The Beginning</h3>
        <p>Your story here...</p>
    </div>
</div>
```

### 11. Statistics

**Files:** `index.html`, `about.html`

Update the statistics to reflect your business:

```html
<div class="stat-card">
    <div class="stat-number">SINCE 2013</div>
    <div class="stat-label">Years of Excellence</div>
</div>
```

## 🖼️ Image Customization

### Adding Your Images

1. **Prepare images** (resize and compress)
2. **Save to** `images/` folder with exact names:
   - `hero-bg.jpg`
   - `page-hero-bg.jpg`
   - `promo-bg.jpg`
   - `about-image.jpg`

### Logo Customization

The current logo is at `images/logo.svg`

**Option 1:** Replace the SVG
- Create your own logo
- Save as `logo.svg` in the `images/` folder

**Option 2:** Use a different format
- Save your logo as PNG: `logo.png`
- Update all HTML files:

```html
<!-- Change this: -->
<img src="images/logo.svg" alt="Barber Shop Logo">

<!-- To this: -->
<img src="images/logo.png" alt="Your Business Name">
```

## 🔧 Advanced Customization

### Adding a New Page

1. Copy `about.html`
2. Rename it (e.g., `gallery.html`)
3. Update the content
4. Add a link to the navbar in ALL HTML files:

```html
<nav class="nav-links">
    <a href="index.html">Home</a>
    <a href="about.html">About Us</a>
    <a href="services.html">Services</a>
    <a href="gallery.html">Gallery</a> <!-- New page -->
    <a href="appointment.html">Appointment</a>
    <a href="contact.html">Contacts</a>
</nav>
```

### Modifying Layout

The website uses CSS Grid. Key sections:

```css
/* 3-column grid */
.services-grid {
    grid-template-columns: repeat(3, 1fr);
}

/* To change to 4 columns: */
.services-grid {
    grid-template-columns: repeat(4, 1fr);
}
```

### Adding Animation

The site already has scroll animations. To add more:

**In script.js**, add your element to the observer:

```javascript
const animatedElements = document.querySelectorAll('.service-card, .your-new-class');
```

## 📱 Testing

After customization:

1. **Test on desktop** - Open in Chrome, Firefox, Safari
2. **Test on mobile** - Use browser dev tools (F12) or real device
3. **Test all links** - Click every button and navigation link
4. **Test forms** - Fill out and submit both forms
5. **Check responsiveness** - Resize browser window

## 🚀 Deployment

### Option 1: Free Hosting (GitHub Pages)

1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Enable GitHub Pages in settings
5. Your site will be at: `https://yourusername.github.io/repositoryname`

### Option 2: Paid Hosting

Popular options:
- **Hostinger** - $2-5/month
- **Bluehost** - $3-10/month
- **SiteGround** - $4-15/month

Upload via FTP using FileZilla or your host's file manager.

### Domain Name

Register a domain (e.g., `yourbarbershop.com`) from:
- Namecheap
- GoDaddy
- Google Domains

## 🛠️ Troubleshooting

### Images not showing?
- Check file names match exactly (case-sensitive)
- Ensure images are in the `images/` folder
- Check file extensions (.jpg vs .jpeg)

### Forms not working?
- Forms currently show alerts (client-side only)
- To actually send emails, you need backend integration or services like:
  - Formspree
  - EmailJS
  - Basin
  - Google Forms

### Mobile menu not working?
- Check that `js/script.js` is loaded
- Open browser console (F12) to check for errors

### Layout broken?
- Verify `css/styles.css` is loaded
- Check for any unclosed tags in HTML
- Validate HTML at https://validator.w3.org/

## 📞 Need Help?

If you need assistance with customization:

1. Read the README.md file
2. Check this guide again
3. Search online for specific issues
4. Consider hiring a developer for advanced features

---

**Remember:** Always keep a backup of your original files before making changes!
