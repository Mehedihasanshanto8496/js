//let a = 10;
//let b = 3;

//👉 নিচেরগুলোর output বের করো:

//a + b
//a - b
//a * b
//a / b
//a % b
 
let a=10;
let b=3;
let total=a+b;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Increment / Decrement
//let x = 5;

let x=5;
console.log(x++); //  post increment mane prothome value print hobe tarpor increment hobe
console.log(++x); // pre increment mane prothome increment hobe tarpor value print hobe



// let g= 78;
let g= 78;
console.log(g++);
console.log(++g);
console.log(g--);
console.log(--g);

//let n = 10;
//n += 5;
// n *= 2;

let n = 10;
n += 5;
n *= 2;
console.log(n);

console.log(5 == "5");
console.log(5 === "5");
console.log(10 != "10");
console.log(10 !== "10");

//let age = 20;
//👉 Condition লেখো:
//age 18 এর বেশি এবং 30 এর কম হলে "Eligible"

let age =20;
if(age>18 && age<30){
    console.log("You are eligible for the job.");
}else{
    console.log("You are not eligible for the job.");
}

//let num = 7.6;

//👉 Output বের করো:

//Math.round(num)
//Math.floor(num)
//Math.ceil(num)

let num=7.6;
num=Math.round(num);
console.log(num);
let num1=7.6;
num1=Math.floor(num1);
console.log(num1);
let num2=7.6;
num2=Math.ceil(num2);
console.log(num2);

//let text = "JavaScript";

//👉 Output বের করো:

//text.length
//text.toUpperCase()
//text.indexOf("S")

let text = "JavaScript";

console.log(text.length);
console.log(text.toLocaleUpperCase());
console.log(text.indexOf("S"));


//let value = "Hello World";

//👉 Check করো এটা number কিনা
//(number না হলে "Not a number" print করো)


let value = "Hello World";
if(isNaN(value) ){         // isNaN(x) হলো JavaScript-এর built-in function (NaN = Not a Number) যা চেক করে যে x একটি সংখ্যা নয় কিনা। যদি x একটি সংখ্যা না হয়, তাহলে এটি true রিটার্ন করে, অন্যথায় false রিটার্ন করে।
    console.log("The value is a number.");
}else{
    console.log("The value is not a number.");
}

let number=13;
if(number%2==0){
    console.log("The number is even.");
} 
else{
    console.log("The number is odd.");
}
