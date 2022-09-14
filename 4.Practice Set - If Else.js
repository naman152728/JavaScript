// Use logical Operators to find whetherthe age of person lies between10 & 20
let age = prompt("What is your Age? ")
if (age > 10 && age < 20) {
    console.log("true");
}
else {
    console.log("False");
}


// Write a JS program to find whether a no. is divisible by 2 & 3 or either by 2 or 3.
let num = prompt("Enter the Number: ");
if (num % 2 == 0 && num % 3 == 0) {
    console.log("The Number is divisible by 2 & 3.");
}
else if (num % 2 == 0 || num % 3 == 0) {
    if (num % 2 == 0) {
        console.log("The Number is only divisible by 2.");
    }
    else {
        console.log("The Number is only divisible by 3.");
    }
}
else {
    console.log("The Number is not divisible by 2 or 3.");
}


// Print "You can Drive" or "You cannot Drive" based on the Age being greater thn 18 using Ternary Operator.
let Age = prompt("Enter the Age: ");
let ans = (Age > 18) ? console.log("You can Drive.") : console.log("You cannot Drive.")
