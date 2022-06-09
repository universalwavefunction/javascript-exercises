const caesar = function(str, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const strSplit = str.split('');
  const encodedLetters = [];
  for (i in strSplit) {
    const position = alphabet.indexOf(strSplit[i].toLowerCase())
    encodedLetters.push(alphabet[position + shift])
  }
  const encodedStr = encodedLetters.join("")
  return encodedStr;
};

// Do not edit below this line
module.exports = caesar;
