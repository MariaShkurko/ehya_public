$(document).ready(function () {

  var testimonialSwiper = new Swiper('.testimonial-slider', {
    loop: true,
    
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoHeight: true,

    keyboard: true,

    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },

    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
  
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
  });

  var storiesSwiper = new Swiper('.stories-slider', {
    slidesPerView: 2,
    spaceBetween: 18,
    loop: false,
  
    navigation: {
      nextEl: '.stories-slider-button--next',
      prevEl: '.stories-slider-button--prev',
      disabledClass: '.stories-slider-button--disabled'
    }
  });

  const storiesPrev = $('.stories-slider-button--prev')
  const storiesNext = $('.stories-slider-button--next')

  storiesPrev.on('click', function () {
    storiesSwiper.slidePrev();
  });

  storiesNext.on('click', function () {
    storiesSwiper.slideNext();
  });

  if ($(window).width() < 501) {
    storiesSwiper.changeDirection('vertical');
  } else {
    storiesSwiper.changeDirection('horizontal');
  };

  $(".stories-slider-button--next").on("click", function () {
    if (storiesSwiper.activeIndex > 0) {
      $(".stories-slider-button--prev").removeClass("stories-slider-button--prev--disabled");
      if (storiesSwiper.activeIndex == 4) {
        $(".stories-slider-button--next").addClass("stories-slider-button--next--disabled");
      };
    };
  });

  $(".stories-slider-button--prev").on("click", function () {
    if (storiesSwiper.activeIndex < 4) {
      $(".stories-slider-button--next").removeClass("stories-slider-button--next--disabled");
      if (storiesSwiper.activeIndex == 0) {
        $(".stories-slider-button--prev").addClass("stories-slider-button--prev--disabled");
      };
    };
  });

  $(window).resize(function() {
    if ($(window).width() < 501) {
      storiesSwiper.changeDirection('vertical');
    } else {
      storiesSwiper.changeDirection('horizontal');
    }
  });

  $(".menu-button").on("click", function (event) {
    event.preventDefault(); 
    $(".navbar").addClass("navbar--visible")
  });

  $(".navbar__close").on("click", function (event) {
    event.preventDefault();
    $(".navbar").removeClass("navbar--visible")
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  var modalOverlay = $(".modal__overlay");

  function openModal(e) {
    e.preventDefault();
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  };

  function closeModal(e) {
    e.preventDefault();
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  };

  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  modalOverlay.on("click", closeModal);
  
  $(document).on("keydown", function (e) {
    27 == e.keyCode && closeModal(e)
  });

  $('.password-checkbox').on('click', function(){
    if ($(this).is(':checked')){
      $('#password-input').attr('type', 'text');
    } else {
      $('#password-input').attr('type', 'password');
    }
  }); 

  var tabsItem = $('.trending-tabs__item');
  var contentItem = $('.trending-content__item');

  tabsItem.on('click', function(event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass('trending-tabs__item--active');
    contentItem.removeClass('trending-content__item--active');
    $(this).addClass('trending-tabs__item--active');
    $('#' + activeContent).addClass('trending-content__item--active');
  });

  $('input[type="text"]').val('');
  $('input[type="password"]').val('');

  $(".subscribe").validate({
    rules: {
      email: {
        required: !0,
        email: !0
      }
    },
    messages: {
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      }
    },
    errorClass: "invalid"
  });

  $(".modal__form").validate({
    rules: {
      email: {
        required: !0,
        email: !0
      },
      name: {
        required: !0
      },
      password: {
        required: !0
      }
    },
    messages: {
      email: {
        required: "Нам нужен ваш email!",
        email: "Ваш email должен быть в формате name@domain.com"
      },
      name: {
        required: "Введите логин",
      },
      password: {
        required: "Введите пароль",
      }
    },
    errorClass: "invalid"
  });
});