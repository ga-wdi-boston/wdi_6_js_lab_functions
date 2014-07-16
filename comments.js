console.log('It works!');

var content = 'look at my cocksucker horse, my horse turd is amazing';
var badWords = [ 'shit', 'piss', 'fuck', 'cunt', 'cocksucker', 'motherfucker', 'tits', 'fart', 'turd', 'twat', 'fucking' ];

function regularPrint(content){
  console.log(content);
}

regularPrint(content);

function loudPrint(content){
  console.log('***' + content.toUpperCase() + '***');
}

loudPrint(content);


function omissionCensor(content, badWords){
  for (var i=0; i < badWords.length; i++) {
    content = content.replace(badWords[i], '');
  }
  return content;
}

function substitutionCensor(content, badWords){
  for (var i=0; i < badWords.length; i++) {
    var replacements = ['kittens', 'puppies', 'fishies'];
    content = content.replace(badWords[i], replacements[Math.floor(Math.random()*replacements.length)]);
  }
  return content;
}

function publishComment(comment, badWords, censorFunction, printFunction){
  var censoredComment = censorFunction(comment, badWords);
  return printFunction(censoredComment);
}

publishComment(content, badWords, omissionCensor, regularPrint);

var stan = 'Dude, what the fuck is wrong with German people?';
var cartman = 'OK not! Fuck shit cock ass titties boner bitch muff pussy cunt butthole Barbra Streisand!';
var kyle = 'So you cant say Im Eric Cartman the fattest fucking piece of shit in the world?';
var terrence = 'Well, fuck my ass and call me a bitch';

publishComment(stan, badWords, omissionCensor, regularPrint);
publishComment(cartman, badWords, omissionCensor, loudPrint);
publishComment(kyle, badWords, omissionCensor, regularPrint);
publishComment(terrence, badWords, omissionCensor, regularPrint);
