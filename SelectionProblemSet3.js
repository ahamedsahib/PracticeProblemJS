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
let num1 =  Number(prompt("Enter number 1:"));
let num2 = Number(prompt("Enter number 2:"));
let num3 = Number(prompt("Enter number 3:"));

let result1 = (num1+num2)*num3;
let result2 = (num1%num2)+num3;
let result3 = (num3+num1)/num2;
let result4 = (num1*num2)+num3;
    
let max=0,min=0;
let option=prompt("Type max to find maximum result or min to find minimum result")
switch(option){
    case 'min':
        if(result1<result2 && result1<result3 && result1<result4)
        {
            min=result1;
        }
        else if(result2<result1 && result2<result3 && result2<result4)
        {
             min=result2;
        }
        else if(result3<result1 && result3<result2 && result3<result4)
        {
            min=result3;
        }
        else
        {
            min=result4;
        }
        console.log(`Min Element ${min}`);
    case 'max':
        if(result1>result2 && result1>result3 && result1>result4)
        {
            max=result1;
        }
        else if(result2>result3 && result2>result4 && result2>result1)
        {
            max=result2;
        }
        else if(result3>result1 && result3>result2 && result3>result4)
        {
            max=result3;
        }
        else
        {
            max=result4;
        }
        console.log(`Max Element ${max}`);
    default:
        console.log('choose correct one');
}

