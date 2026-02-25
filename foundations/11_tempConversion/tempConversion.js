const convertToCelsius = function (tempInFahrenheit) {
  tempInCelsius = (5 * (tempInFahrenheit - 32)) / 9;
  return Math.floor(tempInCelsius) === tempInCelsius
    ? +tempInCelsius
    : +tempInCelsius.toFixed(1);
};

const convertToFahrenheit = function (tempInCelsius) {
  tempInFahrenheit = (9 * tempInCelsius) / 5 + 32;
  return Math.floor(tempInFahrenheit) === tempInFahrenheit
    ? +tempInFahrenheit
    : +tempInFahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
