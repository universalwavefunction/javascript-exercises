const add = function(...nums) {
	addTotal = 0;
	for (let i = 0; i < nums.length; i++) {
		addTotal += nums[i];
	}
	return addTotal;
};

const subtract = function(num1, num2) {
	let result = num1 - num2;
	return result;
};

const sum = function(array) {
	total = 0;
	for (let i = 0; i < array.length; i++) {
		total += array[i];
	}
	return total;
};

const multiply = function(array) {
	product = 1;
	for (let i = 0; i < array.length; i++) {
		product *= array[i];
	}
	return product;
};

const power = function(num1, num2) {
	let result = num1 ** num2;
	return result;
};

const factorial = function(num) {
	let factorialTotal = 1
	for (let i = 1; i <= num; i++) {
		factorialTotal *= i;
	}
	return factorialTotal;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
