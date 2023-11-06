import { faker } from "@faker-js/faker";
import chalk from "chalk";
import inquirer from 'inquirer';


// customer class

class Customer {
    firstName : string;
    lastName : string;
    age : number;
    gender : string;
    contact : number;
    accnumber : number;

    constructor( 
        fname : string,
        lname : string,
        age : number,
        gender : string,
        contact : number,
        accnumber : number,
    ) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
        this.gender = gender;
        this.contact = contact;
        this.accnumber = accnumber;
    }
}


// interface of bank account 


interface BankAccount{
    accNumber : number,
    balance : number,
}


// class Bank

class Bank {
    customer : Customer[] = [];
    account : BankAccount[] = [];

    addcustomer(obj : Customer){
        this.customer.push(obj)
    }
    addaccnumber(obj : BankAccount){
        this.account.push(obj)
    }
    transaction(accobj : BankAccount){
        let newaccount = this.account.filter((acc)=>acc.accNumber !== accobj.accNumber);
        this.account = [...newaccount,accobj];
    }
}

let mybank = new Bank()

// customer 

for(let i : number = 1; i<= 3; i++){
let fname = faker.person.firstName("male");
let lname = faker.person.lastName();
let num = parseInt(faker.phone.number('3##########'));
let cus = new Customer(fname,lname,22*i,"male",num,990+i)
mybank.addcustomer(cus);
mybank.addaccnumber({accNumber : cus.accnumber,balance : 10000 * i})
}
// console.log(mybank);



//  bank functionality

async function bankService(bank : Bank) {
do{let service = await inquirer.prompt({
    type : "list",
    name : "select",
    message : "please select the service",
    choices : ["view balance","cash withdraw","deposit cash"]
});

//  view balance 
if(service.select == "view balance"){
let res = await inquirer.prompt({
    type : "input",
    name : "num",
    message : "please enter your account number : ",
});
  
let account = mybank.account.find((acc) => acc.accNumber == res.num)
if(!account){
    console.log(chalk.red.bold.italic("invalid account number"));
}
if(account){
    let name = mybank.customer.find((item)=>item.accnumber == account?.accNumber);
    console.log(`Dear ${chalk.green.italic(name?.firstName)} ${chalk.green.italic(name?.lastName)}
    your account balance is ${chalk.bold.blueBright("$",account.balance)}`);
}
}



// cash withdraw


if(service.select == "cash withdraw"){
let res = await inquirer.prompt({
    type : "input",
    name : "num",
    message : "please enter your account number : ",
});
  
let account = mybank.account.find((acc) => acc.accNumber == res.num)
if(!account){
    console.log(chalk.red.bold.italic("invalid account number"));
}
if(account){
    let ans = await inquirer.prompt({
        type : "number",
        name : "rupee",
        message : "please enter your amount : "
    });
    let newBalance = account.balance - ans.rupee;

    // transaction 

    bank.transaction({accNumber: account.accNumber, balance : newBalance});
}
}



// deposit cash


if(service.select == "deposit cash"){
let res = await inquirer.prompt({
    type : "input",
    name : "num",
    message : "please enter your account number : ",
});
  
let account = mybank.account.find((acc) => acc.accNumber == res.num)
if(!account){
    console.log(chalk.red.bold.italic("invalid account number"));
}
if(account){
    let ans = await inquirer.prompt({
        type : "number",
        name : "rupee",
        message : "please enter your amount : "
    });
    if(ans.rupee > account.balance){
        console.log(chalk.red.bold("you have insufficient balance !! "));
        
    }
    let newBalance = account.balance + ans.rupee;

    // transaction 

    bank.transaction({accNumber: account.accNumber, balance : newBalance});
}
}}
while(true)
}
bankService(mybank)