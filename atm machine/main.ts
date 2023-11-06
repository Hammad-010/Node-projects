import inquirer  from 'inquirer';

interface anstype {
    account_number : number,
    account_pin : number,
    account_type : string,
    transaction_type : string,
    amount : number,
}

let answers : anstype = await inquirer.prompt([
    {
        type : "input",
        name : "account_number",
        message : "please enter your account number : ",
    },
    {
        type : "number",
        name : "account_pin",
        message : "please enter your PIN : ",
    },
    {
        type : "list",
        name : "account_type",
        choices : ["current","saving"],
        message : "select your account type : ",
    },
    {
        type : "list",
        name : "transaction_type",
        choices : ["instant_cash","withdraw"],
        message : "select your mode of transaction : ",
        when(answers) {
            return answers.account_type
        },
    },
    {
        type : "list",
        name : "amount",
        choices : [1000,2000,5000,10000],
        message : "select your amount to withdraw : ",
        when(answers) {
            return answers.transaction_type == "withdraw"
        },
    },
    {
        type : "number",
        name : "amount",
        message : "enter amount : ",
        when(answers) {
            return answers.transaction_type == "instant_cash"
        },
    },
])

if(answers.account_number && answers.account_pin){
    let balance = Math.floor(Math.random()*100000);
    console.log(balance);

    let entered_amount = answers.amount;
    if(balance >= entered_amount){
        let remaining_balance = balance - entered_amount;
        console.log("your remaining balance is : ",remaining_balance)
    }
    else{
        console.log("insufficient balance");   
    }
}