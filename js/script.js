const menu = document.querySelector('.menu__logo--hamburger');
const menuLink = document.querySelector('.menu__link');

menu.addEventListener('click', openMenu);

function openMenu() {
  menuLink.classList.toggle('open');
  console.log('clicked')
}