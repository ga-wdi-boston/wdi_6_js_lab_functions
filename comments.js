function regularPrint(content) {
  console.log(content);
}

function loudPrint(content) {
  console.log('***' + content.toUpperCase() + '***');
}

function getWordsWithOmits(content, badWords) {
 var result = content.toLowerCase().split(' ');
  badWords.forEach(function(reuslt, word) {
    result[result.indexOf(badWords[word])] = "";
  });
  return result;
}

function omissionCensor(content, badWords) {
  return getWordsWithOmits(content, badWords).join(' ');
}

function substitutionCensor(content, badWords)  {
  var substitute = ["fluffy", "nerd", "alpha", "blorp", "'sigh'", "<('-']<"];
  var result = getWordsWithOmits(content, badWords);
  for(var i = 0; i< result.length; i++) {
    if (result[i] === "") {
      result[i] = substitute[Math.round(Math.random(substitute.length))];
    }
  }
  return result.join(' ');
}

function kirbify(content, badWords) {
  var result = getWordsWithOmits(content, badWords);
  for(var i=0; i<result.length; i++) {
    if (result[i] === "")
      return "(╯°□°）╯︵ ┻━┻ WATCH YOUR TONE";
  }
  return content;
 }


function generateCommentPublisher(badWords, censorFunction, printFunction) {
  return function(content) {
    printFunction(censorFunction(content, badWords));
  };
}

// Getting an error, badWords === undefined....wat
// this is the exact same 2 lines as every other
function preserveCase(content, badWords, censorFunction) {
var result = getWordsWithOmits(content, badWords);
  for(var i=0; i<result.length; i++) {
    if (result[i] === content[i].toLowerCase())
      result[i] = content[i];
  }
  return result;
}

function publishComment(content, badWords, censorFunction, printFunction) {
  printFunction(censorFunction(content, badWords));
}


kirbifyPublisher = generateCommentPublisher(['shit', 'piss',
                                          'fuck','cunt',
                                          'cocksucker',
                                          'motherfucker',
                                          'tits'], kirbify, regularPrint);

kirbifyPublisher("This shit is my tits publisher");
kirbifyPublisher("Works on plain text");


publishComment('Happy motherfucking birthday',
              ['motherfucking'], kirbify, regularPrint);
publishComment('Happy motherfucking birthday',
              ['motherfucking'], omissionCensor, regularPrint);
publishComment('Happy motherfucking birthday',
              ['motherfucking'], omissionCensor, loudPrint);
publishComment('Happy motherfucking birthday',
              ['motherfucking'], substitutionCensor, regularPrint);
publishComment('Happy motherfucking birthday',
              ['motherfucking'], substitutionCensor, loudPrint);

// publishComment('Happy motherFUCKing Birthday YAAY!',
//               ['motherfucking'], kirbify, preserveCase);
// publishComment('Happy motherFUCKing Birthday YAAY!',
//               ['motherfucking'], omissionCensor, preserveCase);

regularPrint(substitutionCensor('q4 tits motherFUCKer working SHIT cunt',
                                                              ['shit', 'piss',
                                                              'fuck','cunt',
                                                              'cocksucker',
                                                              'motherfucker',
                                                              'tits']));

regularPrint(omissionCensor('q3 motherFUCKer working cunt', ['shit', 'piss',
                                                              'fuck','cunt',
                                                              'cocksucker',
                                                              'motherfucker',
                                                              'tits']));
loudPrint('q2 up in here!!');
regularPrint('Q1 Works!');
console.log('It works!');
