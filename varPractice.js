// 01.Create a variable to store your name, and then use string methods to change it to uppercase and find the length of the string. 


 let name = "John"

let upperName = name.toUpperCase();
let nameLength = name.length;

console.log("Uppercase Name:", upperName);
console.log("Length of Name:", nameLength);

// 02. Number Operations: Create two variables with numbers, add them, multiply them, and log the results
var a=20,b=30;
console.log(a+b);
console.log(a*b);

// 03 . Type Conversion:Take a string that represents a number (like "10"), convert it to a number type, and then add it to another number
var number="10";
console.log("Number:",number);
var Type=10;
console.log("NumberType:",Type);
console.log(typeof Type);
var digit=25;
console.log("Addition:",Type+digit);

// 04.Boolean Values:Create a variable with a boolean value (true or false). Then, use it in a simple if statement to print a message.
 
var isRaining = true;

if (isRaining) {
    console.log("Don't forget your umbrella");
} else {
    console.log("It's a sunny day, enjoy");
}


// 05.Concatenation:Concatenate your name with your age (using template literals or the + operator) and display the result

var MyName="Shanto"
var MyAge="25";
var Occupation="student";

var Result="My name is " + MyName+ " and I am " + MyAge + " years old";
console.log(Result);

var Result1="My name is " + MyName + " I am " + MyAge +
" years old. I am a  " + Occupation + ".";
console.log(Result1);
 