"use strict";
const anotherUser = {
    name: "Angkush Sahu",
    _id: "623141kadfj1230498",
    getAmount: num => num,
    startTrail: () => "Hello world, this is Angkush Sahu",
    db_id: "could be skipped",
    role: "admin",
};
// delete anotherUser["name"]; // causes an error as only optional keys of an object can be deleted
console.log("Before deleting");
console.log(anotherUser);
delete anotherUser["db_id"]; // deleting optional key will not cause error
console.log("After deleting");
console.log(anotherUser);
