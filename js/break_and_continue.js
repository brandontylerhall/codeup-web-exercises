console.log("BREAK AND CONTINUE EXERCISE:");
console.log("");

//ask for odd function
let numberToSkip = prompt("Please enter an odd number between 1 and 50");

function askForOdd() {
    while (typeof numberToSkip != "number") {
        numberToSkip = prompt("Please enter an odd number between 1 and 50");
        if (numberToSkip % 2 === 1 && numberToSkip < 50 && numberToSkip > 0) {
            break;
        }
    }

    for (let i = 1; i < 50; i++) {
        if (parseFloat(numberToSkip) === i) {
            console.log("DISGUSTING, WE SKIP " + i);
            continue
        } else if (i % 2 === 0) {
            continue
        }
        console.log("Here's a cool odd number: " + i);
    }
}

askForOdd();