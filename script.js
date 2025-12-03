// ============================================
// Navigation Functions
// ============================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        scrollToTopBtn.classList.add('visible');
    } else {
        navbar.classList.remove('scrolled');
        scrollToTopBtn.classList.remove('visible');
    }
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section, .hero');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Scroll to top button
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// Smooth Scroll for Anchor Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Intersection Observer for Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
const elementsToAnimate = document.querySelectorAll(
    '.project-card, .skill-category, .achievement-card, .timeline-item, .about-highlights .highlight-item'
);

elementsToAnimate.forEach(element => {
    observer.observe(element);
});

// ============================================
// Skill Progress Bars Animation
// ============================================

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillSections = document.querySelectorAll('.skill-category');
skillSections.forEach(section => {
    skillObserver.observe(section);
});

// ============================================
// Contact Form Handling
// ============================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(formData.email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission (in a real scenario, you'd send this to a server)
    showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
    contactForm.reset();
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============================================
// Notification System
// ============================================

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Add styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 2rem;
            background: var(--bg-card);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: var(--radius-md);
            padding: 1rem 1.5rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 1rem;
            min-width: 300px;
            animation: slideInRight 0.3s ease-out;
        }
        
        .notification-success {
            border-left: 4px solid #10b981;
        }
        
        .notification-error {
            border-left: 4px solid #ef4444;
        }
        
        .notification-info {
            border-left: 4px solid #6366f1;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            flex: 1;
        }
        
        .notification-content i {
            font-size: 1.25rem;
        }
        
        .notification-success i {
            color: #10b981;
        }
        
        .notification-error i {
            color: #ef4444;
        }
        
        .notification-info i {
            color: #6366f1;
        }
        
        .notification-content span {
            color: var(--text-secondary);
            font-size: 0.95rem;
        }
        
        .notification-close {
            background: transparent;
            border: none;
            color: var(--text-muted);
            cursor: pointer;
            font-size: 1rem;
            padding: 0.25rem;
            transition: var(--transition-fast);
        }
        
        .notification-close:hover {
            color: var(--text-primary);
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        
        @media (max-width: 768px) {
            .notification {
                right: 1rem;
                left: 1rem;
                min-width: auto;
            }
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        style.id = 'notification-styles';
        document.head.appendChild(style);
    }
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ============================================
// Download Resume Button
// ============================================

const downloadResumeBtn = document.getElementById('downloadResume');

downloadResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showNotification('Resume download will be available soon. Please contact via email for the latest version.', 'info');
});

// ============================================
// Typing Effect for Hero Title (Optional Enhancement)
// ============================================

function initTypingEffect() {
    const textElement = document.querySelector('.hero-subtitle');
    if (!textElement) return;
    
    const originalText = textElement.textContent;
    const words = originalText.split(' | ');
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentWord = words[currentWordIndex];
        
        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            textElement.textContent = currentWord.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && currentCharIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    // Uncomment to enable typing effect
    // setTimeout(type, 1000);
}

// ============================================
// Dynamic Stats Counter Animation
// ============================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.dataset.suffix || '');
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                const suffix = text.replace(/[\d+]/g, '');
                stat.dataset.suffix = suffix;
                if (number) {
                    stat.textContent = '0' + suffix;
                    animateCounter(stat, number);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ============================================
// Parallax Effect for Hero Background
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.gradient-orb');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// ============================================
// Project Cards Tilt Effect (Optional)
// ============================================

const projectCards = document.querySelectorAll('.project-card, .achievement-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ============================================
// Theme Toggle (Optional Future Enhancement)
// ============================================

function initThemeToggle() {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    
    // You can add a theme toggle button in the future
    // const themeToggle = document.getElementById('themeToggle');
    // themeToggle.addEventListener('click', () => {
    //     const currentTheme = document.documentElement.getAttribute('data-theme');
    //     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    //     document.documentElement.setAttribute('data-theme', newTheme);
    //     localStorage.setItem('theme', newTheme);
    // });
}

// ============================================
// Initialize All Features
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    // initTypingEffect(); // Uncomment to enable
    
    // Add loading animation to body
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// Console Easter Egg
// ============================================

console.log('%cHello, Developer! 👋', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cLooking for something? Feel free to reach out!', 'color: #10b981; font-size: 14px;');
console.log('%cEmail: siddharthkhanna542@gmail.com', 'color: #a0a0b0; font-size: 12px;');
console.log('%c', 'padding: 50px; background: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ctext y=\'.9em\' font-size=\'90\'%3E🚀%3C/text%3E%3C/svg%3E") no-repeat;');

// ============================================
// Performance Monitoring (Development Only)
// ============================================

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`%cPage Load Time: ${pageLoadTime}ms`, 'color: #f59e0b; font-weight: bold;');
        }, 0);
    });
}

// ============================================
// Service Worker Registration (Future PWA Support)
// ============================================

if ('serviceWorker' in navigator) {
    // Uncomment when you add a service worker
    // window.addEventListener('load', () => {
    //     navigator.serviceWorker.register('/sw.js')
    //         .then(registration => console.log('SW registered:', registration))
    //         .catch(error => console.log('SW registration failed:', error));
    // });
}

// ============================================
// Prevent Context Menu on Production (Optional)
// ============================================

// Uncomment to disable right-click in production
// if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
//     document.addEventListener('contextmenu', (e) => e.preventDefault());
// }

// ============================================
// Analytics Helper (Google Analytics, etc.)
// ============================================

function trackEvent(category, action, label) {
    // Uncomment and configure when adding analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label
    //     });
    // }
}

// Track button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent.trim();
        trackEvent('Button', 'Click', buttonText);
    });
});

// Track social link clicks
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', () => {
        const platform = link.className.split(' ').find(c => c !== 'social-link');
        trackEvent('Social', 'Click', platform);
    });
});

// ============================================
// Utility Functions
// ============================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============================================
// Export for Module Usage (Optional)
// ============================================

// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = {
//         showNotification,
//         debounce,
//         throttle,
//         isInViewport
//     };
// }
