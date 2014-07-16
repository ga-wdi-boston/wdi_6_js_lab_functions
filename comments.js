//Define the following functions:

// `regularPrint(content)` &ndash; accepts a string `content` and prints it to the console

function regularPrint(content) {
  console.log(content);
}

//`loudPrint(content)` &ndash; accepts a string `content` and prints an upcased version of it surrounded by stars (e.g. `***THIS VIDEO SUCKS***`)

function loudPrint(content) {
  return "***" + content.toUpperCase() + "***";
}

// `omissionCensor(content, badWords)` &ndash; accepts a string `content` and an array of strings `badWords`, and returns a version of `content` with all instances of the strings in `badWords` removed

function omissionCensor(content, badWords) {
 badWords.forEach(function(badWord) {
  content = content.replace(badWord + ' ', '');
  content = content.replace(' ' + badWord, '');
  content = content.replace(badWord, '');
 });
 return content;
}


