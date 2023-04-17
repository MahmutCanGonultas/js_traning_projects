'use strict';

// //Gizli Sayı Üretimi
// let secretNumber = Math.floor(Math.random() * 20) + 1;
// console.log(secretNumber);
// //Score Değişim
// let score = 20;
// let highScore = 0;

// //Sayı denetimi
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   //When there is no input
//   if (!guess) {
//     document.querySelector('.message').textContent = '✋🛑⛔ No Number ';
//   }
//   //When Player wins
//   else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '🎉Corret Number!';
//     //Background Green
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     //width
//     document.querySelector('.number').style.width = '30rem';
//     //Font Size
//     document.querySelector('.number').style.fontSize = '9rem';
//     //Visible Number
//     document.querySelector('.number').textContent = secretNumber;
//     //highScore
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   }
//   //When guess is too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too High ';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lose the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//   //When guess is too low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too Short';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lose the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// //Again
// document.querySelector('.again').addEventListener('click', function () {
//   //Score Değişim
//   score = 20;
//   //Gizli Sayı Üretimi
//   secretNumber = Math.floor(Math.random() * 20) + 1;
//   console.log(secretNumber);
//   // Restore
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   //CSS
//   document.querySelector('body').style.backgroundColor = '#222';
// });

//Gizli Sayı Üretimi
let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);
//Score Değişim
let score = 20;
let highScore = 0;

//Messages
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Sayı denetimi
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('✋🛑⛔ No Number ');
  }
  //When Player wins
  else if (guess === secretNumber) {
    displayMessage('🎉Corret Number!');
    //Background Green
    document.querySelector('body').style.backgroundColor = '#60b347';
    //width
    document.querySelector('.number').style.width = '30rem';
    //Font Size
    document.querySelector('.number').style.fontSize = '9rem';
    //Visible Number
    document.querySelector('.number').textContent = secretNumber;
    //highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //When guess is too high
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Short');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Again
document.querySelector('.again').addEventListener('click', function () {
  //Score Değişim
  score = 20;
  //Gizli Sayı Üretimi
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber);
  // Restore
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //CSS
  document.querySelector('body').style.backgroundColor = '#222';
});
