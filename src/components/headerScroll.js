// Убираем хедер при скроле

let lastScroll = 0;
const header = document.querySelector('.header');

const scrollPosition = () => window.scrollY;
const containHide = () => header.classList.contains('header_hide');

window.addEventListener('scroll', () => {
  console.log('scroll');
  if (scrollPosition() > lastScroll && !containHide()) {
    header.classList.add('header_hide');
  } else if (scrollPosition() < lastScroll) {
    header.classList.remove('header_hide');
  }
  lastScroll = scrollPosition();
});
