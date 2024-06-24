const sumAll = function(num1,num2) {

  let sum=0;

  num1Validation = typeof num1;
  num2Validation = typeof num2;

  //console.log(num1Validation);
  //console.log(num2Validation);

  if(num1Validation !== "number" || num2Validation !== "number"){
    return "ERROR";
  }
  
  if(num1 < 0 || num2 < 0){
    return "ERROR";
  }

  if(num1 > num2){
  for(let i = num2 ; i <= num1 ; i++){
    sum += i;
  }
  } 

  if(num2 > num1){
    for(let i = num1 ; i <= num2 ; i++){
      sum += i;
    }
    } 

  return sum;
};

console.log(sumAll([2,3],4));
console.log(sumAll("2",4));
console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
