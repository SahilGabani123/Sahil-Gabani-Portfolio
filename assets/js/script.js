// Tab Switching Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabsContainer = document.querySelector('.tabs-container');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');

            // Scroll tab button into view on mobile
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    this.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center'
                    });
                }, 100);
            }
        });
    });

    // Set first tab as active by default
    if (tabButtons.length > 0) {
        tabButtons[0].classList.add('active');
        tabContents[0].classList.add('active');
    }
});

document.getElementById('downloadBtn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'assets/pdf/Sahil Gabani Resume.pdf';
    link.download = 'Sahil_Gabani_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#/') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('drawerOverlay');
    const closeBtn = document.getElementById('drawerClose');

    if (!mobileMenuBtn || !drawer || !overlay || !closeBtn) {
        console.error('Drawer elements missing');
        return;
    }

    // OPEN DRAWER
    mobileMenuBtn.addEventListener('click', () => {
        drawer.classList.add('open');
        overlay.classList.add('show');
        mobileMenuBtn.classList.add('active');
    });

    function closeDrawer() {
        drawer.classList.remove('open');
        overlay.classList.remove('show');
        mobileMenuBtn.classList.remove('active');
    }

    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    /* ==========================
       TAB SYNC LOGIC (CORE)
    ========================== */

    const allTabs = document.querySelectorAll('.tab-btn');

    allTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;

            // Remove active from all tabs
            allTabs.forEach(t => t.classList.remove('active'));

            // Activate all matching tabs
            document
                .querySelectorAll(`.tab-btn[data-tab="${tabName}"]`)
                .forEach(t => t.classList.add('active'));

            // Close drawer if clicked from mobile
            if (drawer.classList.contains('open')) {
                closeDrawer();
            }
        });
    });
});


// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.about-card, .project-card, .skill-category, .testimonial-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Lazy loading for images (if any)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Update year in footer if needed
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-container p');
    if (footerText && !footerText.textContent.includes('2025')) {
        footerText.textContent = `© ${currentYear} Sahil Gabani. All rights reserved.`;
    }
});
const tabsContainer = document.querySelector('.tabs-container');
if (tabsContainer) {
    tabsContainer.addEventListener('scroll', () => {
        const activeBtn = tabsContainer.querySelector('.tab-btn.active');
        if (activeBtn) {
            activeBtn.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest'
            });
        }
    });
}

// Add hover effect to skill items
document.querySelectorAll('.skill-category li').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.color = '#FACC15';
    });
    item.addEventListener('mouseleave', function() {
        this.style.color = '#D1D5DB';
    });
});

// Console welcome message
console.log('%c Welcome to Sahil Gabani\'s Portfolio! ', 'background: #FACC15; color: #0F172A; padding: 10px; border-radius: 5px; font-weight: bold; font-size: 14px;');
console.log('%c 3+ Years of Android Development Experience ', 'color: #FACC15; font-size: 12px;');
console.log('%c GitHub: https://github.com/sahilGABANI ', 'color: #9CA3AF; font-size: 11px;');
console.log('%c LinkedIn: https://www.linkedin.com/in/sahil-gabani-067964228/ ', 'color: #9CA3AF; font-size: 11px;');
console.log('%c Upwork: https://www.upwork.com/freelancers/~010d24065a62b67286 ', 'color: #9CA3AF; font-size: 11px;');