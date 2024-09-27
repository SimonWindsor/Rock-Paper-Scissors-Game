// Variables for keeping track of wins, losses and draws
let wonRounds = 0;
let lostRounds = 0;
let drawnRounds = 0;

// Get user choice options
const choices = document.getElementsByClassName('choice');

// Get div for displaying result of a round
const computerChoice = document.getElementById('computer-choice');

// Get div for displaying result of a round
const roundResult = document.getElementById('round-result');

// Get div for recording win/loss/draw tally
const tally = document.getElementById('tally');

// Adds event listener to rock, paper, and scissors buttons
for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener('click', event => {
    playRound(event.target.id);
  });
}

// Plays a single round
function playRound(playerChoice) {
  // Computer selects random number from 0 to 2
  // 0 for rock, 1 for paper, 2 for scissors
  const randomSelection = Math.floor(Math.random() * 3);

  // Display computer choice
  switch (randomSelection)  {
    case 0:
      computerChoice.innerHTML = 'I CHOOSE ROCK';
      break;
    case 1:
      computerChoice.innerHTML = 'I CHOOSE PAPER';
      break;
    case 2:
      computerChoice.innerHTML = 'I CHOOSE SCISSORS';
      break;
    default:
      alert('Something went wrong, invalid computer choice perhaps');
  }

  // Compare with player choice
  switch (playerChoice) {
    case 'rock-btn':
      switch (randomSelection) {
        case 0:
          drawnRounds++;
          computerChoice.innerHTML = 'I ALSO CHOOSE ROCK';
          roundResult.innerHTML = 'DRAW!';
          break;
        case 1:
          lostRounds++;
          computerChoice.innerHTML = 'I CHOOSE PAPER, WHICH COVERS ROCK!';
          roundResult.innerHTML = 'YOU LOSE!';
          break;
        case 2:
          wonRounds++;
          computerChoice.innerHTML = 'I CHOOSE SCISSORS, BLUNTED BY ROCK';
          roundResult.innerHTML = 'YOU WIN!';
          break;
        default:
          alert('There seems to be an error, invalid choice perhaps');
      }
      break;
    case 'paper-btn':
      switch (randomSelection) {
        case 0:
          wonRounds++;
          computerChoice.innerHTML = 'I CHOOSE ROCK, COVERED BY PAPER';
          roundResult.innerHTML = 'YOU WIN!';
          break;
        case 1:
          drawnRounds++;
          computerChoice.innerHTML = 'I ALSO CHOOSE PAPER';
          roundResult.innerHTML = 'DRAW!';
          break;
        case 2:
          lostRounds++;
          computerChoice.innerHTML = 'I CHOOSE SCISSORS, WHICH CUTS PAPER!';
          roundResult.innerHTML = 'YOU LOSE!';
          break;
        default:
          alert('There seems to be an error, invalid choice perhaps');
      }
      break;
    case 'scissors-btn':
      switch (randomSelection) {
        case 0:
          lostRounds++;
          computerChoice.innerHTML = 'I CHOOSE ROCK, WHICH BLUNTS SCISSORS!';
          roundResult.innerHTML = 'YOU LOSE!';
          break;
        case 1:
          wonRounds++;
          computerChoice.innerHTML = 'I CHOOSE PAPER, CUT BY SCISSORS';
          roundResult.innerHTML = 'YOU WIN!';
          break;
        case 2:
          drawnRounds++;
          computerChoice.innerHTML = 'I ALSO CHOOSE SCISSORS';
          roundResult.innerHTML = 'DRAW!';
          break;
        default:
          alert('There seems to be an error, invalid choice perhaps');
      }
      break;
    default:
      alert('There seems to be an error, invalid choice perhaps');
  }

  // Displays win/loss/draw tally, and shows reset button
  tally.innerHTML = `
    TOTAL WINS: ${wonRounds} LOSSES: ${lostRounds} DRAWS: ${drawnRounds}
    <span id="reset-btn" onclick="resetTally()">RESET</span>
  `
}

// Resets the tally when user selects 'RESET'
function resetTally() {
  computerChoice.innerHTML = '';
  roundResult.innerHTML = '';
  tally.innerHTML = 'TOTAL WINS: 0 LOSSES: 0 DRAWS: 0';
  wonRounds = 0;
  lostRounds = 0;
  drawnRounds = 0;
}