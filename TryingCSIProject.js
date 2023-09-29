//Getting child nodes and making its array
let man=document.getElementsByClassName('man')[0];
let arr = Array.from(man.children);

//random words to be selected
let words=["vishwa","karma","Bibwewadi","community","axe","four"];
let Gword =words[Math.floor(Math.random() * words.length)];
// = words[Math.floor(Math.random() * words.length)];
let Notifying=document.getElementsByClassName('Notifying')[0];

//flag for is word has matched original word or not and count for how many child nodes to be displayed
let flag=0;
let count=-1;


let MyLastGuess=document.getElementsByClassName('MyLastGuess')[0];
let GuessingWord=[]

//initiating word with blank symbols
for(let i=0;i<Gword.length;i++)
{
    GuessingWord[i]="_";
}
let GuessingWordMine=document.getElementsByClassName('GuessingWordMine')[0];

//abc for removing commas between array of letters
let abc;
abc=GuessingWord.join("  ");
GuessingWordMine.innerHTML="Actual Word with your correct guesses: "+abc;
let fail=0;
var Myword;
let failedAttempts=document.getElementsByClassName('failedAttempts')[0];

//actual function to ask for a word and match with the original word
    PressHere=()=>{
    Myword=prompt("Please Enter Your Word");
    
    //flag=0;
    MyLastGuess.innerHTML="Your Last Guess Was :"+Myword;

    //matching the letter given by user with the original word is it present or not
    for(let i=0;i<Gword.length;i++)
    {
        if(Gword[i]==Myword)
        {
            fail=1;
            GuessingWord[i]=Gword[i];
            abc=GuessingWord.join("  ");
            GuessingWordMine.innerHTML="Actual Word with your correct guesses: "+abc;
        }
    }

    //if no such letter present then just add a fail variable by 1 and display corresponding child node
    if(fail==0)
    {
        count++;
        arr[count].style.display="block";
    }
    fail=0;

    //checking whether whole word has matched the original word or not
    for(let i=0;i<Gword.length;i++)
    {
        if(Gword[i]!=GuessingWord[i])
        {
            flag=0;
            break;
        }
        else
        {
            flag=1;
        }
    }
    if(flag==1)
    {
        Notifying.innerHTML="Congratulations You Guessed The Word Correctly";
    }

    //counting the fail chances and if it crosses 10 chances then its over
    if(count==9)
    {
        Notifying.innerHTML="Your Chances Are Finished";
    }
    failedAttempts.innerHTML="Your Total Failed Attempts Are: "+(count+1);
}








