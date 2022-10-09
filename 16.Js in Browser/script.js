console.clear()
console.log(console);
console.info("info");
console.error("err");
console.warn("warn");
console.assert(12 < 2);

// Use Console.table
obj = {
    a: "Alpha",
    b: "Beta",
    c: "Charlie"
}
console.table(obj);

console.time("A");
console.timeEnd("A");

alert("The script is working..");

let age = confirm("Are you 18+ & above ??");
if (age == true) {
    alert("You're good to go ahead");
}
else {
    alert("You cant proceed ahead");
}


alert("Think about the Num");
let a = prompt("Enter the Num here..");
a = Number.parseInt(a);
alert("The value of a is: " + (typeof a));
alert("The Num is: " + a);