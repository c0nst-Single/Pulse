$(document).ready(function () {
  //   $(".carousel__inner").slick({
  //     speed: 300,
  //     prevArrow:
  //       '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg"></button>',
  //     nextArrow:
  //       '<button type="button" class="slick-next"><img src="icons/arrow_right.svg"></button>',
  //     responsive: [
  //       {
  //         breakpoint: 992,
  //         settings: {
  //           dots: true,
  //           arrows: false,
  //         },
  //       },
  //     ],
  //   });
  // });
  const slider = tns({
    container: ".carousel__inner",
    items: 1,
    slideBy: "page",
    autoplay: true,
    controls: false,
    nav: false,
    responsive: {
      769: {
        autoplay: false,
      },
    },
  });
  document.querySelector(".prev").addEventListener("click", function () {
    //стрелка для пролистыванимя
    slider.goTo("prev");
  });
  document.querySelector(".next").addEventListener("click", function () {
    //стрелка для пролистыванимя
    slider.goTo("next");
  });

  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );
  // $('.catalog-item__ling').each(function(i){
  //   $(this).on('click', function(e){
  //     e.preventDefault()
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //   });
  // });
  // $('.catalog-item__back').each(function(i){
  //   $(this).on('click', function(e){
  //     e.preventDefault()
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //   });
  // });
  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
      });
    });
  }
  toggleSlide(".catalog-item__ling");
  toggleSlide(".catalog-item__back");

  //modale
  $("[data-modale=consultation]").on("click", function () {
    $(".overlay , #consultation").fadeIn("fast");
  });
  $(".modale__close").on("click", function () {
    $(".overlay , #consultation, #thanks, #order").fadeOut("slow");
  });
  // $(".button_mini").on("click", function () {
  //   $(".overlay , #order").fadeIn("fast");
  // });

  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modale__descr").text(
        $(".catalog-item__subtitle").eq(i).text()
      );
      $(".overlay , #order").fadeIn("fast");
    });
  });
});
