const menuIcon = document.querySelector('.js-menu-icon');
const menuItems = document.querySelector('.js-menu');

let isOpen = false;

menuIcon.addEventListener('click', () => {
    if (isOpen) {
        menuIcon.src = './assets/images/icon-menu.svg';
        menuItems.classList.add('active');
    }
    else {
        menuIcon.src = './assets/images/icon-menu-close.svg';
        menuIcon.alt = 'icon-menu-close';
        menuItems.classList.remove('active');
    }
    isOpen = !isOpen;
});