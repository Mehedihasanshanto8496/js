/*1️⃣ Age Checker

একটা variable age নাও।

age ≥ 18 → "Adult"
না হলে → "Minor"

👉 if / else ব্যবহার করো */


var age=20;
if(age>=18 ){
    console.log("Adult");
}else{
    console.log("Minor");
}

/*2️⃣ Even or Odd

একটা number নাও।

even হলে → "Even"
odd হলে → "Odd"

👉 if / else */

var number = 100;
if (number %2 ===0){
    console.log("Even");
}else{
    console.log("Odd");
}


/* Project 1: ATM System (Basic)

Variables:

balance
withdrawAmount

Rules:

withdrawAmount ≤ balance → "Transaction Success"
withdrawAmount > balance → "Insufficient Balance"

👉 if / else */

var balance = 10000;
var withdrawAmount= 4200;


if (withdrawAmount<=balance){
    console.log("Transaction success");
} else if ( withdrawAmount>balance){
    console.log("Insufficient Balance");
}
else{
    console.log("Failed");
}