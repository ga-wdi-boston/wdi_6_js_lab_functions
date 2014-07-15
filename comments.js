content = "what the hell is going on. stupid javascript!";
badWords = ["hell", "stupid"];

// regularPrint(content) – accepts a string content and prints it to the console
function regularPrint(content) {
  console.log(content);
}

regularPrint(content);

// loudPrint(content) – accepts a string content and prints an upcased version
// of it surrounded by stars (e.g. ***THIS VIDEO SUCKS***)
function loudPrint(content) {
  console.log("***" + content.toUpperCase() + "***");
}

loudPrint(content);

// omissionCensor(content, badWords) – accepts a string content and an array of
// strings badWords, and returns a version of content with all instances of the
// strings in badWords removed
function omissionCensor(content, badWords) {
  var words = content.split(" ");
  var censored = words.filter(function(word){
    return badWords.indexOf(word) === -1;
  });
  return censored.join(" ");
}

console.log(omissionCensor(content, badWords));
