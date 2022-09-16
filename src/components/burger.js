const burgerButton = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

const toggleBurger = () => {
  burgerButton.classList.toggle('header__burger_active');
  menu.classList.toggle('menu_active');
};

burgerButton.addEventListener('click', () => {
  toggleBurger();
});

menu.addEventListener('click', evt => {
  if (evt.target.classList.contains('navigation__link')) {
    toggleBurger();
  }
});
