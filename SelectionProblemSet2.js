"use strict";
//UC1
//reurie module to convert Number to words in string
var prompt = require('prompt-sync')(); 

let number=Number(prompt('Enter the Number: '));
if(number==1)
{
    console.log("One");
}
else if(number==2)
{
    console.log("Two");
}
else if(number==3)
{
    console.log("Three");
}
else if(number==4)
{
    console.log("Four");
}
else if(number==5)
{
    console.log("Five");
}
else if(number==6)
{
    console.log("Six");
}
else if(number==7)
{
    console.log("Seven");
}
else if(number==8)
{
    console.log("Eight");
}
else if(number==9)
{
    console.log("Nine");
}
else if(number==0)
{
    console.log("Zero");
}
else
{
    console.log("Enter Single digit number");
}

//UC2
number = Number(prompt('Enter the day in number - 1.Sunday,2.Monday,... : '));
if(number==1)
{
    console.log("Monday");
}
else if(number==2)
{
    console.log("Tuesday");
}
else if(number==3)
{
    console.log("Wednesday");
}
else if(number==4)
{
    console.log("Thursday");
}
else if(number==5)
{
    console.log("Friday");
}
else if(number==6)
{
    console.log("Saturday");
}
else if(number==7)
{
    console.log("Sunday");
}
else
{
    console.log("Enter the correct number");
}
//UC3
number = Number(prompt('Enter the number 1,10,100,1000.... : '));
if(number==1)
    console.log("Unit");
else if(number==10)
    console.log("Ten");
else if(number==100)
    console.log("Hundred");
else if(number==1000)
    console.log("Thousand");
else if(number==10000)
    console.log("One Lakh");
else if(number==1000000)
    console.log("Ten Lakh");
else if(number==10000000)
    console.log("One Crore");
else
    console.log("Enter correct number");
    
//UC4
let num1 =  Number(prompt("Enter number 1:"));
let num2 = Number(prompt("Enter number 2:"));
let num3 = Number(prompt("Enter number 3:"));

let result1 = (num1+num2)*num3;
let result2 = (num1%num2)+num3;
let result3 = (num3+num1)/num2;
let result4 = (num1*num2)+num3;
    
let max=0,min=0;

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
console.log(`Min Element ${min}`);