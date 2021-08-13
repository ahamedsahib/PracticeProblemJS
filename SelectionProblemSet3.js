"use strict";
//UC1
var prompt = require('prompt-sync')(); 

let number=Number(prompt('Enter the single digit Number: '));
switch(number)
{
case 1:
    console.log("One");
    break;
case 2:
    console.log("Two");
    break;
case 3:
    console.log("Three");
    break;
case 4:
    console.log("Four");
    break;
case 5:
    console.log("Five");
    break;
case 6:
    console.log("Six");
    break;
case 7: 
     console.log("Seven");
     break;
case 8:
    console.log("Eight");
    break;
case 9:
    console.log("Nine");
    break;
case 0:
    console.log("Zero");
    break;
default:
    console.log("Enter Single digit number");
    break;
}

//UC2
number = Number(prompt('Enter the day in number - 1.Sunday,2.Monday,... : '));
switch(number)
{
case 1:
    console.log("Monday");
    break;
case 2:
    console.log("Tuesday");
    break;
case 3:
    console.log("Wednesday");
    break;
case 4:
    console.log("Thursday");
    break;
case 5:
    console.log("Friday");
    break;
case 6:
    console.log("Saturday");
    break;
case 7: 
     console.log("Sunday");
     break;
default:
    console.log("Enter the correct number");
}
//UC3
number = Number(prompt('Enter the number 1,10,100,1000.... : '));
switch(number)
{
case 1:
    console.log("Unit");
    break;
case 10:
    console.log("Ten");
    break;
case 100:
    console.log("Hundred");
    break;
case 1000:
    console.log("Thousand");
    break;
case 10000:
    console.log("Ten Thousand");
    break;
case 100000:
    console.log("One Lakh");
    break;
case 1000000:
     console.log("Ten Lakh");
     break;
case 10000000:
    console.log("One Crore");
    break;
default:
    console.log("Enter the correct number");
}
//UC4
console.log("1.Feet to Inch\n2.Feet to Meter\n3.Inch to Feet\n4.Meter to Feet");
switch(Number(prompt('Enter the Choice: ')))
{
    case 1:
        let feet = Number(prompt('Enter the feets: '));
        console.log(` ${feet} feets = ${feet*12} inches`);
        break;
    case 2:
        let feets = Number(prompt('Enter the feets: '));
        console.log(` ${feets} feets = ${feets/3.281} meter`);
        break;
    case 3:
        let inch = Number(prompt('Enter the inches: '));
        console.log(` ${inch} inches = ${inch/12} feets`);
        break;
    case 4:
        let meter = Number(prompt('Enter the meter: '));
        console.log(` ${meter} meters = ${meter*3.281} feets`);
        break;
    default:
        console.log("Enter the correct value");
        break;
}
