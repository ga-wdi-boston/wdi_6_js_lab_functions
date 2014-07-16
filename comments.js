// 1.)
function regularPrint(content) {
  console.log(content);
}

// 2.)
function loudPrint(content) {
  console.log('***' + content.toUpperCase() + '***');
}

// 3.)

content = "Get tae fuck you daft cunt, ken!";
badWords = ["fuck", "cunt"];

function omissionCensor(content, badWords) {
  var words = content.split(" ");
  var redactedSentence = words.filter(function(word){
    return badWords.indexOf(word) < 0;
  });
  return redactedSentence.join(" ");
}

console.log(omissionCensor(content, badWords));

