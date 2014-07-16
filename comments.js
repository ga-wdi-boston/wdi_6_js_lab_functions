function regularPrint(content) {
  console.log(content);
}

function loudPrint(content) {
  console.log('***' + content.toUpperCase() + '***');
}

function omissionCensor(content, badWords) {
  badWords.forEach(function(badWord){
    content = content.split(badWord).join('');
  });
  return content;
}

function substitutionCensor(content, badWords) {
  var goodWords = ['panda', 'noodle', 'bandsaw', 'gerbil', 'dongle'];
  badWords.forEach(function(badWord){
    var randomGoodWord = goodWords[Math.floor(Math.random() * goodWords.length)];
    content = content.split(badWord).join(randomGoodWord);
  });
  return content;
}

function publishComment(content, badWords, censorFunction, printFunction) {
  printFunction(censorFunction(content, badWords));
}

// Extra Challenge

function generateCommentPublisher(badWords, censorFunction, printFunction) {
  return function(content) {
    printFunction(censorFunction(content, badWords));
  };
}
