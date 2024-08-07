// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height) 
      {
        // active navbar Links
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
        // active sections for animation on scroll 
        sec.classList.add('show-animated');
      }
      // if want to use animation that repeats on scroll use this 
      else {
        sec.classList.remove('show-animate');
      }
  });
  // sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // remove toggle icon and navbar when click navbar Links (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}


// about section read more button
const aboutContent = document.querySelector('.about-content');
const readMoreBtn = document.querySelector('.btn.hvr-float');

readMoreBtn.addEventListener('click', () => {
    if (aboutContent.style.height === '100px') {
        aboutContent.style.height = 'auto';
        readMoreBtn.textContent = 'Read Less';
    } else {
        aboutContent.style.height = '100px';
        readMoreBtn.textContent = 'Read More';
    }
});


// show more and show less button in project section
const showMoreLessBtn = document.querySelector('#show-more-less');
const hiddenProjects = document.querySelectorAll('.project.hidden');

showMoreLessBtn.addEventListener('click', () => {
  hiddenProjects.forEach((project) => {
    project.classList.toggle('hidden');
  });
  if (showMoreLessBtn.textContent === 'Show More') {
    showMoreLessBtn.textContent = 'Show Less';
  } 
  else {
    showMoreLessBtn.textContent = 'Show More';
  }
});


// show more and show less button in acheivement section
const showMorLesBtn = document.querySelector('#show-more-less-acheive');
const hideProjects = document.querySelectorAll('.acheive.hidden');

showMorLesBtn.addEventListener('click', () => {
  hideProjects.forEach((acheive) => {
    acheive.classList.toggle('hidden');
  });
  if (showMorLesBtn.textContent === 'Show More') {
    showMorLesBtn.textContent = 'Show Less';
  } 
  else {
    showMorLesBtn.textContent = 'Show More';
  }
});


// show more and show less button in research paper section
const showMorLesBtnResearch = document.querySelector('#show-more-less-research');
const hideResearch = document.querySelectorAll('.research.hidden');

showMorLesBtnResearch.addEventListener('click', () => {
  hideResearch.forEach((acheive) => {
    acheive.classList.toggle('hidden');
  });
  if (showMorLesBtnResearch.textContent === 'Show More') {
    showMorLesBtnResearch.textContent = 'Show Less';
  } 
  else {
    showMorLesBtnResearch.textContent = 'Show More';
  }
});


// typewritter effect for designation role
const designations = [
  "Frontend Developer",
  "Robotics Engineer",
  "Electronics Engineer"
];

let currentDesignationIndex = 0;
let currentCharacterIndex = 0;
let typingText = document.getElementById("typing-text");

function typeWriter() {
  if (currentCharacterIndex < designations[currentDesignationIndex].length) {
      typingText.textContent += designations[currentDesignationIndex][currentCharacterIndex];
      currentCharacterIndex++;
      setTimeout(typeWriter, 100); // adjust the speed of typing
  } else {
      setTimeout(eraseText, 2000); // wait for 2 seconds before erasing
  }
}

function eraseText() {
  if (currentCharacterIndex > 0) {
      typingText.textContent = typingText.textContent.substring(0, currentCharacterIndex - 1);
      currentCharacterIndex--;
      setTimeout(eraseText, 50); // adjust the speed of erasing
  } else {
      currentDesignationIndex = (currentDesignationIndex + 1) % designations.length;
      currentCharacterIndex = 0;
      setTimeout(typeWriter, 500); // wait for 0.5 seconds before typing the next designation
  }
}

typeWriter();