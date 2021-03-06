
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

var random = Math.floor((Math.random() * 100) + 1);

$("#guessButton").click(function(){
      userGuess();
      appendGuess();
  });

 // Creates new game
  function newGame(){
    console.log("new game!");
    $("#guessList li").remove();
    $("#feedback").text("Make your Guess!");
    $("#userGuess").val("");
    $("#count").text(i = 0);
    random = Math.floor((Math.random() * 100) + 1);
  }
  $(".new").click(function(){
    newGame();
  })

// Compares user input with random generated number
  function userGuess(){
    var input = parseInt($("#userGuess").val());
    var feedback = ["Congrats you won! Click New Game to start another game", "Please enter a number", "Pick a number btw 1-100", "Very Hot", "Hot", "Warm", "Cold", "Very Cold", "Cold as Vanilla Ice's career"]
    if (input == random) {
      updateFeedback(feedback[0]);
    } else if (input >= 101 || input == 0) {
      $("#userGuess").val("");
      $("#count").text(--i);
      updateFeedback(feedback[2]);
    } else if (random - 5 <= input && input <= random + 5) {
      updateFeedback(feedback[3]);
    } else if (random - 10 <= input && input <= random + 10) {
      updateFeedback(feedback[4]);   
    } else if (random - 15 <= input && input <= random + 15) {
      updateFeedback(feedback[5]);
    } else if (random - 25 <= input && input <= random + 25) {
      updateFeedback(feedback[6]);
    } else if (random - 30 <= input && input <= random + 30) {
      updateFeedback(feedback[7]);
    } else if (isNaN(input)) {
      updateFeedback(feedback[1]);
      $("#userGuess").val("");
      $("#count").text(--i);
    } else {
      updateFeedback(feedback[8]);
    }
  }

  function updateFeedback(feedback){
    $("#feedback").text(feedback);
  }

   var i = 0;
  function guessCounter(){
    $("#count").text(++i);
  }
  function appendGuess(){
    guessCounter();
    var input = parseInt($("#userGuess").val());
    if (isNaN(input) === false) {
      $("#guessList").append("<li> "+input+" </li>");
      $("#userGuess").val("");
    }
  };