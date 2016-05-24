//initialize variables
'use strict';
var secretNumber, 
userGuess, 
pastGuesses = [], 
count,
guessHtml, 
userFeedback,
alreadyGuessed,
newButton,
form ,
input,
feedback,
countElement,
guessList;

$(document).ready(pageLoad);

 function pageLoad(){
	
	/*--- Display information modal box ---*/
  	$('.what').click(function(){
    	$('.overlay').fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$('a.close').click(function(){
  		$('.overlay').fadeOut(1000);
  	});

  	//fetch dom objects
  	newButton = $('a.new');
  	form = $('form');
  	input = form.find('#userGuess');
  	feedback = $('#feedback');
  	countElement = $('#count');
  	guessList = $('#guessList');

    //page load
    newGame();
    //event handlers
    form.submit(function(event){
      event.preventDefault();
      getUserGuess();
    });
    newButton.click(newGame);
}

//new game function
function newGame(){
	form.find('input[type=submit]').css('opacity','1');
	resetVariables();
	render();
	generateNumber();
}

//get the user guess
function getUserGuess(){
	//get the user guess
	userGuess = input.val();
	//reset input value
	input.val('');
	//focus on input for next guess
	input.focus();
	//ensure valid input
	if(checkGuess()){return ;}
	//generate feedback
	generateFeedback();
	//track the past user guesses
	trackGuess();
	//increment the count
	guessCount();
	//render changes to the page
	render();
}

  	//check for valid input
  	function checkGuess(){
  		if(userGuess % 1 !== 0){
  			alert('please input a number');
  			return true;
  		}
  		if(userGuess < 0 || userGuess > 101){
  			alert('please choose a number between zero and 100');
  			return true;
  		}
  		if(pastGuesses.length > 0){
			$.each(pastGuesses,function(guess,value){
				if(userGuess == value){
					alreadyGuessed = true;
				}
			}); 
		}
		if(alreadyGuessed){
			alreadyGuessed = false;
			alert('You guessed this number already');
			return true;
		}
    return false;
	}

//generate user feedback
function generateFeedback(){
	if(secretNumber == userGuess){
		winner();
	} else if(Math.abs(secretNumber - userGuess) < 10){
		userFeedback = 'hot';
	} else if(Math.abs(secretNumber - userGuess) < 20 && Math.abs(secretNumber - userGuess) > 9){
		userFeedback = ' Kinda hot';
	} else if(Math.abs(secretNumber - userGuess) < 30 && Math.abs(secretNumber - userGuess) > 19){
		userFeedback = 'less than warm';
	} else {
		userFeedback = 'cold';
	}
}

//keep track of the users past guesses
function trackGuess(){
	pastGuesses.push(userGuess);
	guessHtml = '';
	if(pastGuesses[0].length) {
		$.each(pastGuesses,function(guess,value){
			guessHtml += '<li>' + value + '</li>';
		});
	}
}

//keep track of guess count
function guessCount(){
	count++;
}

	//page render function
function render(){
	guessList.html(guessHtml);
	countElement.html(count);
	feedback.html(userFeedback);
}

function winner(){
	userFeedback = 'You Won. Click new game to play again';
	form.find('input[type=submit]').css('opacity','0');
}
  	
//generate secret number
function generateNumber(){
	secretNumber = Math.floor(Math.random()*100)+1;
}

//reset variable 
function resetVariables(){
	count = 0;
	pastGuesses = [];
	guessHtml='';
	userGuess = '';
	userFeedback = 'Make your Guess!';
}
  	
  	

  



var random = Math.floor((Math.random() * 100) + 1);

$("#guessButton").click(function(){
      userGuess();
      appendGuess();
  });

 // Create new game
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