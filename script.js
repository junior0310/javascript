'use strict';

//ローディングアニメーション
{
  const loading = document.getElementById('loading');

  window.addEventListener('load', () => {
    loading.classList.add('loaded');
  });
}

//ふわっと表示するやーつ
{
  const appears = document.querySelectorAll('.appear-contents');

  window.addEventListener('load', () => {
    appears.forEach(appear => {
      let h = window.innerHeight; //ページ上端から画面下端までの距離
      let d = appear.getBoundingClientRect().top; //画面上端から要素上端までの距離
      if (h > d + 50) {
        appear.classList.add('appeared-contents');
      }
    });
  });

  window.addEventListener('scroll', () => {
    appears.forEach(appear => {
      let h = window.innerHeight;
      let d = appear.getBoundingClientRect().top;
      if (h > d + 50) {
        appear.classList.add('appeared-contents');
      }
    });
  });
}

//ページトップボタン
{
  const btn = document.getElementById('page-top-btn');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      btn.style.cssText = 'display:flex;';
    } else {
      btn.style.cssText = 'display:none;';
    }
  });
} {
  var $btn = $('#page-top-btn');

  $btn.on('click', () => {
    $('html, body').animate({
      'scrollTop': 0
    }, 500);
  });
}

//ページ内リンク
{
  var $btn = $('.title-link');
  var id = $btn.attr('href');
  var position = $(id).offset().top - 100;

  $btn.on('click', function() {
    $('html, body').animate({
      'scrollTop': position
    }, 500);
  });
}

//メニューバー(transform.ver)
{
  const btn = document.getElementById('menu-bar');
  const content = document.querySelector('.mobile-menu-wrapper');
  const close = document.querySelector('.close-boad');
  const toggle = () => {
    content.classList.toggle('menu-hide');
    close.classList.toggle('close-none');
  };

  btn.addEventListener('click', () => {
    toggle();
  });

  close.addEventListener('click', () => {
    toggle();
  });
}

//アコーディオン
{
  var $btn = $('.mobile-menu-title');
  var $contents = $('.mobile-menu-contents');

  $btn.on('click', function() {
    var index = $btn.index($(this));
    var $content = $contents.eq(index);

    if ($content.hasClass('mobile-menu-hide')) {
      $content.slideDown(300);
      $content.removeClass('mobile-menu-hide');
    } else {
      $content.slideUp(300);
      $content.addClass('mobile-menu-hide');
    }
  });
}

//スライダー
{
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
      speed: 300,
    },
  });
}

//タブメニュー
{
  const btns = document.querySelectorAll('.tab-menu');
  const sentences = document.querySelectorAll('.tab-sentence');

  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      btns.forEach((btn, index) => {
        btn.classList.remove('open-tab-menu');
        sentences[index].classList.remove('open-tab-sentence');
      });
      btn.classList.add('open-tab-menu');
      sentences[index].classList.add('open-tab-sentence');
    });
  });
}

//more read
{
  const btn = document.getElementById('more-read-btn');
  const content = document.querySelector('.more-read-sentence');

  btn.addEventListener('click', e => {
    e.preventDefault();
    btn.style.cssText = 'display:none;';
    content.style.cssText = 'height:auto;overflow:visible;';
  });
}
