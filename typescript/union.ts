let data: number | string = "something";
data = 5; // this is valid as data can store string or number, this is called union

let newData: number = 5;
// newData = "hello" // this will throw an error as newData can only contain number

function testUnion(num: string | number) {
	if (typeof num === "string") {
		return num.toUpperCase();
	}
	return num + 23;
	// alternatively
	// return num.toString().toUpperCase();
}

console.log(testUnion("hello world")); // should print HELLO WORLD
console.log(testUnion(2)); // should print 25
// console.log(testUnion(true)); // will throw an error as boolean cannot be assignable to string | number

const numberArray: number[] = [1, 2, 3, 4];
const stringArray: string[] = ["1", "2", "3", "4"];
let numberOrStringArray: string[] | number[] = ["1", "2", "3", "4"]; // can either contain a string array or a number array
numberOrStringArray = [1, 2, 3, 4];
// numberOrStringArray = ["1", 2, 3, 4]; // will throw an error as it can either be a string array or number array, it cannot contain elements from both the data types

let bothStringNumberArray: (string | number)[] = ["1", 2, 3, "4"]; // this is valid

let userType: "user" | "admin" | "super-admin" = "admin";
userType = "super-admin";
userType = "user";
// userType = "any other string"; // this will throw an error as it can only contain one of the three values specified above
