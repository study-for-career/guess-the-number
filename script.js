const input = document.querySelector('#input');
const guess = document.querySelector('#guess');
const suggesion = document.querySelector('#suggesion');
const countHolder = document.querySelector('#count');
const guessHolder = document.querySelector('#guesses')
input.disabled = true;

let randomNumber = 0;
let count = 0;
let allGuesses = [];

function suggest(){
    if(input.disabled){
        alert('Please, Click on "Start Game" button first');
    }
}

function newGame(start){
    input.disabled = false;
    start.innerHTML = 'Play Again';
    randomNumber = Math.floor(Math.random() * 98) + 1;
    count = 0;
    countHolder.innerHTML = 0;
    allGuesses = [];
    guessHolder.innerHTML = '';
    input.value = '';

    suggesion.innerHTML = '';
    suggesion.classList.remove('correct');
}


guess.addEventListener('click', function(){

    if(input.value > 100 || input.value < 1){
        suggesion.innerHTML = 'Number must be between 1-100';
    } else {
        const subtraction = input.value - randomNumber;
    
        if (subtraction == 0) {
          suggesion.innerHTML = "Congrats, It's" + " : " + randomNumber;
            suggesion.classList.add('correct');
          } else if (subtraction <= 5 && subtraction > 0) {
          suggesion.innerHTML = "Very close, but higher";
          } else if (subtraction <= 10 && subtraction > 0) {
          suggesion.innerHTML = "Close, but higher";
          } else if (subtraction <= 20 && subtraction > 0) {
          suggesion.innerHTML = "Slightly higher";
          } else if (subtraction <= 30 && subtraction > 0) {
          suggesion.innerHTML = "Higher";
          } else if (subtraction <= 40 && subtraction > 0) {
          suggesion.innerHTML = "Much higher";
          } else if (subtraction <= 50 && subtraction > 0) {
          suggesion.innerHTML = "Much higher than expected";
          } else if (subtraction <= 70 && subtraction > 0) {
          suggesion.innerHTML = "Much, much higher";
          } else if (subtraction <= 100 && subtraction > 0) {
          suggesion.innerHTML = "Off by a mile. higher";
          }
          
    
    // কমের হিসাব
    
    if (subtraction < 0 && subtraction >= -5) {
      suggesion.innerHTML = "Very close, but lower";
      } else if (subtraction <= -6 && subtraction >= -10) {
      suggesion.innerHTML = "Close, but lower";
      } else if (subtraction <= -11 && subtraction >= -20) {
      suggesion.innerHTML = "Slightly lower";
      } else if (subtraction <= -21 && subtraction >= -30) {
      suggesion.innerHTML = "Lower";
      } else if (subtraction <= -31 && subtraction >= -40) {
      suggesion.innerHTML = "Much lower";
      } else if (subtraction <= -41 && subtraction >= -50) {
      suggesion.innerHTML = "Much lower than expected";
      } else if (subtraction <= -51 && subtraction >= -70) {
      suggesion.innerHTML = "Much, much lower";
      } else if (subtraction <= -71 && subtraction >= -100) {
      suggesion.innerHTML = "Off by a mile. lower";
      }
    
      count++;
    
      countHolder.innerHTML = count;
    
      allGuesses.push(input.value);
      guessHolder.innerHTML = allGuesses;
      input.value = '';
    }
    
     
})