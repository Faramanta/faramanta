$(document).ready(function() {

  $("#phone1").mask("+7 (999) 999-9999");
  $("#phone2").mask("+7 (999) 999-9999");

  $('.form__imp').focus(function(){
    $(this).data('placeholder',$(this).attr('placeholder'));
    $(this).attr('placeholder','');
  });
  $('.form__imp').blur(function(){
    $(this).attr('placeholder',$(this).data('placeholder'));
  });


// есть аккаунт
  $('#btnStep11').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step0').hide();
    $('.form__step11').show();
  });
    $('#btnStep12').on('click', function (e) {
    e.preventDefault();
    alert('Ваш код 0234');
    $(this).closest('.form__step11').hide();
    $('.form__step12').show();
  });
  $('#btnStep13').on('click', function (e) {
    e.preventDefault();
    if ($(this).closest('.form__step12').find('.form__kod').val() == '0234') {
      $(this).closest('.form__step12').hide();
      $('.form__step13').show();
  } else {
      $(this).closest('.form__step12').find('.form__imp-wrap-kod').addClass('error');
    }
  });
  $('#btnStep10').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step13').hide();
    $('.form__step0').show();
  });

  // нет аккаунта
  $('#btnStep21').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step0').hide();
    $('.form__step21').show();
  });
  $('#btnStep22').on('click', function (e) {
    e.preventDefault();
    alert('Ваш код 0234');
    $(this).closest('.form__step21').hide();
    $('.form__step22').show();
  });
  $('#btnStep23').on('click', function (e) {
    e.preventDefault();
    if ($(this).closest('.form__step22').find('.form__kod').val() == '0234') {
      $(this).closest('.form__step22').hide();
      $('.form__step23').show();
    } else {
      $(this).closest('.form__step22').find('.form__imp-wrap-kod').addClass('error');
    }
  });
  $('#btnStep20').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step23').hide();
    $('.form__step0').show();
  });


  $('#btnStep31').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step23').hide();
    $('.form__step31').show();
  });
  $('#btnStep32').on('click', function (e) {
    e.preventDefault();
    alert('Ваш код 0234');
    $(this).closest('.form__step31').hide();
    $('.form__step32').show();
  });
  $('#btnStep33').on('click', function (e) {
    e.preventDefault();
    if ($(this).closest('.form__step32').find('.form__kod').val() == '0234') {
      $(this).closest('.form__step32').hide();
      $('.form__step33').show();
    } else {
      $(this).closest('.form__step32').find('.form__imp-wrap-kod').addClass('error');
    }
  });
  $('#btnStep34').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step33').hide();
    $('.form__step34').show();
  });
  $('#btnStep30').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step34').hide();
    $('.form__step0').show();
  });

  $('#linkBack13').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step31').hide();
    $('.form__step23').show();
  });

});