(function () {
   emailjs.init("ELTHhU_-43snUftTH");
})();

const form = document.getElementById("contactForm");
const button = document.querySelector(".btn-send");
const loader = document.querySelector(".loader");
const btnText = document.querySelector(".btn-text");

const toast = document.getElementById("toastSuccess");

form.addEventListener("submit", function(e){

   e.preventDefault();

   loader.style.display = "block";
   btnText.style.opacity = "0";

   button.disabled = true;

   emailjs.sendForm(
      "service_popawre",
      "template_n2ejuv3",
      this
   )

   .then(() => {

      loader.style.display = "none";
      btnText.style.opacity = "1";

      button.disabled = false;

      form.reset();

      // Show Toast
      toast.classList.add("show");

      setTimeout(() => {
         toast.classList.remove("show");
      }, 3000);

   })

   .catch((error) => {

      loader.style.display = "none";
      btnText.style.opacity = "1";

      button.disabled = false;

      console.log(error);

      alert("Gagal mengirim pesan!");

   });

});
