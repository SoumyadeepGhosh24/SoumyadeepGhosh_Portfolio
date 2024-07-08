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
