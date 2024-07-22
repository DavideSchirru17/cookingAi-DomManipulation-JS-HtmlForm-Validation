// i want to at the botton click appear the section form paypal

const paypal = document.querySelector(".paypal");

const button = document.querySelector(".buttonTicket");

button.addEventListener("click", function (e) {
  paypal.style.display = "flex";
  window.scrollTo({
    top: paypal.offsetTop,
    behavior: "smooth",
  });
});
