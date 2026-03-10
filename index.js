const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

const form = document.querySelector("form");
const lastresult = document.querySelector("#lastresult");
const lowOrHi = document.querySelector(".lowOrHi");
const previousguess = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const myArr = [];
let cnt = 6;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const guessedNumber = parseInt(document.querySelector("#guessField").value);
  if (cnt <= 0) {
    lowOrHi.innerHTML = `Game Over : The Random number is ${randomNumber}`;
    return;
  }

  cnt--;
  lastResult.innerHTML = `${cnt}  `;

  myArr.push(guessedNumber);
  previousguess.innerHTML = `${myArr} `;

  if (guessedNumber == randomNumber) {
    lowOrHi.innerHTML = `<span> You have guessed the right number </span>`;
    document.querySelector("#guessField").disabled = true;
    document.querySelector("#subt").disabled = true;
    document.querySelector("#guessField").value = ""
    return;
  } else if (guessedNumber < randomNumber) {
    lowOrHi.innerHTML = `<span>Your number is lower than Random Number </span>`;
    document.querySelector("#guessField").value = ""
  } else {
    lowOrHi.innerHTML = `<span>Your number is higher than Random Number</span>`;
    document.querySelector("#guessField").value = ""
  }
});
