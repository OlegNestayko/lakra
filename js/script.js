// Slick slider

$('.header-slider').slick();

// Spoiler

$(document).ready(function () {
  $('.item-units__spoiler').click(function (event) {
    if ($('.units__list').hasClass('one')) {
      $('.item-units__spoiler').not($(this)).removeClass('active');
      $('.item-units__desc').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});

// Scroll Up

const onTop = document.querySelector('.feedback__pic');
onTop.onclick = () => {
  window.scrollTo(0, 0);
};
