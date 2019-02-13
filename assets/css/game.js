
    var userGuess;
    const numberOfGuesses = 10;
    var guessesLeft = numberOfGuesses

// Create an array of words
    var wordArray = ["choral","steampunk","bluegrass","techno","gospel","dixieland","zydeco","funk","reggae","punk"];
    // var wordArray = ["choral"];

// Create a function that chooses a word that will be in play 
    var chosenWord = wordArray[Math.floor(Math.random()*wordArray.length)];

// The word displays on the page as underscores instead of letters 
    for (var i=0; i<chosenWord.length; i++) {
        document.write ("<div class='letter'>_</div>"); 
        // use CSS to underscore letter maybe; bottom border
    }
    document.write ("<div id='guesses'> You have " + numberOfGuesses + " guesses left!</div>"); 

// Create a function that runs whenever the user presses a key.
// Identify and store the letter the user pressed

document.onkeyup = function letterPressed(event) {
    var x = event.keyCode;  // Get the Unicode value
    userGuess = String.fromCharCode(x).toLowerCase();  // Convert the value into a character
    var isMatched = chosenWord.split('').filter(letter => letter === userGuess).length>0; // Matching the letters in the word with keyboard letter
    if (isMatched) {
        var letterPosition = chosenWord.indexOf(userGuess);
        document.getElementsByClassName("letter")[letterPosition].innerHTML = userGuess
    } else {
        document.getElementById("guesses").innerHTML= "You have " + guessesLeft-- + " guesses left!";
    }
}

// Function that stops the game when counter gets to 0
// reset function 

// document.getElementById('myform').reset();

//   Hide the directions
//    directionsText.textContent = "";

// Display the user and computer guesses, and wins/losses/ties.
       
    // wordText.textContent = chosenWord;
    // userChoiceText.textContent = "You chose: " + userGuess;
    // winsText.textContent = "wins: " + wins;
    // lossesText.textContent = "losses: " + losses;
    // };


// If the letter is in the word, it displays on screen within the word

// If the letter is not in the word, it displays on screen in another section

// Create a function that tracks guesses -- guesses completed and remaining

// Create a function -- a loop / forEAch -- that looks at # of guesses

// Create a function that notifies the user that they lost / ran out of attempts

// Create a function that then reveals the word

// Create a function that notifies the user that they won if they guess the word

// Create a function that resets the game if the user guesses the word OR reaches the allotted number of guesses

   
// // Create variables to hold the number of wins (right guess), losses (wrong guess), attempts (total guesses). They start at 0.
// var wins = 0;
// var losses = 0;
// var attempt = 0;

// // Create variables that hold references to the places in the HTML where we want to display things.
// var wordText = document.getElementById("word-text");
// var directionsText = document.getElementById("directions-text");
// var userChoiceText = document.getElementById("userchoice-text");
// var winsText = document.getElementById("wins-text");
// var lossesText = document.getElementById("losses-text");