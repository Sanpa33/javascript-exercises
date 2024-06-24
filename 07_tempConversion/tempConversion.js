const convertToCelsius = function(degrees){
//(32 °F − 32) × 5/9 = 0 °C

  let celsius = ((degrees - 32) * (5/9)).toFixed(1);

  return parseFloat(celsius);
}
const convertToFahrenheit = function(degrees) {
//(0 °C × 9/5) + 32 = 32 °F

  let fahrenheit =  ((degrees * (9/5)) + 32).toFixed(1);
  return parseFloat(fahrenheit);

};


console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
