import inquirer from 'inquirer';
let system_generated_number = Math.floor(Math.random() * 2);
let answers = await inquirer.prompt([
    {
        type: "number",
        name: "guess_number",
        message: "input the number you guess between 1 and 2 : "
    },
]);
let { guess_number } = answers;
console.log(guess_number, 'guess_number : ' && 'system_generated_number : ', system_generated_number);
if (guess_number === system_generated_number) {
    console.log("wow !! your guess was correct \n you won !! ");
}
else {
    console.log("incorrect guess \n try again ");
}
