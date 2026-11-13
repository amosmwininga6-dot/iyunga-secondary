
// Get HTML elements
const menuToggle = document.getElementById('menuToggle');

const navLinks = document.getElementById('navLinks');


// Mobile navigation menu
menuToggle.addEventListener('click', () => {

    const isOpen = navLinks.classList.toggle('open');

    menuToggle.setAttribute(
        'aria-expanded',
        String(isOpen)
    );

    menuToggle.textContent = isOpen ? '✕' : '☰';

});


// Close menu after clicking a navigation link
document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('open');

        menuToggle.setAttribute(
            'aria-expanded',
            'false'
        );

        menuToggle.textContent = '☰';

    });

});


// Automatically display current year
document.getElementById('year').textContent =
    new Date().getFullYear();
