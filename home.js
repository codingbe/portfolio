const home = document.querySelector(".home");
const navWrap = home.querySelector(".nav__wrap");
const mobileNav = home.querySelector(".nav__menus--mobile");
const navWrapHeight = navWrap.clientHeight;

const handleScroll = () => {
  if (window.scrollY >= navWrapHeight) {
    navWrap.style.boxShadow = "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px";
    navWrap.style.backgroundColor = "#E7E5DC";
  } else if (window.scrollY <= navWrapHeight - 30) {
    navWrap.style.removeProperty("box-shadow");
    navWrap.style.removeProperty("background-color");
  }
};

home.addEventListener("click", (e) => {
  const className = e.target.className;
  if (className.indexOf("mobile--toggle") !== -1) {
    mobileNav.classList.toggle("hidden");
    return;
  } else if (className === "nav__menu" || className === "home__contact" || className === "nav__logo") {
    let target;
    if (className === "nav__menu") {
      target = document.querySelector(`.${e.target.innerText.toLowerCase()}`);
    } else if (className === "home__contact") {
      target = document.querySelector(`.${e.target.innerText.split(" ")[0].toLowerCase()}`);
    } else if (className === "nav__logo") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const top = target.offsetTop - navWrapHeight;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
});

window.addEventListener("scroll", handleScroll);

handleScroll();
