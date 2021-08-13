"use strict";
//Uc1
//genrate random value betwenn 0-9
let randomNumber = Math.floor(Math.random() *10); 
console.log(randomNumber);

//Uc2
//dice roll number generate random value between 0-6

let diceRollNumber = (Math.floor(Math.random() *10)%6)+1;
console.log(diceRollNumber);
diceRollNumber = Math.floor(Math.random() * 6)+1;
console.log(diceRollNumber);
/*
//Uc3
let count =0,sum=0;
while(count<2)
{
    diceRoll = (Math.floor(Math.random() *10)%6)+1;
    //appending all dicerolls to sum
    sum +=diceRoll;
    count++;
}
//console.log(`Sum of two dicerolls is ${sum}`);
*/
/*
//Uc4
//intialising variables
let twoDigNum;
let count=0;
let sum=0;
while(count<5)
{
    twoDigNum = Math.floor(Math.random() * 90 + 10);
    console.log(`Number = ${twoDigNum}`);
    //addinng random digits
    sum +=twoDigNum;
    count++;
}
console.log(`Sum of 5 two digits number is = ${sum}`);
console.log(`Average of the sum of the 5 two digits number is = ${sum/5}`);
*/

//Uc5
// console.log("Unit Conversion");
// //gets input as random number
// let inches = Math.floor(Math.random() * 100);
// //tfixed converts value into string and show upto specified decimal places
// console.log(`${inches} inche(s) = ${(inches/12).toFixed(2)} feet`);

// //convert feet to meter
// let len = 60/3.281;//divide lenght by 3.281 to convert feet to meter
// let breadth = 40/3.281;
// //formula for rectangle area
// let area = len*breadth;
// //calculate for 25 plots
// let totalArea = area*25;
// //formula for converting squaremeter to area
// let areaInAcre = (totalArea/4047).toFixed(2);
// console.log(`len = ${len} \nbreadth ${breadth} \narea = ${area} \nTotal Area of 25 plots = ${totalArea}`);
// console.log(`Area of 25 plots are ${areaInAcre} acres`);