 //UC1
 //initalizing number array
 let numbers=new Array();
 //using arrow function creating function that return 3 digit random value
 RandomThreeDigitNumber =()=>{ return Math.floor((Math.random() * 900)+ 100);}

 //iterating 5 times to get 5 different random number
 for (i=0;i<5;i++)
 {
    numbers.push(RandomThreeDigitNumber());
 }
 console.log(numbers);
 //math.max method used to get maximum number in the array
 let maxValue = Math.max(...numbers);
 console.log(`Max Value ${maxValue}`); 
 //math.min method used to get minimum number in the array    
 let minValue = Math.min(...numbers);
 console.log(`Min Value ${minValue}`); 

// //UC2
 var prompt = require('prompt-sync')();
 //initializing min and max date 
 var minDate = new Date('03/20/2021');
 var maxDate =  new Date('06/20/2021');
 //ask user to enter the date
 let dateofmonth=prompt('Enter the date: ');
 //ask user to enter the month
 let month=prompt('Enter the month: ');
 //converting user inputs to date
 let userdate= new Date(`${month}/${dateofmonth}/2021`);
 //checking user date falls between the min and max date
 function VerifyDate(userdate)
 {
     if (userdate > minDate && userdate < maxDate )
         return true;
     else
         return false;  
 }
 let result=VerifyDate(userdate);
 console.log(result);

//UC3
// program to check leap year
function checkLeapYear(year) {
    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
        console.log(year + ' is a leap year');
     else 
        console.log(year + ' is not a leap year');    
}

// take input
const year = prompt('Enter a year:');
checkLeapYear(year);
//UC4
//ask user to get number of time u want to flip a coin
let noOfFlip=Number(prompt('Enter the number you want to flip'));
for (i=1;i<=noOfFlip;i++)
{
    console.log(`${i} Round of Flip`);
    //getting random value 0,1 to check or head or tails
    let toss=Math.floor(Math.random()*10)%2;
    if(toss==0)
        console.log('Head');
    else
        console.log('Tail');
}