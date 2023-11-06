
import inquirer from "inquirer";

import chalk from 'chalk'

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000)
    })
}
async function welcome() {
    await sleep();
}
await welcome()



async function App() {
    let req = await inquirer.prompt([{
        name: 'user',
        type: 'number',
        message: "PLEAST SELECT TIMER IN SECONDS",
    }]);

    let seconds = req.user;

    const makeIteration = (): void => {
        
        if (seconds > 0) {

            console.log(chalk.greenBright(` REMAINING TIME IS:    ${seconds} `));
            setTimeout(makeIteration, 1000); // 1 second waiting
            seconds -= 1;
        } else {
            console.log(chalk.red((` COUNTDOWN IS COMPLETE`)));
            restartApp()

        }
    };
    
    setTimeout(makeIteration); // 1 second waiting
}
App()


async function restartApp() {
    let req = await inquirer.prompt([{
        name: 'user',
        type: 'list',
        message: "DO YOU WANT TO RESTART COUNTDOWN APP",
        choices: ['Yes', 'No']

    }]);

    let user_req = req.user;

    if (user_req === 'Yes') {
       
        App()
    }
    else if (user_req === 'No') {
        console.log(chalk.greenBright('.......THANKS FOR USING TIMER APP........'));
    }
}