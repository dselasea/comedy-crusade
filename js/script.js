const menu = document.querySelector('.menu__logo--hamburger');
const menuLink = document.querySelector('.menu__link');

let programContent = document.querySelector('.program__content');

const program = [
  {
    icon: '<i class="fa-solid fa-blog fa-2x"></i>',
    title: 'Blogging',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },
  {
    icon: '<i class="fa-solid fa-chess-rook fa-2x"></i>',
    title: 'Strategy',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },
  {
    icon: '<i class="fa-solid fa-cart-shopping fa-2x"></i>',
    title: 'Marketing',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },
  {
    icon: '<i class="fa-brands fa-adversal fa-2x"></i>',
    title: 'Adversing',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },
  {
    icon: '<i class="fa-solid fa-globe fa-2x"></i>',
    title: 'Websites',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },

];

const speakers = [
  {
    img: '<i class="fa-solid fa-blog fa-2x"></i>',
    speaker: 'Blogging',
    title: 'Professor',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },
  {
    img: '<i class="fa-solid fa-chess-rook fa-2x"></i>',
    speaker: 'Strategy',
    title: 'Teacher',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },
  {
    img: '<i class="fa-solid fa-cart-shopping fa-2x"></i>',
    speaker: 'Marketing',
    title: 'Student',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },
  {
    img: '<i class="fa-brands fa-adversal fa-2x"></i>',
    speaker: 'Adversing',
    title: 'Marketer',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },
  {
    img: '<i class="fa-solid fa-globe fa-2x"></i>',
    speaker: 'Websites',
    title: 'Sales Person',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },

]

menu.addEventListener('click', openMenu);

let htmlContent = '';

for(let i = 0; i < program.length; i += 1){
  htmlContent += `
  <div class="programs">
  <span>${program[i].icon}</span>
  <h4 class='programs__title'>${program[i].title}</h4>
  <p class='programs__description'>${program[i].description}</p>
  </div>`;
  programContent.innerHTML = htmlContent;
}

function openMenu() {
  menuLink.classList.toggle('open');
  console.log('clicked')
}