/* Day Name

একটা variable day (1–7) নাও।

1 → Saturday
2 → Sunday
3 → Monday
অন্য কিছু → "Invalid day"

👉 switch */

var day=6;
switch(day){
    case 1:
    console.log('saturday');
        break;
        case 2:
        console.log('sunday');
        break;
        case 3:
        console.log('monday');
        break;
        case 4:
        console.log('tuseday');
        break;
        case 5:
        console.log('wednesday');
        break;
        case 6:
        console.log('thursday');
        break;
        case 7:
        console.log('friday');
        break;
    default:
    console.log('invalid day');
}

/* Simple Calculator

num1, num2, operator নাও।

+ → যোগ
- → বিয়োগ
* → গুণ
/ → ভাগ

👉 switch */

var num=30;
var num1=60;
var operator="+";
switch(operator){
    case "+":
        console.log(num + num1);
        break;
    case "-":
        console.log(num - num1);
        break;
    case "*":
        console.log(num * num1);
        break;
    case "/":
        console.log(num / num1);
        break;
    default:
        console.log("Invalid operator");
} 