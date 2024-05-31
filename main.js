document.addEventListener("DOMContentLoaded", function () {
  var menuBar = document.querySelector("#menu-bar");
  var navLink = document.querySelector(".nav-link");
  navLink.style.top = "-450px";

  menuBar.onclick = function () {
    if (navLink.style.top === "-450px") {
      navLink.style.top = "50px";
    } else {
      navLink.style.top = "-450px";
    }
  };
});
