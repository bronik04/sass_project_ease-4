import './index.scss';

const burgerButton = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");

burgerButton.addEventListener("click", () => {
  console.log('Click');
  menu.classList.toggle('menu_active');
});
