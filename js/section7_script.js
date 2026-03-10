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
