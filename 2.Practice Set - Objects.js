 
// Q1) Write a JavaScript Program to store Name, Phone No. & Marks of a Student using Objects.

let Student = {
    Name: "Naman",
    Phone_No: "8999xxxx63",
    Marks: 87 / 100
};

console.log(Student);

// OUTPUT: { Name: 'Naman', Phone_No: '8999xxxx63', Marks: 0.87 }

// Q2) Create a Variable  of type string & try to add a no. to it.

let a = "Naman";
let b = 5;

console.log (a + b);

// OUTPUT: Naman5

// Q3) Use typeof Operator to Find the Datatype of the String in Last Question.

console.log (typeof (a+b) );

// OUTPUT: string

// Q4) Try to add a New Key to the const object in Problem 1.

Student["Pass"] = "Yes";
Student['Phone_No'] = 8999342163

console.log(Student)

// OUTPUT: { Name: 'Naman', Phone_No: 8999342163, Marks: 0.87, Pass: 'Yes' }

// Q5) Write a JS program to create a word meaning dictonary of 5 words..

const dict = {
    Naman: "It is a Name",
    Boy: "It is Gender",
    Diploma: "It is a pre-Enfineering Degree",
    CS: "Also known as Computer Science",
    Blockchain: "It is a Web3 Technology"
}

console.log (dict)

/*
// OUTPUT: 
{
  Naman: 'It is a Name',
  Boy: 'It is Gender',
  Diploma: 'It is a pre-Enfineering Degree',
  CS: 'Also known as Computer Science',
  Blockchain: 'It is a Web3 Technology'
}

*/