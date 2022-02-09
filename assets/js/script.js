/**
 * Declare constants for DOM elements
 * add eventlistener to startGame() on load
 * and choices for buttons
 */
 const playerScoreBoard = document.getElementById("player-score");
 const computerScoreBoard = document.getElementById("computer-score");
 const movesCounter = document.getElementById("moves-counter");
 const playerImage = document.getElementById("player-image");
 const computerImage = document.getElementById("computer-image");
 const gameMessages = document.getElementById("game-messages");
 const choiceMessages = document.getElementById("choice-messages");
 const choicesContainer = document.getElementById("choices-container");
 const resultMessages = document.getElementById("result-messages");
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

    window.addEventListener('load', function() {
        startGame();
    console.log('All assets are loaded')
});

    choiceMessages.innerText = "Make a choice:"
    gameMessages.innerText = "Press one of the buttons to start game \nor press How To Play for game instructions"

    /**
     *  Sets the scores and move counter to 0
     *  and calling functions to setup the userinterface
     *  and add eventListeners to buttons
     */
    function startGame() {
        playerScore = 0;
        computerScore = 0;
        moves = 0;
        getUI();
        getEventListeners();
    }

    /**
     * Sets up user interface
     * and five buttons with data from CHOICE_CONFIG
     */
    function getUI() {

        playerImage.src = `assets/images/player.png`;
        computerImage.src = `assets/images/computerWin.png`
    
        let btnHTML = '';
    
        CHOICES_CONFIG.forEach(eachOption => {
            btnHTML += `<button aria-label="${eachOption.name}" data-id="${eachOption.id}" class="btn">${eachOption.name}</button>`
        });
    
        choicesContainer.innerHTML = btnHTML;
    }
    /**
     * Add eventlisteners to the button
     * 
     */
    function getEventListeners() {
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
        let computerChoiceData = Math.floor(Math.random() *5);
        return CHOICES_CONFIG[computerChoiceData].id;
    }

    function checkWinner(computerChoiceId , playerChoiceId) {
        const playerChoiceData = CHOICES_CONFIG.find(eachChoice => eachChoice.id === playerChoiceId);
        playerImage.src = `assets/images/${playerChoiceId}.png`
        playerImage.alt = playerChoiceId
        computerImage.src = `assets/images/${computerChoiceId}.png`
        computerImage.alt = computerChoiceId

        gameMessages.innerText = `Player chose ${playerChoiceId} & computer chose ${computerChoiceId} `
        if(computerChoiceId === playerChoiceId) {
            //draw
            resultMessages.innerText = `\nTie`
        } else if(playerChoiceData.winsOver.includes(computerChoiceId)) {
            // Player won
            resultMessages.innerText = `\n${playerChoiceId} beats ${computerChoiceId}`
            playerScore++;
        } else {
            // Comp wins
            resultMessages.innerText = `\n${computerChoiceId} beats ${playerChoiceId}`
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
        gameMessages.innerHTML = `${msg} \nThe final score is: ${playerScore} / ${computerScore}`
        resultMessages.innerHTML = `<button class="htp-btn" onClick="window.location.reload();">Refresh</button> page to play again!`
    }

        function howToPlay() {
    
            let htp = document.getElementById('htpText')
        if (htp.style.display == "block"){
                
           htp.style.display = "none";
           

        } else {
            htp.style.display = "block"
            } 
        }