const removeFromArray = function() {
   let originalArray = arguments[0];
  for(let i = 1 ; i < arguments.length ; i++){
    for(let i2 = 0 ; i2 < originalArray.length ; i2++){
      if(originalArray[i2] == arguments[i]){
        originalArray.splice(i2, 1);
      }
    }
  }
  return originalArray;
}

module.exports = removeFromArray
