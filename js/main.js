const burgerMenu = document.querySelector('.nav--menu');
const burgerlink = document.querySelectorAll('.nav--link');
const circle = document.querySelector('.circle');
const sound = document.querySelector('#sound');
const btn = document.querySelectorAll('.btn');

circle.addEventListener('touchstart', e => {
  e.preventDefault();
  burgerMenu.classList.toggle('active');
  return false;
});

burgerlink.forEach(n =>
  n.addEventListener('touchstart', () => {
    burgerMenu.classList.remove('active');
    return false;
  })
);
