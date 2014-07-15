// regularPrint(content) – accepts a string content and prints it to the console
function regularPrint(content) {
  console.log(content);
}

// loudPrint(content) – accepts a string content and prints an upcased version
// of it surrounded by stars (e.g. ***THIS VIDEO SUCKS***)
function loudPrint(content) {
  console.log("***" + content.toUpperCase() + "***");
}

// omissionCensor(content, badWords) – accepts a string content and an array of
// strings badWords, and returns a version of content with all instances of the
// strings in badWords removed
function omissionCensor(content, badWords) {
  var words = content.split(" ");
  var censoredWords = words.filter(function(word){
    return badWords.indexOf(word) === -1;
  });
  return censoredWords.join(" ");
}

// substitutionCensor(content, badWords) – accepts a string content and an array
// of strings badWords, and returns a version of content with all instances of the
// strings in badWords replaced with a random element from an array of "substitute"
// strings (internally defined in the function)
function substitutionCensor(content, badWords) {
  substitute = ["monkeys", "eat", "bananas"];

  var words = content.split(" ");
  var substitutedWords = words.map(function(word){
    if(badWords.indexOf(word) !== -1){
      return substitute[Math.floor(Math.random() * substitute.length)];
    } else {
      return word;
    }
  });
  return substitutedWords.join(" ");
}

// publishComment(comment, badWords, censorFunction, printFunction) – accepts a
// string comment, an array of strings badWords, a function to censor the comment
// censorFunction, and a function to print the comment printFunction
function publishComment(comment, badWords, censorFunction, printFunction) {
  printFunction(censorFunction(comment, badWords));
}

publishComment("what the hell is going on", ["damn", "hell"], omissionCensor, loudPrint);


// snakePrint(comment) - prints a snake cased version of the comment
function snakePrint(content){
  console.log(content.replace(/ /g, "_"));
}

publishComment("what the hell is going on", ["damn", "hell"], omissionCensor, snakePrint);
