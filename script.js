document.addEventListener("DOMContentLoaded", () => {
    // Dark Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Prüfen, ob Dark Mode schon aktiviert war
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            themeToggle.textContent = "🌙";
        }
    });

    // Burger-Menü für Mobile Navigation
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");

    burgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
