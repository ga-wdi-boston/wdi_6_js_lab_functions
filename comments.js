function regularPrint(content){
  console.log(content);
}

regularPrint("oh, hai!");

function loudPrint(content){
  content = content.toUpperCase();
  console.log("****"+ content +"****");
}

loudPrint("oh, hai!");

function OmissionCensor(content, badWords){
  for(var i = 0; i < badWords.length; i++){
   content = content.replace(badWords[i], "*%!#$@!", "gi");
  }
  console.log(content);
}

var swears = ['fuck','shit', 'dammit'];
var str = "fuck shit dammit I stubbed my toe!";

OmissionCensor(str, swears);

function substitutionCensor(content, badWords){
  var subWords = ['CENSOR', '&*(#@)!', '**not for children**'];
  for(var i = 0; i < badWords.length; i++){
    var randIndex = Math.floor((Math.random() * (subWords.length)));
    content = content.replace(badWords[i], subWords[randIndex], "gi");
  }
  console.log(content);
}

substitutionCensor(str, swears);

var swears = ['fuck','shit', 'dammit'];
var str = "Ouch fuck I stepped on a nail";

function publishComment(comment, badWords, censorFunction, printFunction){
  var censored = censorFunction(comment, badWords);
  printFunction(censored);
  //return censored;
}

publishComment(str, swears, substitutionCensor, loudPrint);
