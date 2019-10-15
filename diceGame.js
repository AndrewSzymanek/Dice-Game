"use strict"

//As a user, I want to climb a mountain where my success is based off the results of dice rolls.
// As a user, I want the different sections of my climb to be based off different sided dice.
// As a user, I want to have my health and stamina tracked as I climb where various events effect both.
// As a user, I want to win the game, if I make it to the summit of the mountain with health and stamina greater than zero.
// As a user, I want the ability to rest at the half way point which could restore my stamina and maybe some health.
// Bonus:
// As a user, I want to see a visual progression up a "Mountain".


function climbMtEverest(){
    let health = 100;
    let outcomesHealth = [-10, +5, -30, -100, +10, -20, -40, -100]
    let outcome = ["Continue but low on food", "Received care package", "Continuing slower- you're ill", "You fell", "Rested-continue on!", "Frostbite", "losing stamina", "avalanche"]
    alert("Your goal is to climb Mt. Everest to its summit to win. Your first step is to trek in to base camp. Click OK to roll the die and determine your fate.")
    for(let i = 3; i <= 8; i ++){
        let diceRoll = rollDie(i); 
        
            if(health <= 0){
                console.log("Try again!");
            }
                 
            else if(health > 0){
                health += outcomesHealth[diceRoll - 1];
                console.log("You rolled " + diceRoll + "." + " " + outcome[diceRoll - 1] + "." + " " + "Current player health:" + " " + health);
                alert("You rolled " + diceRoll + "." + " " + outcome[diceRoll - 1] + "." + " " + "Current player health:" + " " + health);
            }
    }
}

function rollDie(n){
    return Math.floor(Math.random() * n) + 1;
}



// function climb(){
//     alert("Your goal is to climb Mt. Everest to its summit to win. Your first step is to trek in to base camp. Click OK to roll the die and determine your fate.")

//     let diceRoll = rollDie(3);
//     console.log("You rolled " + diceRoll); 
 
// }



 