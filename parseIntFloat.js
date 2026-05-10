var num = 30;
var num1=39;
console.log(num+num1);
var num3='60';
num4='59.58658';
num3=parseInt(num3); // string type k - number type int krte 
num4=parseFloat(num4); // number type float
var total=num3+num4;
console.log(total);
var num5=100;
var num6=300;
num5=""+num5;     // "" use kra mane string type taii string a convert krte "" use hy 
num6=""+num6;
console.log(num5+num6);




let a ="10";
a=parseInt(a);
console.log(a);
let b="25px";
b=parseInt(b);
console.log(b);
let c ="007";
c=parseInt(c);
console.log(c);
let d="12.99";
d=parseFloat(d);
console.log(d);
let e="abc123";
e=parseInt(e);
console.log(e); 
let x="12.75";
x=parseFloat(x);
console.log(x);
let y="99.99tk";
y=parseFloat(y);
console.log(y);
let z="45.50.30";
z=parseFloat(z);
console.log(z);
let price ="499.99";
let quantity="3";
price=parseFloat(price);
quantity=parseInt(quantity);
let totalPrice=price*quantity;
console.log(totalPrice);
 





// Bujinaii haha 
let input = "abc";
let num20 = parseInt(input);

if (isNaN(num20)) {
    console.log("Invalid number");
} else {
    console.log(num20);
}