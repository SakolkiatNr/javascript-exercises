const convertToCelsius = function(farenheit) {
    const celsius = ((farenheit - 32) * 5 / 9).toFixed(2);
    return celsius;
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = ((celcius * 9 / 5) + 32).toFixed(2);
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
