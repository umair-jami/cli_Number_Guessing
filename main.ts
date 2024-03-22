#! /usr/bin/env node


import inquirer from "inquirer"

//01) computer will generate random number
// 2)take input from user
// 3)condition check kerna

const randomNumber= Math.floor(Math.random()*21);
const answers = await inquirer.prompt([
    {
        name:"userGuessNumber",
        type:"number",
        message:"Please Guess Number:"
    }
])

if(answers.userGuessNumber===randomNumber){
    console.log("Your Guess is Right")
}else if(answers.userGuessNumber>randomNumber){
    console.log("Your guess is  too high")
}else if(answers.userGuessNumber<randomNumber){
    console.log("Your guess is  too low")
}else{
    console.log("Your guess is wrong")
}
