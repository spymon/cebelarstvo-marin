window.onscroll = function() {
  scrollFunction();
  checkNewHeight();
};

/* Smooth scrolling */
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('.logo').style.width = '180px';
  } else {
    document.querySelector('.logo').style.width = '300px';
  }
}

/* changing height of the section based on height of the header */
/* let headerHeight = 0; */

let headerHeight = 0;
let showcase = document.querySelector('.showcase');
let behindNav = document.querySelector('.behind-nav');
let paddTop = document.querySelectorAll('.pd-top');

function checkNewHeight() {
  let headerHeight = document.querySelector('.header').offsetHeight;
  showcase.style.minHeight = `calc(100vh - ${headerHeight}px)`;
  behindNav.style.marginBottom = `${headerHeight}px`;

  /* changing padding of sections by the height value of navbar height */
  paddTop.forEach(section => {
    let total = headerHeight + 20;
    section.style.padding = `${total}px 0 2rem`;
  });
}

checkNewHeight();
