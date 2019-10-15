"use strict"

//As a user, I want to climb a mountain where my success is based off the results of dice rolls.
// As a user, I want the different sections of my climb to be based off different sided dice.
// As a user, I want to have my health and stamina tracked as I climb where various events effect both.
// As a user, I want to win the game, if I make it to the summit of the mountain with health and stamina greater than zero.
// As a user, I want the ability to rest at the half way point which could restore my stamina and maybe some health.
// Bonus:
// As a user, I want to see a visual progression up a "Mountain".

climbMtEverest()
function climbMtEverest(){
    let health = 100;
    let outcomesHealth = [-10, +5, -30, -20, +10, -20, -40, -100]; 
    let outcome = ["Continue but low on food", "Received care package", "Illness", "Injury", "Rested-continue on!", "Frostbite", "Losing stamina", "Avalanche"]
    alert("Your goal is to climb Mt. Everest to its summit to win. Your first step is to trek in to base camp. Click OK to roll dice and determine your success. As long as your health is over 0, you will reach the summit.")
    let climbStage = ["TrekIn", "BaseCamp", "Camp1" , "Camp2", "Camp3", "SummitFinalBid"];
    for(let i = 3; i <= 8; i ++){
        let diceRoll = rollDie(i); 
            
            if(health <= 0){
            alert("Try again!");
            }
            else if(health > 0){
                health += outcomesHealth[diceRoll - 1];
                
                alert("You rolled " + diceRoll + "." + " " +  climbStage[i - 3] + "." + " " + outcome[diceRoll - 1] + "." + " " + "Current player health:" + " " + health);
            }
            
        }
}

function rollDie(n){
    return Math.floor(Math.random() * n) + 1;
}


//Play again function?




 