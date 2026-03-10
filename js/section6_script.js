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
