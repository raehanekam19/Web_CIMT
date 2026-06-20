// About Team

const swiper = new Swiper(".mySwiper", {
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   loop: true,

   slidesPerView: "auto",
   spaceBetween: 5,

   coverflowEffect: {
   rotate: 5,
   stretch: -40,
   depth: 80,
   modifier: 1,
   slideShadows: false,
   scale: 0.9
   },

   autoplay: {
      delay: 10000,
      disableOnInteraction: false,
   },

   pagination: {
      el: ".swiper-pagination",
      clickable: true
   },

   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
   },

   // Responsive
   breakpoints: {
      0: {
         slidesPerView: 1
      },
      768: {
         slidesPerView: 2
      },
      1024: {
         slidesPerView: 3
      }
   }
});
