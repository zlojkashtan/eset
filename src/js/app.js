const $header = $('#header');
const $cardsBlock = $('#cards-block');
const $burger = $('#burger-btn');
const $close = $('#close-btn');
const $menu = $('#menu');
const $popRenew = $('#pop-renew');
const $popBuy = $('#pop-buy');

// func FLOAT BUTTON
function floatBtn() {
  $(window).on('scroll', function() {
    const $button = $('#bbutton');
    const $floatButton = $('#float-button');
    const winh = $(this).height();

    const sctop = $(this).scrollTop();
    const headerHeight = $header.outerHeight(true);

    const buttonOff = $button.offset().top;
    const buttonHeight = $button.outerHeight(true);

    const cardsBlockOff = $cardsBlock.offset().top;
    const cardsBlockHeight = $cardsBlock.outerHeight(true);

    const topOffset = sctop + headerHeight;
    const iteration1 = buttonOff + buttonHeight;
    const iteration2 = cardsBlockOff - winh;
    const iteration3 = cardsBlockOff + cardsBlockHeight - headerHeight;

    if (topOffset < iteration1 || (sctop > iteration2 && sctop < iteration3)) {
      $floatButton.hide();
    } else {
      $floatButton.show();
    }
  });
}

// func HIDE SHOW MENU
function hideMenu() {
  $menu.hide();
  $burger.show();
  $close.hide();
}
// func SHOW MOB MENU
function showMenu() {
  $menu.show();
  $burger.hide();
  $close.show();
}

$(document).ready(function() {
  console.log('done');

  // FLOAT BUTTON
  if ($(this).width() < 767) {
    floatBtn();
  }

  // MOBILE MENU
  $burger.on('click', function() {
    showMenu();
  });
  $close.on('click', function() {
    hideMenu();
  });

  // SCROLL TO CARDS BLOCK
  $('.scroll2cards').on('click', function(e) {
    hideMenu();
    window.scrollTo({
      top: $cardsBlock.offset().top - $header.outerHeight(true) - 20,
      behavior: 'smooth',
    });
    e.preventDefault();
  });

  // Заказать
  $('.btn-order').on('click', function(e) {
    $popBuy.show();
    e.preventDefault();
  });

  // Оновить подписку
  $('.btn-renew').on('click', function(e) {
    $popRenew.show();
    e.preventDefault();
  });

  // Закрыть pop-up
  $('.b-popup-close').on('click', function() {
    $('.b-popup').hide();
  });

  // ACCORDEON
  $('.acc__title:first').addClass('is-active');
  $('.acc__content:first').show();
  $('.acc__title').on('click', function() {
    $('.acc__content').hide();
    $('.acc__title.is-active').removeClass('is-active');
    $(this).addClass('is-active').next('.acc__content').show();
  });

  // TABS
  // $('.tabs__content:first').show();
  // $('.tabs__title > div:first').addClass('active');
  // $('.tabs__title > div').on('click', function() {
  //   const activeTab = $(this).attr('rel');
  //   $('.tabs__content').hide();
  //   $(`#${activeTab}`).show();
  //   $('.tabs__title > div').removeClass('active');
  //   $(this).addClass('active');
  // });
});

$(window).on('scroll', function() {
  // PAINT HEADER
  const sctop = $(this).scrollTop();
  if (sctop > 0) {
    $header.addClass('painted');
  } else {
    $header.removeClass('painted');
  }
});

// const priorPos = $(document).scrollTop();
// const direction = '';
// $(window).on('scroll', function() {
// const scrollPos = $(document).scrollTop();
// if (priorPos <= scrollPos) {
//   direction = 'down';
// } else {
//   direction = 'up';
// }
// priorPos = scrollPos;
// console.log(direction, scrollPos);
// });
