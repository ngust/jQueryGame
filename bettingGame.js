// Betting Game JS
$(document).ready(function(){

    var bank = 100;
    var userAnswer = "yes";
    var wager = 0;
    $(".money").text("You now have $" + bank + " dollars");
    $('#reset').on('click', function() {
        bank = 100;
        $(".money").text("You now have $" + bank + " dollars");
    })


    var compare = function(num, guess, wager) {
      if (guess == num) {
        $(".feedback").text("You're right");
        bank = bank + wager;
        $(".feedback").text("You win $" + wager);
      } else if (Math.abs(guess - num) <= 1) {
        $(".feedback").text("You're close");
        $(".dollars").text("No money lost");
      } else {
        bank = bank - wager;
        console.log("You lose $" + wager);
        $(".dollars").text("You lose $" + wager);
      }

    }
    var game = function() {
        var num = Math.round(Math.random()*10);
        var wager = parseInt($("#bet_ammount").val(),10);
        if (bank - wager < 0) { alert("You can't bet more than you have."); return gameOver(); }

        var guess = parseInt($("#guess").val(),10);
        $(".guess").text("Your guess is " + guess);
        $(".answer").text("The number is " + num);

        compare(num, guess, wager);
    };
    $('#make-bet').on('click', function() {
      // while(userAnswer === "yes" && bank >= 0) {
           game();
          $(".money").text("You now have $" + bank + " dollars");
      // };
    });

    var gameOver = function() {
      console.log("You now have $" + bank + " dollars");
      $(".money").text("You now have $" + bank + " dollars");
      };

      gameOver()
 });