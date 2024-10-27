var swiper2 = new Swiper(".reviews__swiper-wrapper", {
  loop: true,
  spaceBetween: 25,
  navigation: {
    prevEl: ".reviews-btn__prev",
    nextEl: ".reviews-btn__next",
  },
  grabCursor: true,

  //Кол-во слайдов для показа
  // slidesPerView: 3,
  //Кол-во слайдов для пролистывания
  slidesPerGroup: 1,
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1.5,
    },
    680: {
      slidesPerView: 2,
    },
    780: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".rooms__images", {
  slidesPerView: 1.5,
  // loop: true,
  spaceBetween: 20,
  grabCursor: true,
  // По идее, убирает накладывание изображений друг на друга
  // updateOnWindowResize: true,
  // effect: "creative",
  //Переход к слайду по клику
  slideToClickedSlide: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 130,
    },
    780: {
      slidesPerView: 2,
      spaceBetween: 420,
    },
    1010: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  },
});

// document
//   .querySelector(".header__burger")
//   .addEventListener("click", function () {
//     this.classList.toggle("active");
//     document.querySelector(".header__nav").classList.toggle("open");
//   });

const headerBurger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");

headerBurger.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  headerNav.classList.toggle("open");
});
