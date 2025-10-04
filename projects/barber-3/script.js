// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================
// SMOOTH SCROLL & ACTIVE NAV LINK
// ============================================

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

function setActiveNavLink() {
    let scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNavLink);

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================

const testimonialsTrack = document.getElementById('testimonialsTrack');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevButton = document.getElementById('prevTestimonial');
const nextButton = document.getElementById('nextTestimonial');
const dots = document.querySelectorAll('.dot');

let currentTestimonial = 0;
const totalTestimonials = testimonialCards.length;

function updateTestimonialCarousel() {
    // Move the track
    const offset = -currentTestimonial * 100;
    testimonialsTrack.style.transform = `translateX(${offset}%)`;
    
    // Update active class on cards
    testimonialCards.forEach((card, index) => {
        card.classList.toggle('active', index === currentTestimonial);
    });
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    updateTestimonialCarousel();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    updateTestimonialCarousel();
}

nextButton.addEventListener('click', nextTestimonial);
prevButton.addEventListener('click', prevTestimonial);

// Dot navigation
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentTestimonial = parseInt(e.target.getAttribute('data-index'));
        updateTestimonialCarousel();
    });
});

// Auto-rotate testimonials every 5 seconds
let testimonialInterval = setInterval(nextTestimonial, 5000);

// Pause auto-rotation on hover
const testimonialCarousel = document.querySelector('.testimonial-carousel');
testimonialCarousel.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

testimonialCarousel.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(nextTestimonial, 5000);
});

// ============================================
// FORM SUBMISSIONS
// ============================================

// Contact Form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Contact form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Careers Form
const careersForm = document.getElementById('careersForm');
careersForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(careersForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Career application submitted:', data);
    
    // Show success message
    alert('Thank you for your application! We will review it and contact you soon.');
    
    // Reset form
    careersForm.reset();
});

// ============================================
// SCROLL ANIMATIONS (OPTIONAL ENHANCEMENT)
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe gallery items for fade-in effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// ============================================
// BOOKING BUTTON FUNCTIONALITY
// ============================================

const bookingButtons = document.querySelectorAll('.cta-button');
bookingButtons.forEach(button => {
    if (button.textContent.includes('Book Appointment')) {
        button.addEventListener('click', () => {
            // Here you would typically open a booking modal or redirect to a booking page
            alert('Booking system would open here. You can integrate with scheduling software like Calendly, Acuity Scheduling, or a custom booking system.');
        });
    }
});

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// LAZY LOADING IMAGES (Performance Optimization)
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

window.addEventListener('DOMContentLoaded', () => {
    // Set initial active nav link
    setActiveNavLink();
    
    // Initialize testimonial carousel
    updateTestimonialCarousel();
    
    console.log('The Barber Lounge website loaded successfully!');
});
