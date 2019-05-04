$(function () {
  $('.popup__link').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.popup__close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});

$(document).ready(function() {
    $('#pass').on('click', function () {
      $(this).toggleClass('open');
    });
});

