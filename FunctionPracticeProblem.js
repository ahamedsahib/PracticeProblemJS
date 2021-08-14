const prompt = require('prompt-sync')();
//-------------------Uc1--------------------------
//fahrenheit to celsius conversion
let fahrenheitToCelsius = (value) => ((value - 32) * 5) / 9;
// celsius to fahrenheit conversion
let celsiusToFahrenheit = (value) =>(value * 9) / 5 + 32;

function ConvertTemperatures()
{
    console.log("Choose \n1.Fahrenheit To Celsius\n2.Celsius To Fahrenheit");
    switch(parseInt(prompt("Choose the Option: ")))
    {
        case 1:
            let fahrenheit = prompt("Enter the fahrenheit value: ");
            if(fahrenheit>=32 && fahrenheit<=212)
                console.log(`${fahrenheit} F = ${fahrenheitToCelsius(fahrenheit)} C`);
            else
                console.log("Value is not Between the freezing and boiling point!!!");
            break;
        case 2:
            let celsius = prompt("Enter the Celsius  value: ");
            if(celsius>=0 && celsius<=100)
                console.log(`${celsius} C = ${celsiusToFahrenheit(celsius)} F`);
            else
                console.log("Value is not Between the freezing and boiling point!!!");
            break;
        default:
            break;
    }
}
ConvertTemperatures();
//----------------------------------------UC2-------------------------------------------
//function to check whether the number palindrome or not
function checkPalindrome(num) 
{
        var remainder, temp, result=0;
		//var num = parseInt(prompt("Enter the number\n"));

		temp = num;
		while(num>0)
		{
			remainder = num%10;
            result= result*10+remainder;
			num = parseInt(n/10);
		}
		if(result==temp)
		    return (`${result} is palindrome`);
		else
		    return (`${result} is not a palindrome`);
		
}
checkPalindrome();
//--------------------------UC3---------------------------
let number  = parseInt(prompt("Enter the number\n"));
checkPrime(number);
//function to check whether number is prime or not
function checkPrime (num) 
{
    let flag=0;
    if(num==2)
        console.log(`${num} is prime number and ${checkPalindrome(num)}`);
    else if (num % 2 == 0)
        return false;
    else
        for(let i=3;i*i<=num;i++)
            if(num%i==0)
            {
                flag=1;
                break;
            }
        if(flag==1)
            console.log(`${num} is prime number and Not Palindrome Number ${checkPalindrome(num)}`);
        else
            console.log(`${num} is prime number and ${checkPalindrome(num)}`);       
}
