'use strict';
const progress = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let current = 1;

nextBtn.addEventListener('click', function () {
  current++;
  if (current > circles.length) {
    current = circles.length;
  }
  console.log(current);
  update();
});

prevBtn.addEventListener('click', function () {
  current--;
  if (current < 1) {
    current = 1;
  }
  console.log(current);
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < current) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.circle.active');
  //   console.log(actives.length, ' ', circles.length);
  //   console.log((1 / 3) * 100);
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (current === 1) {
    prevBtn.disabled = true;
  } else if (current === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
