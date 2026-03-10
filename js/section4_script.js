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
