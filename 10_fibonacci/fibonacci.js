const fibonacci = function(num) {
  let fibNums = [1, 1]
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      let fibSum1 = fibNums[i]
      let fibSum2 = fibNums[i + 1]
      let newFibNum = fibSum1 + fibSum2
      fibNums.push(newFibNum)
    }
  }
  else return "OOPS"
  return fibNums[num - 1]
};

// Do not edit below this line
module.exports = fibonacci;
