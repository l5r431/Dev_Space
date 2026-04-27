document.addEventListener('DOMContentLoaded', () => {
    const mode = document.getElementById('toggle');
    const menuToggle = document.getElementById('menu');
    const menu = document.querySelector('.navbar-mobile');

    // =========================
    // THEME SETUP
    // =========================

    const savedTheme = localStorage.getItem('theme');

    // system preference
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // apply theme on load
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        mode.checked = true;
    } 
    else if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
        mode.checked = false;
    } 
    else {
        // no saved theme → use system
        if (!systemDark) {
            document.body.classList.add('light-mode');
            mode.checked = true;
        }
    }

    // =========================
    // TOGGLE THEME
    // =========================
    if (mode) {
        mode.addEventListener('change', () => {
            if (mode.checked) {
                document.body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            } else {
                document.body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // =========================
    // MENU TOGGLE
    // =========================
    if (menuToggle && menu) {
        menuToggle.addEventListener('change', () => {
            menu.classList.toggle('active', menuToggle.checked);
        });
    }
});