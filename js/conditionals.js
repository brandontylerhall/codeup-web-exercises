// "use strict";
//
// /* ########################################################################## */
//
// /**
//  * TODOne:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *
//  *
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console logging the function's return value
//  */
//
// // function analyzeColor(color) {
// //     if (color === "red") {
// //         console.log("Red the color of strawberries");
// //     } else if (color === "orange") {
// //         console.log("Orange is the color of oranges");
// //     } else if (color === "yellow") {
// //         console.log("Yellow is the color of dandelions");
// //     } else if (color === "green") {
// //         console.log("Green is the color of mint");
// //     } else if (color === "blue") {
// //         console.log("Blue is the color of a clear lake");
// //     } else {
// //         console.log("I don't know nothin' about no " + color);
// //     }
// // }
// //
// // let color = prompt("Hey, what's your favorite color?").toLowerCase()
// //
// // analyzeColor(color)
//
// // Don't change the next two lines!
// // These lines create two variables for you:
//
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
//
// // let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// // let randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// /**
//  * TODOne:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
//
// // console.log(analyzeColor(randomColor));
//
// /**
//  * TODOne:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */
//
// function analyzeColor(color) {
//     switch (color) {
//         case "red":
//             console.log("Red is the color of strawberries");
//             break;
//         case "orange":
//             console.log("Orange is the color of oranges");
//             break;
//         case "yellow":
//             console.log("Yellow is the color of dandelions");
//             break;
//         case "green":
//             console.log("Green is the color of mint");
//             break;
//         case "blue":
//             console.log("Blue is the color of a clear lake");
//             break;
//         default:
//             console.log("I don't know nothin' about no " + color);
//             break;
//     }
// }
//
// /**
//  * TODOne:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
// let color = prompt("Hey, what's your favorite color?").toLowerCase()
//
// analyzeColor(color)
//
// /* ########################################################################## */
//
// /**
//  * TODOne:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0, you have
//  * no discount; if your lucky number is 1, you'll get a 10% discount; if it's 2,
//  * the discount is 25%; if it's 3, 35%; if it's 4, 50%; and if it's 5, you'll get
//  * everything for free!
//  *
//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
// alert("Hello, today at Walmart we are having a wonderful limited time promotion!");
//
// function calculateTotal (luckyNumber, cartPrice) {
//     switch (luckyNumber) {
//         case 0:
//             return cartPrice;
//         case 1:
//             return cartPrice - (cartPrice * 0.1).toFixed(2);
//         case 2:
//             return cartPrice - (cartPrice * 0.25).toFixed(2);
//         case 3:
//             return cartPrice - (cartPrice * 0.35).toFixed(2);
//         case 4:
//             return cartPrice - (cartPrice * 0.5).toFixed(2);
//         case 5:
//         default:
//             return cartPrice;
//     }
// }
//
// /**
//  * TODOne:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
//
// let cartPrice = parseFloat(prompt("First, please enter your Walmart cart total in dollars."));
//
// alert("Now, we are going to randomly choose a number between 0 and 5. The higher the number, the more you save!");
//
// let luckyNumber = Math.floor(Math.random() * 6);
//
// function displayDiscount (luckyNumber, cartPrice) {
//     switch (luckyNumber) {
//         case 0:
//             alert("Sorry, your number is a 0, just like you. You don't get to partake in any of these insane savings. NERD.")
//             break;
//         case 1:
//             alert("Nice, you rolled a " + luckyNumber + "! For that, you earned yourself a measly 10% discount! \r" +
//                 "Your new total is: $" + cartPrice + "!");
//             break;
//         case 2:
//             alert("Nice, you rolled a " + luckyNumber + "! For that, you earned yourself a cool 25% discount! \r" +
//                 "Your new total is: $" + cartPrice + "!")
//             break;
//         case 3:
//             alert("Nice, you rolled a " + luckyNumber + "! For that, you earned yourself a nice 35% discount! \r" +
//                 "Your new total is: $" + cartPrice + "!")
//             break;
//         case 4:
//             alert("Nice, you rolled a " + luckyNumber + "! For that, you earned yourself a whopping 50% discount! \r" +
//                 "Your new total is: $" + cartPrice + "!")
//             break;
//         case 5:
//             alert("Wow, you rolled the FREE-EST number, " + luckyNumber + "! \r" +
//                 "For that, everything in your cart is $FREE.99!");
//             break;
//         default:
//             alert("You didn't follow the rules so you don't get any savings, NERD.");
//     }
// }
//
// console.log(calculateTotal(luckyNumber, cartPrice));
// displayDiscount(luckyNumber, calculateTotal(luckyNumber, cartPrice));
//
// /**
//  * TODOne:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */
//
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        alert("Your number is even");
    } else {
        alert("Your number is odd");
    }
}

function plus100(number) {
    alert("Your number 100 greater is " + (number + 100) + ".");
}

function positiveOrNegative(number) {
    if (number >= 0) {
        alert("Your number is positive.");
    } else {
        alert("Your number is negative.");
    }
}

if (confirm("Would you care to enter a number?")) {
        let number = parseInt(prompt("Fine... Please enter a whole number, then."));
    if (!isNaN(number)) {
        isEvenOrOdd(number);
        plus100(number);
        positiveOrNegative(number);
    } else {
        alert("I thought you wanted to give me a number... you didn't... you forsook me...")
    }
} else {
    alert("Then why did you call me...? Weirdo...")
}