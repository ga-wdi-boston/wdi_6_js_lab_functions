//Define the following functions:

// `regularPrint(content)` &ndash; accepts a string `content` and prints it to the console

function regularPrint(content) {
  console.log(content);
}

//`loudPrint(content)` &ndash; accepts a string `content` and prints an upcased version of it surrounded by stars (e.g. `***THIS VIDEO SUCKS***`)

function loudPrint(content) {
  return "***" + content.toUpperCase() + "***";
}

