// Load inquirer npm package
var inquirer = require("inquirer");

// Empty array for storing front of flashcards

var flashcardfronts=[];

// // Empty array for storing front of flashcards

var flashcardbacks=[];

// Constrcutor for creating standard flashcards

function BasicCard(front, back) {
  	this.front = front;
  	this.back = back;
  	flashcardfronts.push(this.front);
  	flashcardbacks.push(this.back);
  };




// Sample standard flashcards

var heartAttack = new BasicCard("Which over the counter drug, a report by Danish scientists has concluded, increases the risk of a heart attach by 31%?", "Ibuprofen");


// // "Which over the counter drug, a report by Danish scientists has concluded, increases the risk of a heart attach by 31%?"
// console.log(heartAttack.front); 

// // "Ibuprofen"
// console.log(heartAttack.back); 

var u2Albumn = new BasicCard(
    "With or Without You appeared on which U2 album?", "The Joshua Tree");

// // "With or Without You appeared on which U2 album?"
// console.log(u2Albumn.front); 

// // "The Joshua Tree"
// console.log(u2Albumn.back); 

var oldestFirstTerm = new BasicCard(
    "Donald Trump will become the oldest first term US President at 70 years old. Who was the previous oldest first term president?", "Ronald Reagan");

// // "Donald Trump will become the oldest first term US President at 70 years old. Who was the previous oldest first term president?"
// console.log(oldestFirstTerm.front); 

// // "Ronald Reagan"
// console.log(oldestFirstTerm.back); 

var bileOrgan = new BasicCard(
    "Bile, which aids the digestion of fatty acids, is produced by which organ?", "Liver");

// // "Bile, which aids the digestion of fatty acids, is produced by which organ?"
// console.log(bileOrgan.front); 

// // "Liver"
// console.log(bileOrgan.back); 

var arizonaCapital = new BasicCard(
    "What is the state capital of Arizona?", "Phoenix");

// // "What is the state capital of Arizona?"
// console.log(arizonaCapital.front); 

// // "Phoenix"
// console.log(arizonaCapital.back); 

// Check front and back arrays

// console.log(flashcardfronts);
// console.log(flashcardbacks);


// Play the game and display questions with inquirer npm package

var correct = 0;

function playgame(i) {

// Initialize the i variable and create a correct variable to count the number of correct answers



// Loop through the flashcard array to display questions

 
    inquirer.prompt([

  {
    type: "input",
    message: flashcardfronts[i],
    name: "answer"

  }

// Check the answer against the answer the user has supplied

]).then(function(user) {

  // If the user's answer is correct, congratulate the user

  if (user.answer == flashcardbacks[i]) {
  	console.log("You're right!  Great job!");
  	correct++;

  // If the user's answer is not correct, display the correct answer
  }

  else {

    console.log("I'm sorry.  The correct answer is" , flashcardbacks[i] );

  }

  if (i < flashcardfronts.length -1) {
  	playgame(i+1);
  } else {
  	console.log("You guessed" , correct, "right");
  }

}).catch(function(err) {
	console.log("An error occurred" , err);

});

}


playgame(0);


