document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.getElementById("menu-toggle");
    var menu = document.getElementById('menu');
    var menuIcon = document.getElementById("menu-icon");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle('open'); // Adiciona ou remove a classe 'open' no menu
        menuIcon.textContent = menu.classList.contains('open') ? "✕" : "☰";
    });
});