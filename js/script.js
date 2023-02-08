// imports
import { program, speakers } from './data.js';

// Select HTML Elements
const menu = document.querySelector('.menu__logo--hamburger');
const body = document.querySelector('body');
const menuLink = document.querySelector('.menu__link');
const moreBtn = document.querySelector('.speaker__btn');
let programContent = document.querySelector('.program__content');
let speakerContent = document.querySelector('.speaker__content');

// Declare variables
let htmlContent = '';
let htmlSpeakerContent = '';
menu.addEventListener('click', openMenu);


// Display Programs
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
if(window.innerWidth < 768){
  for(let i = 0; i < speakers.length - 4; i += 1){
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
}else{
  for(let i = 0; i < speakers.length; i += 1){
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
    moreBtn.style.display = 'none';
  }
}
});

// Display Desktop Speakers
window.addEventListener('resize', function() {
  htmlSpeakerContent = '';
  if(window.innerWidth > 768){
    for(let i = 0; i < speakers.length; i += 1){
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
      moreBtn.style.display = 'none';
    }
  }else if (window.innerWidth < 768) {
    htmlSpeakerContent = '';
    for(let i = 0; i < speakers.length - 4; i += 1){
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
      moreBtn.style.display = 'block';
    }
  }
})

// Show more functionality
moreBtn.addEventListener('click', function(){
 if(speakerContent.childElementCount < 3){
  htmlSpeakerContent = '';
  for(let i = 0; i < speakers.length; i += 1){
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
 }
})

// Open and Close mobile menu functionality
function openMenu() {
  menuLink.classList.toggle('open');
  body.classList.toggle('overflow');
  if(menuLink.classList.contains('open')){
    menu.innerHTML = '<i class="fa-solid fa-xmark fa-2x"></i>';
  }else {
    menu.innerHTML = '<i class="fa-solid fa-bars fa-2x"></i>'
  }
}
