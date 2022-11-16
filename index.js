const button_navigation = document.querySelector('.button_navigation');
const window_navigation = document.querySelector('nav');

let menuOpen = false;

button_navigation.addEventListener('click', () => {
    if (!menuOpen) {
        button_navigation.classList.add('open');
        window_navigation.classList.add('open');
        menuOpen = true;
    } else {
        button_navigation.classList.remove('open');
        window_navigation.classList.remove('open');
        menuOpen = false;

    }
});