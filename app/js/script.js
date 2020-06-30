console.log("Load script.js");

let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav");
let logo = document.querySelector(".logo__link");

menu.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle("locked");
  logo.classList.toggle("open");
  menu.classList.toggle("open");
  nav.classList.toggle("open");
});

// Instantiating the global app object
// var app = {};
