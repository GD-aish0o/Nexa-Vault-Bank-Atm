#! /usr/bin/env node
// wrapped codes in functions
// Improved prompts
// updated withdraw
import inquirer from "inquirer";
let Pin = 9801;
let Balance = 25000; //pkr
async function Main() {
    let transaction = await inquirer.prompt({
        name: "services",
        type: "list",
        message: "Choose an option to manage your finances:",
        choices: ["Balance-Inquiry", "Cash-Withdraw", "Ready-Cash", "Quick-Deposit", "Request a checkbook"]
    });
    if (transaction.services === "Balance-Inquiry") {
        Inquiry();
        setTimeout(() => {
            Loop();
        }, 4000);
    }
    else if (transaction.services === "Cash-Withdraw") {
        Withdraw();
        setTimeout(() => {
            Loop();
        }, 5000);
    }
    else if (transaction.services === "Ready-Cash") {
        FastCash();
        setTimeout(() => {
            Loop();
        }, 4000);
    }
    else if (transaction.services === "Quick-Deposit") {
        QuickDeposit();
        setTimeout(() => {
            Loop();
        }, 7000);
    }
    else if (transaction.services === "Request a checkbook") {
        CBProcedure();
        setTimeout(() => {
            Loop();
        }, 5000);
    }
}
function Inquiry() {
    console.log(`\nYour current balance is ${Balance}pkr`);
}
;
async function Withdraw() {
    //withdraw amount = widAm
    let widAm = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter an amount to withdraw",
        },
    ]);
    // if the provided amount is less than balance and 20,000 (twenty thousand):
    if (widAm.amount <= Balance && widAm.amount <= 20000) {
        console.log(`\nYou've withdrawn ${widAm.amount} Successfully\nYour remaining balance is:`, Balance - widAm.amount, `pkr`, `\n\n\t\t Thank You for using Nexa-Vault Banking services!`);
        // if the provided amount is greater than balance:
    }
    else if (widAm.amount >= Balance) {
        console.log("You have insufficient balance to withdraw.");
        // if the provided amount is greater than 20,000 (twenty thousand)
    }
    else if (widAm.amount >= 20000) {
        console.log("\nOne-Time withdraw limit reached, Please try again in 24-hours");
        // incase user provided letters or symbolls:
    }
    else
        console.log("Please enter a valid amount to withdraw.");
}
;
async function FastCash() {
    // ReadyCashOptions = rcOpts
    let ReadyCash = await inquirer.prompt([
        {
            name: "Options",
            type: "list",
            message: "Choose an amount to withdraw",
            choices: [5000, 10000, 15000, 20000],
        },
    ]);
    //   if the chosen option is less than the balance:
    if (ReadyCash.Options <= Balance) {
        console.log(`\n You have successfully withdrawn ${ReadyCash.Options}, \n Your remaining balance is `, Balance - ReadyCash.Options, `\n\n\t\t Thank you for using Nexa_Vault Banking services!`);
        // if the chosen amount is greater than balance:
    }
    else if (ReadyCash.Options >= Balance) {
        console.log(`Your Account balance is insufficient for this transcation`);
    }
    else {
        console.log(`Please choose an amount to withdraw as Ready-Cash`);
    }
}
;
async function QuickDeposit() {
    // Quick deposit = qckDpzt
    let qckDpzt = await inquirer.prompt([
        {
            name: "QuickDeposit",
            type: "number",
            message: "Enter an amount you want to deposit into your account.",
        },
    ]);
    if (qckDpzt.QuickDeposit <= 50000) {
        console.log(`The amount has been transferred to your account. Your new Balance is`, qckDpzt.QuickDeposit + Balance);
        console.log("\n\n\t\tThanks for using the services of Nexa-Vault ATM");
    }
    else if (qckDpzt.QuickDeposit >= 50000) {
        console.log(" We apologize, but the deposit limit for this transaction has been exceeded.\n Please Visit the nearest branch for further assistance.");
    }
    else {
        console.log("Please eneter an amount for Quick-Deposit");
    }
}
;
async function CBProcedure() {
    let cnfrm = await inquirer.prompt({
        name: "confirm",
        type: "confirm",
        message: " Please confirm your action!,\n Are you sure you want to order a Checkbook?",
    });
    console.log("Please wait...");
    if (cnfrm.confirm === true) {
        setTimeout(() => {
            console.log("Request noticed, \nyou'll recieve a phone call on your registered number soon, \n\n\t\tThanks for using Nexa-Vault Banking services");
        }, 3000);
    }
    else if (cnfrm.confirm === false) {
        console.log(" Thank You for using Nexa Bank ATM services.\n");
    }
}
;
// This loop function will work inplace of a While-Loop,
// this will ask user whether they want to contiue exploring app or quit. 
async function Loop() {
    // user input:
    let InPut = await inquirer.prompt({
        name: "Ask",
        type: "confirm",
        default: true,
        message: "Do you want to Head Back to the Main Menu?"
    });
    switch (InPut.Ask) {
        case true:
            console.log(` Redirecting to "Services" of Nexa-Vault`);
            setTimeout(() => {
                Main();
            }, 4500);
            break;
        case false:
            console.log(" \nThankYou For using Nexa-Vault Banking Services");
            setTimeout(() => {
                console.log(" \n\nYour Feedbacks would be considered :)");
            }, 1000);
            break;
    }
}
;
// the code below asks and stores the pin from the user.
let pinInput = await inquirer.prompt([
    {
        name: "Input",
        type: "number",
        message: `\t\tWelcome to NexaVault Bank ATM \n\n\t\t Please insert your Pin to begin.\n\t\t`,
        //Name was suggested by AI
    },
]);
// if pininput is correct the following block of code will be executed:
if (pinInput.Input === Pin) {
    console.log(`\n\t\t**Access Granted**\n\nHow can we assist you today?`);
    Main();
    //transcations
}
else if (pinInput.Input != Pin && pinInput.input != Number) {
    setTimeout(() => {
        console.log(" Enter a 4-Digit Pincode & Enjoy Exploring the App \n Your Feedbacks would be appriciated :) ");
    }, 3000);
}
else {
    console.log("\tIncorrect Pin!\n Please Try Again.\n\n NOTE: If you're not sure about pinCode, Consider reading description or contact Developer.\n");
    console.log(" Enjoy Exploring the App & Drop your Feedbacks :) ");
}
