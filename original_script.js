function computerPlay() {
  let randomNumbers = Math.random();
  console.log(randomNumbers);

  if (randomNumbers <= 0.33) {
   return "Rock";
  } else if (randomNumbers >= 0.33 && randomNumbers <= 0.66) {
   return "Paper"
  } else {
   return "Scissors"
  } 
}

function playRound(playerSelection, computerSelection) {
  let lowerCaseComputer = computerSelection.toLowerCase();

  if (playerSelection == "rock" && lowerCaseComputer == "paper") {
    return "Paper beats rock. You Lose!";
  } else if (playerSelection == "rock" && lowerCaseComputer == "scissors") {
    return "Rock beats scissors. You Win!";
  } else if (playerSelection == "paper" && lowerCaseComputer == "rock") {
    return "Paper beats rock. You Win!";
  } else if (playerSelection == "paper" && lowerCaseComputer == "scissors") {
    return "Scissors beats paper. You lose!";
  } else if (playerSelection == "scissors" && lowerCaseComputer == "rock") {
    return "Rock beats scissors. You lose!";
  } else if (playerSelection == "scissors" && lowerCaseComputer == "paper") {
    return "Scissors beats paper. You Win!"
  } else if (playerSelection == lowerCaseComputer) {
    return "Tie!"
  }
}

//const playerSelection = "rock";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function game() {
  let playerScore = 0;
  let computerScore = 0;
        
  for (rounds = 1; rounds < 6; rounds++) {
    let playerChoice = prompt("Rock, Paper, Scissors? " + "Round: " + rounds);
    let computerChoice = computerPlay();
    let gameResults = playRound(playerChoice, computerChoice);
    // alert(gameResults);
    console.log(gameResults);

    let lowerCaseResults = gameResults.toLowerCase();
    let arrayOfWinner = lowerCaseResults.split(" ");
    let resultsOfWinner = arrayOfWinner[4];
    // console.log(resultsOfWinner);
    if (resultsOfWinner == "win!") {
      playerScore++;
    } else if (resultsOfWinner == "lose!") {
      computerScore++;
    }

    // alert("You: " + playerScore + " " + "Computer: " + computerScore);
    console.log("You: " + playerScore + " " + "Computer: " + computerScore);
    console.log(rounds);
        

    if (playerScore == 3) {
      return "You win the game!";
    } else if (computerScore == 3) {
      return "You lose the game!";
    } else if (rounds == 5 && playerScore == computerScore) {
      return "Tie game!";
    } else if (playerScore > computerScore && rounds == 5) {
      return "You win the game!"
    } else if (computerScore > playerScore && rounds == 5) {
      return "You lose the game!"
    }
  }
}

alert(game());
