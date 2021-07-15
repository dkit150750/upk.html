const links = document.querySelectorAll('.nav__link');
const locationPath = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
links.forEach((link) => {
  if (link.href === locationPath) {
    link.outerHTML = `<span class="nav__link nav__link--active">${link.innerHTML}</span>`;
  }
});

const page = document.querySelector('.page');
const openNavBtn = document.querySelector('.main__header-btn');
openNavBtn.addEventListener('click', () => {
  page.classList.add('show-menu');
});

const closeNavBtn = document.querySelector('.aside__header-btn');
closeNavBtn.addEventListener('click', () => {
  page.classList.remove('show-menu');
});
