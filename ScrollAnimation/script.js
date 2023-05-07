'use strict';
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', scrollAnimation);

scrollAnimation();

function scrollAnimation() {
  console.log(window.innerHeight);
  const scrollEquation = (window.innerHeight * 4) / 5;
  console.log(scrollEquation);

  boxes.forEach(box => {
    if (box.getBoundingClientRect().top < scrollEquation) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
