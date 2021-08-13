//UC1
var prompt = require("prompt-sync")();
//l
console.log('UC1 Find power of 2');
//ask the user to enter the power of 2
let num = prompt("Enter a power of 2: ");
console.log('Power of 2');
let i=0;
while(i<=num && Math.pow(2,i)<=256)
{
    console.log(`2 ^ ${i} =  ${Math.pow(2,i)}`); //using Math.pow to find power of 2
    i++;
}     

//--------------UC2----------------
let found = false;
let start=0,end=100;
     function GuessNumber(mid)
     {
        let option = parseInt(prompt(`1.If your number is ${mid}\n2.Is your number is less than ${mid}\n3 your number is greater than ${mid}\n choose anyone to Confirm: `));
         switch(option)
         {
             case 1:
                console.log(`Your Number is ${mid}`);
                 found = true;
                 break;
             case 2:
                 end = mid - 1;
                 break;
             case 3:
                 start= mid + 1;
                 break;
             default:
                console.log("Choose the valid option!!");
                 break;
         }
     }
     
console.log("Pick a Number b/w 1-100\n");
while (start != end && found == false)
{
    let mid = Math.round((start + end) / 2);
    GuessNumber(mid);
}
if(start==end)
   console.log(`Your Number is ${end}`);
//----------------UC3----------------
let headCount=0;
let tailCount=0;
//loop until either count reaches 11
while(headCount<11 && tailCount<11)
{
    let flipCoin=Math.floor(Math.random()*10)%2;//generate random value to find flipcoin is head or tail
    if(flipCoin==0)
    {
        console.log("Head")
        headCount++;    
    }
    else
    {
        console.log("Tail")
        tailCount++;
    }
}
console.log(`Headcount:${headCount}\tTailcount:${tailCount}`);
console.log(headCount==11?'Winner is Head':'Winner is Tail');
         
//--------------UC4----------------
//initalizing user amount
let userAmount=100;
let bets=0,winCount=0,loseCount=0;
//loop until useramount reach 200 or stop useramount less than 0
while(userAmount<200 && userAmount>0)
{
    let bet=Math.floor(Math.random()* 10)%2;//generating random number to make count of user win and loss
    if(bet==1)
    {
        userAmount++;
        winCount++;
    }
    else
    {
        userAmount--;
        loseCount++;
    }
    bets++;//kep track of total round of bets 
}
console.log(`---Stats----\nUser amount =${userAmount}\nNumber of Wins ${winCount}\nNumber of losses ${loseCount}\nTotal Bets made ${bets}`);

console.log(userAmount==200?"Gambler won the Match!!":"Gambler lost the Match!!!");
