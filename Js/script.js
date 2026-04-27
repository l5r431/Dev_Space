const menu = document.getElementById('menu');
const close = document.getElementById('close');
const navbar = document.querySelector('.navbar-mobile');
const mode = document.getElementById('light');
const modes = document.querySelector('.light-mode');

menu.addEventListener('click', () => {
  navbar.classList.add('active');
});

close.addEventListener('click', () => {
  navbar.classList.remove('active');
});
document.addEventListener('click', (e) => {
  if (
    !navbar.contains(e.target) &&
    !menu.contains(e.target)
  ) {
    navbar.classList.remove('active');
  }
});
mode.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
})