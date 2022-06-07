const removeFromArray = function(array, itemToRemove) {
  for (var i = array.length - 1; i >=0; i--) {
    for (j in itemToRemove) {
      console.log(itemToRemove[j]);
      if (array[i] === itemToRemove[j]) {
        console.log(i + j)
        array.splice(i,1);
      }
    }
  }
  return array;
}

console.log(removeFromArray([1, 2, 3, 4], 3))
// Do not edit below this line
//module.exports = removeFromArray;
