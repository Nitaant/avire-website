document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Adjust scroll threshold as needed
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav .nav-list a');

    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('nav-open');
        navToggle.classList.toggle('nav-open'); // Toggle class for hamburger animation
        document.body.classList.toggle('no-scroll'); // Optional: prevent scrolling when menu is open
    });

    // Close mobile nav when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('nav-open');
            navToggle.classList.remove('nav-open');
            document.body.classList.remove('no-scroll');
        });
    });
});