window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    document.querySelector('.logo').style.width = '180px';
  } else {
    document.querySelector('.logo').style.width = '300px';
  }
}
