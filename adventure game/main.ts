
import chalk from "chalk";
import inquirer from "inquirer"


// player

class Player {
    name : string;
    energy : number = 100;
    constructor(name: string){
        this.name = name;
    }
    energydecrease (){
        let energy = this.energy - 25
        this.energy = energy
    }
    energyincrease (){
        this.energy = 100
    }
}



// opponent


class Opponent {
    name : string;
    energy : number = 100;
    constructor(name: string){
        this.name = name;
    }
    energydecrease (){
        let energy = this.energy - 25
        this.energy = energy
    }
}



// ---------------------------------------


let player = await inquirer.prompt({
    type : "input",
    name : "name",
    message : "Please enter your Name : "
})




// ------------------------------------------------


let opponent = await inquirer.prompt ({
    type : "list",
    name : "select",
    message : "choose your opponent : ",
    choices : ["skeleton","assasin","zombie"],
})



let player1 = new Player (player.name)
let opponent1 = new Opponent (opponent.select)



// ------------------------------------------------

do{if(opponent.select == "skeleton" || "assasin" || "zombie"){
    console.log(`${chalk.bold.green(player1.name)} VS ${chalk.bold.red(opponent1.name)}`);

    let ask = await inquirer.prompt({
        type : "list",
        name : "mode",
        message : "please select your Mode of game : ",
        choices : ["attack","run for life","heal energy"]
    });

    if(ask.mode == "attack")
    {
        let num = Math.floor(Math.random()*2)
        if(num > 0) {
            player1.energydecrease()
            console.log(chalk.bold.red(`${player1.name} Energy is ${player1.energy}`));
            console.log(chalk.bold.green(`${opponent1.name} Energy is ${opponent1.energy}`));


        if(player1.energy <= 0){
            console.log(chalk.red.bold.italic("you lost, better luck next time")); 
            process.exit()
        }
        }
        if(num <= 0) {
            opponent1.energydecrease()
            console.log(chalk.bold.red(`${opponent1.name} Energy is ${opponent1.energy}`));
            console.log(chalk.bold.green(`${player1.name} Energy is ${player1.energy}`));
            
            if(opponent1.energy <= 0){
                console.log(chalk.green.bold.italic("you you won")); 
            }    
        }
    }

    if(ask.mode == "heal energy"){
        player1.energyincrease()
        console.log(chalk.yellow.bold.italic(`Energy heal , your energy is ${player1.energy}`));
    }
    
    if(ask.mode == "run for life"){
        console.log(chalk.yellow.bold.italic("you lost, better luck next time")); 
        process.exit()  
    }



}
}
while(true);

