/*
PIG GAME v.2.0 
by: Rui Nves

RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls 2 dices as many times as he whishes. Each result get added to his ROUND score.
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach the points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gameOn;


int();
//Event Listener to roll the dices.
document.querySelector('.btn-roll').addEventListener('click', function() { //Event Listener to roll the dices.
        if(gameOn){    
        //1. Dice 1 
        var dice = Math.floor(Math.random() * 6) + 1; // Gives the random number from 1 to 6 (DICE).
        
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        console.log(dice)
        
        //2. Dice 2
        var dice2 = Math.floor(Math.random() * 6) + 1;//Gives the random number from 1 to 6 (DICE).
        // Display the result Dice 1
        var diceDOM2 = document.querySelector('.dice2');
        diceDOM2.style.display = 'block';
        diceDOM2.src = 'dice-' + dice2 + '.png';
        console.log(dice2)
        
        document.querySelector('#current-' + activePlayer).textContent = dice;
        document.querySelector('#current-' + activePlayer).textContent = dice2;

        //3. Update the round score.
        if((dice !== 1 && dice2 !== 1)){
            //Add the round score to the Main Score
            roundScore += dice + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();  
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() { //Event Listener to Hold the score from the round.
    if(gameOn){
    //Add Roundscore to Score.
    scores[activePlayer] += roundScore;
    
    //Update Score.
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
   
    // Get the value of the input field with id="input"
    var x = document.getElementById("input").value;

    //Check if player won the game. // Update Max score.
    if(scores[activePlayer] >= x ){
        document.querySelector("#name-" + activePlayer).textContent = "Winner!";
        document.querySelector("#winnerNumber").style.display = "none";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".dice2").style.display = "none";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        x.textContent=' '
        gameOn = false;   
        document.querySelector(".btn-hold").style.display = "none";
        document.querySelector(".btn-roll").style.display = "none";
        document.querySelector(".btn-new").style.display = "block";    
        }else {
       nextPlayer(); // The Next Player Plays!
    }
    
    }
});

function nextPlayer(){ //Make the next playery play!
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
            roundScore = 0
             /*Alternative Code
            if(activePlayer === 0){
                activePlayer = 1;
            } else {
                activePlayer = 0;
            } */
            document.getElementById("current-0").textContent = "0";
            document.getElementById("current-1").textContent = "0";
           /*Chage the Active Player!
           document.querySelector(".player-0-panel").classList.remove('active');
           document.querySelector(".player-1-panel").classList.add('active');
           */
          document.querySelector(".player-0-panel").classList.toggle('active');
          document.querySelector(".player-1-panel").classList.toggle('active');

          document.querySelector(".dice").style.display = "none";
          document.querySelector(".dice2").style.display = "none";
}

function numberScore() {
    x = "";
    // Get the value of the input field with id="input"
    x = document.getElementById("input").value;
  
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) == true || x < 1 || x > 100) {
      alert("Number not valid or Not a Number. Please enter a Number between 1 and 100");     
    } else {
    document.querySelector(".score-input").style.display = "none";
    document.getElementById("winnerNumber").innerHTML = "Wins who reach " + x +".";
    gameOn = true;   
    }
  }
 

document.querySelector('.btn-score').addEventListener('click', numberScore); 

document.querySelector('.btn-new').addEventListener("click", int, numberScore )

    function int(){
            scores = [0,0];
            roundScore = 0;
            activePlayer = 0;
             //Hides the dice when the page loads.
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
             
            //document.querySelector('#current-' + activePlayer).textContent = dice;
            //Set all scores / rounds to Zero.
            document.querySelector(".score-input").style.display = "block";
            document.getElementById("score-0").textContent = "0";
            document.getElementById("current-0").textContent = "0";
            document.getElementById("score-1").textContent = "0";
            document.getElementById("current-1").textContent = "0";
            document.getElementById("name-0").textContent = "Player 1";
            document.getElementById("name-1").textContent = "Player 2";
            document.querySelector(".player-0-panel").classList.remove("winner");
            document.querySelector(".player-1-panel").classList.remove("winner");
            document.querySelector(".player-0-panel").classList.remove("active");
            document.querySelector(".player-1-panel").classList.remove("active");
            document.querySelector(".player-0-panel").classList.add("active");
            document.querySelector(".btn-hold").style.display = "block";
            document.querySelector(".btn-roll").style.display = "block";
            document.querySelector(".btn-new").style.display = "none";
    
    };
