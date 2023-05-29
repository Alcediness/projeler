const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});
