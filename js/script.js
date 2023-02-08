// imports
import { program, speakers } from './data.js';

// Select HTML Elements
const programContent = document.querySelector('.program__content');
const moreBtn = document.querySelector('.speaker__btn');
const speakerContent = document.querySelector('.speaker__content');

// Declare variables
let htmlContent = '';
let htmlSpeakerContent = '';

// Functions
function displayPrograms() {
  for (let i = 0; i < program.length; i += 1) {
    htmlContent += `
    <div class="programs">
    ${program[i].icon}
    <h4 class='programs__title'>${program[i].title}</h4>
    <p class='programs__description'>${program[i].description}</p>
    </div>`;
    programContent.innerHTML = htmlContent;
  }
}

function loadSpeakers() {
  if (window.innerWidth < 768) {
    for (let i = 0; i < speakers.length - 4; i += 1) {
      htmlSpeakerContent += `
      <div class="speaker__container">
          <div class="speaker__content--img">
          <img src='${speakers[i].chessImg}' alt="Chess Background" class="speaker__chess">
          <img src='${speakers[i].img}' alt="Speaker Images" class="speaker__person">
          </div>
          <div class="speaker__content--main">
            <h2 class="speaker__content--name">${speakers[i].title}</h2>
            <p class="speaker__content--title">${speakers[i].speaker}</p>
            <p class="speaker__content--description">${speakers[i].description}</p>
          </div>
      </div>`;
      speakerContent.innerHTML = htmlSpeakerContent;
    }
  } else {
    for (let i = 0; i < speakers.length; i += 1) {
      htmlSpeakerContent += `
      <div class="speaker__container">
          <div class="speaker__content--img">
          <img src='${speakers[i].chessImg}' alt="Chess Background" class="speaker__chess">
          <img src='${speakers[i].img}' alt="Speaker Images" class="speaker__person">
          </div>
          <div class="speaker__content--main">
            <h2 class="speaker__content--name">${speakers[i].title}</h2>
            <p class="speaker__content--title">${speakers[i].speaker}</p>
            <p class="speaker__content--description">${speakers[i].description}</p>
          </div>
      </div>`;
      speakerContent.innerHTML = htmlSpeakerContent;
      moreBtn.style.display = 'none';
    }
  }
}

function resizeWindow() {
  htmlSpeakerContent = '';
  if (this.window.innerWidth > 768) {
    for (let i = 0; i < speakers.length; i += 1) {
      htmlSpeakerContent += `
      <div class="speaker__container">
          <div class="speaker__content--img">
          <img src='${speakers[i].chessImg}' alt="Chess Background" class="speaker__chess">
          <img src='${speakers[i].img}' alt="Speaker Images" class="speaker__person">
          </div>
          <div class="speaker__content--main">
            <h2 class="speaker__content--name">${speakers[i].title}</h2>
            <p class="speaker__content--title">${speakers[i].speaker}</p>
            <p class="speaker__content--description">${speakers[i].description}</p>
          </div>
      </div>`;
      speakerContent.innerHTML = htmlSpeakerContent;
      moreBtn.style.display = 'none';
    }
  } else if (this.window.innerWidth < 768) {
    htmlSpeakerContent = '';
    for (let i = 0; i < speakers.length - 4; i += 1) {
      htmlSpeakerContent += `
      <div class="speaker__container">
          <div class="speaker__content--img">
          <img src='${speakers[i].chessImg}' alt="Chess Background" class="speaker__chess">
          <img src='${speakers[i].img}' alt="Speaker Images" class="speaker__person">
          </div>
          <div class="speaker__content--main">
            <h2 class="speaker__content--name">${speakers[i].title}</h2>
            <p class="speaker__content--title">${speakers[i].speaker}</p>
            <p class="speaker__content--description">${speakers[i].description}</p>
          </div>
      </div>`;
      speakerContent.innerHTML = htmlSpeakerContent;
      moreBtn.style.display = 'block';
    }
  }
}

function showMore() {
  if (speakerContent.childElementCount < 3) {
    htmlSpeakerContent = '';
    for (let i = 0; i < speakers.length; i += 1) {
      htmlSpeakerContent += `
     <div class="speaker__container">
         <div class="speaker__content--img">
         <img src='${speakers[i].chessImg}' alt="Chess Background" class="speaker__chess">
         <img src='${speakers[i].img}' alt="Speaker Images" class="speaker__person">
         </div>
         <div class="speaker__content--main">
            <h2 class="speaker__content--name">${speakers[i].title}</h2>
            <p class="speaker__content--title">${speakers[i].speaker}</p>
            <p class="speaker__content--description">${speakers[i].description}</p>
          </div>
     </div>`;
      speakerContent.innerHTML = htmlSpeakerContent;
    }
  }
}

// Display Programs
window.addEventListener('load', displayPrograms);

// Load Speakers
window.addEventListener('load', loadSpeakers);

// Display Desktop Speakers on Resize
window.addEventListener('resize', resizeWindow);

// Show more button functionality
moreBtn.addEventListener('click', showMore);