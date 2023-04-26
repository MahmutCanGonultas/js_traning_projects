const images = document.getElementById("images");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const imagesSize = document.querySelectorAll("#images img");
console.log(imagesSize);

let idx = 0;

let interval = setInterval(move, 3000);

function move() {
  idx++;

  changeImage();
}

function changeImage() {
  console.log(idx);
  if (idx > imagesSize.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = imagesSize.length - 1;
  }

  images.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(move, 3000);
}

nextBtn.addEventListener("click", function () {
  idx++;
  changeImage();
  resetInterval();
});

prevBtn.addEventListener("click", function () {
  idx--;
  changeImage();
  resetInterval();
});
