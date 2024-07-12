const convertToCelsius = function(tempinFarenheit) {
  let tempinCelcius = (tempinFarenheit - 32) * (5/9);
  
  if (tempinCelcius % 1 === 0) {
    return Number(tempinCelcius);
  } else {
    tempinCelcius = tempinCelcius.toFixed(1);
    return Number(tempinCelcius);
  }

};

const convertToFahrenheit = function(tempinCelcius) {
  let tempinFarenheit = (tempinCelcius * (9/5)) + 32;
  

  if (tempinFarenheit % 1 === 0) {
    return Number(tempinFarenheit);
  } else {
    tempinFarenheit = tempinFarenheit.toFixed(1);
    return Number(tempinFarenheit);
  }
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
