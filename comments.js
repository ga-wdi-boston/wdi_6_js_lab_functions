function regularPrint(content)
{
  console.log(content);
}

function loudPrint(content)
{
  console.log("***" + content.toUpperCase() + "***");
}

function omissionCensor(content, badWords)
{
  var censoredContent = content.split(' ');
  for (var i = censoredContent.length - 1; i > 0; i--) {
    badWords.forEach(function(badWord) {
      if (censoredContent[i].toLowerCase() === badWord) censoredContent.splice(censoredContent.indexOf(censoredContent[i]), 1);
    });
  }
  return censoredContent.join(' ');
}

function substitutionCensor(content, badWords)
{
  var substituteStrings = ["silly goose", "big dummy", "diarrhea", "darnit", "heck"];
  var censoredContent = content.split(' ');
  censoredContent.forEach(function(word) {
    badWords.forEach(function(badWord) {
      if (word.toLowerCase() === badWord) censoredContent[censoredContent.indexOf(word, 1)] = substituteStrings[Math.floor(Math.random() * substituteStrings.length)];
    });
  });
  return censoredContent.join(' ');
}

function publishComment(comment, badWords, censorFunction, printFunction)
{
  printFunction(censorFunction(comment, badWords));
}

publishComment("Hey you fucking twat piece of shit", ["fucking", "twat"], substitutionCensor, loudPrint);

publishComment("Hey you fucking twat piece of shit", ["fucking", "twat"], substitutionCensor, regularPrint);

publishComment("Hey you fucking twat piece of shit", ["fucking", "twat"], omissionCensor, loudPrint);

publishComment("Hey you fucking twat piece of shit", ["fucking", "twat"], omissionCensor, regularPrint);

function questionPrint(content) {
  var keywords = ["who", "what", "why", "when", "where", "how"];
  var questionMarks = "";
  keywords.forEach(function(word) {
    if (content.toLowerCase().split(" ")[0] ===  word) questionMarks = "???";
  });
  console.log(content + questionMarks);
}

function randomWordCensor(content, badWords)
{
  var censoredContent = content.split(' ');
  censoredContent.forEach(function(word) {
  badWords.forEach(function(badWord) {
    if (word.toLowerCase() == badWord) censoredContent[censoredContent.indexOf(word, 1)] = Math.random().toString(34).replace(/[^a-z]+/g, '');
    });
  });
  return censoredContent.join(' ');
}

publishComment("Hey you fucking twat piece of shit", ["fucking", "twat"], randomWordCensor, questionPrint);

function generateCommentPublisher(badWords, censorFunction, printFunction)
{
  return function(comment) {
    printFunction(censorFunction(comment, badWords));
  };
}
