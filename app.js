'user strict';

var responseOne = confirm('Hello, would you like to take a quiz?');

if (responseOne){
  console.log('Awesome! Lets get started!');
} else {
  console.console.log('Too Bad, starting anyway!');
}
//this is a comment in JS.
var quizResponseOne = prompt('Please answer with Y or N. Does Anna have a dog?');

if (quizResponseOne.toUpperCase() === 'Y'){
  console.log('Awesome! You are correct!');
} else {
  console.log('Too bad, you were wrong. Anna has a dog.');
}

var quizResponseTwo = prompt('Please answer with Y or N. Is Anna from Seattle?');

if (quizResponseTwo.toLowerCase() === 'N'){
  console.log('Awesome! You are correct!');
} else {
  console.log('Too bad, you were wrong. Anna is from Louisiana.');
}

var quizResponseThree = prompt('Please answer with Y or N. Does Anna like owls?');

if(quizResponseThree.toUpperCase() === 'Y'){
  console.log('Awesome! You are correct!');
} else {
  console.log('Too bad. You were wrong.');
}

var quizResponseFour = prompt('Please answer with Y or N. Does Anna like to read?');

if(quizResponseFour.toLowerCase() === 'Y'){
  console.log('Awesome! You are correct!');
} else {
  console.log('Too bad. You were wrong.');
}

var quizResponseFive = prompt('Please answer with Y or N. Does Anna like the cold weather here in Seattle?');

if(quizResponseFive.toUpperCase() === 'N'){
  console.log('Awesome! You are correct!');
} else {
  console.log('Too bad. You were wrong. Anna dislikes the cold weather very much!');
}
