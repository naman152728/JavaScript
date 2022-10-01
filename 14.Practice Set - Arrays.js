/*
// Create an Array & add the Elements by taking input from the User.
let arr1 = [1, 2, 3, 4, 5];
let a = prompt("Enter the No. ");
a = Number.parseInt(a);
arr1.push(a);
console.log(arr1);

// Create an Array & add the Elements by taking input from the User until its 0;
let arr2 = [12, 23, 34, 45];
let b;
do {
    b = prompt("Enter the No: ");
    b = Number.parseInt(b);
    arr2.push(b);
} while (b != 0)

console.log(arr2);
*/
// Filter the No. from the array which is divisible by 10
let arr3 = [1, 5, 10, 15, 20];
let c = arr3.filter((value) => {
    return value % 10 == 0;
})
console.log(c);

// Create an Array which returns the Square of the Elements
let arr4 = [2, 4, 6, 8, 10];
let d = arr4.map((x) => {
    return x * x;
})
console.log(d);

// Create the Factorial using Reduce() in an Array
let arr5 = [1, 2, 3, 4, 5];
let e = arr5.reduce((num1, num2) => {
    return num1 * num2
})
console.log(e);