// Scroll Up

const scrollTopBtn = document.getElementById("scrollTopBtn");

// Tampilkan tombol saat scroll
window.addEventListener("scroll", () => {
   if(window.scrollY > 300){
      scrollTopBtn.classList.add("show");
   }else{
      scrollTopBtn.classList.remove("show");
   }
});

// Scroll halus ke atas
scrollTopBtn.addEventListener("click", () => {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   });
});
