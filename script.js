// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Create stars for night sky effect
    function createStars() {
        const nightSky = document.querySelector('body.night-sky-body');
        if (!nightSky) return;

        const existing = nightSky.querySelector('.stars');
        if (existing) {
            existing.remove();
        }

        const starsContainer = document.createElement('div');
        starsContainer.className = 'stars';

        const isMobile = window.innerWidth < 768;
        const starCount = isMobile ? 140 : 280;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';

            // Random size
            const sizes = ['small', 'medium', 'large'];
            const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
            star.classList.add(randomSize);

            // Random position
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';

            // Random animation delay
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }

        nightSky.appendChild(starsContainer);
    }

    // Create stars when page loads
    createStars();

    // Recreate stars on window resize for responsive design
    window.addEventListener('resize', function () {
        createStars();
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });

        backToTopButton.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Skill progress animation
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');

        const skillObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const targetWidth = progressBar.getAttribute('data-width');

                    setTimeout(() => {
                        progressBar.style.width = targetWidth + '%';
                    }, 500);

                    skillObserver.unobserve(progressBar);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }

    // Initialize skill bar animations
    animateSkillBars();

    // Add typing effect to job title
    const jobTitle = document.querySelector('.hero-section .text-primary');
    if (jobTitle) {
        const originalText = jobTitle.textContent;
        jobTitle.textContent = '';

        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                jobTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        // Start typing effect after initial animations
        setTimeout(typeWriter, 1500);
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        const heroSection = document.querySelector('.hero-section');
        if (heroSection && scrolled < heroSection.offsetHeight) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) rotateY(5deg)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) rotateY(0)';
        });
    });

    // Testimonial carousel auto-scroll (if you want to add this later)
    // You can implement a carousel system here if needed

    // Contact form enhancement (if you add a contact form later)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Add form submission logic here
            alert('Thank you for your message! I\'ll get back to you soon.');
        });
    }

    // Loading animation
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');
    });

    // Intersection Observer for general animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // ===== CAREER TAB SWITCHING =====
    const tabButtons = document.querySelectorAll('.career-tab-btn');
    const tabPanels = document.querySelectorAll('.career-panel');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');

            // Deactivate all
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            // Activate selected
            btn.classList.add('active');
            const panel = document.getElementById('panel-' + target);
            if (panel) {
                panel.classList.add('active');
                // Re-trigger stagger reveals inside panel
                panel.querySelectorAll('.stagger-reveal').forEach(sr => {
                    sr.classList.remove('revealed');
                    void sr.offsetWidth; // force reflow
                    sr.classList.add('revealed');
                });
            }
        });
    });

    // ===== ANIMATED COUNTER =====
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-count]');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-count'), 10);
                    const duration = 2000;
                    const start = performance.now();

                    function update(now) {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        el.textContent = Math.round(eased * target) + '+';
                        if (progress < 1) requestAnimationFrame(update);
                    }
                    requestAnimationFrame(update);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(c => counterObserver.observe(c));
    }
    animateCounters();

    // ===== STAGGER REVEAL ON SCROLL =====
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.stagger-reveal').forEach(el => {
        staggerObserver.observe(el);
    });

    // ===== REVEAL LINE ON SCROLL =====
    const lineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                lineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.reveal-line').forEach(el => {
        lineObserver.observe(el);
    });

    // ===== TILT CARD MOUSE EFFECT =====
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ===== MAGNETIC CURSOR ON BUTTONS =====
    document.querySelectorAll('.career-tab-btn, .hero-actions .btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) translateY(-2px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    // Console message for developers
    console.log('%c👋 Hello there, fellow developer!', 'color: #13233c; font-size: 16px; font-weight: bold;');
    console.log('%cInterested in how this portfolio was built? Check out the code on GitHub!', 'color: #666; font-size: 14px;');
    console.log('%chttps://github.com/Silas-Matabane', 'color: #0066cc; font-size: 14px;');
});