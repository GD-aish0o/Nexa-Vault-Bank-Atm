#! /usr/bin/env node 

import inquirer from "inquirer"
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choice.js";

let Pin:number = 9801;

let Balance : number = 25000; //pkr

let pinInput = await inquirer.prompt(
    [
        {
            name:"Input",
            type:"Input", //changes the type from number to input
            message: `Welcome to NexaVault Bank ATM \n Please insert your Pin to begin.`
             //Name was suggested by AI 
        }
    ]
)

if (pinInput.Input === Pin) {
        console.log(`**Access Granted**\nHow can we assist you today?`);
           
           //transcations
        let trncasion = await inquirer.prompt(
            [
                {
                    name: "Services",
                    message:"Choose an option to manage your finances:",
                    type:"list",
                    choices:["Balance Inquiry" , "Withdraw" , "Ready Cash" , "Deposit" , "Account Services"]
                }
            ]
        ) 

    if (trncasion.Services==="Balance Inquiry") {
                console.log(`Your current balance is ${Balance} pkr`);
                        
    } else if (trncasion.Services==="Withdraw") {

      //withdraw amount = widAm
            let widAm = await inquirer.prompt(
                [
                    {
                       name:"amount",
                       type: "Input", //changes the type from number to input.
                       message: "Enter an amount to withdraw" 
                    }
                ]
            );

            if (widAm.amount <= Balance) {

                console.log(`Your remaining Balance is` , (Balance - widAm.amount), `Thank You for using our services`);
                
            } else if (widAm.amount >= Balance) {
                console.log(`insufficient amount, Your current balance is ${Balance}`);
                
            } else {
                console.log("please enter an amount to withdraw");
            }
        
    } else if (trncasion.Services==="Ready Cash") {

        // ReadyCashOptions = rcOpts
        let rcOpts = await inquirer.prompt(
            [
                {
                    name:"RC",
                    type:"list",
                    message:"Choose an amount to withdraw",
                    choices:[5000, 10000, 15000, 20000]
                }
            ]
        )
            if (rcOpts.RC <= Balance) {

                console.log(`Your remaining balance is `, (rcOpts.RC - Balance) ,`\n Thank you for using our services`);
                
            } else if (rcOpts.RC >= Balance) {
                
                console.log(`Your Account balance is insufficient for this transcation`);
                
            } else {

                console.log(`Please choose an amount to withdraw as Ready-Cash`);
                
            }
             
    } else if (trncasion.Services==="Deposit") {

         // Quick deposit = qckDpzt
            let qckDpzt = await inquirer.prompt(
                [
                    {
                        name:"QuickDeposit",
                        type:"Input", //Changed the type from number to input
                        message:"Enter an amount you want to deposit into your account."
                    }
                ]
            )

            if (qckDpzt.QuickDeposit <= 50000) {

            console.log(`The amount you provided has been transferred to your account. Your new Balance is` , (qckDpzt.QuickDeposit + Balance) );
            console.log("Thanks for using our services");
                
            } else if (qckDpzt.QuickDeposit >= 50000) {
                console.log("We apologize, but the deposit limit for this transaction has been exceeded. Visit the nearest branch for further assistance.");
            } else {

                console.log('Please eneter an amount for Quick-Deposit');
            }
            
            
        
    } else if (trncasion.Services==="Account Services") {

        let options = await inquirer.prompt(
            [
                {        //acc = account
                    name: "accAssistance",
                    type:"list",
                    message:"How can we futher assist you?",
                    choices:["Pin Change" , "Request a Checkbook"]
                }
            ]
        ) 
        
        if (options.accAssistance === "Pin Change") {
            
            let confirmAction = await inquirer.prompt(

                [
                    {
                        name:"Confirmation",
                        type: "confirm",
                        message: "Do you really want to change your current ATM pin?"
                    }
                ]
            )
            
            if (confirmAction.Confirmation === false) {

                console.log("Please contact support or visit the nearest branch of the bank, Thank You.!");
                
            } else if (confirmAction.Confirmation === true) {

                let verify = await inquirer.prompt(
                    [
                        {
                            name : "VerifyChange",
                            message : "Please verify Your Identity as the Owner of the account, Enter your Current pin",
                            type: "number" // left it unchanged to see if number value works
                        }
                    ]
                )
                
                if (verify.VerifyChange != Pin) {

                    console.log(`Verification failed, Your account is now disabled for 3 months, visit the main branch for further assistance`);
                }
                // } else if (verify.VerifyChange === Pin) {

                //     let NewPin = await inquirer.prompt(
                //         [
                //             {
                //                 name:"Pin",
                //                 type:"number",
                //                 message: "Enter Four digits as you New Pin"
                //             }
                //         ]
                //     )

                //     let CurrentPin = NewPin.Pin;
                // }

            
            }
        } else if (options.accAssistance === "Request a Checkbook") {
            console.log("Request noticed, you'll recieve a phone call on your registered number in 2 weeks, Thanks for using our services");
            
        } else ("Try chosing an option next time.")

    }
} else { 
    console.log(`Try again & enter corret pin code this time. `);
}
