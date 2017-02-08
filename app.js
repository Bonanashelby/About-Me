'user strict';

var responseOne = confirm('Hello, would you like to take a quiz?');

if (responseOne){
  console.log('Awesome! Lets get started!');
} else {
  console.console.log('Too Bad, starting anyway!');
}
//this is a comment in JS.
var quizResponseOne = prompt('Please answer with Y or N. Does Anna have a dog?');

if (quizResponseOne.toUpperCase() === 'Y' || quizResponseOne.toUpperCase() === 'YES'){
  console.log('Awesome! You are correct!');
} else {
  console.log('Too bad, you were wrong. Anna has a dog.');
}

var quizResponseTwo = prompt('Please answer with Y or N. Is Anna from Seattle?');

if (quizResponseTwo.toUpperCase() === 'N' || quizResponseTwo.toUpperCase() === 'NO'){
  console.log('Awesome! You are correct!');
} else {
  console.log('Too bad, you were wrong. Anna is from Louisiana.');
}

var quizResponseThree = prompt('Please answer with Y or N. Does Anna like owls?');

if(quizResponseThree.toUpperCase() === 'Y' || quizResponseThree.toUpperCase() === 'YES'){
  console.log('Awesome! You are correct!');
} else {
  console.log('Too bad. You were wrong.');
}

var quizResponseFour = prompt('Please answer with Y or N. Does Anna like to read?');

if(quizResponseFour.toUpperCase() === 'Y' || quizResponseFour.toUpperCase() === 'YES'){
  console.log('Awesome! You are correct!');
} else {
  console.log('Too bad. You were wrong.');
}

var quizResponseFive = prompt('Please answer with Y or N. Does Anna like the cold weather here in Seattle?');

if(quizResponseFive.toUpperCase() === 'N' || quizResponseFive.toUpperCase() === 'NO'){
  console.log('Awesome! You are correct!');
} else {
  console.log('Too bad. You were wrong. Anna dislikes the cold weather very much!');
}
