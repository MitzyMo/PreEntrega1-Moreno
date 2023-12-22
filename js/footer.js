let year = document.querySelector("#year");
document.addEventListener("DOMContentLoaded", function () {
  year.innerText = new Date().getFullYear();
});