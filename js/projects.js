//Projects

const images = document.querySelectorAll(".photo-card img");
const zoom = document.getElementById("zoom");
const zoomImg = document.getElementById("zoom-img");
const closeBtn = document.getElementById("close");

   images.forEach((img) => {
      img.addEventListener("click", () => {
         zoom.style.display = "flex";
         zoomImg.src = img.src;
      });
   });

   closeBtn.addEventListener("click", () => {
      zoom.style.display = "none";
   });

   zoom.addEventListener("click", (e) => {
   if(e.target !== zoomImg){
      zoom.style.display = "none";
   }
});
