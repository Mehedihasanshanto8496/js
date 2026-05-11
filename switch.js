/* Day Name

একটা variable day (1–7) নাও।

1 → Saturday
2 → Sunday
3 → Monday
অন্য কিছু → "Invalid day"

👉 switch */

const { Sandwich } = require("lucide-react");

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



/* Traffic Light System

color variable:

"red" → "Stop"
"yellow" → "Ready"
"green" → "Go"
else → "Invalid Color"

👉 switch */


var color = "red";
switch(color){
    case "red":
        console.log("stop");
        break;
        case "yellow":
            console.log("Ready");
            break;
            case "green":
                console.log("GO");
                break;
                default :
                console.log("Invalid color ");

}






/*Food Order App

item variable:

"burger" → "Price 120"
"pizza" → "Price 250"
"sandwich" → "Price 100"
else → "Item not available"

👉 switch */




var items="pizza";
switch(items){
    case "burger":
        console.log("price 120");
        break;
        case "pizza":
            console.log("price 250");
            break;
            case Sandwich:
                console.log("price 150");
                break;
                default:
                    console.log("Invalid item");
}

