const myNav = document.getElementById("nav");
const sections = document.querySelectorAll(".section");
const navLi = document.querySelectorAll(
  "ul.nav__list li.nav__item a.nav__link"
);

window.onscroll = function () {
  "use strict";
  let current = "";
  if (
    document.body.scrollTop >= 600 ||
    document.documentElement.scrollTop >= 600
  ) {
    myNav.classList.add("nav-scroll");
  } else {
    myNav.classList.remove("nav-scroll");
  }
  sections.forEach((section) => {
    const st = section.offsetTop;
    const sh = section.clientHeight;
    if (pageYOffset >= st - sh / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
