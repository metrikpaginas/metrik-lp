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
