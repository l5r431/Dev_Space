document.addEventListener('DOMContentLoaded', () => {
    const mode = document.getElementById('toggle');
    const menuToggle = document.getElementById('menu');
    const menu = document.querySelector('.navbar-mobile');

    // MENU
    if (menuToggle && menu) {
        menuToggle.addEventListener('change', () => {
            menu.classList.toggle('active', menuToggle.checked);
        });
    }

    // DARK / LIGHT MODE
    if (mode) {
        mode.addEventListener('change', () => {
            document.body.classList.toggle('light-mode', mode.checked);
        });
    }
});