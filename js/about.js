// About Video

const video = document.getElementById("aboutVideo");
const about = document.getElementById("about");

const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         video.currentTime = 0;
         video.play();
      } else {
         video.pause();
      }
   });
}, {
   threshold: 0.5
});

observer.observe(about);


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
      delay: 8000,
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
