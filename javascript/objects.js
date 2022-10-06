"use strict";
// returning an object
function returnObject(name, email) {
    return {};
}
const returnObjectReturnValue = returnObject("angkush sahu", "angkush@gmail.com");
console.log(returnObjectReturnValue);
// returning an object with keys
function returnObjectWithKeys(name, email) {
    return { name, email };
}
const returnObjectWithKeysReturnValue = returnObjectWithKeys("angkush sahu", "angkush@gmail.com");
console.log(returnObjectWithKeysReturnValue);
