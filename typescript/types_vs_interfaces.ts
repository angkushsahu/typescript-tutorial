/*
There are two differences between interfaces and types :
1. The way they inherit
2. The way interface can be reopened to add more properties to them while types cannot (this has already been discussed in interface.ts file)
*/

// Difference 1 : The way they inherit
// Types
type AnimalType = {
	canSpeak: boolean;
};
type HumanType = AnimalType & {
	// inheritance
	canWalk: boolean;
};

const human: HumanType = {
	canSpeak: true,
	canWalk: true,
};
console.log(human);

// Interfaces
interface IAnimal {
	canSpeak: boolean;
}
interface IHuman extends IAnimal {
	// inheritance
	canWalk: boolean;
}

const newHuman: IHuman = {
	canSpeak: true,
	canWalk: true,
};
console.log(human);

// Difference 2 : The way interface can be reopened to add more properties to them while types cannot (this has already been discussed in interface.ts file)

interface IPhone {
	keypad: boolean;
	model: number;
}
interface IPhone {
	// reopened to add more properties, does not throw any error in case of interface
	generation: number;
}

const phone: IPhone = {
	keypad: false,
	model: 14,
	generation: 10,
};

type PhoneType = {
	keypad: boolean;
	model: number;
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
