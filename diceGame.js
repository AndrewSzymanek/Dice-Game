"use strict"

//As a user, I want to climb a mountain where my success is based off the results of dice rolls.
// As a user, I want the different sections of my climb to be based off different sided dice.
// As a user, I want to have my health and stamina tracked as I climb where various events effect both.
// As a user, I want to win the game, if I make it to the summit of the mountain with health and stamina greater than zero.
// As a user, I want the ability to rest at the half way point which could restore my stamina and maybe some health.
// Bonus:
// As a user, I want to see a visual progression up a "Mountain".


function climbMtEverest(){
    let stamina = 100;
    let health = 100;
    let outcomesStamina = [-20, +10, -20, -10, +40, 0, -30, -100];
    let outcomesHealth = [-10, +5, -30, -20, +10, -20, -40, -100]; 
    let outcome = ["Low on food", "Received care package", "Illness", "Injury", "Rested-continue on!", "Frostbite", "Losing stamina", "Avalanche"]
    alert("Your goal is to climb Mt. Everest to its summit to win. Your first step is to trek in to base camp. Click OK to roll dice and determine your success. As long as your health AND stamina are over 0, you will reach the summit.")
    let climbStage = ["Trek In", "Base Camp", "Camp 1" , "Camp 2", "Camp 3", "Summit Final Bid"];
    for(let i = 3; i <= 8; i ++){
        let diceRoll = rollDie(i); 
        if(health <= 0 && stamina <= 0){
            stamina += outcomesStamina[diceRoll - 1];
            health += outcomesHealth[diceRoll - 1];
            { break; }
        }
        else if(health > 0 && stamina > 0){
            stamina += outcomesStamina[diceRoll - 1];
            health += outcomesHealth[diceRoll - 1];
            
        console.log("You rolled " + diceRoll + "." + " " + outcome[diceRoll - 1] + " " + "at" + " " +  climbStage[i - 3] + "." + " " + "Current player health:" + " " + health + " " + "and" + " " + "current player stamina:" + " " + stamina + ".");
        } 
    }
    if(health > 0 && stamina > 0){
        console.log("You made it to the top!");
    }
    else{
        console.log("Try again!")
    } 
}

function rollDie(n){
    return Math.floor(Math.random() * n) + 1;
}


//Play again function?




 