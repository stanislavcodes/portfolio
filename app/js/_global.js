// Global
app.global = {
  init: function () {
    // Load all global functions here
    console.log("load global functions");
    app.global.loadHeader();
  },
  loadHeader: function () {
    // Some specific function
    console.log("loadHeader()");
  },
};

let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav");
let logo = document.querySelector(".logo__link");

menu.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle('locked');
  logo.classList.toggle("open");
  menu.classList.toggle("open");
  nav.classList.toggle("open");
});

// Run the global stuff
app.global.init();
