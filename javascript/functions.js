"use strict";
// first function example
function multiplyTwo(num) {
    // we don't have to check if the argument passed (num in this case) is a number or not as it is always going to be number as inferred above
    // also, if we try to return any other type except number, then typescript compiler will throw error as it is always going to return number as specified above
    return num * 2;
}
let multiplyTwoReturnValue = multiplyTwo(250);
console.log(multiplyTwoReturnValue);
// second function example
function acceptNumberButReturnString(num) {
    return "hello world";
}
const acceptNumberButReturnStringReturnValue = acceptNumberButReturnString(25);
console.log(acceptNumberButReturnStringReturnValue);
// using arrow functions
const addTwo = (num) => num + 2;
const addTwoReturnValue = addTwo(5);
console.log(addTwoReturnValue);
// using arrow functions with more than one possible return value
const returnStringOrBoolean = (num) => num > 5 ? true : "not greater than 5";
const returnStringOrBooleanReturnValue = returnStringOrBoolean(4);
console.log(returnStringOrBooleanReturnValue);
const consoleLog = (num) => console.log(num);
consoleLog(19);
