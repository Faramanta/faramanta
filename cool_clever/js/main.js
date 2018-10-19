$(document).ready(function() {

  $("#phone1").mask("+7 (999) 999-9999");
  $("#phone2").mask("+7 (999) 999-9999");
  $("#cardNum3").mask("999-999-9999");

  $('.form__inp').focus(function(){
    $(this).data('placeholder',$(this).attr('placeholder'));
    $(this).attr('placeholder','');
  });
  $('.form__inp').blur(function(){
    $(this).attr('placeholder',$(this).data('placeholder'));
  });

  $('input').keydown(function(event){
    if(event.keyCode == 13){
      event.preventDefault();
      return false;
    }
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
      refresh();
  });
  $('#btnStep13').on('click', function (e) {
    e.preventDefault();
    if ($(this).closest('.form__step12').find('.form__kod').val() == '0234') {
      $(this).closest('.form__step12').hide();
      $('.form__step13').show();
  } else {
      $(this).closest('.form__step12').find('.form__inp-wrap-kod').addClass('error');
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
      $(this).closest('.form__step22').find('.form__inp-wrap-kod').addClass('error');
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
    $(this).closest('.form__step31').hide();
    $('.form__step32').show();
  });
  $('#btnStep33').on('click', function (e) {
    e.preventDefault();
      $(this).closest('.form__step32').hide();
      $('.form__step33').show();
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

function refresh1(e) {
  alert('Ваш код 0234!');
  this.classList.remove('show');
  timer.classList.add('show');
  e.preventDefault();
  sec = 30;
  // выставляем минуты
  min = 00;
  sec--;
  if(sec == -01){
    sec = 59;
    min = min - 1;
  } else {
    min = min;
  }
  if(sec <= 9) {
    sec = "0" + sec;
  }
  time = (min <= 9 ? "0" + min : min) + ":" + sec;
  if (document.getElementById) {
    timer.innerHTML = time;
  }
  inter = setTimeout("refresh()", 1000);
  // действие, если таймер 00:00
  if (min == '00' && sec == '00') {
    sec = "00";

    clearInterval(inter);
    var tut = document.getElementById('tut');
    tut.classList.add('show');
    timer.classList.remove('show');
  }
}