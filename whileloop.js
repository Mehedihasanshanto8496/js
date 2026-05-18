var num=[1,2,3,4,5];
var i=0;
while (i<num.length){
    console.log(num[i]);
    i++;
}


//1 থেকে 5 পর্যন্ত print করো (while loop)

var i =1;
while (i<=5){
    console.log(i);
    i++;
}



//1 থেকে 10 পর্যন্ত even number print করো
var i=2;
while(i<=10){
    
        console.log(i);
        i+=2;
    
}

//10 থেকে 1 পর্যন্ত উল্টো করে print করো
var i=10;
while(i>=1){
    console.log(i);
    i--;
}


//1 থেকে 10 পর্যন্ত সব সংখ্যার যোগফল বের করো
var num=[1,2,3,4,5,6,7,8,9,10];
var sum=0;
while(i<num.length){
sum+=num[i];
i++;
}
console.log(sum);


//array এর সব element print করো (while loop)
var arr=[10,20,30,40];
var i=0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}




//array এর সব element এর যোগফল বের করো
var arr=[5,10,15];
var sum=0;
var i=0;
while(i<arr.length){
    
    sum+=arr[i];
    i++;
}
console.log(sum);


//array থেকে শুধু even number print করো
var arr=[1,2,3,4,5,6,7,8,9,10];
var i=0;
while(i<arr.length){
    if(arr[i]%2===0){
        console.log(arr[i]);
    }
    i++;
}




//1–22 এর মধ্যে কয়টা even সংখ্যা আছে বের করো
var i=1;
var count=0;
while(i<=22){
    if(i%2===0){
        count++;
    }
    i++;
}
console.log(count);



//array এর সবচেয়ে বড় সংখ্যা বের করো
var arr=[3,7,2,9,5];
var i=0;
var max=arr[0];
while(i<arr.length){
    if(arr[i]>max){
        max=arr[i];
    }
    i++;

}
console.log(max);




//5 এর নামতা
var i=1;
while(i<=10){
    console.log("5 x"+i+"="+(5*i));
    i++;
}
 


