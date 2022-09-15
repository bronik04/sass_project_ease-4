import './index.scss';
import '../components/burger';
// import  '../components/headerScroll';

const anchors = document.querySelectorAll('a[href*="#"]');

// todo валидация формы

for (let anchor of anchors) {
  anchor.addEventListener('click', (evt) => {
    evt.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



