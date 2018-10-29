const ftoc = function(temperature) {
  let convertedTemp = (temperature-32)*(5/9);
  return parseFloat(convertedTemp.toFixed(1), 10);
}

const ctof = function(temperature) {
  let convertedTemp = temperature*(9/5)+32;
  return parseFloat(convertedTemp.toFixed(1), 10);
}

module.exports = {
  ftoc,
  ctof
}
