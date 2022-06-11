

const studioSwiper = new Swiper(".studio-swiper", {
	// configure Swiper to use module

  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
const priceSwiper = new Swiper(".price-swiper", {

	// configure Swiper to use module

  // Optional parameters
  direction: "horizontal",
  loop: true,
	spaceBetween:20,
	slidesPerView: 1.1,

  // If we need pagination
  pagination: {
    el: ".price-swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".price-swiper-button-next",
    prevEl: ".price-swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
