"use strict";
// ? Site navigation
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
}
function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

    window.scroll({
      top: gotoBlockValue,
      behavior: "smooth",
    });
    e.preventDefault();
  }
}
/*=======================================================*/
// ? Menu burger
const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("__active");
    menuBody.classList.toggle("__active");

    let widthWindows = document.documentElement.clientWidth;

    let widthForMenuBody = widthWindows - 165;
    let widthForMenuIcon = (991 - widthWindows) / 2;

    let MenuBodyActive = document.querySelectorAll(".__active");

    if (MenuBodyActive.length > 0) {
      MenuBodyActive["0"].style.left = `-${widthForMenuIcon}px`;
      if (widthWindows < 767) {
        MenuBodyActive["0"].style.left = `-110px`;
      }
      MenuBodyActive["1"].style.left = `${widthForMenuBody}px`;
    }
    if (MenuBodyActive.length == 0) {
      iconMenu.style.left = "0px";
      iconMenu.nextElementSibling.style.left = `100%`;
    }
  });
// ? Adding new items to the menu
  for (let index = 0; index < 2; index++) {
    let li = document.createElement("li");
    li.classList = "menu__item";

    let a = document.createElement("a");
    a.href = "#";
    a.classList = "menu__link";
    if (index == 0) {
      a.innerHTML = "Account";
    }
    if (index == 1) {
      a.innerHTML = "Social media";
    }
    li.append(a);

    document.querySelector(".menu__list").append(li);
  }
}
/*=======================================================*/
// ? Screen Width
let width = document.documentElement.clientWidth;
/*=======================================================*/
// ? Replacing text by layout
let storiesText = document.querySelectorAll(".stories__text");
for (let index = 0; index < storiesText.length; index++) {
  if (width <= 390) {
    storiesText[index].innerHTML =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.Lorem ipsum dolor sit a... <a class="stories__link" href="#">Read More</a>';
  }
}
/*=======================================================*/
let imgLogo = document.querySelector(".menu__logo-image");

let arrDestinationsImage = document.querySelectorAll(".destinations__photo");

// ? Hide the arrows and open them in a certain size
let swiperButNext = document.querySelector(".swiper-button-next");
let swiperButPrev = document.querySelector(".swiper-button-prev");
swiperButNext.style.display = "none";
swiperButPrev.style.display = "none";

if (width <= 390) {
	// ? Replacement logo
  imgLogo.src = "./assets/img/logo/logo_2.svg";

  // ? Replacement slider-photo
  arrDestinationsImage[0].src = "./assets/img//photo//slider_1_1.jpg";
  arrDestinationsImage[1].src = "./assets/img//photo//slider_2_2.jpg";
  arrDestinationsImage[2].src = "./assets/img//photo//slider_3_3.jpg";


  swiperButNext.style.display = "";
  swiperButPrev.style.display = "";
}

/*=======================================================*/
// ? Setting up the swiper
new Swiper(".destinations__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  loop: true,
  spaceBetween: 0,
  breakpoints: {
    1440: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 3,
    },
    580: {
      slidesPerView: 3,
    },
    390: {
      slidesPerView: 1,
      loop: false,
    },
  },
});

/*=======================================================*/

