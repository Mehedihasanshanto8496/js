
/*Array-এর সব সংখ্যার average বের করো
var nums = [10, 20, 30, 40]; */


var nums=[10,25,30,40];
var sum=0;
for (i=0; i<nums.length; i++){
    sum+=nums[i];
}
var avg =sum/nums.length;
console.log(avg); 



/*Array-এর সব সংখ্যার maximum বের করো*/

var nums = [5, 12, 3, 25, 8];
var max = nums[0];

for (var i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i];
    }
}

console.log(max);




//Array-এর সব সংখ্যার minimum বের করো
var nums=[5,6,90,23,56,87];
var min=nums[0];
for (i=1;i<nums.length;i++){
    if(nums[i]<min){
        min=nums[i];
    }
}
console.log(min);




//Array-এর সব element এর মধ্যে থেকে শুধু even সংখ্যা print করো

var num=[1,2,3,4,7,13,523,632,33,56];

for (i=0;i<num.length;i++){
     if(num[i]%2===0){
        console.log(num[i]);
     }
}
   



//Array-এর odd সংখ্যাগুলোর sum বের করো
var nums=[1,2,3,4,5];
var sum=0;
for (i=0;i<nums.length;i++){
    if(nums[i]%2!==0){
        sum+=nums[i];
    }

}   
    console.log(sum);




//Array-টা উল্টো করে print করো
    var num=[10,20,30,40,50];
    for (var i=num.length-1; i>=0; i--){
        console.log(num[i]);
    }



    //Array-এ কয়টা element আছে সেটা print করো
    var fruits=["apple","banana","orange","grape"];
    console.log(fruits.length);
    console.log(fruits[0]);
    console.log(fruits);


    var fruits = ["apple", "banana", "mango"];
var found = false;

for (var i = 0; i < fruits.length; i++) {
    if (fruits[i] === "mango") {
        found = true;
        break;
    }
}

console.log(found);


//২ এর নামতা print কর
for(var i=1; i<=10; i++){
    console.log("2 x " + i + "=" +(2*i));
}

//৫ এর নামতা print কর 
     for (i=1; i<=10; i++){
        console.log("5 x"+i + "=" +(5*i));
     }
        


     //Array-এর সব element কে double করে নতুন array বানাও
  var nums=[2,4,6];
  var newArr=[];
  for(i=0; i<nums.length; i++){
      newArr.push(nums[i]*2);
  }
  console.log(newArr);