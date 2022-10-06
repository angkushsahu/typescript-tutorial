"use strict";
/*
There are two differences between interfaces and types :
1. The way they inherit
2. The way interface can be reopened to add more properties to them while types cannot (this has already been discussed in interface.ts file)
*/
const human = {
    canSpeak: true,
    canWalk: true,
};
console.log(human);
const newHuman = {
    canSpeak: true,
    canWalk: true,
};
console.log(human);
const phone = {
    keypad: false,
    model: 14,
    generation: 10,
};
// throws an error, as types cannot be reopened
// type PhoneType = {
//     generation: number;
// }
// output of the differences
const difference = {
    interface: [
        "inherits using extend keyword, just like any other class in javascript",
        "can be re-opened to add more properties",
    ],
    type: [
        "inherits using type chaining while defining the object",
        "can NOT be re-opened to add more properties",
    ],
};
console.table(difference);
