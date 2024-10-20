let userInput = document.getElementById("userSelection");
let userScore = document.getElementById("userScore");
let CPUScore = document.getElementById("CPUScore");
let difficulty = document.getElementById("difficulty");
let player2 = document.getElementById("Player2Btn");
let player2Input = document.getElementById("player2Selection");
let textChanger = document.getElementById('player2Txt')
let result;
let choices = ["rock", "paper", "scissors", "spock", "lizard"];
let endResult = document.getElementById("endResult");
let ComputerScore = 0, UserScore = 0 , z = 0;
let winningScores = [1, 5, 7];
let gameOver = false, player2Bool = false;
var player1;
const ComputerChoices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]

CPUScore.textContent = `Score: ${ComputerScore}`;
userScore.textContent = `Score: ${UserScore}`;
player2Input.style.display = "none";
textChanger.textContent = "Computer"

player2.addEventListener("click", () => {
  ComputerScore = 0;
  UserScore = 0;
  ResetGame();
  if (!player2Bool) {
    player2Bool = true;
    textChanger.textContent = "Player 2"
    player2.textContent = "Versus CPU";
    CPUScore.textContent = `Score: ${ComputerScore}`;
    player2Input.style.display = "block";
    endResult.textContent = "Player one please make your choice";
  } else {
    player2Bool = false;
    textChanger.textContent = "Computer"
    player2.textContent = "Versus Player";
    CPUScore.textContent = `Score: ${ComputerScore}`;
    player2Input.style.display = "none";
    endResult.textContent = "";
  }
});

difficulty.addEventListener("click", () => {
  ComputerScore = 0;
  UserScore = 0;
  ResetGame();
  z++;
  difficulty.innerText = `Best of ${winningScores[z]}`;
  if (z == winningScores.length) {
    z = 0;
    difficulty.innerText = `Best of ${winningScores[0]}`;
  }
});

const APICall = async () => {
  let randNum = Math.floor(Math.random()* 6);
  return ComputerChoices[randNum]
};

userInput.addEventListener("keydown", e => {
  if (e.key === "Enter" && player2Bool == true) {
    player1 = userInput.value.toLowerCase();
    endResult.textContent = " Player 2 please enter your choice";
    userInput.value = "";
  } else if (e.key === "Enter") {
    OnePlayerGame(userInput.value);
    userInput.value = "";
  }
});

player2Input.addEventListener("keydown", e => {
  if (e.key == "Enter") {
    TwoPlayerGame(player1, player2Input.value);
    player2Input.value = "";
  }
});

const ResetGame = () => {
  gameOver = false;
  CPUScore.textContent = `Score: ${ComputerScore}`;
  userInput.value = "";
  userScore.textContent = `Score: ${UserScore}`;
  ComputerScore = 0;
  UserScore = 0;
};


const OnePlayerGame = async x => {
  userScore.textContent = `Score: ${UserScore}`;
  CPUScore.textContent = `Score: ${ComputerScore}`;
  const ComputerChoice = await APICall()
  x = x.toLowerCase();
  result = ComputerChoice.toLowerCase();
  console.log(result)

  if (choices.includes(x)) {
    switch (x) {
      case "scissors":
        Scissors(result, x);
        break;
      case "paper":
        Paper(result, x);
        break;
      case "rock":
        Rock(result, x);
        break;
      case "spock":
        Spock(result, x);
        break;
      case "lizard":
        Lizard(result, x);
        break;
    }
  } else {
    endResult.textContent =
      "Please enter a valid option, see above for details";
  }
  if (gameOver) {
    if (ComputerScore > winningScores[z] / 2) {
      endResult.innerText = `The computer picked ${result} while you picked ${x}. \n The computer has won. \n Better luck next time!`;
      ResetGame();
    } else if (UserScore > winningScores[z] / 2) {
      endResult.innerText = `The computer picked ${result} while you picked ${x}. \n You beat the computer. \n Congratulations!`;
      ResetGame();
    }
  }
};

const Scissors = (ComputerChoice, x) => {
  if ("scissors" == ComputerChoice) {
    endResult.textContent = `The computer picked ${ComputerChoice} while you picked ${x}. You tied`;
  } else if (ComputerChoice == "rock" || ComputerChoice == "spock") {
    endResult.textContent = `The computer picked ${ComputerChoice} while you picked ${x}. You lose`;
    ComputerScore++;
    CPUScore.textContent = `Score: ${ComputerScore}`;
  } else {
    endResult.textContent = `The computer picked ${ComputerChoice} while you picked ${x}. You win!`;
    UserScore++;
    userScore.textContent = `Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2 || UserScore > winningScores[z] / 2) {
    gameOver = true;
  } 
};

const Paper = (ComputerChoice, x) => {
  if ("paper" == ComputerChoice) {
    endResult.textContent = `The computer picked ${ComputerChoice} while you picked ${x}. You tied`;
  } else if (ComputerChoice == "scissors" || ComputerChoice == "lizard") {
    endResult.textContent = `The computer picked ${ComputerChoice} while you picked ${x}. You lose`;
    ComputerScore++;
    CPUScore.textContent = `Score: ${ComputerScore}`;
  } else {
    endResult.textContent = `The computer picked ${ComputerChoice} while you picked ${x}. You win!`;
    UserScore++;
    userScore.textContent = `Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2 || UserScore > winningScores[z] / 2) {
    gameOver = true;
  } 
};

const Rock = (ComputerChoice, x) => {
  if ("rock" == ComputerChoice) {
    endResult.textContent = `The computer picked ${ComputerChoice} while you picked ${x}. You tied`;
  } else if (ComputerChoice == "paper" || ComputerChoice == "spock") {
    endResult.textContent = `The computer picked ${ComputerChoice} while you picked ${x}. You lose`;
    ComputerScore++;
    CPUScore.textContent = `Score: ${ComputerScore}`;
  } else {
    endResult.textContent = `The computer picked ${ComputerChoice} while you picked ${x}. You win!`;
    UserScore++;
    userScore.textContent = `Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2 || UserScore > winningScores[z] / 2) {
    gameOver = true;
  } 
};

const Spock = (ComputerChoice, x) => {
  if ("spock" == ComputerChoice) {
    endResult.textContent = `The computer picked ${ComputerChoice} while you picked ${x}. You tied`;
  } else if (ComputerChoice == "paper" || ComputerChoice == "lizard") {
    endResult.textContent = `The computer picked ${ComputerChoice} while you picked ${x}. You lose`;
    ComputerScore++;
    CPUScore.textContent = `Score: ${ComputerScore}`;
  } else {
    endResult.textContent = `The computer picked ${ComputerChoice} while you picked ${x}. You win!`;
    UserScore++;
    userScore.textContent = `Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2 || UserScore > winningScores[z] / 2) {
    gameOver = true;
  } 
};

const Lizard = (ComputerChoice, x) => {
  if ("lizard" == ComputerChoice) {
    endResult.textContent = `The computer picked ${ComputerChoice} while you picked ${x}. You tied`;
  } else if (ComputerChoice == "rock" || ComputerChoice == "scissors") {
    endResult.textContent = `The computer picked ${ComputerChoice} while you picked ${x}. You lose`;
    ComputerScore++;
    CPUScore.textContent = `Score: ${ComputerScore}`;
  } else {
    endResult.textContent = `The computer picked ${ComputerChoice} while you picked ${x}. You win!`;
    UserScore++;
    userScore.textContent = `Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2 || UserScore > winningScores[z] / 2) {
    gameOver = true;
  } 
};

const TwoPlayerGame = (x, y) => {
  x = x.toLowerCase();
  y = y.toLowerCase();
  console.log("two players");
  if (choices.includes(x) && choices.includes(y)) {
    switch (x) {
      case "scissors":
        Scissors2(x, y);
        break;
      case "paper":
        Paper2(x, y);
        break;
      case "rock":
        Rock2(x, y);
        break;
      case "spock":
        console.log(y);
        Spock2(x, y);
        break;
      case "lizard":
        Lizard2(x, y);
        break;
    }
  } else {
    endResult.textContent =
      "Please enter a valid option, see above for details";
  }
  if (gameOver) {
    if (ComputerScore > winningScores[z] / 2) {
      endResult.textContent = `Player 1 picked ${x} and player 2 picked ${y}. Player 2 Wins!`;
      ResetGame();
    } else if (UserScore > winningScores[z] / 2) {
      endResult.innerText = `Player 1 picked ${x} and player 2 picked ${y}. Player 1 is the winner!`;
      ResetGame();
    }
  }
};
const Scissors2 = (player1, player2) => {
  if (player1 === player2) {
    endResult.textContent = `Player 1 picked ${player1} and player 2 picked ${player2}, you both tied`;
  } else if (
    (player1 == "scissors" && player2 == "rock") || player2 == "spock") {
    endResult.textContent = `Player 1 picked ${player1} and player 2 picked ${player2} Player 2 Wins!`;
    ComputerScore++;
    CPUScore.textContent = `Score: ${ComputerScore}`;
  } else {
    endResult.textContent = `Player 1 picked ${player1} and player 2 picked ${player2} Player 1 Wins!`;
    UserScore++;
    userScore.textContent = `Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2 || UserScore > winningScores[z] / 2) {
    gameOver = true;
  } 
};

const Paper2 = (player1, player2) => {
  if (player1 === player2) {
    endResult.textContent = `Player 1 picked ${player1} and player 2 picked ${player2}, you both tied`;
  } else if (
    (player1 == "paper" && player2 == "scissors") || player2 == "lizard") {
    endResult.textContent = `Player 1 picked ${player1} and player 2 picked ${player2} Player 2 Wins!`;
    ComputerScore++;
    CPUScore.textContent = `Score: ${ComputerScore}`;
  } else {
    endResult.textContent = `Player 1 picked ${player1} and player 2 picked ${player2} Player 1 Wins!`;
    UserScore++;
    userScore.textContent = `Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2 || UserScore > winningScores[z] / 2) {
    gameOver = true;
  } 
};

const Lizard2 = (player1, player2) => {
  if (player1 === player2) {
    endResult.textContent = `Player 1 picked ${player1} and player 2 picked ${player2}, you both tied`;
  } else if (
    (player1 == "lizard" && player2 == "scissors") || player2 == "rock") {
    endResult.textContent = `Player 1 picked ${player1} and player 2 picked ${player2} Player 2 Wins!`;
    ComputerScore++;
    CPUScore.textContent = `Score: ${ComputerScore}`;
  } else {
    endResult.textContent = `Player 1 picked ${player1} and player 2 picked ${player2} Player 1 Wins!`;
    UserScore++;
    userScore.textContent = `Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2 || UserScore > winningScores[z] / 2) {
    gameOver = true;
  } 
};

const Spock2 = (player1, player2) => {
  if (player1 == "spock" && player2 == "spock") {
    endResult.textContent = `Player 1 picked ${player1} and player 2 picked ${player2}, you both tied`;
  } else if (
    (player1 == "spock" && player2 == "lizard") ||
    player2 == "paper"
  ) {
    endResult.textContent = `Player 1 picked ${player1} and player 2 picked ${player2} Player 2 Wins!`;
    ComputerScore++;
    CPUScore.textContent = `Score: ${ComputerScore}`;
  } else {
    endResult.textContent = `Player 1 picked ${player1} and player 2 picked ${player2} Player 1 Wins!`;
    UserScore++;
    userScore.textContent = `Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2 || UserScore > winningScores[z] / 2) {
    gameOver = true;
  } 
};

const Rock2 = (player1, player2) => {
  if (player1 === player2) {
    endResult.textContent = `Player 1 picked ${player1} and player 2 picked ${player2}, you both tied`;
  } else if ((player1 == "rock" && player2 == "paper") || player2 == "spock") {
    endResult.textContent = `Player 1 picked ${player1} and player 2 picked ${player2} Player 2 Wins!`;
    ComputerScore++;
    CPUScore.textContent = `Score: ${ComputerScore}`;
  } else {
    endResult.textContent = `Player 1 picked ${player1} and player 2 picked ${player2} Player 1 Wins!`;
    UserScore++;
    userScore.textContent = `Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2 || UserScore > winningScores[z] / 2) {
    gameOver = true;
  } 
};
