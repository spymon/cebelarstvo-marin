$(document).ready(function() {
  $(document).on('scroll', function() {
    if ($(document).scrollTop() > 100) {
      $('header').addClass('shrink');
    } else {
      $('header').removeClass('shrink');
    }
  });

  $('.logo').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 200);
  });
});
