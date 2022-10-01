// To find the Typeof an Array
let num = [11, 22, 33, 44, 55];
console.log(typeof num);

// To canvert an Array [Object] to a String
let a = num.toString();
console.log(a, typeof a);

// To do the Joining/Formatting of an Array
let b = num.join("=");
console.log(b, typeof b);

b = num.join("/");
console.log(b);

// To add an Element using Push()
let d = num.push(66)
console.log(num);
console.log(d);                         // Returns the Array Length

// To remove an Element using Pop()
let e = num.pop();
console.log(num);
console.log(e);                         // Returns the Last Element

// To Remove the First Element using Shift()
let f = num.shift();
console.log(num);
console.log(f);                         // Returns the First Element

// To Add the First Element using Unsift()
let g = num.unshift(12);
console.log(num);
console.log(g);                         // Returns the Array Length

// To Delete an Element from an Array
delete num[1];
console.log(num);
console.log(num.length);

// To Join the Array using Concat()
let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10];
let New_num = num1.concat(num2);
console.log("New Num Array is: \n", New_num);

// To Sort an Array
let num3 = [12, 34, 46, 14, 5, 68, 4, 2, 67];
num3.sort();                            // It sorts an Array in Alphabtically Order, i.e. 1...,2.... & so on
console.log(num3)

// Sort an Array in Ascending order using Compare() 
let compare_Asc = (a, b) => {
    return a - b;
}
num3.sort(compare_Asc);                 // We can use Compare() to order the Array in Ascending order
console.log(num3);

// Sort an Array in Descending order using Compare() 
let compare_Dec = (a, b) => {
    return b - a;
}
num3.sort(compare_Dec);                 // We can use Compare() to order the Array in Descending order
console.log(num3);

// To Reverse an Array
let num4 = [22, 43, 46, 5, 78, 6, 43, 2, 34, 65];
num4.reverse();                         // It Reverses an Array ..
console.log(num4);

// Add new Elemens in an Array using Splice()
let num5 = [1, 2, 3, 4, 5];
num5.splice(2, 1, 100, 101, 102);       // [index of to be Added, items to be removed, Elements to be Added...]
console.log(num5);

// To Create a new Array from the existing array using Slice()
let num6 = [12, 23, 34, 45, 56, 67];
let h = num6.slice(3);                  // It Creates a new Array from Index[3] till the End...
console.log(h);
console.log(num6);

let i = num6.slice(1, 3);                   // It Creates a new Array from Index[1] till Index[3]....
console.log(i);

// Note: In Index Of (x,y), The Array will be created from 'x' till 'y' but 'y' will not be included in it. 