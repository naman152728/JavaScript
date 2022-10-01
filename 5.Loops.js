// For Loop

// Program to find the sum of N natural no.
let sum = 0
let num = prompt("Enter the Num:")
num = Number.parseInt(num)
for (let i = 0; i <= num; i++)
{
    sum += i;
}

console.log(sum);
