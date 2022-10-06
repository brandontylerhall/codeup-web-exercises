//introductions
console.log("Hello from external JavaScript")

alert("Welcome to my Website!");

// //favorite color prompt
let favColor = prompt("Hello, what is your favorite color?");

alert("Wow, " + favColor + " is my favorite, too!");

//movie price prompt
let mermaid = parseInt(prompt("How many days would you like to rent 'The Little Mermaid?' for"));
let bear  = parseInt(prompt("How many days would you like to rent 'Brother Bear' for?"));
let hercules  = parseInt(prompt("How many days would you like to rent 'Hercules' for?"));
let moviePrice = 3

alert("Your total movie price will be: $" + ((mermaid + bear + hercules) *  moviePrice))

//contractor prompt
alert("In the next question, we are assuming you work for Amazon, Google, and Facebook at the same time, earning different wages at each company.")
const facebookPay = 350
const googlePay = 400
const amazonPay = 380

let facebookHrs = parseInt(prompt("How many hours did you work at Facebook this week?"))
let googleHrs = parseInt(prompt("How many hours did you work at Google this week?"))
let amazonHrs = parseInt(prompt("How many hours did you work at Amazon this week?"))

alert("Congrats! Your hard work earned you $" + ((facebookPay * facebookHrs) + (googlePay * googleHrs) +(amazonHrs * amazonPay)) + " this week!")

//class enrollment prompt
let userClass = prompt("Which class are you thinking of attending?")

let classAvail = !confirm("Is that class full?")

alert("Your eligibility for " + userClass + " is " + classAvail)

//premium member prompt
let premium = confirm("Are you a PREMIUM member of our establishment?");
    if (premium == true) {
        let expiration = confirm("Has the offer for your discount expired?");
            if (expiration == false) {
                alert("Enjoy your savings then :)");
            } else {
                alert("Your discount has expired :(");
            }
    } else {
        let cartSize = parseInt(prompt("How many items do you have in your cart?"));
        if (cartSize <= 1) {
            alert("You do not qualify for our discount :(");
        } else {
            let expiration2 = confirm("Has the offer for your discount expired?");
            if (expiration2 == false) {
                alert("Enjoy your savings then :)");
            } else {
                alert("Your discount has expired :(")
            }
        }
    }