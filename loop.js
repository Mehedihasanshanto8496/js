// Prothome array ti declare korte hobe
const cars = ["Toyota", "Tesla", "BMW", "Audi"];

// Tarpor loop ti kaj korbe
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}  
 
// 1 থেকে 10 পর্যন্ত সংখ্যা print করো


for (i=1; i<=10; i++){
    console.log(i);
}

// 1 থেকে 20 পর্যন্ত শুধু even সংখ্যা print করো


for(i=2; i<=20; i+=2){
    console.log(i);
}


//10 থেকে 1 পর্যন্ত উল্টো করে print করো


for(i=10; i>=1; i--){
    console.log(i);
}


// array-এর সব element print
// var arr = [10, 20, 30, 40, 50];
var arr = [10, 20, 30, 40, 50];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



var numbers= [5,10,15,20];
var sum =0;
for (var i=0; i<numbers.length; i++){
    sum+=numbers[i];
}
console.log(sum);



//array-এর সব element এর sum
var numbers= [30,50,60,80];
var sum=0;
for (i=0; i<numbers.length; i++){
    sum+=numbers[i];
}
console.log(sum);



//array-এর সব element এর multiplication
var num=[1,4,7,9];
var mul=1;
for(i=0; i<num.length;i++){
    mul*=num[i];
}
console.log(mul);







