const menuBtn = document.querySelector('.menu-button');
const closeMenu = document.querySelector('.close-menu');
const menu = document.querySelector('.navbar__panel');
menuBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
})

closeMenu.addEventListener('click', () => {
  menu.classList.remove('is-open');
})