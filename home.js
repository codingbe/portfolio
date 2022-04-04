const home = document.querySelector(".home");
const navWrap = home.querySelector(".nav__wrap");
const navWrapHeight = navWrap.clientHeight;
const mobileBtn = home.querySelector("i");
const mobileNav = home.querySelector(".nav__menus--mobile");

mobileBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= navWrapHeight) {
    navWrap.style.position = "fixed";
    navWrap.style.boxShadow = "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px";
    navWrap.style.backgroundColor = "#E7E5DC";
    navWrap.style.padding = "0px 10px";
  } else if (window.scrollY <= navWrapHeight - 30) {
    navWrap.style.removeProperty("position");
    navWrap.style.removeProperty("box-shadow");
    navWrap.style.removeProperty("background-color");
    navWrap.style.removeProperty("padding");
  }
});
