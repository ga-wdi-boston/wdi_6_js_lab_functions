// content is a string
function regularPrint(content){
  console.log(content);
}
//content is a string
function loudPrint(content){
  console.log("***" + content.toUpperCase() + "***");
}
//Made my own printer
function radioPrint(content){
  console.log("KKKsssssshhhhhhhkkkk " + content + " Over Kksssssshhhhhhhkkkk");
}

//content is string, badWords is an array
function omissionCensor(content, badWords){
  var splitContent = content.split(' ');
  badWords.forEach(function(badWord){
    // instead of a second loop
    // content = content.split(badWord).join(' ');
    splitContent.forEach(function(word,i){
      if (badWord === word){splitContent[i]= '____';}
    });
  });
  return splitContent.join(' ');
}

// content is string badWords is an arry
//return content with badWords subbed out for Good ones
function substitutionCensor(content, badWords){
  var splitContent = content.split(' ');
  var goodWords=['tasty','bugger', 'smile-happy guy',
     'Rick James', 'BoomPow', '#$%#!'];

  badWords.forEach(function(badWord){
    splitContent.forEach(function(word,i){
      var replacement = goodWords[Math.floor(Math.random()*goodWords.length)];
      if (badWord === word){splitContent[i]= replacement;}
    });
  });
  return splitContent.join(' ');
}

// Made my own censor for meows
function meowCensor(content, badWords){
  var splitContent = content.split(' ');

  badWords.forEach(function(badWord){
    splitContent.forEach(function(word,i){
      if (badWord === word){splitContent[i]= 'meow';}
    });
  });
  return splitContent.join(' ');
}
// puts all them bad larry's together
function publishComment(comment, badWords, censorFunction, printFunction){
  var cleanup = censorFunction(comment,badWords);
  printFunction(cleanup);
}
