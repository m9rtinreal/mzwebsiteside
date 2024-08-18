document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.step');

    steps.forEach((step, index) => {
        setTimeout(() => {
            step.style.opacity = 1;
            step.style.transform = 'translateY(0)';
        }, index * 300);
    });
});

// Basic animations
const steps = document.querySelectorAll('.step');
steps.forEach(step => {
    step.style.transition = 'all 0.5s ease-in-out';
    step.style.opacity = '0';
    step.style.transform = 'translateY(20px)';
});
