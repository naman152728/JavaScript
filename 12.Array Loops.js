let num1 = [12, 23, 34, 45, 56];

// To Print the Array using For Loop
for (let i = 0; i < num1.length; ++i) {
    console.log(num1[i]);
}

// To Print the Array as in Squares i.e. A[i] * A[i]
let num2 = [1, 2, 3, 4, 5];

for (let i = 0; i < num2.length; ++i) {
    let ans = num2[i] * num2[i];
    console.log(ans);
}

// To Print the Array as in Squares i.e. A[i] * A[i] using For-Each Loop
num2.forEach((element) => {
    console.log(element * element)
})

// Use Array.from to convert a stirng into an Array
let Name = "Naman";
let arr = Array.from(Name);
console.log(arr);

// to Print an Array using For...of Loop
let num3 = [51, 42, 33, 24, 15];
for (let i of num3) {
    console.log(i);
}

// To Print the Keys(aka Index) of an Array using For...in Loop
for (let x in num3) {
    console.log(x);
}

// to Print an Array using For...in Loop
for (let y in num3) {
    console.log(num3[y]);
}