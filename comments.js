// * `regularPrint(content)` &ndash; accepts a string `content` and prints it to the console

function regularPrint(content) {
  console.log(content);
}

// * `loudPrint(content)` &ndash; accepts a string `content` and prints an upcased version of it surrounded by stars (e.g. `***THIS VIDEO SUCKS***`)
function loudPrint(content) {
  var msg = '**' + content.toUpperCase + '**';
  console.log(msg);
}

// * `omissionCensor(content, badWords)` &ndash; accepts a string `content` and an array of strings `badWords`, and returns a version of `content` with all instances of the strings in `badWords` removed
function omissionCensor(content, badWords) {
    var arr = content.split('');
    var cleanContent = [];
    var arrGoodWords
    for(var i = 0; i < arr.length; i++) {
      // -1 refers to the previous index number
      if(!cleanContent.indexOf(badWords[i]) === -1 ) {
          cleanContent.push(arrGoodWords[Math.random(2)]);
      }
    }
    return cleanContent;
}


// * `substitutionCensor(content, badWords)` &ndash; accepts a string `content` and an array of strings `badWords`, and returns a version of `content` with all instances of the strings in `badWords` replaced with a random element from an array of "substitute" strings (internally defined in the function)
function omissionCensor(content, badWords) {
    var arr = content.split('');
    var arrGoodWords = ['silly', 'ducky', 'outrageous']
    var cleanContent = [];
    for(var i = 0; i < arr.length; i++) {
      // -1 refers to the previous index number
      for (var c = 0; c < 3; c++) {
        if(!cleanContent.indexOf(badWords[i]) === -1 ) {
            cleanContent.push(arrGoodWords[c]);
        }
      }
    }
    return cleanContent;
}

// * `publishComment(comment, badWords, censorFunction, printFunction)` &ndash; accepts a string `comment`, an array of strings `badWords`, a function to censor the comment `censorFunction`, and a function to print the comment `printFunction`

// **Note:** Don't worry about handling punctuation gracefully. For now, just use simple strings with no punctuation.

// Once you write these functions, call `publishComment` with a string of your choosing 4 times, once with each combination of `censorFunction` and `printFunction`. For example:

// ```js
// publishComment("what the hell is going on", ["damn", "hell"], omissionCensor, loudPrint);
// ```

// Once you are done with all of the above, design and implement another censor function and another print function. They can operate however you like (go nuts!). Demonstrate the use of these new functions by calling `publishComment` with them.
// console.log('It works!');
