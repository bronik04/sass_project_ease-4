const burgerButton = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const logo = document.querySelector('.logo');

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle('header__burger_active');
  menu.classList.toggle('menu_active');
  // logo.classList.toggle('logo_hidden');
});
