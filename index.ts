#!/usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your firstNumber", type: "number", name: "firstNumber" },
  { message: "Enter your SecondNumber", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]}
]);

if (answer.operators=== "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}
 else if (answer.operators=== "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators=== "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators=== "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}
else {"please select the valid operater"};