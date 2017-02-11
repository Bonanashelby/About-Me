'use strict';

var score = 0;
var responseOne = confirm('Hello, would you like to take a quiz?');

if (responseOne){
  console.log('Awesome! Lets get started!');
} else {
  console.log('Too Bad, starting anyway!');
}
//this is a comment in JS.

function questionOne(){
  var quizResponseOne = prompt('Please answer with Y or N. Does Anna have a dog?');
  if (quizResponseOne.toUpperCase() === 'Y' || quizResponseOne.toUpperCase() === 'YES'){
    console.log('Awesome! You are correct!');
    score += 1;
  } else {
    console.log('Too bad, you were wrong. Anna has a dog.');
  }
}

function questionTwo() {
  var quizResponseTwo = prompt('Please answer with Y or N. Is Anna from Seattle?');

  if (quizResponseTwo.toUpperCase() === 'N' || quizResponseTwo.toUpperCase() === 'NO'){
    console.log('Awesome! You are correct!');
    score += 1;
  } else {
    console.log('Too bad, you were wrong. Anna is from Louisiana.');
  }
}

function questionThree() {
  var quizResponseThree = prompt('Please answer with Y or N. Does Anna like owls?');

  if(quizResponseThree.toUpperCase() === 'Y' || quizResponseThree.toUpperCase() === 'YES'){
    console.log('Awesome! You are correct!');
    score += 1;
  } else {
    console.log('Too bad. You were wrong.');
  }
}

function questionFour() {
  var quizResponseFour = prompt('Please answer with Y or N. Does Anna like to read?');

  if(quizResponseFour.toUpperCase() === 'Y' || quizResponseFour.toUpperCase() === 'YES'){
    console.log('Awesome! You are correct!');
    score += 1;
  } else {
    console.log('Too bad. You were wrong.');
  }
}

function questionFive() {
  var quizResponseFive = prompt('Please answer with Y or N. Does Anna like the cold weather here in Seattle?');

  if(quizResponseFive.toUpperCase() === 'N' || quizResponseFive.toUpperCase() === 'NO'){
    console.log('Awesome! You are correct!');
    score += 1;
  } else {
    console.log('Too bad. You were wrong. Anna dislikes the cold weather very much!');
  }
}

function questionSix() {
  for (var i = 0; i < 4 ; i++) {
    var quizResponseSix = prompt('How many dogs do I have? You have four guesses to get it right!');
    if(quizResponseSix == 2) {
      alert('Yay! You got it right!');
      score += 1;
      break;
    } else {
      alert('Bummer! Try Again.');
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

function finalScore() {
  alert('You got ' + score + ' out of 7.');
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
finalScore();
