// Scroll-Animation beim Laden der Seite
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('fade-in');
        }
    });
});

// Theme-Wechsel (Dunkelmodus)
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Symbol wechseln je nach Zustand
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = '🌞'; // Wechsel zum Sonnen-Symbol
    } else {
        themeToggleButton.textContent = '🌙'; // Wechsel zum Mond-Symbol
    }
});

// Initialisieren der Animationen beim Laden der Seite
window.addEventListener('load', () => {
    const header = document.querySelector('header');
    header.classList.add('header-appear');
});