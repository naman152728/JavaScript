let marks1 = [94, 78, 86, 91];
console.log(marks1);
// [ 94, 78, 86, 91 ]

let marks2 = [88, 69, false, null, undefined, "Not Present"];

console.log(marks2[0]);             // 88
console.log(marks2[1]);             // 69
console.log(marks2[2]);             // false
console.log(marks2[3]);             // null
console.log(marks2[4]);             // undefined
console.log(marks2[5]);             // Not Present
console.log(marks2[6]);             // undefined

console.log("The Length of Marks1 is: ", marks1.length);
// The Length of Marks1 is:  4

console.log("The Length of Marks2 is: ", marks2.length);
// The Length of Marks2 is:  6

marks2[6] = 32; 
console.log(marks2);
// [ 88, 69, false, null, undefined, 'Not Present', 32 ]

console.log(typeof marks1);         // object
console.log(typeof marks2);         // object

// Print an Array using For Loop..
for (let i = 0; i <= marks2.length; i++)
{
    const variable = marks2[i];
    console.log(variable);
}