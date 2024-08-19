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
