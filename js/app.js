'use strict';

var answerCount = 0; // variable to hold correct answer count, incremented during questions

confirm('Are you ready to play a guessing game about me?');

// ask user for their name
var uName = prompt('Alright, then. Who\'s taking the quiz?');
console.log('The user\'s name is ' + uName);

if( uName !== null){
  alert('Here the questions come ' + uName + '. Make sure to answer with "yes" or "no."');
}

// am I from seattle
var fromSeattle = prompt('Am I from Seattle?').toLowerCase();
console.log('The user chose ' + fromSeattle);

if(fromSeattle === 'no'){
  alert('That is correct! I am originally from Alaska');
  answerCount++;
} else if(fromSeattle === 'yes'){
  alert('Sorry, but I\'m from Alaska');
} else{
  alert('Please remember to answer with YES or NO');
}
console.log('The user has ' + answerCount + ' out of 1 correct');

// have I visited 10 countries
var visitCount = prompt('Have I visited more than 10 countries?').toLowerCase();
console.log('The user chose ' + visitCount);

if(visitCount === 'yes'){
  alert('That\'s right! I have been to more than 10 countries!');
  answerCount++;
} else if(visitCount === 'no'){
  alert('Sorry, I\'ve been there and back again');
} else{
  alert('A simple yes or no will do.');
}
console.log('The user has ' + answerCount + ' out of 2 correct');

// have I seen 100 artists in a year
var artistCount = prompt('Have I seen over 100 artists in a single year?').toLowerCase();
console.log('The user chose ' + artistCount);

if(artistCount === 'yes'){
  alert('Nice job! I have seen over 100 artists in a year, and what a year it was!');
  answerCount++;
} else if(artistCount === 'no'){
  alert('Nope. I had one crazy year of concerts!');
} else{
  alert('I thought 3rd time would be the charm. Try yes or no next time.');
}
console.log('The user has ' + answerCount + ' out of 3 correct');

// do I like celery
var ewwCelery = prompt('Is celery my favorite food?').toLowerCase();
console.log('The user chose ' + ewwCelery);

if(ewwCelery === 'no'){
  alert('Absolutely. I would never torture myself eating celery!');
  answerCount++;
} else if (ewwCelery === 'yes'){
  alert('Trick question celery isn\'t real food.');
} else{
  alert('Are you even trying? Yes or no are better answers.');
}
console.log('The user has ' + answerCount + ' out of 4 correct');

// is coffee my favorite drink
var favDrink = prompt('Is coffee my favorite (non-alcoholic) beverage?');
if(favDrink === 'yes'){
  alert('Gotta have my coffee. Nice answer!');
  answerCount++;
} else if (favDrink === 'no'){
  alert('Well what else am I going to drink? Water? Ha!');
} else{
  alert('It\'s too late to help you. Hit F5 or Ctrl + R.');
}
console.log('The user has ' + answerCount + ' out of 5 correct');

// have user guess how old i am

var myAge =  28;
var guessCount = 0;

do{
  var guessAge = prompt('How old do you think I am? You only get 4 tries!');
  var intAge = parseInt(guessAge);
  if(intAge > myAge){
    alert('Sorry, but I\'m not that old yet.');
    guessCount++;
  } else if(intAge < myAge){
    alert('Those days have passed, guess higher.');
    guessCount++;
  } else {
    alert('You got it! I\' 28 years old.');
    answerCount++;
    break;
  }
} while(guessAge !== myAge && guessCount <=3);

var favGames = ['dota', 'defense of the ancients', 'pubg', 'playerunknown\'s battleground', 'ssbm', 'super smash bros melee', 'witcher', 'rocket league', 'hearthstone'];
var gameIndex = -1;
var tryCount = 0;

do{
  var gameAnswer = prompt('Can you guess any of my favorite video games in 6 tries or less? TIP: Acronyms work.').toLowerCase();
  for (var i=0; i < favGames.length; i++){
    if (favGames[i] === gameAnswer){
      gameIndex = i;
      break;
    }
  }
  if(gameIndex > -1){
    alert('One of my favorites!');
    answerCount++;
  } else{
    alert('Try Again.');
    tryCount++;
  }
} while(gameIndex === -1 && tryCount <=5);

confirm('Are you ready to see how you did ' + uName + '?');
alert('It looks like you got ' + answerCount + ' out of 5 correct!');