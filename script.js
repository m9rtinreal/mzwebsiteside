document.addEventListener("DOMContentLoaded", function() {
    // Add animations on scroll for the second and third slides
    const slides = document.querySelectorAll('.slide');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.5 });

    slides.forEach(slide => {
        observer.observe(slide);
    });
});
