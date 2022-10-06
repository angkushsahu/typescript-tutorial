let tupleUser: [string, number, boolean];
tupleUser = ["something", 123, true];
console.log(tupleUser);

// these will throw errors as order matters in tuples
// tupleUser = ["something", 1234, false, true];
// tupleUser = [1234, "something", true];

// vulnerability of using tuples
type UserType = [string, number];
const newUser: UserType = ["user", 123];
newUser.push("hello"); // this is allowed, don't know why 🤔
