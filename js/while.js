console.log("WHILE EXERCISE:");
console.log("");

//times 2 function
// function times2() {
//     let x = 1
//     while (x < 65536) {
//         console.log(x * 2);
//         x *= 2
//     }
// }
//
// times2();

//ice cream function
let conesToSell = Math.floor(Math.random() * 50) + 50;
let customerCones = Math.floor(Math.random() * 5) + 1;

function iceCreamLady() {
    do {
        if (customerCones > conesToSell) {
            console.log("I can't sell you " + customerCones + " cones, I only have " + conesToSell + " left... :(");
        } else if (conesToSell - customerCones === 0) {
            console.log("I am finally relinquished from these unholy dairy treats!");
        } else {
            console.log(customerCones + " cones sold... still more to sell...");
        }
    } while (conesToSell < 6);
}

iceCreamLady();