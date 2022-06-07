const sumAll = function(start, finish) {
  let total = 0;
  if (start < 0 || finish < 0) return "ERROR";
  else if (typeof start == "string" || typeof finish == "string") {
    return "ERROR";
  }
  else if (start < finish) {
    for (let i = start; i <= finish; i++) {
      total += i;
    }
  }
  else if (start > finish) {
    for (let i = finish; i <= start; i++) {
      total += i;
    }
  }
  else return "ERROR";
  return total;
}

// Do not edit below this line
module.exports = sumAll;
