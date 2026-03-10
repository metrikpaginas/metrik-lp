// index.js (to be placed in existing script.js)

// Initialize AOS immediately without waiting for intersection observer for non-heavy ones
document.addEventListener('DOMContentLoaded', () => {
    // Utility to load heavy modules like GSAP, Three, Swiper, etc., only when they enter viewport to preserve Page Speed
    function lazyLoadModule(selector, loadFn) {
        const el = document.querySelector(selector);
        if (!el) return;
        const obs = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                obs.disconnect();
                loadFn();
            }
        }, { rootMargin: '200px' });
        obs.observe(el);
    }

    // Lazy load Swiper JS for About Section
    lazyLoadModule('.about-carousel-wrapper', async () => {
        // Load Swiper script dynamically
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
        script.onload = () => {
            // Once swiper is loaded, init the carousel
            initAboutSwiper();
        };
        document.body.appendChild(script);
    });

    function initAboutSwiper() {
        if (typeof Swiper !== 'undefined') {
            new Swiper('.about-swiper', {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 20,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                },
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
            });
        }
    }

    // Initialize AOS 
    if (typeof AOS !== 'undefined') {
        AOS.init({
            disableMutationObserver: true, // Prevents CLS issues on load as per rules
            once: true,
            offset: 50,
        });
    }
});

// Add to js/section3_script.js (Wait, I should create section4_script.js and append it)
// Let's create section4_script.js
document.addEventListener('DOMContentLoaded', () => {

    const difSection = document.getElementById('diferencial');
    const difTextSpans = document.querySelectorAll('#dif-scroll-text span');

    if (difSection && difTextSpans.length > 0) {

        // Simple manual scroll spy for the text reveal (Type of Scroll Progress)
        window.addEventListener('scroll', () => {
            const rect = difSection.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate progress of section within viewport
            // Start when top reaches middle of screen, end when bottom reaches middle
            let start = viewportHeight * 0.8;
            let end = -rect.height + viewportHeight * 0.2;

            let progress = 0;

            if (rect.top <= start && rect.top >= end) {
                progress = (start - rect.top) / (start - end);
            } else if (rect.top < end) {
                progress = 1;
            }

            // Calculate how many words should be active based on progress
            const wordsToActivate = Math.floor(progress * difTextSpans.length);

            difTextSpans.forEach((span, index) => {
                if (index < wordsToActivate) {
                    span.classList.add('active');
                } else {
                    span.classList.remove('active');
                }
            });
        }, { passive: true });
    }
});

// Add to script.js - Section 6 logic
document.addEventListener('DOMContentLoaded', () => {

    const solutionCards = document.querySelectorAll('.solution-card');
    const hudVisuals = document.querySelectorAll('.hud-visual');

    if (solutionCards.length > 0 && window.innerWidth > 768) {

        // Use Intersection Observer to detect which card is currently in view
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // Trigger when card is in the middle 20% of viewport
            threshold: 0
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    // 1. Remove active from all cards and visuals
                    solutionCards.forEach(card => card.classList.remove('active'));
                    hudVisuals.forEach(visual => visual.classList.remove('active'));

                    // 2. Add active to current card
                    entry.target.classList.add('active');

                    // 3. Find matching visual and activate it
                    const id = entry.target.id.split('-')[1]; // sol-1 -> 1
                    const matchingVisual = document.getElementById(`hud-visual-${id}`);
                    if (matchingVisual) {
                        matchingVisual.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        solutionCards.forEach(card => {
            sectionObserver.observe(card);
        });
    }

});

// Add to script.js - Section 7 logic
document.addEventListener('DOMContentLoaded', () => {

    const scroller = document.querySelector('.timeline-wrapper-scroller');

    if (scroller && window.innerWidth > 1024) {
        let isDown = false;
        let startX;
        let scrollLeft;

        scroller.addEventListener('mousedown', (e) => {
            isDown = true;
            scroller.classList.add('active');
            startX = e.pageX - scroller.offsetLeft;
            scrollLeft = scroller.scrollLeft;
        });

        scroller.addEventListener('mouseleave', () => {
            isDown = false;
            scroller.classList.remove('active');
        });

        scroller.addEventListener('mouseup', () => {
            isDown = false;
            scroller.classList.remove('active');
        });

        scroller.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scroller.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast
            scroller.scrollLeft = scrollLeft - walk;
        });

        // Intersection Observer for the line progress and step active states
        const steps = document.querySelectorAll('.timeline-step');
        const progressBar = document.querySelector('.timeline-line-progress');

        scroller.addEventListener('scroll', () => {
            // Find which step is closest to the center of the viewport
            let closestStep = null;
            let minDistance = Infinity;
            const viewportCenter = window.innerWidth / 2;

            steps.forEach((step, index) => {
                const rect = step.getBoundingClientRect();
                const stepCenter = rect.left + (rect.width / 2);
                const distance = Math.abs(viewportCenter - stepCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestStep = step;
                }

                // Active state
                if (stepCenter < viewportCenter + 100) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });

            // Update Progress Bar roughly based on scroll percentage
            const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
            const scrollPercentage = (scroller.scrollLeft / maxScrollLeft) * 100;
            if (progressBar) {
                progressBar.style.width = `${scrollPercentage}%`;
            }
        });
    }
});

