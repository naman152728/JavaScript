let Name = "Naman";
console.log(Name.length);
// 5                     Prints the Length

console.log(Name.toUpperCase());
// NAMAN                Prints the Name in Uppercase Characters

console.log(Name.toLowerCase());
// naman                Prints the Name in Lowercase Characters

console.log(Name.slice(1, 3));
// am                   Prints the Characters of index 'n+1' till 'n-1'

console.log(Name.slice(2));
// man                  Prints the Characters from 'n+1' till the end of the String.

let friend = "Avej & Om";
console.log(Name.concat(" is a friend of ", friend));
// Naman is a friend of Avej & Om       Prints the 2 Strings by Joining them.

Name = "Naman Bhai";
console.log(Name.replace("Bhai", "Bhau"));
// Naman Bhau           Prints the whole string with the Replaced Word.

let Num = "     1 2 3 4 5       ";
console.log(Num.trim());
//1 2 3 4 5             Prints the String by Trimming the Spaces.

let Val = "Harry";
console.log(Val[0]);            // Prints the Character of index i.e - H
console.log(Val[1]);            // Prints the Character of index i.e - a
console.log(Val[2]);            // Prints the Character of index i.e - r
console.log(Val[3]);            // Prints the Character of index i.e - r
console.log(Val[4]);            // Prints the Character of index i.e - y