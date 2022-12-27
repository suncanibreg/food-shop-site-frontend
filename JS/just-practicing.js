const hamMen = document.getElementById("ham-men");
const close = document.getElementById("close");
const navbarLnks = document.getElementById("navbar-lnks");

if (hamMen) {
  hamMen.addEventListener("click", () => {
    navbarLnks.classList.add("active")
  })
}

if (close) {
  close.addEventListener("click", () => {
    navbarLnks.classList.remove("close");
  })
}