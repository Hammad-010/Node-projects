import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.004,
        "SAR": 0.013,
        "PKR": 1.00,
    },
    "SAR": {
        "USD": 3.749,
        "PKR": 74.19,
        "SAR": 1.00,
    },
    "USD": {
        "SAR": 3.749,
        "PKR": 278.49,
        "USD": 1.00,
    },
};
let answers = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "SAR"],
        message: "select your currency :  ",
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "SAR"],
        message: "select the currency to convert in  :  ",
    },
    {
        type: "number",
        name: "amount",
        message: "enter your amount : ",
    },
]);
let { from, to, amount } = answers;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("invalid input");
}
