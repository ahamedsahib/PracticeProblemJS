//UC1
var prompt = require("prompt-sync")();
//l
console.log('UC1 Find power of 2');
//ask the user to enter the power of 2
let num = prompt("Enter a power of 2: ");
console.log('Power of 2');
for(let i =0;i<=num;i++)
{
    console.log(`2 ^ ${i} =  ${Math.pow(2,i)}`); //using Math.pow to find power of 2
}     
//UC2
console.log('UC2 Find harmonic of a number');
//Read the Input Number from user
num = prompt("Enter the number: ");
let sum=0;
for(i=1;i<=num;i++)
{
    sum+=(1/i); //sum up all the harmonic number
}
console.log(`${num}th harmonic number is: ${sum.toFixed(2)}`);  
//----------------UC3-----------------------
console.log('UC3 Check wether the Number is prime or not');
// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number == 1) 
    console.log("1 is neither prime nor composite number.");
// check if number is greater than 1
else 
{   
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) 
    {
        if (number % i == 0) 
        {
            isPrime = false;
            break;
        }
    }

    if (isPrime)
        console.log(`${number} is a prime number`);
    else 
        console.log(`${number} is a not prime number`);  
}
//-------------------UC4-------------------------------
console.log('UC4 Find Prime Number between Range');
// take input from the user
const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++)
{
    let flag = 0;
    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
//------------------UC5------------------
console.log('UC5 Find Factorial of a Number');
function factorial(n)
{
    let fact = 1;
    if (n == 0 || n == 1)
      return fact;
    else
    {
      for(var i = n; i >= 1; i--)
      {
        fact = fact * i;
      }
      return fact;
    }  
}
num = parseInt(prompt("Enter a number: "));
console.log(`The factorial of ${num} is ${factorial(num)}`);
//----------------UC6--------------------
console.log("UC6 Find the prime Factors ");
function FindPrimeFactors(num)
{
    let isPrime = 1;//to check whether the number is prime or not 
    for (i = 2; i<= num; i++)
    {
       if (num % i == 0)//used to find the factors of the number
       {
           isPrime = 1;
           for (j = 2; j <= i / 2; j++) //to iterate the loop if it divisble by any of prime factor
           {
                if (i % j == 0)//used to find prime Number from the factors
                {
                    isPrime = 0;
                    break;
                }
            }
            if (isPrime == 1)
            {
                console.log(i); 
            }
        }
    }
}
//read input from user
num = Number(prompt("Enter a number: "));
console.log(`The Prime Numbers ${num} is `);
FindPrimeFactors(num);