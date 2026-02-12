// script.js

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('is-active');
    });
});

// Scroll Animations
const revealElements = document.querySelectorAll('.reveal');
const options = {
    threshold: 0.1
};

const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
};

const observer = new IntersectionObserver(callback, options);
revealElements.forEach(element => {
    observer.observe(element);
});

// Contact Form Handling
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(contactForm);
    // Handle form submission logic here (e.g., send to server)
    console.log('Form submitted', formData);
});

// Smooth Scrolling Functionality
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetPosition = document.querySelector(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
