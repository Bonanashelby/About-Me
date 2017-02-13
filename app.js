'use strict';

//score information
var score = 0;
//getting user information
var user = prompt('Hello! What\'s your name?');
alert('Hello ' + user + '!');
//asking to begin quiz. NO IS NOT AN OPTION
var confirmQuiz = confirm('Hello, would you like to take a quiz?');

if (confirmQuiz === true) {
  alert('Yay! Let\'s being!');
  console.log('Quiz About Me began!');
} else {
  alert('There is no try, only do! Let\'s do this!');
}

//Quiz has begun. Questions start here!
function questionOne(){
  var quizResponseOne = prompt('Please answer with Y or N. Does Anna have a dog?');

  if (quizResponseOne.toUpperCase() === 'Y' || quizResponseOne.toUpperCase() === 'YES'){
    alert('You bet she does! Anna has two dogs to be exact, one is a Corgi/Australian Shepherd mix named Egon and the other is a Great Pyrenees named Okami.');
    console.log('Awesome! You are correct.');
    score += 1;
  } else {
    alert('That is incorrect, Anna has two dogs.');
    console.log('Too bad, you were wrong.');
  }
}

function questionTwo() {
  var quizResponseTwo = prompt('Please answer with Y or N. Is Anna from Seattle?');

  if (quizResponseTwo.toUpperCase() === 'N' || quizResponseTwo.toUpperCase() === 'NO'){
    alert('Oui, tu as raison! Laissez les bons temps rouler! Anna is from Louisiana!');
    console.log('Awesome! You are correct!');
    score += 1;
  } else {
    alert('Non, c\'est faux. Anna is from Louisiana!');
    console.log('Too bad, you were wrong.');
  }
}

function questionThree() {
  var quizResponseThree = prompt('Please answer with Y or N. Is Anna adopted?');

  if(quizResponseThree.toUpperCase() === 'Y' || quizResponseThree.toUpperCase() === 'YES'){
    alert('You are correct! My brother and I were both adopted.');
    console.log('Awesome! You are correct!');
    score += 1;
  } else {
    alert('Bummer, that\'s wrong. Anna and her brother are adopted!');
    console.log('Too bad. You were wrong.');
  }
}

function questionFour() {
  var quizResponseFour = prompt('Please answer with Y or N. Does Anna like spicy food?');

  if(quizResponseFour.toUpperCase() === 'Y' || quizResponseFour.toUpperCase() === 'YES'){
    alert('You bet your a$$ she does! PSA Sriracha is a getway drug, once you start you need more and more! Fun Fact - I usually keep a small bottle of Sriracha or Hot sauce with me!');
    console.log('Awesome! You are correct!');
    score += 1;
  } else {
    alert('Inconceivable! The hotter the better!');
    console.log('Too bad. You were wrong.');
  }
}

function questionFive() {
  var quizResponseFive = prompt('Please answer with Y or N. Was Anna a competition dancer?');

  if(quizResponseFive.toUpperCase() === 'Y' || quizResponseFive.toUpperCase() === 'YES'){
    alert('Yay! You are correct! Anna was a competition dancer for 8 years. Anna is a classically trained dancer with 17 years of experience.');
    console.log('Awesome! You are correct!');
    score += 1;
  } else {
    alert('Incorrect, Anna was a competition dancer for 8 years.');
    console.log('Too bad. You were wrong.');
  }
}

function questionSix() {
  for (var i = 0; i < 4 ; i++) {
    var quizResponseSix = prompt('How many dogs do I have? You have four guesses to get it right!');
    if(quizResponseSix == 2) {
      alert('Yay! You got it right! I have two dogs Okami and Egon!');
      score += 1;
      break;
    } else {
      alert('Bummer! Try Again. I\'ll give you a hint it is more than 1, but less than 4.');
    }
  }
}

function questionSeven() {
  var answers = ['green', 'purple', 'blue', 'mint green'];
  for (var i = 0; i < 6; i++) {
    var isCorrect = false;
    var userChoice = prompt('Name one color that I like');
    for (var j = 0; j < answers.length; j++) {
      if(userChoice.toLowerCase() == answers[j]) {
        isCorrect = true;
        score += 1;
        break;
      }
    }
    if(isCorrect == true){
      alert('You got it right!');
      break;
    } else {
      alert('Wrong! Try again!');
    }
  }
}
//var score function for total
function finalScore() {
  if (score === 7) {
    alert('Your score is ' + score + ' out of 7.');
    alert('Wow, you got them all right! That\'s not creepy at all.');
  } else {
    alert('Your score is ' + score + ' out of 7.');
    alert('Better luck next time ' + user + '!');
  }
}
//responses to the functions above
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
finalScore();
