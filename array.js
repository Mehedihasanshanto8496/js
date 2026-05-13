var FdName= ["shanto","nahid","sagor","hridoy","sohel","hasan"];
console.log(FdName);
console.log(FdName[2]);
console.log(FdName.length);
FdName[1]=200;
console.log(FdName);



var fdName= ["shanto","nahid","sagor","hridoy","sohel","hasan"];
fdName.push(1234);    // push() method adds a new element to the end of an array and returns the new length of the array.
console.log(fdName);
fdName.pop();          // pop() method removes the last element from an array and returns that element. This method changes the length of the array.
console.log(fdName);



var num = [22, 23, 24, 25, 26, "Mehedi"];
num.pop();
console.log(num);




var num =[1,2,3,4,5,67,"Nothing"];
num.shift();      // shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
console.log(num);
num.unshift("mehedi","hasan");   // unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
console.log(num);


 var fdName= ["shanto","nahid","sagor","hridoy","sohel","hasan"];
 
 console.log(fdName.slice(2,4));    // slice method hocche array change kre  just akta index value dau tahole just oi index theke array print krbe but akta index er porer index value dau tahole oi index theke porer index er age porjonto array print krbe.
    console.log(fdName.slice(2));  
    console.log(fdName.slice(2,3)); 



    var fdName= ["shanto","nahid","sagor","hridoy","sohel","hasan"];
    console.log(fdName.splice(2,3,"mehedi","hasan","Eshan"));   
    console.log(fdName);   

    var fdName= ["shanto","nahid","sagor","hridoy","sohel","hasan"];
    console.log(fdName.splice(2));
    console.log(fdName);




    var fdName= ["shanto","Isu","nasaim","nahid"];
    console.log(fdName.splice(1,2));
    



