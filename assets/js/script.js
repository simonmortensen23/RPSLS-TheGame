/**
 * Declare constants for DOM elements
 * and choices for buttons
 */
 
const buttons = document.getElementsByClassName("btn")
const playerScoreBoard = document.getElementById("player-score")
const computerScoreBoard = document.getElementById("computer-score")
const movesCounter = document.getElementById("moves-counter")
const playerImage = document.getElementById("player-image")
const computerImage = document.getElementById("computer-image")
const gameMessages = document.getElementById("game-messages")
const choiceMessages = document.getElementById("choice-messages")
/**const choices = {
ROCK:"rock",
PAPER: "paper",
SCISSORS: "scissors",
LIZARD: "lizard",
SPOCK: "spock",
}; */
const choices = ["rock", "paper", "scissors", "lizard", "spock"]
//[playerChoice, computerChoice, verb, playerWin]
const rules = [
    [choices.ROCK, choices.SCISSORS, 'crushes', true],
    [choices.ROCK, choices.PAPER, 'covers', false],
    [choices.ROCK, choices.LIZARD, 'crushes', true],
    [choices.ROCK, choices.SPOCK, 'vaporizes', false],
    [choices.SCISSORS, choices.SPOCK, 'smashes', false],
    [choices.SCISSORS, choices.PAPER, 'cuts', true],
    [choices.SCISSORS, choices.LIZARD, 'decapitates', true],
    [choices.SCISSORS, choices.ROCK, 'crushes', false],
    [choices.PAPER, choices.ROCK, 'covers', true],
    [choices.PAPER, choices.SCISSORS, 'cuts', false],
    [choices.PAPER, choices.LIZARD, 'eats', false],
    [choices.PAPER, choices.SPOCK, 'disproves', true],
    [choices.LIZARD, choices.SCISSORS, 'decapitates', false],
    [choices.LIZARD, choices.PAPER, 'eats', true],
    [choices.LIZARD, choices.ROCK, 'crushes', false],
    [choices.LIZARD, choices.SPOCK, 'poisons', true],
    [choices.SPOCK, choices.ROCK, 'vaporizes', true],
    [choices.SPOCK, choices.PAPER, 'disproves', false],
    [choices.SPOCK, choices.SCISSORS, 'smashes', true],
    [choices.SPOCK, choices.LIZARD, 'poisons', false],
    [choices.SPOCK, choices.SPOCK, 'poisons', false],
    [choices.LIZARD, choices.LIZARD, 'poisons', false],
    [choices.ROCK, choices.ROCK, 'poisons', false],
    [choices.SCISSORS, choices.SCISSORS, 'poisons', false],
    [choices.PAPER, choices.PAPER, 'poisons', false],
];

choiceMessages.innerText = "Make a choice:"
gameMessages.innerText = "Press one of the buttons to start game \nor press How To Play for game instructions"
let playerScore = 0
let computerScore = 0 
let moves = 0

/**
 * Add event listener "click" to game buttons
 */

 for (button of buttons){
    button.addEventListener("click", function (){
        let playerChoice = this.getAttribute("data-number")
        startGame(playerChoice)
    })
   
} 

/**
 * Function starts the game when player clicks a button
 *  computer will choose random option
 * Choices are compared and winner is given a point
 * When computer or player reaches the score of 3, endGame() is called
 */

function startGame(playerChoice) {
    
    console.log({playerChoice})
    
    moves++
    movesCounter.textContent = moves

    playerImage.src = `assets/images/${choices[playerChoice]}.png`
    playerImage.alt = choices[playerChoice]

    let computerChoice = Math.floor(Math.random() *5)
    computerImage.src = `assets/images/${choices[computerChoice]}.png`
    computerImage.alt = choices[computerChoice]

    checkWinner(choices[computerChoice], choices[playerChoice])

   

    if (moves == 20){
        
        endGame()
        
    
    } 
  
}

/** function getMessage(playerChoice, computerChoice, verb, playerWin) {
    let msg = `Player chose ${playerChoice} & computer chose ${computerChoice}\n`
    if (playerWin) {
        msg += `${playerChoice} ${verb} ${computerChoice}`;
    } else {
       msg += `${computerChoice} ${verb} ${playerChoice}`; 
    }
    return msg;
} */

/**
 * Checks player and computer choice
 *  and awards 1 point to the winner
 *  
 */

function checkWinner(computerChoice, playerChoice) {
   // search in rules and unpack/destruct details to local variables
 /**   console.log({rules})
  const [pChoice, cChoice, verb, playerWin] = [] || rules.find(
      (rule) => rule[0] === playerChoice && rule[1] === computerChoice
   )
   
   if ([pChoice, cChoice, verb, playerWin].includes(undefined)) {
    console.log("Reglerne er konfigureret forkert");
 }
    
   if (playerWin) {
       playerScore++
       playerScoreBoard.textContent = playerScore
   } else {
       computerScore++ 
       computerScoreBoard.textContent = computerScore
   }
   gameMessages.innerText = getMessage(pChoice, cChoice, verb, playerWin) */
   if (computerChoice === playerChoice){
        gameMessages.innerText = `\nTie`
        console.log(computerChoice)
    } else if (playerChoice === "rock"){
        if (computerChoice === "paper"){
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${computerChoice} covers ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore
        }else if (computerChoice === 'spock') {
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${computerChoice} vaporizes ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore 
        } else if (computerChoice === 'scissors'){
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${playerChoice} crushes ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        } else if (computerChoice === 'lizard'){
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${playerChoice} crushes ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        }
        
    } else if (playerChoice === 'paper'){
        if (computerChoice === 'scissors'){
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${computerChoice} cuts ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore
        }else if (computerChoice === 'lizard') {
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${computerChoice} eats ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore 
        } else if (computerChoice === 'rock'){
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${playerChoice} covers ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        } else if (computerChoice === 'spock') {
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${playerChoice} disproves ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        }
        
    } else if (playerChoice == 'scissors'){
        if (computerChoice === 'rock'){
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${computerChoice} crushes ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore
        }else if (computerChoice === 'spock') {
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${computerChoice} smashes ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore 
        } else if (computerChoice === 'paper'){
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${playerChoice} cuts ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        } else {
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${playerChoice} decapitates ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        }
        
    } else if (playerChoice == 'lizard'){
        if (computerChoice === 'scissors'){
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${computerChoice} decapitates ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore
        }else if (computerChoice === 'rock') {
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${computerChoice} crushes ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore 
        } else if (computerChoice === 'paper'){
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${playerChoice} eats ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        } else if (computerChoice === 'spock') {
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${playerChoice} poisons ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        }
        
    } else if (playerChoice == 'spock'){
        if (computerChoice === 'paper'){
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${computerChoice} disproves ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore
        }else if (computerChoice === 'lizard') {
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${computerChoice} poisons ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore 
        } else if (computerChoice === 'scissors'){
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${playerChoice} smashes ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        } else if (computerChoice === 'rock') {
            gameMessages.innerText = `Player chose ${playerChoice} & computer chose ${computerChoice} \n${playerChoice} vaporizes ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        }
        
    }  

}


        /**
         * 
         */
        function endGame () {

            for (let button of buttons){
                
                    button.style.display = "none"
                }
                if (playerScore > computerScore) {
                    choiceMessages.innerHTML = "Game Over"
                    gameMessages.innerText = `Player has won \nThe final score is: ${playerScore} / ${computerScore} \nRefresh page to play again!`
                    playerImage.src = `assets/images/loserWinner.png`
                    computerImage.src = `assets/images/computerLose.png`
                } else if (computerScore > playerScore) {
                    choiceMessages.innerHTML = "Game Over"
                    gameMessages.innerText = `Computer has won \nThe final score is: ${playerScore} / ${computerScore} \nRefresh page to play again!`
                    playerImage.src = `assets/images/loser.png`
                    computerImage.src = `assets/images/computerWin.png`
                } else {
                    choiceMessages.innerHTML ="Game Over"
                    gameMessages.innerText = `Game is tie \nThe final score is: ${playerScore} / ${computerScore} \nRefresh page to play again!`
                    playerImage.src = `assets/images/player.png`
                    computerImage.src = `assets/images/computerWin.png`
                }
                  
        }

        function howToPlay() {
    
            let htp = document.getElementById('htpText')
            if (htp.innerHTML == ""){
                console.log(howToPlay);
            htp.innerHTML = `<h3>How To Play:</h3>
            <div><h4>Rules:</h4> The player with most points after 20 moves wins!</div> <br> <br>
            <div>Scissors cuts Paper //
            Paper covers Rock //
            Rock crushes Lizard //
            Lizard poisons Spock //
            Spock smashes Scissors //
            Scissors decapitates Lizard //
            Lizard eats Paper //
            Paper disproves Spock //
            Spock vaporizes Rock //
            Rock crushes Scissors</div>
            <img src="assets/images/rpsls.png">`
            htp.style.width = "75%"
            htp.style.border = "4px solid #e36951"
            htp.style.boxShadow = "5px 10px #e36951"
            htp.style.margin = "0 auto"
           
        } else {
            console.log("Hi")
            htp.innerHTML = ""
            htp.style.border = "0px"
            } 
        }