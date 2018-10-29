function validInput(num1, num2){
  let checktype1 = typeof num1;
  let checktype2 = typeof num2;
  if(num1<0 || num2 <0 || checktype1 != "number" || checktype2 != "number"){
    return false;
  }
  return true;
}

const sumAll = function(num1, num2) {
  if(!validInput(num1, num2)){
    return 'ERROR';
  }
  let sumFinal = 0;
  let numStart = 0;
  let numEnd = 0;
  if(num1>num2){
    numStart = num2;
    numEnd = num1;
  }else{
    numStart = num1;
    numEnd = num2;
  }
  for(; numStart<=numEnd ; numStart++){
    sumFinal += numStart;
  }
  return sumFinal;
}

module.exports = sumAll
