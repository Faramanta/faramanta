$(document).ready( function () {
    $('.nav__link').on('click', function () {
       $(this).addClass('active');
       $(this).closest('.nav__item').find('.nav__sub-list').show();
    });

});

