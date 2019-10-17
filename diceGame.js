"use strict"

//As a user, I want to climb a mountain where my success is based off the results of dice rolls.
// As a user, I want the different sections of my climb to be based off different sided dice.
// As a user, I want to have my health and stamina tracked as I climb where various events effect both.
// As a user, I want to win the game, if I make it to the summit of the mountain with health and stamina greater than zero.
// As a user, I want the ability to rest at the half way point which could restore my stamina and maybe some health.
// Bonus:
// As a user, I want to see a visual progression up a "Mountain".

let stamina = 100;
let health = 100;

function trekIn(){
    let  outCome = rollDie(3);
    if(health <= 0 || stamina <= 0){
        alert("Try again!");
        refreshPage();
    }
    if(outCome == 1){
        health -= 10;
        stamina -= 10;
        document.getElementById("firstP").innerHTML = "After traveling to the base of the mountain, you need to trek in to base camp. You are ready for your adventure but a little dehydrated. Health and stamina -10.";
        document.getElementById("secondP").innerHTML = "Health =" +  " " + health + " " + "Stamina =" + " " + stamina;
        
    }
    if(outCome == 2){
        health +=0;
        stamina +=0;
        document.getElementById("firstP").innerHTML = "After traveling to the base of the mountain, you need to trek in to base camp. You make it without any hitches- hooray!";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
       
    }
    if(outCome == 3){
        health +=0;
        stamina -=20;
        document.getElementById("firstP").innerHTML = "After traveling to the base of the mountain, you need to trek in to base camp. Your car breaks down and you arrive late in the evening for your trek in. Stamina -20.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    document.getElementById("trekIn").style.display = "none";
    document.getElementById("baseCamp").style.display = "inline";

}
function baseCamp(){
    let outCome = rollDie(4);
    if(health <= 0 || stamina <= 0){
        alert("Try again!");
        refreshPage();
    }
    if(outCome == 1){
        health +=0;
        stamina +=0;
        document.getElementById("firstP").innerHTML = "You spend 15 days at Base Camp acclimating to the new elevation at 18,300 ft. You are trained for this well. Next, trek to Camp 1. Health and stamina remain full.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    if(outCome == 2){
        health -=20;
        stamina +=0;
        document.getElementById("firstP").innerHTML = "15 days at Base Camp take a bigger toll on your mind than you thought, but you are able to continue to Camp 1 starting at 18,300 ft. Health -20.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
       
    }
    if(outCome == 3){
        health -=100;
        stamina -=100;
        document.getElementById("firstP").innerHTML = "There is an avalanche warning for Base Camp. They say you must head home for safety- you can't continue to Camp 1. Health and stamina -100.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    if(outCome == 4){
        health +=0;
        stamina -=30;
        document.getElementById("firstP").innerHTML = "You don't rest as much as you should during your 15 days at Base Camp. 18,300 ft elevation takes its toll and you're tired going into your trek to Camp 1. Stamina -30.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    document.getElementById("baseCamp").style.display = "none";
    document.getElementById("camp1").style.display = "inline";
}

function camp1(){
    let outCome = rollDie(5);
    if(health <= 0 || stamina <= 0){
        alert("Try again!");
        refreshPage();
    }
    if(outCome == 1){
        health -=10;
        stamina -=10;
        document.getElementById("firstP").innerHTML = "Your ascension to Camp 1 is met with a winter storm. The winds are very strong and extra frigid at 21,300 ft but you make it. Stamina and health -10.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    if(outCome == 2){
        health -=5; 
        stamina +=0;
        document.getElementById("firstP").innerHTML = "Upon your ascension to Camp 1, you trip and hurt your ankle but make it to 21,300 ft. Health -5.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    if(outCome == 3){
        health +=0;
        stamina -=20; 
        document.getElementById("firstP").innerHTML = "You get lost on your way to Camp 1 making you extra tired. You eventually arrive at Camp 1. 21,300 ft. Stamina -20";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    if(outCome == 4){
        health -=100;
        stamina +=0;
        document.getElementById("firstP").innerHTML = "You fall ill and are unable to continue. Health -100.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    if(outCome == 5){
        health +=0;
        stamina +=0;
        document.getElementById("firstP").innerHTML = "Your trek to Camp 1 couldn't have been easier. You set up camp and continue worry-free. 21,300 ft.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    document.getElementById("camp1").style.display = "none";
    document.getElementById("camp2").style.display = "inline";
}

function camp2(){
    let outCome = rollDie(6);
    if(health <= 0 || stamina <= 0){
        alert("Try again!")
        refreshPage();
    }
    if(outCome == 1){
        health -=100;
        stamina +=0; 
        document.getElementById("firstP").innerHTML = "To get to Camp 2 at 23,100 ft, there is some steep climbing involved. You fall and break your leg. Health -100.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
       
    }
    if(outCome == 2){
        health ;
        stamina ;
        document.getElementById("firstP").innerHTML = "To get to Camp 2 at 23,100 ft, there is some steep climbing involved. Your training has prepared you well for this and you make it easily.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    if(outCome == 3){
        health ;
        stamina -=5; 
        document.getElementById("firstP").innerHTML = "To get to Camp 2 at 23,100 ft, there is some steep climbing involved. You struggle a bit, but you make it. Stamina -5.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    if(outCome == 4){
        health -=10;
        stamina ;
        document.getElementById("firstP").innerHTML = "To get to Camp 2 at 23,100 ft, there is some steep climbing involved. You fall and bruise your arm. Health -10.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    if(outCome == 5){
        health ;
        stamina -=50;
        document.getElementById("firstP").innerHTML = "To get to Camp 2 at 23,100 ft, there is some steep climbing involved. You unexpectedly come upon the abominable snow man (he vacations in Nepal). You run for your life. Stamina -50.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    if(outCome == 6){
        health ;
        stamina ;
        document.getElementById("firstP").innerHTML = "To get to Camp 2 at 23,100 ft, there is some steep climbing involved. Your training has prepared you well for this and you make it easily.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    document.getElementById("camp2").style.display = "none";
    document.getElementById("camp3").style.display = "inline";
}

function camp3(){
    let outCome = rollDie(7);
    if(health <= 0 || stamina <= 0){
        alert("Try again!")
        refreshPage();
    }
    if(outCome == 1){
        health ;
        stamina ;
        document.getElementById("firstP").innerHTML = "Camp 3 is located at 25,600 ft and requires more equipment(axes) to arrive. You've got the equipment and the training! Nice job. No problems.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
       
    }
    if(outCome == 2){
        health ;
        stamina -=10;
        document.getElementById("firstP").innerHTML = "Camp 3 is located at 25,600 ft and requires more equipment(stick & axe) to arrive. You forget the equipment and have to freestyle. Stamina -10.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
      
    }
    if(outCome == 3){
        health ;
        stamina -=10;
        document.getElementById("firstP").innerHTML = "Camp 3 is located at 25,600 ft and requires more equipment(stick & axe) to arrive. That darn abominable snowman stole your bag of equipment. Stamina -10. ";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    if(outCome == 4){
        health ;
        stamina ;
        document.getElementById("firstP").innerHTML = "Camp 3 is located at 25,600 ft and requires more equipment(stick & axe) to arrive. You've got the equipment and the training! Nice job. No problems.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    if(outCome == 5){
        health ;
        stamina -=10;
        document.getElementById("firstP").innerHTML = "Camp 3 is located at 25,600 ft and requires more equipment(stick & axe) to arrive. You forget the equipment and have to freestyle. Stamina -10.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    if(outCome == 6){
        health -=50; 
        stamina ;
        document.getElementById("firstP").innerHTML = "Camp 3 is located at 25,600 ft and requires more equipment(stick & axe) to arrive. You've got what you need, but the flu gets you down. Health -50.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    if(outCome == 7){
        
        document.getElementById("firstP").innerHTML = "Camp 3 is located at 25,600 ft and requires more equipment(stick & axe) to arrive. You need to use your arms more but you're super sore. Health -10.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    document.getElementById("camp3").style.display = "none";
    document.getElementById("finalSummitBid").style.display = "inline";
}

function finalSummitBid(){
    let outCome = rollDie(8);
    if(health <= 0 || stamina <= 0){
        alert("Try again!")
        refreshPage();
    }
    if(outCome == 1){
        health ;
        stamina ;
        document.getElementById("firstP").innerHTML = "This is the moment you've been gearing up for. You will finally make your journey to 27,200 ft and above to the summit. Congratulations! No hiccups. The view is beautiful.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
       
    }
    if(outCome == 2){
        health -=100;
        stamina -=100;
        document.getElementById("firstP").innerHTML = "This is the moment you've been gearing up for. You will finally make your journey to 27,200 ft and above to the summit. You fall off the mountain but at least the view is beautiful on the way down. Health and stamina -100. ";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
       
    }
    if(outCome == 3){
        health ;
        stamina ;
        document.getElementById("firstP").innerHTML = "This is the moment you've been gearing up for. You will finally make your journey to 27,200 ft and above to the summit. Congratulations! No hiccups. The view is beautiful.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
       
    }
    if(outCome == 4){
        health -=100;
        stamina -=100;
        document.getElementById("firstP").innerHTML = "This is the moment you've been gearing up for. You will finally make your journey to 27,200 ft and above to the summit. You fall off the mountain but at least the view is beautiful on the way down. Health and stamina -100. ";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
       
    }
    if(outCome == 5){
        health ;
        stamina ;
        document.getElementById("firstP").innerHTML = "This is the moment you've been gearing up for. You will finally make your journey to 27,200 ft and above to the summit. Congratulations! No hiccups. The view is beautiful.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
       
    }
    if(outCome == 6){
        health ;
        stamina -=40;
        document.getElementById("firstP").innerHTML = "This is the moment you've been gearing up for. You will finally make your journey to 27,200 ft and above to the summit. Turns out mountain climbing isn't as hard for others as it is for you. There's a line to get to the summit and you get exhausted from waiting in line for your selfie. Stamina -40.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    if(outCome == 7){
        health -=10;
        stamina ;
        document.getElementById("firstP").innerHTML = "This is the moment you've been gearing up for. You will finally make your journey to 27,200 ft and above to the summit. The abominable snowman is there waiting for you and he just wants to give you a hug. Unfortunately, he's just too big. It hurts. Health -10.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    if(outCome == 8){
        health -10;
        stamina ;
        document.getElementById("firstP").innerHTML = "This is the moment you've been gearing up for. You will finally make your journey to 27,200 ft and above to the summit. The abominable snowman is there waiting for you and he just wants to give you a hug. Unfortunately, he's just too big. It hurts. Health -10.";
        document.getElementById("secondP").innerHTML = "Health =" +  " "+ health +  " " + "Stamina =" + " " + stamina;
        
    }
    document.getElementById("finalSummitBid").style.display = "none";
    document.getElementById("endingOutcome").style.display = "inline";
}

function endingOutcome(){
    if(health <= 0 || stamina <= 0){
        alert("Try again!")
        refreshPage();
    }
    else{
        document.getElementById("firstP").innerHTML = "Yay! You made it!! Enjoy the summit. Take pictures."
        document.getElementById("secondP").innerHTML = " ";
    }
    
    document.getElementById("endingOutcome").style.display = "none";
    
}


function rollDie(n){
    
    return Math.floor(Math.random() * n) + 1;
}

function refreshPage(){
    window.location.reload();
} 