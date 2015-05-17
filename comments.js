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

// 4.)
function substitutionCensor(content, badWords) {
  substitute = ['foot', 'underwear', 'soup'];
  var words = content.split(" ");
  var substituteWords = words.map(function(word) {
    if(badWords.indexOf(word) !== -1) {
      return substitute[Math.floor(Math.random() * substitute.length)];
     }
     else {
        return word;
      }
  });
  return substituteWords.join(" ");
}

console.log(substitutionCensor(content, badWords));

// 5.)
var publishComment = function(comment, badWords, censorFunction, printFunction) {
  printFunction(censorFunction(comment, badWords));
};

publishComment("Fucksake, mate... What am I doing!?", ['fuck', 'cunt'], omissionCensor, loudPrint);


