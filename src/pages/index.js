import './index.scss';
import '../components/burger';
// import  '../components/headerScroll';

const navigationLinks = document
  .querySelectorAll('.navigation__link[data-goto]');

navigationLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    const menuLink = evt.target;
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY -
        document.querySelector('.header').offsetHeight;
      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
  });
});




