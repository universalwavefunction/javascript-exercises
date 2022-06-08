const palindromes = function (str) {
  str = str.match(/[a-z]/gi).join('').toLowerCase();
  reverseStr = str.split("").reverse().join("");
  if (str == reverseStr) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
