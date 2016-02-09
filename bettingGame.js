// Betting Game JS
var bank = 100;
var userAnswer = "yes";
var wager = 0;


var compare = function(num, guess, wager) {
  if (guess == num) {
    console.log("You're right");
    bank = bank + wager;
    console.log("You win $" + wager);
  } else if (Math.abs(guess - num) <= 1) {
    console.log("You're close");
    console.log("No money lost");
  } else {
    console.log("Way off!");
    bank = bank - wager;
    console.log("You lose $" + wager);
  }

}

var game = function() {
    var num = Math.round(Math.random()*10);
    var wager = prompt("How much do you want to wager?");
    if (bank - wager < 0) { alert("You can't bet more than you have."); return gameOver(); }
    var guess = prompt("Guess a number between 1 and 10");

    console.log("The number is " + num);

    compare(num, guess, wager);
};

while(userAnswer === "yes" && bank >= 0) {
    game();
    userAnswer = prompt("Want to bet again?");
};

var gameOver = function() {
  console.log("You now have $" + bank + " dollars");
  };