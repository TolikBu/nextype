const swiper = new Swiper('.swiper', {
  // Optional parameters
  spaceBetween: 16,
  slidesPerView: 'auto',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.cards__right',
    prevEl: '.cards__left',
  },
});
