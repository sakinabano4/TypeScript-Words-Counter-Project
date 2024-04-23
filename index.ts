#! /usr/bin/env node

// import inquirer and chalk Packages
import inquirer from "inquirer";
import chalk from "chalk";

//Display a Colorfull Wellcome message
console.log(chalk.bold.cyanBright("\n \t\t Sakina Bano-Word Counter"));
console.log("=".repeat(60));

// Prompt the user to enter a Sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence", 
    }
]);

// Trimning the sentence and splitting it into word based on "spaces"
let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
