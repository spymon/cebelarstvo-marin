window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('.logo').style.width = '180px';
  } else {
    document.querySelector('.logo').style.width = '300px';
  }
}
