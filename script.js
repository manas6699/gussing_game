"use strict";

// // we have manipulated the text content of message class
// // this is called dom manipulation.

// console.log( document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!!';

// console.log( document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 0;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 10;

let randNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

// // click events
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Invalid Number! 🚫";
    // when player wins!
  } else if (guess <= 20) {
    if (guess === randNumber) {
      document.querySelector(".message").textContent =
        "🥳 Congratulations! Buddy";
      document.querySelector("body").style.backgroundColor = "#60B347";

      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }

      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = randNumber;
    } else if (guess > randNumber) {
      if (score > 0) {
        document.querySelector(".message").textContent = "Try Smaller!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "You loose!";
      }
    } else if (guess < randNumber) {
      if (score > 0) {
        document.querySelector(".message").textContent = "Try Bigger!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "You loose!";
        document.querySelector("body").style.backgroundColor = "#FF0000";
      }
    }
  } else if (guess > 20) {
    document.querySelector(".message").textContent = "It is greater than 20!";
    score--;
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#000000";
  document.querySelector(".number").style.width = "15rem";
});
