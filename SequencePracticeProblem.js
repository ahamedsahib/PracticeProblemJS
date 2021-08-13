"use strict";
//Uc1
//genrate random value betwenn 0-9
let randomNumber = Math.floor(Math.random() *10); 
console.log(randomNumber);

//Uc2
//dice roll number generate random value between 0-6

let diceRollNumber = Math.floor(Math.random() * 6)+1;
console.log(diceRollNumber);

//Uc3
let count =0,sum=0;
while(count<2)
{
    diceRollNumber = Math.floor(Math.random() * 6)+1;
    sum +=diceRollNumber;
    count++;
}
console.log(`Sum of two dicerolls is ${sum}`);

//Uc4
//intializing variables
count=0;
sum=0;
while(count<5)
{
    randomNumber = Math.floor(Math.random() * 90 + 10);
    console.log(`Number = ${randomNumber}`);
    //adding random value to sum
    sum +=randomNumber;
    count++;
}
console.log(`Sum of 5 two digits number is = ${sum}`);
console.log(`Average of the sum of the 5 two digits number is = ${sum/5}`);


//Uc5
console.log("Unit Conversion");
//gets input as random number
let inches = Math.floor(Math.random() * 100);
let feet =(inches/12).toFixed(2);
console.log(`${inches} in = ${feet} ft`);

//convert feet to meter
//divide length by 3.281 to convert feet to meter
let len = 60/3.281; 
let breadth = 40/3.281;
//formula for rectanglur plot area
let area = len*breadth;
//calculate area for 25 plots
let totalArea = area*25;
//formula for converting squaremeter to area
let areaInAcre = (totalArea/4047).toFixed(2);
console.log(`len = ${len.toFixed(2)} \nbreadth ${breadth.toFixed(2)} \nTotal Area of 25 plots = ${totalArea.toFixed(2)}`);
console.log(`Area of 25 plots in Acres ${areaInAcre} acres`);