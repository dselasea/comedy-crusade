const menu = document.querySelector('.menu__logo--hamburger');
const body = document.querySelector('body');
const menuLink = document.querySelector('.menu__link');
const moreBtn = document.querySelector('.speaker__btn');

let programContent = document.querySelector('.program__content');
let speakerContent = document.querySelector('.speaker__content');

menu.addEventListener('click', openMenu);

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
    img: './images/speaker-1.jpg',
    chessImg: './images/speaker-back.png',
    speaker: 'OB Amponsah',
    title: 'Stand-up Comedian/Optometrist',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },
  {
    img: './images/speaker-2.jpg',
    chessImg: './images/speaker-back.png',
    speaker: 'Khemikal',
    title: 'Stand-up Comedian/Software Engineer',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },
  {
    img: './images/speaker-3.jpg',
    chessImg: './images/speaker-back.png',
    speaker: 'Lekzy De Comic',
    title: 'Stand-up Comedian/Interior Decorator',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },
  {
    img: './images/speaker-4.jpg',
    chessImg: './images/speaker-back.png',
    speaker: 'DKB',
    title: 'Stand-up Comedian/Actor',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },
  {
    img: './images/speaker-5.jpg',
    chessImg: './images/speaker-back.png',
    speaker: 'Putogo',
    title: 'Stand-up comedian/Content Creator',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },
  {
    img: './images/speaker-6.jpg',
    chessImg: './images/speaker-back.png',
    speaker: 'MJ the Comedian',
    title: 'Stand-up Comedian/Content Creator',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },

];

let htmlContent = '';
let htmlSpeakerContent = '';

for(let i = 0; i < program.length; i += 1){
  htmlContent += `
  <div class="programs">
  ${program[i].icon}
  <h4 class='programs__title'>${program[i].title}</h4>
  <p class='programs__description'>${program[i].description}</p>
  </div>`;
  programContent.innerHTML = htmlContent;
}

// Speakers
window.addEventListener('load', function() {
let trimSpeakes = speakers.slice(0, 2)
for(let i = 0; i < trimSpeakes.length; i += 1){
  htmlSpeakerContent += `
  <div class="speaker__container">
      <div class="speaker__content--img">
      <img src='${speakers[i].chessImg}' alt="Chess Background" class="speaker__chess">
      <img src='${speakers[i].img}' alt="Speaker Images" class="speaker__person">
      </div>
      <div class="speaker__content--main">
        <h2 class="speaker__content--name">${speakers[i].title}</h2>
        <p class="speaker__content--title">Berkman</p>
        <p class="speaker__content--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error quidem blanditiis ex provident repellat vitae vel ipsum vero debitis?</p>
      </div>
  </div>`;
  speakerContent.innerHTML = htmlSpeakerContent;
}
});

moreBtn.addEventListener('click', function(){
  trimSpeakes = speakers.slice(0, 4);
  console.log(trimSpeakes);
})

function openMenu() {
  menuLink.classList.toggle('open');
  body.classList.toggle('overflow');
  if(menuLink.classList.contains('open')){
    menu.innerHTML = '<i class="fa-solid fa-xmark fa-2x"></i>';
  }else {
    menu.innerHTML = '<i class="fa-solid fa-bars fa-2x"></i>'
  }
}

body.addEventListener('onscroll', function(e){
  if(window.scrollX === '190'){
  }
  console.log('Hey')
})