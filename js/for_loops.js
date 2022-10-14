console.log("FOR LOOPS EXERCISE:");
console.log("");

//multiplication table function
function showMultiplicationTable(x) {
    for (let i = 1; i < 11; i++) {
        console.log(x + " x " + i + " = " + (i * x));
    }
}

showMultiplicationTable(7)

//random even number function
function evenNum() {
    for (let i = 1; i < 11; i++) {
        let random = Math.floor((Math.random() * 200) + 20)
        if (random % 2 === 0) {
            console.log(random + " is even");
        } else {
            console.log(random + " is odd");
        }
    }
}

evenNum();

//pyramid function
    //answer found: https://stackoverflow.com/questions/1877475/repeat-a-string-in-javascript-a-number-of-times
function pyramid() {
    for (let i = 1; i < 10; i++) {
        console.log(Array(i + 1).join(i));
    }
}

pyramid();

//decrement loop
function minus5() {
    for (let i = 100; i > 0; i -= 5) {
        console.log(i);
    }
}

minus5();

console.log("");