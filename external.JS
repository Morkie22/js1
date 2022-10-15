const computerPlay= () => {
    const randomNumber = (Math.floor(Math.random() * 3))
    if (randomNumber === 0){
      return 'Rock';
    }
    else if (randomNumber === 1){
      return 'Paper';
    }
    else if (randomNumber === 2){
    return 'Scissor';
    }
      }
    console.log(computerPlay(1))

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === "rock") {
            if (computerSelection === "rock") {
                return "Draw!";
            } else if (computerSelection === "paper") {
                return "You lose! Paper beats rock.";
            } else {
                return "You win! Rock beats scissors.";
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                return "You win! Paper beats rock.";
            } else if (computerSelection === "paper") {
                return "Draw!";
            } else {
                return "You lose! Scissors beats paper.";
            }
        } else {
            if (computerSelection === "rock") {
                return "You lose! Rock beats scissors.";
            } else if (computerSelection === "paper") {
                return "You win! Scissors beats paper.";
            } else {
                return "Draw!";
            }
        }
    }
const playerSelection ="rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerPlay))

function game() {
    for (let i = 0; i < 5; i++) {
      console.log(playerSelection, computerSelection);
    }
  }
  game();
