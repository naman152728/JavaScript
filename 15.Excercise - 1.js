// Guess the Number - Game
let num = prompt("Enter the No: ");
num = Number.parseInt(num);
let x = Math.random() * 100;
x = Number.parseInt(x);
// let x = Math.floor(Math.random() *100)       We can use this too.

let Score = 0;
while (true) {
    if (x == num) {
        console.log(num);
        break;
    }
    else if (num > x) {
        console.log("The X is Lesser");
        num = prompt("Enter the No: ");
        Score++;
    }
    else if (num < x) {
        console.log("The X is Greater");
        num = prompt("Enter the No: ");
        Score++;

    }
}

console.log("Yeah!! The Num is: ", num);
console.log("You're Score is: ", (100 - Score));