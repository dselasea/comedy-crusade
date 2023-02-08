// JavaScript for menu
const body = document.querySelector('body');
const menu = document.querySelector('.menu__logo--hamburger');
const menuLink = document.querySelector('.menu__link');

// Open Menu
menu.addEventListener('click', openMenu);

function openMenu() {
  menuLink.classList.toggle('open');
  body.classList.toggle('overflow');
  if(menuLink.classList.contains('open')){
    menu.innerHTML = '<i class="fa-solid fa-xmark fa-2x"></i>';
  }else {
    menu.innerHTML = '<i class="fa-solid fa-bars fa-2x"></i>'
  }
}