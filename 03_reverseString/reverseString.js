const reverseString = function(string) {

    // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    // console.log("Original String");
    // console.log(string);
    // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    // console.log("Split the string inside an array");
    // const array = string.split("");
    // console.log(array);
    // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");


    // console.log("Invert the elements inside the array");
    // array.reverse();
    // console.log(array);
    // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    

    // console.log("Join the complete array in a string");
    // console.log(array.join(""));

    return string.split("").reverse().join("");
};

console.log(reverseString("hello there"));

// Do not edit below this line
module.exports = reverseString;
