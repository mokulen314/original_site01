'use strict';

$(function() {
  const offsetY = -73;
  const time = 400;

  let flag = 1;

  $('a[href^=#]').click(function() {
    if (flag == 1) {
      flag = 0;
      const target = $(this.hash);
      if (!target.length) return ;
      const targetY = target.offset().top+offsetY;
      $('html,body').animate({scrollTop: targetY}, time, 'swing');
      window.history.pushState(null, null, this.hash);
      setTimeout(() => {
        flag = 1;
      }, 400);
      return false;
    }
  });

  
});


jQuery(function($) {
  $('header').bgSwitcher({
      images: ['img/header-img01.jpg','img/header-img02.jpg','img/header-img03.jpg'],
      interval: 3000,
  });
});


{
  const hamburger = document.getElementById('hamburger');
  const btn = document.getElementById('nav-btn');

  hamburger.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
}