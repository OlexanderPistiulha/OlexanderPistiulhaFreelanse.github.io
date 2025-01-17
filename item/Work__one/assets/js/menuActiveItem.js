

$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
          $(this).removeClass('menu__link-active');
      })
      $(this).addClass('menu__link-active');

      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top + 2
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#menu a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() >
          scrollPos) {
          $('#menu li a').removeClass("menu__link-active");
          currLink.addClass("menu__link-active");
      } else {
          currLink.removeClass("menu__link-active");
      }
  });
}
