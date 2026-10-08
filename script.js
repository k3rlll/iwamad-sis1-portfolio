const html = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = html.dataset.theme;
    html.dataset.theme = currentTheme === 'dark' ? 'light' : 'dark';
});

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    formMessage.className = 'form-message';
    formMessage.textContent = '';

    if (!name || !email || !message) {
        formMessage.textContent = 'Error: A required field is empty. Please fill out all fields.';
        formMessage.classList.add('error-message');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Error: The email address is malformed. Please enter a valid email.';
        formMessage.classList.add('error-message');
        return;
    }

    formMessage.textContent = 'Success: Your message has been simulated as sent!';
    formMessage.classList.add('success-message');
    contactForm.reset();
});



const menuToggleBtn = document.getElementById('menu-toggle');
const navLinksContainer = document.getElementById('nav-links');

menuToggleBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
    });
});