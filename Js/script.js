const modes = document.querySelector('.light-mode');
const mode = document.getElementById('toggle');
const checkbox = document.getElementById('menu');
const menu = document.querySelector('.navbar-mobile');

checkbox.addEventListener('change', () => {
    menu.classList.toggle('active');
});

mode.addEventListener('change', () => {
  document.body.classList.toggle('light-mode');
});