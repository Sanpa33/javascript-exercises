function removeFromArray(array, ...valuesToRemove) {
  return array.filter(item => !valuesToRemove.includes(item));
}

let array = ["hey", 4, 3, 4, 5];

console.log(removeFromArray(array,"hey",3,4,"5"));


// Do not edit below this line
module.exports = removeFromArray;
