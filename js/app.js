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
if(fromSeattle === 'no'){
  alert('That is correct! I am originally from Alaska');
  answerCount++;
} else if(fromSeattle === 'yes'){
  alert('Sorry, but I\'m from Alaska');
} else{
  alert('Please remember to answer with YES or NO');
}

// have I visited 10 countries
var visitCount = prompt('Have I visited more than 10 countries?').toLowerCase();
if(visitCount === 'yes'){
  alert('That\'s right! I have been to more than 10 countries!');
  answerCount++;
} else if(visitCount === 'no'){
  alert('Sorry, I\'ve been there and back again');
} else{
  alert('A simple yes or no will do.');
}

// have I seen 100 artists in a year
var artistCount = prompt('Have I seen over 100 artists in a single year?').toLowerCase();
if(artistCount === 'yes'){
  alert('Nice job! I have seen over 100 artists in a year, and what a year it was!');
  answerCount++;
} else if(artistCount === 'no'){
  alert('Nope. Had one crazy year of concerts!');
} else{
  alert('I thought 3rd time would be the charm. Try yes or no next time.');
}

// do I like celery
var ewwCelery = prompt('Is celery my favorite food?').toLowerCase();
if(ewwCelery === 'no'){
  alert('Absolutely. I would never torture myself eating celery!');
  answerCount++;
} else if (ewwCelery === 'yes'){
  alert('Trick question celery isn\'t real food.');
} else{
  alert('Are you even trying? Yes or no are better answers.');
}

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

// tell the user how they did on the quizmkdir 
confirm('Are you ready to see how you did ' + uName + '?');
alert('It looks like you got ' + answerCount + ' out of 5 correct!');