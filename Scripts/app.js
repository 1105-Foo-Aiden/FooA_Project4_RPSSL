let userInput = document.getElementById("userSelection");
let userScore = document.getElementById("userScore");
let CPUScore = document.getElementById("CPUScore");
let difficulty = document.getElementById("difficulty");
let player2 = document.getElementById("Player2Btn");
let player2Input = document.getElementById("player2Selection");
let result;
let choices = ["rock", "paper", "scissors", "spock", "lizard"];
let endResult = document.getElementById("endResult");
let ComputerScore = 0;
let UserScore = 0;
let winningScores = [1, 5, 7];
let z = 0;
let gameOver = false;
let player2Bool = false;
var player1;

CPUScore.textContent = `Computer Score: ${ComputerScore}`;
userScore.textContent = `Player 1 Score: ${UserScore}`;
player2Input.style.display = "none";

player2.addEventListener("click", () => {
  if (!player2Bool) {
    player2Bool = true;
    player2.textContent = "Versus CPU";
    CPUScore.textContent = `Player 2 Score: ${ComputerScore}`;
    player2Input.style.display = "block";
    endResult.textContent = "Player one please make your choice";
  } else {
    player2Bool = false;
    player2.textContent = "Versus Player";
    CPUScore.textContent = `Computer Score: ${ComputerScore}`;
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
  const promise = await fetch(
    "https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption"
  );
  result = await promise.text();
  console.log(result);
};

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && player2Bool == true) {
    player1 = userInput.value.toLowerCase();
    endResult.textContent = " Player 2 please enter your choice";
    userInput.value = "";
  } else if (e.key === "Enter") {
    OnePlayerGame(userInput.value);
    userInput.value = "";
  }
});

player2Input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    TwoPlayerGame(player1, player2Input.value);
    player2Input.value = "";
  }
});

APICall();

const ResetGame = () => {
  gameOver = false;
  if (player2Bool) {
    CPUScore.textContent = `Player 2 Score: ${ComputerScore}`;
  } else {
    CPUScore.textContent = `Computer Score: ${ComputerScore}`;
  }

  userScore.textContent = `Player 1 Score: ${UserScore}`;
  ComputerScore = 0;
  UserScore = 0;
};

const OnePlayerGame = (x) => {
  userScore.textContent = `Player 1 Score: ${UserScore}`;
  CPUScore.textContent = `Computer Score: ${ComputerScore}`;
  APICall();
  x = x.toLowerCase();
  result = result.toLowerCase();

  if (choices.includes(x)) {
    result = result.toLowerCase();
    switch (x) {
      case "scissors":
        Scissors(result);
        break;
      case "paper":
        Paper(result);
        break;
      case "rock":
        Rock(result);
        break;
      case "spock":
        Spock(result);
        break;
      case "lizard":
        Lizard(result);
        break;
    }
  } else {
    endResult.textContent =
      "Please enter a valid option, see above for details";
  }
  if (gameOver) {
    if (ComputerScore > winningScores[z] / 2) {
      endResult.innerText = "The computer has won, better luck next time!";
      ResetGame();
    } else if (UserScore > winningScores[z] / 2) {
      endResult.innerText = "You beat the computer, congratulations!";
      ResetGame();
    }
  }
};

const Scissors = (ComputerChoice) => {
  if ("scissors" == ComputerChoice) {
    endResult.textContent = "You tied";
  } else if (ComputerChoice == "rock" || ComputerChoice == "spock") {
    endResult.textContent = "You lose";
    ComputerScore++;
    CPUScore.textContent = `Computer Score: ${ComputerScore}`;
  } else {
    endResult.textContent = "You win!";
    UserScore++;
    userScore.textContent = `Player 1 Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2) {
    gameOver = true;
  } else if (UserScore > winningScores[z] / 2) {
    gameOver = true;
  }
};
const Paper = (ComputerChoice) => {
  if ("paper" == ComputerChoice) {
    endResult.textContent = "You tied";
  } else if (ComputerChoice == "scissors" || ComputerChoice == "lizard") {
    endResult.textContent = "You lose";
    ComputerScore++;
    CPUScore.textContent = `Computer Score: ${ComputerScore}`;
  } else {
    endResult.textContent = "You win!";
    UserScore++;
    userScore.textContent = `Player 1 Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2) {
    gameOver = true;
  } else if (UserScore > winningScores[z] / 2) {
    gameOver = true;
  }
};
const Rock = (ComputerChoice) => {
  if ("rock" == ComputerChoice) {
    endResult.textContent = "You tied";
  } else if (ComputerChoice == "paper" || ComputerChoice == "spock") {
    endResult.textContent = "You lose";
    ComputerScore++;
    CPUScore.textContent = `Computer Score: ${ComputerScore}`;
  } else {
    endResult.textContent = "You win!";
    UserScore++;
    userScore.textContent = `Player 1 Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2) {
    gameOver = true;
  } else if (UserScore > winningScores[z] / 2) {
    gameOver = true;
  }
};
const Spock = (ComputerChoice) => {
  if ("scissors" == ComputerChoice) {
    endResult.textContent = "You tied";
  } else if (ComputerChoice == "paper" || ComputerChoice == "lizard") {
    endResult.textContent = "You lose";
    ComputerScore++;
    CPUScore.textContent = `Computer Score: ${ComputerScore}`;
  } else {
    endResult.textContent = "You win!";
    UserScore++;
    userScore.textContent = `Player 1 Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2) {
    gameOver = true;
  } else if (UserScore > winningScores[z] / 2) {
    gameOver = true;
  }
};
const Lizard = (ComputerChoice) => {
  if ("scissors" == ComputerChoice) {
    endResult.textContent = "You tied";
  } else if (ComputerChoice == "rock" || ComputerChoice == "scissors") {
    endResult.textContent = "You lose";
    ComputerScore++;
    CPUScore.textContent = `Computer Score: ${ComputerScore}`;
  } else {
    endResult.textContent = "You win!";
    UserScore++;
    userScore.textContent = `Player 1 Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2) {
    gameOver = true;
  } else if (UserScore > winningScores[z] / 2) {
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
      endResult.innerText = "Player 2 Has Won!";
      ResetGame();
    } else if (UserScore > winningScores[z] / 2) {
      endResult.innerText = "Player 1 is the winner!";
      ResetGame();
    }
  }
};
const Scissors2 = (player1, player2) => {
  if (player1 === player2) {
    endResult.textContent = "You tied";
  } else if (
    (player1 == "scissors" && player2 == "rock") ||
    player2 == "spock"
  ) {
    endResult.textContent = "Player 1 Loses!";
    ComputerScore++;
    CPUScore.textContent = `Player 2 Score: ${ComputerScore}`;
  } else {
    endResult.textContent = "Player 1 Wins!";
    UserScore++;
    userScore.textContent = `Player 1 Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2) {
    gameOver = true;
  } else if (UserScore > winningScores[z] / 2) {
    gameOver = true;
  }
};

const Paper2 = (player1, player2) => {
  if (player1 === player2) {
    endResult.textContent = "You tied";
  } else if (
    (player1 == "paper" && player2 == "scissors") ||
    player2 == "lizard"
  ) {
    endResult.textContent = "Player 1 Loses!";
    ComputerScore++;
    CPUScore.textContent = `Player 2 Score: ${ComputerScore}`;
  } else {
    endResult.textContent = "Player 1 Wins!";
    UserScore++;
    userScore.textContent = `Player 1 Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2) {
    gameOver = true;
  } else if (UserScore > winningScores[z] / 2) {
    gameOver = true;
  }
};
const Lizard2 = (player1, player2) => {
  if (player1 === player2) {
    endResult.textContent = "You tied";
  } else if (
    (player1 == "lizard" && player2 == "scissors") ||
    player2 == "rock"
  ) {
    endResult.textContent = "Player 1 Loses!";
    ComputerScore++;
    CPUScore.textContent = `Player 2 Score: ${ComputerScore}`;
  } else {
    endResult.textContent = "Player 1 Wins!";
    UserScore++;
    userScore.textContent = `Player 1 Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2) {
    gameOver = true;
  } else if (UserScore > winningScores[z] / 2) {
    gameOver = true;
  }
};
const Spock2 = (player1, player2) => {
  if (player1 == "spock" && player2 == "spock") {
    endResult.textContent = "You tied";
  } else if (
    (player1 == "spock" && player2 == "lizard") ||
    player2 == "paper"
  ) {
    endResult.textContent = "Player 1 Loses!";
    ComputerScore++;
    CPUScore.textContent = `Player 2 Score: ${ComputerScore}`;
  } else {
    endResult.textContent = "Player 1 Wins!";
    UserScore++;
    userScore.textContent = `Player 1 Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2) {
    gameOver = true;
  } else if (UserScore > winningScores[z] / 2) {
    gameOver = true;
  }
};
const Rock2 = (player1, player2) => {
  if (player1 === player2) {
    endResult.textContent = "You tied";
  } else if ((player1 == "rock" && player2 == "paper") || player2 == "spock") {
    endResult.textContent = "Player 1 Loses!";
    ComputerScore++;
    CPUScore.textContent = `Player 2 Score: ${ComputerScore}`;
  } else {
    endResult.textContent = "Player 1 Wins!";
    UserScore++;
    userScore.textContent = `Player 1 Score: ${UserScore}`;
  }
  if (ComputerScore > winningScores[z] / 2) {
    gameOver = true;
  } else if (UserScore > winningScores[z] / 2) {
    gameOver = true;
  }
};
