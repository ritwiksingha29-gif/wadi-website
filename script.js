// script.js

// Function for fade-in effect on scroll
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);

// Form handling for contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Logic to handle form submission, e.g., API call or validation
        const formData = new FormData(contactForm);
        console.log('Form submitted!', Object.fromEntries(formData));
    });
});
