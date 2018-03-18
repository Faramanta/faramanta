$(document).ready(function(){
    $('select[name="hotelType"]').SumoSelect();
    $('select[name="hotel"]').SumoSelect();
    $('select[name="areal"]').SumoSelect();
    $('select[name="meal"]').SumoSelect();
    $('select[name="services"]').SumoSelect();
    $('select[name="landmarks"]').SumoSelect();
    $('select[name="sorter"]').SumoSelect();

    $('.js-sorter-link').on('click', function (e) {
        e.preventDefault();
        $('.sorter__cnt-icon').removeClass('active');
        $(this).addClass('active');
    });
});
