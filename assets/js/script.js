/**
 * Declare constants for DOM elements
 * and choices for buttons
 */
const buttons = document.getElementsByClassName("btn")
let playerScore = 0
let computerScore = 0
let moves = 0
const playerImage = document.getElementById("player-image")
const computerImage = document.getElementById("computer-image")
const gameMessages = document.getElementById("game-messages")
const choiceMessages = document.getElementById("choice-messages")
const choices = ["rock", "paper", "scissors", "lizard", "spock"]
choiceMessages.innerText = "Make a choice:"

/**
 * Add event listener "click" to all buttons
 */
for (let button of buttons){
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

    const movesCounter = document.getElementById("moves-counter")
    moves++
    movesCounter.textContent = moves
    playerImage.src = `assets/images/${choices[playerChoice]}.png`
    playerImage.alt = choices[playerChoice]

    let computerChoice = Math.floor(Math.random() *5)

    computerImage.src = `assets/images/${choices[computerChoice]}.png`
    computerImage.alt = choices[computerChoice]

    checkWinner(choices[computerChoice], choices[playerChoice])

   

    if (playerScore == 20 || computerScore == 20 || moves == 20){
        
        endGame()
        
    
    } 
  
}

/**
 * Checks player and computer choice
 *  and awards 1 point to the winner
 *  
 */

function checkWinner(computerChoice, playerChoice) {
    const playerScoreBoard = document.getElementById("player-score")
    const computerScoreBoard = document.getElementById("computer-score")
    if (computerChoice === playerChoice){
        gameMessages.innerText = `Tie`
        console.log("hello")
    } else if (playerChoice === 'rock'){
        if (computerChoice === 'paper'){
            gameMessages.innerText = `${computerChoice} covers ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore
        }else if (computerChoice === 'spock') {
            gameMessages.innerText = `${computerChoice} vaporizes ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore 
        } else if (computerChoice === 'scissors'){
            gameMessages.innerText = `${playerChoice} crushes ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        } else if (computerChoice === 'lizard'){
            gameMessages.innerText = `${playerChoice} crushes ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        }
        
    } else if (playerChoice === 'paper'){
        if (computerChoice === 'scissors'){
            gameMessages.innerText = `${computerChoice} cuts ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore
        }else if (computerChoice === 'lizard') {
            gameMessages.innerText = `${computerChoice} eats ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore 
        } else if (computerChoice === 'rock'){
            gameMessages.innerText = `${playerChoice} covers ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        } else if (computerChoice === 'spock') {
            gameMessages.innerText = `${playerChoice} disproves ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        }
        
    } else if (playerChoice == 'scissors'){
        if (computerChoice === 'rock'){
            gameMessages.innerText = `${computerChoice} crushes ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore
        }else if (computerChoice === 'spock') {
            gameMessages.innerText = `${computerChoice} smashes ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore 
        } else if (computerChoice === 'paper'){
            gameMessages.innerText = `${playerChoice} cuts ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        } else {
            gameMessages.innerText = `${playerChoice} decapitates ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        }
        
    } else if (playerChoice == 'lizard'){
        if (computerChoice === 'scissors'){
            gameMessages.innerText = `${computerChoice} decapitates ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore
        }else if (computerChoice === 'rock') {
            gameMessages.innerText = `${computerChoice} crushes ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore 
        } else if (computerChoice === 'paper'){
            gameMessages.innerText = `${playerChoice} eats ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        } else if (computerChoice === 'spock') {
            gameMessages.innerText = `${playerChoice} poisons ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        }
        
    } else if (playerChoice == 'spock'){
        if (computerChoice === 'paper'){
            gameMessages.innerText = `${computerChoice} disproves ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore
        }else if (computerChoice === 'lizard') {
            gameMessages.innerText = `${computerChoice} poisons ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore 
        } else if (computerChoice === 'scissors'){
            gameMessages.innerText = `${playerChoice} smashes ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        } else if (computerChoice === 'rock') {
            gameMessages.innerText = `${playerChoice} vaporizes ${computerChoice}`
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
                    playerImage.src = `assets/images/winner.png`
                    computerImage.src = `assets/images/loser.png`
                } else if (computerScore > playerScore) {
                    choiceMessages.innerHTML = "Game Over"
                    gameMessages.innerText = `Computer has won \nThe final score is: ${playerScore} / ${computerScore} \nRefresh page to play again!`
                    playerImage.src = `assets/images/loser.png`
                    computerImage.src = `assets/images/winner.png`
                }
                  
        }

        function howToPlay() {
    
            let htp = document.getElementById('htpText')
            if (htp.innerHTML == ""){
                console.log(howToPlay);
            htp.innerHTML = "<h2>How To Play</h2> <br> Rules: <ul><li>Enter Username</li><li>The player gets 10 questions</li><li>1 point per question</li><li>Three wrong answers and the game is over</li></ul>"
            htp.style.width = "50vw"
            htp.style.border = "4px solid #37003c"
            htp.style.boxShadow = "5px 10px #37003c"
        } else {
            console.log("Hi")
            htp.innerHTML = ""
            htp.style.border = "0px"
            } 
        }