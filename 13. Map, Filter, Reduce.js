// Array Map() Method
let arr1 = [12, 233, 445, 5456];
// console.log(arr);

// To Print the New array using Value
let a = arr1.map((value) => {
    console.log(value);
    return value;                   // Returns the arr1ay Element
})
console.log(a);

// To Print the New array using Value & Index
let b = arr1.map((value, index) => {
    console.log(value, index);
    return value + index;           // Returns A[i] + i
})
console.log(b);

// To Print the New arr1ay using Value & Index & Array
let c = arr1.map((value, index, array) => {
    console.log(value, index, array);
    return index;                   // Returns Index
})
console.log(c);

// Array Filter() Method
let arr2 = [12, 23, 34, 45, 56];

// To Print an Array Elements which is less than 35
let d = arr2.filter((value) => {
    return value < 35;              // RRetuens the Filtered Elements
})
console.log(d, arr2);

// Array Reduce() Method
let arr3 = [1, 2, 3, 4, 5];

// To Print the Sum of the Array Elements
let e = arr3.reduce((num1, num2) => {
    return num1 + num2;
})
console.log(e);

// To Print the Difference of the Array Elements
let f = arr3.reduce((num1, num2) => {
    return num1 - num2;
})
console.log(f);

// To Print the Product of the Array Elements
let g = arr3.reduce((num1, num2) => {
    return num1 * num2;
})
console.log(g);

// To Print the Divison of the Array Elements
let h = arr3.reduce((num1, num2) => {
    return num1 / num2;
})
console.log(h);
