'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let numberToGuess = Math.trunc(Math.random() * 20) + 1;
//console.log(numberToGuess);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let score = Number(document.querySelector('.score').textContent);
  let highscore = Number(document.querySelector('.highscore').textContent);
  if (!guess) {
    displayMessage('No number!');
  } else {
    if (score <= 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage('You lost the game');
      document.querySelector('.check').disabled = true;
    } else {
      if (guess < 0 || guess > 20) {
        displayMessage('Guess a number only between 1 and 20!');
      } else {
        if (guess > numberToGuess) {
          displayMessage('Awww... Too high!');
          score--;
          document.querySelector('.score').textContent = score;
        } else if (guess < numberToGuess) {
          displayMessage('Awww... Too low!');
          score--;
          document.querySelector('.score').textContent = score;
        } else {
          displayMessage('You got it!');
          document.querySelector('body').style.backgroundColor = '#60b347';
          highscore = highscore > score ? highscore : score;
          document.querySelector('.highscore').textContent = highscore;
          document.querySelector('.number').textContent = numberToGuess;
          document.querySelector('.check').disabled = true;
        }
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  numberToGuess = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.check').disabled = false;
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  //console.log(numberToGuess);
});
