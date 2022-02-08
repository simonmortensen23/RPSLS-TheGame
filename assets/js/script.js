/**
 * Declare constants for DOM elements
 * and choices for buttons
 */
 const playerScoreBoard = document.getElementById("player-score")
 const computerScoreBoard = document.getElementById("computer-score")
 const movesCounter = document.getElementById("moves-counter")
 const playerImage = document.getElementById("player-image")
 const computerImage = document.getElementById("computer-image")
 const gameMessages = document.getElementById("game-messages")
 const choiceMessages = document.getElementById("choice-messages");
 const choicesContainer = document.getElementById("choices-container");
const CHOICES_CONFIG = [
    {
        id: 'rock',
        name: 'Rock',
        winsOver: ['scissors', 'lizard']
    },
    {
        id: 'paper',
        name: 'Paper',
        winsOver: ['rock', 'spock']
    },
    {
        id: 'scissors',
        name: 'Scissors',
        winsOver: ['paper', 'lizard']
    },
    {
        id: 'lizard',
        name: 'Lizard',
        winsOver: ['paper', 'spock']
    },
    {
        id: 'spock',
        name: 'Spock',
        winsOver: ['rock', 'scissors']
    },
];
    choiceMessages.innerText = "Make a choice:"
    gameMessages.innerText = "Press one of the buttons to start game \nor press How To Play for game instructions"

    function startGame() {
        playerScore = 0;
        computerScore = 0;
        moves = 0;
        initUI();
        initEventListeners();
    }

    function initUI() {

        playerImage.src = `assets/images/player.png`;
        computerImage.src = `assets/images/computerWin.png`
    
        let btnHTML = '';
    
        CHOICES_CONFIG.forEach(eachOption => {
            btnHTML += `<button aria-label="${eachOption.name}" data-id="${eachOption.id}" class="btn">${eachOption.name}</button>`
        });
    
        choicesContainer.innerHTML = btnHTML;
    }

    function initEventListeners() {
        const choicesButtons = document.getElementsByClassName("btn");
    
        for (choiceBtn of choicesButtons){
            choiceBtn.addEventListener("click", function (){
                let playerChoiceId = this.getAttribute("data-id");
                const computerChoiceId = getComputerChoiceId();
                checkWinner(computerChoiceId, playerChoiceId);
            })
        }
    }

    function getComputerChoiceId() {
        let randomNumber = Math.floor(Math.random() *5);
        return CHOICES_CONFIG[randomNumber].id;
    }

    function checkWinner(computerChoiceId , playerChoiceId) {
        const playerChoiceData = CHOICES_CONFIG.find(eachChoice => eachChoice.id === playerChoiceId);
        playerImage.src = `assets/images/${playerChoiceId}.png`
        playerImage.alt = playerChoiceId
        computerImage.src = `assets/images/${computerChoiceId}.png`
        computerImage.alt = computerChoiceId
        if(computerChoiceId === playerChoiceId) {
            //draw
            gameMessages.innerText = `\nTie`
        } else if(playerChoiceData.winsOver.includes(computerChoiceId)) {
            // Player won
            gameMessages.innerText = `${playerChoiceId} beats ${computerChoiceId}`
            playerScore++;
        } else {
            // Comp wins
            gameMessages.innerText = `${computerChoiceId} beats ${playerChoiceId}`
            computerScore++;
        }
        computerScoreBoard.textContent = computerScore;
        playerScoreBoard.textContent = playerScore;
        moves++
        movesCounter.textContent = moves;
    
        if (moves == 20){
            endGame();
        }
    }

    function endGame () {
        const choicesButtons = document.getElementsByClassName("btn");
        for (choiceBtn of choicesButtons){
            choiceBtn.style.display = "none"
        }
    
        let msg = "";
        if (playerScore > computerScore) {
            msg = 'Player has won';
    
            playerImage.src = `assets/images/loserWinner.png`
            computerImage.src = `assets/images/computerLose.png`
        } else if (computerScore > playerScore) {
    
            msg = `Computer has won`;
            playerImage.src = `assets/images/loser.png`
            computerImage.src = `assets/images/computerWin.png`
        } else {
    
            msg = `Game is tie`;
            playerImage.src = `assets/images/player.png`
            computerImage.src = `assets/images/computerWin.png`
        }
        choiceMessages.innerHTML ="Game Over";
        gameMessages.innerText = `${msg} \nThe final score is: ${playerScore} / ${computerScore} \nRefresh page to play again!`
    }

        function howToPlay() {
    
            let htp = document.getElementById('htpText')
            if (htp.style.display = "none"){
                
           htp.style.display = "block";
           
        } else {
            
            htp.innerHTML = "";
            
            } 
        }