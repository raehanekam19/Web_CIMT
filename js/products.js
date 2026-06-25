// Products

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".products-container .card-products");
const noResult = document.getElementById("noResult");

searchInput.addEventListener("input", () => {

   const value = searchInput.value.toLowerCase().trim();
   let found = false;

   cards.forEach(card => {

      const name = card.dataset.name.toLowerCase();
      const keywords = (card.dataset.keywords || "").toLowerCase();

      const match =
         name.includes(value) ||
         keywords.includes(value);

      card.style.display = match ? "" : "none";

      if (match) {
         found = true;
      }
   });

   noResult.style.display = found ? "none" : "block";
});

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const buttons = document.querySelectorAll(".card-products .detail-btn");

buttons.forEach(button => {
   button.addEventListener("click", () => {
      modal.classList.add("active");

      modalTitle.textContent =
      button.dataset.title;

      modalImage.src =
      button.dataset.image;

      modalDescription.textContent =
      button.dataset.description;
   });
});

document
.querySelector(".close-btn")
.addEventListener("click", () => {
   modal.classList.remove("active");
});

modal.addEventListener("click", e => {
   if(e.target === modal){
      modal.classList.remove("active");
   }
});
