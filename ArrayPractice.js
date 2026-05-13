//Array-এর শেষে 60 যোগ করো।
var num=[10,20,30,40,50];
num.push(60);
console.log(num);


//Array-এর শেষের element remove করো।

num.pop();
console.log(num);


//Array-এর শুরুতে 5 যোগ করো।

var num=[10,20,30,40,50];
num.unshift(5);
console.log(num);
//Array-এর প্রথম element remove করো।
console.log(num.shift());
console.log(num);
      

//30 আর 40 কে নিয়ে নতুন array বানাও

var arr=[10,20,30,40,50];
arr=arr.slice(2,4);
console.log(arr);


//20 আর 30 কে remove করো

var arr=[10,20,30,40,50];
arr.splice(1, 2);
console.log(arr);



// 40 remove করে তার জায়গায় 45 বসাও

var arr=[10,20,30,40,50];
arr.splice(3,1,45);
console.log(arr);


//20 আর 30 এর মাঝখানে 25 ঢুকাও
var arr=[10,20,30,40,50];
arr.splice(2,0,25);
console.log(arr);




/* var names = ["shanto","nahid","sagor","hridoy"];

1️⃣ শেষে "hasan" যোগ করো
2️⃣ প্রথম element remove করো
3️⃣ "sagor" আর "hridoy" কেটে ফেলো
4️⃣ "mehedi" শুরুতে ঢুকাও */



var names=["shanto","nahid","sagor","hridoy"];
names.push("hasan");
console.log(names);
names.shift();
console.log(names);
names.slice(1,3);
console.log(names);
names.unshift("Mehedi");
console.log(names);