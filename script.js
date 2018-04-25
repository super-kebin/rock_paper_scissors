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

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const results = document.querySelector('div#container > div#results');
    const selection = document.createElement('p');
    const outcome = document.createElement('p');
    const comp_selection = computerPlay();
    const score = document.querySelector('div#container > div#score');
    const points = document.createElement('p');

    while (results.firstChild) {
      results.removeChild(results.firstChild);
    }

    selection.textContent = "You: " + button.id.toUpperCase() + " Computer: " + comp_selection.toUpperCase();
    results.appendChild(selection);
    outcome.textContent = playRound(button.id, comp_selection);
    results.appendChild(outcome);

    let lowerCaseOutcome = outcome.textContent.toLowerCase();
    let arrayOfWinner = lowerCaseOutcome.split(" ");
    let resultsOfWinner = arrayOfWinner[4];
    console.log(resultsOfWinner);
    if (resultsOfWinner == "win!") {
      playerScore++;
    } else if (resultsOfWinner == "lose!") {
      computerScore++;
    }

    while (score.firstChild) {
     score.removeChild(score.firstChild)
    }

    points.textContent = "You: " + playerScore + " Computer: " + computerScore;
    score.appendChild(points);
    console.log(playerScore);
    console.log(computerScore);

    if (playerScore == 5) {
      let winnerOfGame = document.createElement('p');
      winnerOfGame.textContent = "You win the game!"
      results.appendChild(winnerOfGame);
      playerScore = 0;
      computerScore = 0;
    } else if (computerScore == 5) {
      let winnerOfGame = document.createElement('p');
      winnerOfGame.textContent = "You lose the game!"
      results.appendChild(winnerOfGame);
      playerScore = 0;
      computerScore = 0;
    }
  });
});
