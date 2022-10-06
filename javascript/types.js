"use strict";
const user = {
    _id: "243895djs3492578asdf",
    name: "Angkush Sahu",
};
console.log(user);
user.name = "Hello world";
console.log(user);
const card = {
    cvv: 500,
    cardNumber: 1234567890123456,
    cardType: "upi", // we need to have this field or typescript will throw error
};
console.log(card);
