document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, options);

    slides.forEach(slide => {
        observer.observe(slide);
    });

    // Auto scroll after 3 down scrolls
    let scrollCount = 0;
    window.addEventListener('scroll', () => {
        scrollCount++;
        if (scrollCount >= 3) {
            let currentSlide = Math.round(window.scrollY / window.innerHeight);
            let nextSlide = currentSlide + 1;
            if (nextSlide < slides.length) {
                window.scrollTo({
                    top: nextSlide * window.innerHeight,
                    behavior: 'smooth'
                });
                scrollCount = 0; // reset scroll count after auto-scroll
            }
        }
    });
});

// CSS for animation
document.head.insertAdjacentHTML('beforeend', `
<style>
.fade-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.slide {
    opacity: 0;
    transform: translateY(50px);
}
</style>
`);
