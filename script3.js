function toggleMenu() {
    var menu = document.getElementById('menu');
    var hamburger = document.getElementById('hamburger');

    // Adiciona ou remove a classe 'open' no menu e no botão hamburger
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
  }