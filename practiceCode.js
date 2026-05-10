// var x = 30;
//if (true) {
  //  var x = 40;
//}
//console.log(x);  Output কী হবে? কেন?
var x = 30;
if (true) {
    var x = 40;
}
console.log(x);

let y = 5;
if (true) {
    let y = 15;
}
console.log(y);
//👉 let ব্যবহার করে এমন একটা variable লেখো যেটা block এর বাইরে access করা যাবে না..

if (true) {
    let x = 10;   // x শুধু এই block-এর ভিতরে আছে
    console.log(x); // ✅ 10 (কাজ করবে)
}

console.log(x); // ❌ Error: x is not defined

// Output - JAVASCRIPT
let name = 'Javascript';
console.log(name.toUpperCase());
// Output - dhaka 
let city='Dhaka';
console.log(city.toLowerCase());
// let text = "HeLLo WoRLD"; সব uppercase করো সব lowercase করো. 
let text='HeLLo WoRLD';
console.log(text.toUpperCase());
console.log(text.toLowerCase());
// let str = "I love JavaScript"; 1️⃣ "JavaScript" এর index বের করো 2️⃣ "Python" এর index বের করো 
let str='I love JavaScript';
console.log(str.indexOf('JavaScript'));
console.log(str.indexOf('python'));
// let word = "banana"; "a" প্রথম কোথায় আছে তার index বের করো
let word='Banana';
console.log(word.indexOf('a'));

let sentence = "I am learning JavaScript";
let result=sentence.split(",");
console.log(result);
 let fruit = "apple,banana,orange";
 let result1=fruit.split(",");
    console.log(result1);
    let date = "2024-06-01";
    let result2=date.split("-");
    console.log(result2);
