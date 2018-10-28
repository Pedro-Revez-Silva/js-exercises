const reverseString = function(inputString) {
  let outputString = '';
  let counter = inputString.length - 1;
  
  for(;counter >= 0; counter--){
    outputString += inputString[counter];
  }
  return outputString;
}

module.exports = reverseString;
