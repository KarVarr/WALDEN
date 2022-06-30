const burgerMenu = document.querySelector('.nav--menu');
const burgerlink = document.querySelectorAll('.nav--link');
const circle = document.querySelector('.circle');
const sound = document.querySelector('#sound');
const btn = document.querySelectorAll('.btn');

circle.addEventListener('click', e => {
  e.preventDefault();
  burgerMenu.classList.toggle('active');
});

burgerlink.forEach(n =>
  n.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
  })
);



    