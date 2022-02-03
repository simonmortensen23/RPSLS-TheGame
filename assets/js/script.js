/**
 * Declare constants for DOM elements
 * and choices for buttons
 */
const buttons = document.getElementsByClassName("btn")
let playerScore = 0
let computerScore = 0
const playerImage = document.getElementById("player-image")
const computerImage = document.getElementById("computer-image")
const gameMessages = document.getElementById("game-messages")
const choices = ["rock", "paper", "scissors", "lizard", "spock"]

/**
 * Add event listener "click" to all buttons
 */
for (let button of buttons){
    button.addEventListener("click", function (){
        let playerChoice = this.getAttribute("data-number")
        startGame(playerChoice)
    })
    
}

function startGame(playerChoice) {

    

    playerImage.src = `assets/images/${choices[playerChoice]}.png`
    playerImage.alt = choices[playerChoice]

    let computerChoice = Math.floor(Math.random() *5)

    computerImage.src = `assets/images/${choices[computerChoice]}.png`
    computerImage.alt = choices[computerChoice]

    checkWinner(choices[computerChoice], choices[playerChoice])

   

    if (playerScore == 3 || computerScore == 3){
        endGame()
    
    } 
  
}

function checkWinner(computerChoice, playerChoice) {
    const playerScoreBoard = document.getElementById("player-score")
    const computerScoreBoard = document.getElementById("computer-score")
    if (computerChoice === playerChoice){
        gameMessages.innerText = `Tie`
        console.log("hello")
    } else if (playerChoice == 'rock'){
        if (computerChoice === 'paper'){
            gameMessages.innerText = `${computerChoice} beats ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore
        }else if (computerChoice === 'spock') {
            gameMessages.innerText = `${computerChoice} beats ${playerChoice}`
            computerScore++
            computerScoreBoard.textContent = computerScore 
        } else if (computerChoice === 'scissor'){
            gameMessages.innerText = `${playerChoice} beats ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        } else {
            gameMessages.innerText = `${playerChoice} beats ${computerChoice}`
            playerScore++
            playerScoreBoard.textContent = playerScore
        } }}


        function endGame () {
            gameMessages.innerText = `The final score is: ${playerScore} / ${computerScore}`
            playerImage.src = `assets/images/rpsls.png`
            computerImage.src = `assets/images/rpsls.png`
            startGame(playerChoice)
        }