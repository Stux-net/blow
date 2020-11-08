let nav = document.querySelector(".nav");

nav.addEventListener("click", function (event) {
  let target = event.target;
  if (target.tagName == "A") {
    document.querySelector(".active").classList.remove("active");
    target.classList.add("active");
  }
});