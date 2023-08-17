var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides: false,
  //   slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 28,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 28,
      slidesPerGroup: 3,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 28,
      slidesPerGroup: 4,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: "#swiper-button-next-1",
    prevEl: "#swiper-button-prev-1",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
