const readlineSync = require('readline-sync');
const chalk= require('chalk');
let score = 0;

let userName = readlineSync.question("Please enter your name? : ");

console.log(
  chalk.blue("\nWelcome "+ userName + " to do you know me quiz.\n"));

  console.log(chalk.yellow("Chalo let's start a quiz to know me better. LET\'s Start\n"))

  console.log(chalk.cyan("Well here are the rules.\n"+
  "1. For every right question you get 2 marks.\n"+
  "\n2. No marks for any wrong questions.\n "+
  "\n3. Just have fun.😁😁😁😁\n"));

  console.log(chalk.red("Let the game begin. \n"));


  
let choice= readlineSync.question(
chalk.red("1. Do I like coding?\n")+
"0. No \n"+
"1. Yes\n"+
"your Answer: ");

if(choice == 1)
{ score+=2;
  console.log("Yes! you are wright. \n");
  console.log("current score: " + score);
  console.log("-------------X-------------");
  
}else{
  console.log("Why would you think that!!\n");
}

choice= readlineSync.question(
chalk.red("1. Do i like cats?\n")+
"0. No \n"+
"1. Yes\n"+
"your Answer: ");


if(choice == 1)
{ score+=2;
  console.log("Yes! you are wright. ")
  console.log("current score: " + score);
  console.log("-------------X-------------");
}else{
  console.log("Why would you think that!!\n😅They are so cute\n");
}

 choice= readlineSync.question(
chalk.red("1. Do I like Doctor Strange?\n")+
"0. No \n"+
"1. Yes\n"+
"your Answer: ");

if(choice == 1)
{ score+=2;
  console.log("Yes! you are wright. ")
  console.log("current score: " + score);
  console.log("-------------X-------------");
}else{
  console.log("Why would you think that!!\n😅Let me send you back in time.\n");
}

choice= readlineSync.question(
chalk.red("1. Where is my collage located.?\n")+
"0. Gopeshwar. \n"+
"1. Dehradun\n"+
"2. Delhi.\n"+
"3.Moon\n"+
"your Answer: ");

if(choice == 0)
{ score+=2;
  console.log("Yes! you are wright. ")
  console.log("current score: " + score);
  console.log("-------------X-------------");
}else{
  console.log("NOpe!!\n😅hope you didn't choose Mooon.\n");
}

choice= readlineSync.question(
chalk.red("1. Do I like Maggie.?\n")+
"0. No \n"+
"1. Yes\n"+
"your Answer: ");

if(choice == 1)
{ score+=2;
  console.log("Yes! you are wright. ")
  console.log("current score: " + score);
  console.log("-------------X-------------");
}else{
  console.log("Awww it's so tasty.😅!!\n ");
}

choice= readlineSync.question(
chalk.red("1. Would i prefer a Macbook.?\n")+
"0. No \n"+
"1. Yes\n"+
"your Answer: ");

if(choice == 1)
{ score+=2;
  console.log("Yes! you are wright. ")
  console.log("current score: " + score);
  console.log("-------------X-------------");
}else{
  console.log("No I wan't one 😅!!\n ");
}

choice= readlineSync.question(
chalk.red("1. Is supernatural my favourite series.?\n")+
"0. No \n"+
"1. Yes\n"+
"your Answer: ");

if(choice == 1)
{ score+=2;
  console.log("Yes! you are wright. ")
  console.log("current score: " + score);
  console.log("-------------X-------------");
}else{
  console.log("Nope It's my fav.😅!!\n ");
}


if(score>=12)
{
  console.log(chalk.cyan("!!😁😁Wow you really know me."));
}else if(score>=8)
{
  console.log(chalk.cyan("!! That's a good score."));
}
else if(score>=4)
{
  console.log(chalk.cyan("!! Well it's ok."));
}