


import inquirer from "inquirer";
let answers : {
    num1 : number,
    num2 : number,
    operator : string,
} = await inquirer.prompt([
    {
        type : "number",
        name : "num1",
        message : "input first number : "
    },
    {
        type : "number",
        name : "num2",
        message : "input second number : "
    },
    {
        type : "list",
        name : "operator",
        choices : ["+","-","*","/"],
        message : "select operator : "
    },

]);

let {num1,num2,operator} = answers

if(num1 && num2 && operator)
{    let result ;
    if(operator === "+"){
        result = num1 + num2
    }else if(operator === "-"){
        result = num1 - num2
}else if(operator === "*"){
    result = num1 * num2
}else if(operator === "/"){
    result = num1 / num2
}
console.log(`your result is ${result}`)

}

else{
    console.log("invalid input")
}

