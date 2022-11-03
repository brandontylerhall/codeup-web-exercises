// Write a function that when passed an array will return the longest string from the array.
function longestString(arr) {
	let longestStr = ""

	for (let str of arr) {
		if (str.length > longestStr.length) {
			longestStr = str
		}
	}
		return longestStr
}

const arr = ["Plutonium", "Argon", "Nickle", "Helium"];

console.log("The longest string in the array is '" + longestString(arr) + "'");


//Write a function that takes in an array of objects and returns the object with the largest height property
function tallestHammie(hamsters) {
	let tallestHam = {heightInMM: 0}

	for (let tallBoy of hamsters) {
		if (tallBoy.heightInMM > tallestHam.heightInMM) {
			tallestHam = tallBoy
		}
	}
	return tallestHam
}

const hamsters1 = [
	{
		name: "Hamtaro",
		heightInMM: 86,
		fur: ['orange', 'white'],
		gender: "male",
		dateOfBirth: "August 6"
	} , {
		name: "Bijou",
		heightInMM: 75,
		fur: ['white'],
		gender: "female",
		dateOfBirth: "July 10"
	} , {
		name: "Oxnard",
		heightInMM: 100,
		fur: ['grey', 'white'],
		gender: "male",
		dateOfBirth: "May 3"
	} , {
		name: "Boss",
		heightInMM: 120,
		fur: ['brown', 'white'],
		gender: "male",
		dateOfBirth: "September 21"
	} , {
		name: "Snoozer",
		heightInMM: 85,
		fur: ['brown', 'white', "pink"],
		gender: "male",
		dateOfBirth: "January 14"
	}
];

console.log(tallestHammie(hamsters1));
// should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};

function fizzBuzz() {
	for (let i = 1; i < 101; i++)
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		} else if (i % 3 === 0) {
			console.log("Fizz");
		} else if (i % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
}

fizzBuzz();

//Write a function that takes in an array of objects and returns the average of the heightInMM properties from each object.
const hamsters2 = [
	{
		name: "Hamtaro",
		heightInMM: 86,
		fur: ['orange', 'white'],
		gender: "male",
		dateOfBirth: "August 6"
	} , {
		name: "Bijou",
		heightInMM: 75,
		fur: ['white'],
		gender: "female",
		dateOfBirth: "July 10"
	} , {
		name: "Oxnard",
		heightInMM: 100,
		fur: ['grey', 'white'],
		gender: "male",
		dateOfBirth: "May 3"
	} , {
		name: "Boss",
		heightInMM: 120,
		fur: ['brown', 'white'],
		gender: "male",
		dateOfBirth: "September 21"
	} , {
		name: "Snoozer",
		heightInMM: 85,
		fur: ['brown', 'white', "pink"],
		gender: "male",
		dateOfBirth: "January 14"
	}
];

function getAverageHeight(array) {
	let totalHeight = 0

	for (let element of array) {
		totalHeight += element.heightInMM;
	}
	return totalHeight / array.length;
}

console.log(getAverageHeight(hamsters2));
//should return 93.2