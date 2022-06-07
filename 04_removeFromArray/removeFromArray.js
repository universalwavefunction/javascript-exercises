const removeFromArray = function(array, ...itemsToRemove) {
  for (let i = 0; i < array.length; i++) {
    for (j in itemsToRemove) {
      if (array[i] === itemsToRemove[j]) {
        array.splice(i, 1);
        i--;
      }
    }
  }
  return array;
}

//console.log(removeFromArray([1, 2, 3, 4], 3, 2))
// Do not edit below this line
module.exports = removeFromArray;
