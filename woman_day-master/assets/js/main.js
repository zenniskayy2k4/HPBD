$(function () {
  'use strict';

  $(window).on('load', function (event) {
    $('.preloader').fadeOut(1000);
  });

  //===== WOW

  new WOW().init();

  // Show or hide the sticky footer button
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(200);
    } else {
      $('.back-to-top').fadeOut(200);
    }
  });

  //Animate the scroll to yop
  $('.back-to-top').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
});

document.addEventListener('mousemove', function (e) {
  var body = document.querySelector('body');
  var heart = document.createElement('div');
  heart.className = 'love';
  var x = e.offsetX;
  var y = e.offsetY;
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  var size = Math.random() * 100;
  heart.style.width = 5 + size + 'px';
  heart.style.height = 5 + size + 'px';
  body.appendChild(heart);
  setTimeout(function () {
    heart, remove();
  }, 2);

//Slide images
$(document).ready(function(){
    $('.slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 5000
    });
  });
});
