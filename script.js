document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    
    // Dark Mode aktivieren, wenn gespeichert
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // Dark Mode umschalten
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Dark