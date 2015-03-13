// regularPrint(content) – accepts a string content and prints it to the console

function regularPrint(string) {
  console.log(string);
}

// loudPrint(content) – accepts a string content and prints an upcased version of
// it surrounded by stars (e.g. ***THIS VIDEO SUCKS***)

function loudPrint(string) {
  console.log("***" + string.toUpperCase() + "***");
}

// omissionCensor(content, badWords) – accepts a string content and an array of
// strings badWords, and returns a version of content with all instances of the
// strings in badWords removed

function omissionCensor(string, badWords) {
  badWords.forEach(function(word) {
    var matcher = new RegExp(word, "g");
    string = string.replace(matcher, "");
  });
}

// substitutionCensor(content, badWords) – accepts a string content and an array
// of strings badWords, and returns a version of content with all instances of
// the strings in badWords replaced with a random element from an array of
// "substitute" strings (internally defined in the function)

function substitutionCensor(string, badWords) {
  var goodWords = ["cupcake", "hug", "flower", "butterfly"];
  badWords.forEach(function(word) {
    var matcher = new RegExp(word, "g");
    string = string.replace(
      matcher,
      goodWords[Math.floor(Math.random() * goodWords.length)]
    );
  });
}

// publishComment(comment, badWords, censorFunction, printFunction) – accepts a
// string comment, an array of strings badWords, a function to censor the
// comment censorFunction, and a function to print the comment printFunction

function publishComment(comment, badWords, censorFunction, printFunction) {
  printFunction(censorFunction(comment, badwords));
}

