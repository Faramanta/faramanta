$(document).ready(function() {
// есть аккаунт
  $('#btnStep11').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step0').hide();
    $('.form__step11').show();
  });
    $('#btnStep12').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step11').hide();
    $('.form__step12').show();
  });
  $('#btnStep13').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step12').hide();
    $('.form__step13').show();
  });
  $('#btnStep14').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step13').hide();
    $('.form__step14').show();
  });
  $('#btnStep15').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step14').hide();
    $('.form__step15').show();
  });
  $('#btnStep16').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step15').hide();
    $('.form__step16').show();
  });
  $('#btnStep10').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step16').hide();
    $('.form__step0').show();
  });
  $('#linkBack13').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step14').hide();
    $('.form__step13').show();
  });

  // нет аккаунта
  $('#btnStep21').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step0').hide();
    $('.form__step21').show();
  });
  $('#btnStep20').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.form__step21').hide();
    $('.form__step0').show();
  });
});