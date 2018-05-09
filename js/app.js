'use strict';

// variable to hold correct answer increment
var answerCount = 0;

//get user's name

confirm('Are you ready to play a guessing game about me?');

var uName = prompt('Alright, then. Who\'s taking the quiz?');
console.log('The user\'s name is ' + uName);
if( uName !== null){
  alert('Here the questions come ' + uName + '. Make sure to answer with "yes" or "no."');
}

var fromSeattle = prompt('Am I from Seattle?').toLowerCase();
if(fromSeattle === 'no'){
  alert('That is correct! I am originally from Alaska');
  answerCount++;
} else if(fromSeattle === 'yes'){
  alert('Sorry, but I\'m from Alaska');
} else{
  alert('Please remember to answer with YES or NO');
}

var visitCount = prompt('Have I visited more than 10 countries?').toLowerCase();
if(visitCount === 'yes'){
  alert('That\'s right! I have been to more than 10 countries!');
} else if(visitCount === 'no'){
  alert('Sorry, I\'ve been there and back again');
} else{
  alert('A simple yes or no will do.');
}

var artistCount = prompt('Have I seen over 100 artists in a single year?').toLowerCase();

var ewwCelery = prompt('Is celery my favorite food?').toLowerCase();

var spectatorSports = ['soccer', 'baseball', 'hockey', 'football', 'esports'];

var guessSports = prompt('Can you guess one of my favorite sports to watch?').toLowerCase;