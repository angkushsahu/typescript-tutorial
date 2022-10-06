// returning an object
function returnObject(name: string, email: string): {} {
	return {};
}

const returnObjectReturnValue = returnObject("angkush sahu", "angkush@gmail.com");
console.log(returnObjectReturnValue);

// returning an object with keys
function returnObjectWithKeys(name: string, email: string): { name: string; email: string } {
	return { name, email };
}

const returnObjectWithKeysReturnValue = returnObjectWithKeys("angkush sahu", "angkush@gmail.com");
console.log(returnObjectWithKeysReturnValue);
