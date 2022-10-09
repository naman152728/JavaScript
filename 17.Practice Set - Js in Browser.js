// Take an I/p form the user about his age to check whether he can drive or not
let age = prompt("Enter your age: ");
if (age >= 18 && age <= 65) {
    alert("Yes, You can DRIVE !!");
}
else {
    alert("No, You cant DRIVE !!");
}

// Use Confirm to take input again
let con = confirm("Would you like to Enter your AGE !!")
if (con = true) {
    age1 = prompt("Enter your age: ");
    if (age1 >= 18 && age1 <= 65) {
        alert("Yes, You can DRIVE !!");
    }
    else {
        alert("No, You cant DRIVE !!");
    }
}
else {
    exit;
}

// Use console.erroe if the age is inavalid 
let age2 = prompt("Enter the Age here: ");
if (age2 <= 18 || age2 >= 70) {
    console.error("The Age is not Valid !!");
    alert("You cant DRIVE !!");
}
else {
    alert("Yes, You can DRIVE !!");
}

// Change the Background Color of the Website
alert("think about a color");
let color = prompt("Enter the color here");

document.body.style.background = color;