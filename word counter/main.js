import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "scentence",
        type: "input",
        message: "enter the scentence to count the number of words : ",
    },
]);
let result = answers.scentence.trim().split(" ");
console.log(`the number of words in your scentence are ${result.length}`);
