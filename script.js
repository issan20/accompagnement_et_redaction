document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var hamburgerBtn = document.querySelector(".hamburger-btn");
  var mainNav = document.querySelector(".main-nav");

  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener("click", function () {
      hamburgerBtn.classList.toggle("active");
      mainNav.classList.toggle("active");
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburgerBtn.classList.remove("active");
        mainNav.classList.remove("active");
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        hamburgerBtn.classList.remove("active");
        mainNav.classList.remove("active");
      }
    });
  }

  if (header) {
    var lastScrollY = window.scrollY;
    window.addEventListener("scroll", function () {
      var currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }

      lastScrollY = currentScrollY;
    });
  }
});
