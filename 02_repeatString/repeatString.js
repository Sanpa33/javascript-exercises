const repeatString = function(word , num) {

  if(num < 0) {

    return "ERROR";

  }

  const arrayWords = [];

  for(let i = 0; i < num ; i++) {
    arrayWords.unshift(word);
  }

  let parcialString = arrayWords.toString();

  //  Remove all the  "," using the regular expression

  // Instead of passing a string as the first argument to replace(),
  // I passed the regular expression /,/g, which using the g flag.
  // This flag stands for global, and matches all occurrences of the character "," not just the first one.

  let completeString = parcialString.replace(/,/g,"");


  return completeString;
};


// Do not edit below this line
module.exports = repeatString;

