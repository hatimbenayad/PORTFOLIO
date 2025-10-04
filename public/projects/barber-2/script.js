// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 60;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
    } else if (currentScroll > lastScroll) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
        header.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
    }
    
    lastScroll = currentScroll;
});

// Add transition to header
header.style.transition = 'transform 0.3s ease, background-color 0.3s ease';

// Intersection Observer for fade-in animations
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

// Observe elements for animation
document.querySelectorAll('.testimonial, .gallery-item, .info-column').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle
const navIcons = document.querySelector('.nav-icons');
const navLinks = document.querySelector('.nav-links');

if (navIcons && navLinks) {
    navIcons.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Add active mobile menu styles dynamically
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-links.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            background-color: rgba(18, 18, 18, 0.98);
            padding: 24px;
            gap: 16px;
            border-bottom: 1px solid rgba(200, 169, 103, 0.1);
        }
    }
`;
document.head.appendChild(style);

// Booking Modal Functionality
const bookingModal = document.getElementById('bookingModal');
const bookingForm = document.getElementById('bookingForm');
const confirmationMessage = document.getElementById('confirmationMessage');
const bookingSummary = document.getElementById('bookingSummary');

// All booking buttons
const bookButtons = [
    document.getElementById('headerBookBtn'),
    document.getElementById('heroBookBtn'),
    document.getElementById('servicesBookBtn')
];

// Close modal
const closeModal = document.querySelector('.close-modal');
const closeConfirmation = document.getElementById('closeConfirmation');

// Open modal when any book button is clicked
bookButtons.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', () => {
            bookingModal.classList.add('active');
            resetBookingForm();
        });
    }
});

// Close modal
if (closeModal) {
    closeModal.addEventListener('click', () => {
        bookingModal.classList.remove('active');
    });
}

if (closeConfirmation) {
    closeConfirmation.addEventListener('click', () => {
        bookingModal.classList.remove('active');
    });
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === bookingModal) {
        bookingModal.classList.remove('active');
    }
});

// Form step navigation
const steps = {
    1: document.getElementById('step1'),
    2: document.getElementById('step2'),
    3: document.getElementById('step3'),
    4: document.getElementById('step4')
};

let currentStep = 1;

// Navigation buttons
const nextToBarber = document.getElementById('nextToBarber');
const backToService = document.getElementById('backToService');
const nextToDateTime = document.getElementById('nextToDateTime');
const backToBarber = document.getElementById('backToBarber');
const nextToDetails = document.getElementById('nextToDetails');
const backToDateTime = document.getElementById('backToDateTime');

// Step 1 -> Step 2
if (nextToBarber) {
    nextToBarber.addEventListener('click', () => {
        const selectedService = document.querySelector('input[name="service"]:checked');
        if (selectedService) {
            showStep(2);
        } else {
            alert('Please select a service');
        }
    });
}

// Step 2 -> Step 1
if (backToService) {
    backToService.addEventListener('click', () => {
        showStep(1);
    });
}

// Step 2 -> Step 3
if (nextToDateTime) {
    nextToDateTime.addEventListener('click', () => {
        const selectedBarber = document.querySelector('input[name="barber"]:checked');
        if (selectedBarber) {
            showStep(3);
            setMinDate();
        } else {
            alert('Please select a barber');
        }
    });
}

// Step 3 -> Step 2
if (backToBarber) {
    backToBarber.addEventListener('click', () => {
        showStep(2);
    });
}

// Step 3 -> Step 4
if (nextToDetails) {
    nextToDetails.addEventListener('click', () => {
        const date = document.getElementById('appointmentDate').value;
        const time = document.getElementById('appointmentTime').value;
        if (date && time) {
            showStep(4);
        } else {
            alert('Please select both date and time');
        }
    });
}

// Step 4 -> Step 3
if (backToDateTime) {
    backToDateTime.addEventListener('click', () => {
        showStep(3);
    });
}

// Show specific step
function showStep(stepNumber) {
    Object.values(steps).forEach(step => step.classList.add('hidden'));
    steps[stepNumber].classList.remove('hidden');
    currentStep = stepNumber;
}

// Reset form
function resetBookingForm() {
    bookingForm.reset();
    showStep(1);
    confirmationMessage.classList.add('hidden');
    bookingForm.classList.remove('hidden');
}

// Set minimum date to today
function setMinDate() {
    const dateInput = document.getElementById('appointmentDate');
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
}

// Form submission
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(bookingForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Format date
        const dateObj = new Date(data.date);
        const formattedDate = dateObj.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        // Format time
        const [hours, minutes] = data.time.split(':');
        const timeObj = new Date();
        timeObj.setHours(parseInt(hours), parseInt(minutes));
        const formattedTime = timeObj.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
        });
        
        // Display confirmation
        bookingSummary.innerHTML = `
            <p><strong>Service:</strong> <span>${data.service}</span></p>
            <p><strong>Barber:</strong> <span>${data.barber}</span></p>
            <p><strong>Date:</strong> <span>${formattedDate}</span></p>
            <p><strong>Time:</strong> <span>${formattedTime}</span></p>
            <p><strong>Name:</strong> <span>${data.name}</span></p>
            <p><strong>Email:</strong> <span>${data.email}</span></p>
            <p><strong>Phone:</strong> <span>${data.phone}</span></p>
        `;
        
        // Show confirmation, hide form
        bookingForm.classList.add('hidden');
        confirmationMessage.classList.remove('hidden');
        
        // Simulate sending data (in reality, this would be sent to a backend)
        console.log('Booking Data:', data);
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log('Docklands Barbershop - Website loaded successfully');
