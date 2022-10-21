// Write a function that when passed an array will return the longest string from the array.
// 	Ex. const arr = [“Green”, “Blue”, “Periwinkle”];
// getLongestString(arr) // Returns “Periwinkle”

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
