import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter your name : ",
    },
    {
        type: "list",
        name: "questionno1",
        choices: ["islamabad", "karachi", "sukkur", "multan"],
        message: "what is the capital of pakistan",
    },
    {
        type: "list",
        name: "questionno2",
        choices: [2002, 1940, 1947, 1950],
        message: "In  which year pakistan came into being",
    },
    {
        type: "list",
        name: "questionno3",
        choices: ["Liaquat ali khan", "quaid-e-azam", "nawaz sharif", "imran khan"],
        message: "who was the first prime minister of pakistan",
    },
]);
let { questionno1, questionno2, questionno3 } = answers;
if (answers.questionno1 === "islamabad") {
    console.log("correct answer");
}
else {
    console.log("incorrect answer");
}
if (answers.questionno2 === 1947) {
    console.log("correct answer");
}
else {
    console.log("incorrect answer");
}
if (answers.questionno3 === "Liaquat ali khan") {
    console.log("correct answer");
}
else {
    console.log("incorrect answer");
}
if (answers.questionno1 === "islamabad" && answers.questionno2 === 1947 && answers.questionno3 === "Liaquat ali khan") {
    console.log("wow !! your all answers are correct");
}
else {
    console.log("you are fail");
}
