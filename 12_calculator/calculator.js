const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((acc, num) => acc + num, 0);
};

const multiply = function(array) {
 return array.reduce((acc, num) => acc * num, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let sum = 1;
  for (let i = 1; i <= a; i++) {
    sum *= i;
  }
	return sum;
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
