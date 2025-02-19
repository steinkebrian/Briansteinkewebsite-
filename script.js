// Scroll-Animation
window.addEventListener('scroll', () => {
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('fade-in');
        }
    });
});

// Dark Mode speichern
const themeToggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleButton.textContent = '🌞';
}

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    themeToggleButton.textContent = theme === 'dark' ? '🌞' : '🌙';
});

// Hamburger-Menü
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
