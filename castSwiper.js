var swiper4 = new Swiper(".castSwiper", {
  slidesPerView: 3,
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
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 4,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 32,
      slidesPerGroup: 6,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: "#swiper-button-next-4",
    prevEl: "#swiper-button-prev-4",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
