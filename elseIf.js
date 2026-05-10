/* Positive / Negative / Zero

একটা number নাও।

0 → "Positive"

< 0 → "Negative" 
== 0 → "Zero"
👉 if / else if / else ব্যবহার করো */

var number = 10;
if(number>0){
    console.log("Positive");
}else if(number<0){
    console.log("Negative");
}else{
    console.log("Zero");
}

/*Grade System

marks নামের variable নাও।

80+ → A+
70–79 → A
60–69 → A-
else → Fail

👉 else if */

var marks =60;
if(marks>80){
    console.log("A+");
}else if (marks>=70 && marks<=79){
    console.log("A");
}else if (marks>=60 && marks<=69){
    console.log("A-");
}else{
    console.log("Fail");
}

/* Login Check

username আর password নাও।

username "admin" AND password "1234" → "Login Success"
else → "Wrong Info"

👉 if + logical operator */

var username="admin";
var password="123";
if(username==="admin" && password==='123'){
    console.log('login success');
}else{
    console.log("Wrong Info");
}

/* Ticket Price

age নাও।

age < 5 → "Free"
5–12 → "50 Taka"
13–60 → "100 Taka"
60+ → "Senior Discount"

👉 else if */

var age = 12;

if (age < 5) {
    console.log("Free");
}
else if (age >= 5 && age <= 12) {
    console.log("50 taka");
}
else if (age >= 13 && age <= 60) {
    console.log("100 taka");
}
else {
    console.log("Senior Discount");
}

