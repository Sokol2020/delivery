var cartButton = document.getElementById("cart-button");
var modal = document.getElementsByClassName("modal");
var closeButton = document.getElementsByClassName("close");

cartButton.addEventListener("click", function (event) {
  modal[0].style.display = "flex";
});
closeButton[0].addEventListener("click", function (event) {
  modal[0].style.display = "none";
});

new WOW().init();