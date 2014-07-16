// WDI 6 Lab Functions
// Blair Caple
// July 15, 2014

/**
 * 1. Define a function regularPrint(content) – accepts a string content and
 * prints it to the console.
 */
var regularPrint = function(content) {
  console.log(content);
};

/**
 * 2. Define a function loudPrint(content) – accepts a string content and
 * prints an upcased version of it surrounded by stars. (e.g. ***THIS VIDEO
 * SUCKS***)
 */
var loudPrint = function(content) {
  console.log('***' + content.toUpperCase() + '***');
};

/**
 * 3. Define a function omissionCensor(content, badWords) – accepts a string
 * content and an array of strings badWords, and returns a version of content
 * with all instances of the strings in badWords removed.
 */
var omissionCensor = function(content, badWords) {
  var rawWords = content.replace(/[^A-Za-z0-9\?\!\., ]/g, '').split(' ');
  var cleanWords = [];
  rawWords.forEach(function(word){
    if(badWords.indexOf(word) < 0) {
      cleanWords.push(word);
    }
  });
  return cleanWords.join(' ');
};

/**
 * 4. Define a function substitutionCensor(content, badWords) – accepts a
 * string content and an array of strings badWords, and returns a version of
 * content with all instances of the strings in badWords replaced with a
 * random element from an array of "substitute" strings (internally defined
 * in the function).
 */
var substitutionCensor = function(content, badWords){
  var substitutes = ['happy', 'snoozy', 'sleepy', 'dopey', 'grumpy'];
  var rawWords = content.replace(/[^A-Za-z0-9\?\!\., ]/g, '').split(' ');
  var cleanWords = [];
  rawWords.forEach(function(word){
    if(badWords.indexOf(word) < 0) {
      cleanWords.push(word);
    } else {
      var index = Math.floor(Math.random() * substitutes.length);
      cleanWords.push(substitutes[index]);
    }
  });
  return cleanWords.join(' ');
};

/**
 * 5. Define a function publishComment(comment, badWords, censorFunction,
 * printFunction) – accepts a string comment, an array of strings badWords,
 * a function to censor the comment censorFunction, and a function to print
 * the comment printFunction.
 */
var publishComment = function(comment, badWords, censorFunction, printFunction){
  printFunction(censorFunction(comment, badWords));
};

/**
 * 6. Call publishComment with a string of your choosing 4 times, once with
 * each combination of censorFunction and printFunction.
 */
publishComment("what the damn hell is going on", ["damn", "hell"], omissionCensor, regularPrint);
publishComment("what the damn hell is going on", ["damn", "hell"], omissionCensor, loudPrint);
publishComment("what the damn hell is going on", ["damn", "hell"], substitutionCensor, regularPrint);
publishComment("what the damn hell is going on", ["damn", "hell"], substitutionCensor, loudPrint);

/**
 * 7. Once you are done with all of the above, design and implement another
 * censor function and another print function. They can operate however you
 * like (go nuts!). Demonstrate the use of these new functions by calling
 * publishComment with them.
 */
var sillyPrint = function(content) {
  var silly = '';
  for(var i = 0; i < content.length; i++) {
    silly += (i % 2 === 0) ? content[i].toUpperCase() : content[i];
  }
  console.log(silly);
};

var snoopDogCensor = function(content, badWords) {
  var rawWords = content.replace(/[^A-Za-z0-9\?\!\., ]/g, '').split(' ');
  var hizzleWords = [];
  rawWords.forEach(function(word){
    if(badWords.indexOf(word) < 0) {
      hizzleWords.push(word);
    } else {
      hizzleWords.push(word[0] + 'izzle');
    }
  });
  return hizzleWords.join(' ');
};

publishComment("Off the hook fo sure dawg", ['hook', 'sure', 'dawg'], snoopDogCensor, regularPrint);
publishComment("Off the hook fo sure dawg", ['hook', 'sure', 'dawg'], snoopDogCensor, sillyPrint);

/**
 * Extra Challenge:
 * Define a function generateCommentPublisher(badWords, censorFunction,
 * printFunction) This function should return a new function which only takes
 * one string argument, and "publishes" it using the badWords, censorFunction,
 * and printFunction that were specified when it was generated.
 */
function generateCommentPublisher(badWords, censorFunction, printFunction) {
  badWords = badWords || ['shit', 'crap', 'piss', 'damn', 'hell']
  censorFunction = censorFunction || omissionCensor;
  printFunction = printFunction || regularPrint;

  return function(content){
    printFunction(censorFunction(content, badWords));
  };
}
