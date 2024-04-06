#! /usr/bin/env node 

import chalk from "chalk";
import inquirer from "inquirer";

const currency: any = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: chalk.greenBright("Enter From Currency"),
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    message: chalk.greenBright("Enter To Currency"),
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    message: chalk.magentaBright("Enter Your Amount"),
    type: "number",
  },
]
);

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = (baseAmount * toAmount).toFixed(2);

console.log(chalk.yellow(convertedAmount));
