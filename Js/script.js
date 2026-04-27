const mode = document.getElementById('toggle');
const checkbox = document.getElementById('menu');
const menu = document.querySelector('.navbar-mobile');

checkbox.addEventListener('change', () => {
    menu.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', () => {


    // safety check
    if (checkbox && menu) {
        checkbox.addEventListener('change', () => {
            menu.classList.toggle('active', checkbox.checked);
        });
    }

    if (mode) {
        mode.addEventListener('change', () => {
            document.body.classList.toggle('light-mode', mode.checked);
        });
    }

});