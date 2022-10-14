//multiplication table function
// function showMultiplicationTable(x) {
//     for (let i = 1; i < 11; i++) {
//         console.log(x + " x " + i + " = " + (i * x));
//     }
// }
//
// showMultiplicationTable(7)

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
