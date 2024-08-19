document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    let lastScrollY = window.scrollY;
    let isScrolling = false;

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

    window.addEventListener('scroll', () => {
        if (isScrolling) return;

        let currentScrollY = window.scrollY;
        let currentSlide = Math.round(currentScrollY / window.innerHeight);

        if (currentScrollY > lastScrollY && currentSlide < slides.length - 1) {
            // Scrolling down
            isScrolling = true;
            window.scrollTo({
                top: (currentSlide + 1) * window.innerHeight,
                behavior: 'smooth'
            });
        } else if (currentScrollY < lastScrollY && currentSlide > 0) {
            // Scrolling up
            isScrolling = true;
            window.scrollTo({
                top: (currentSlide - 1) * window.innerHeight,
                behavior: 'smooth'
            });
        }

        lastScrollY = currentScrollY;

        setTimeout(() => {
            isScrolling = false;
        }, 700); // Adjust the timeout to match the scroll animation duration
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
