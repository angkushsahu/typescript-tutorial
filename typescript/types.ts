type User = {
	readonly _id: string;
	name: string;
	phone?: number; // this property may or may not exist in the objects, that is the reason it is marked with a question mark
};

const user: User = {
	_id: "243895djs3492578asdf",
	name: "Angkush Sahu",
};

console.log(user);

user.name = "Hello world";
console.log(user);

// the code below causes error as _id is assigned as readonly property and hence cannot be overwritten
// user._id = "something else";
// console.log(user);

type CardNumber = {
	cardNumber: number;
};
type CardType = {
	cardType: string;
};
type CardDetails = CardNumber &
	CardType & {
		cvv: number;
	};

const card: CardDetails = {
	cvv: 500,
	cardNumber: 1234567890123456, // we need to have this field or typescript will throw error
	cardType: "upi", // we need to have this field or typescript will throw error
};

console.log(card);
