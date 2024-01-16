let userInput = document.getElementById("userSelection");
let userScore = document.getElementById("userScore");
let CPUScore = document.getElementById("CPUScore");
let result;
let choices = ["rock", "paper", "scissors", "spock", "lizard"];
let endResult = document.getElementById("endResult");
let ComputerScore = 0;
let UserScore = 0;
let combinedScore = 0;

CPUScore.textContent = `Computer Score: ${ComputerScore}`;
userScore.textContent = `Your Score: ${UserScore}`;

const APICall = async () => {
  const promise = await fetch(
    "https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption"
  );
  result = await promise.text();
  console.log(result);
};
APICall();
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    PlayGame(userInput.value);
    userInput.value = "";
  }
});

const PlayGame = (x) => {
  x = x.toLowerCase();
  result = result.toLowerCase();

  if (choices.includes(x)) {
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
};

const Scissors = (ComputerChoice) => {
  if ("scissors" == ComputerChoice) {
    endResult.textContent = "You tied";
  } else if (ComputerChoice == "rock" || ComputerChoice == "spock") {
    endResult.textContent = "You lose";
    ComputerScore++;
    combinedScore++;
    CPUScore.textContent = `Computer Score: ${ComputerScore}`;
  } else {
    endResult.textContent = "You win!";
    UserScore++;
    combinedScore++;
    userScore.textContent = `Your Score: ${UserScore}`;
  }
};
const Paper = (ComputerChoice) => {
  if ("paper" == ComputerChoice) {
    endResult.textContent = "You tied";
  } else if (ComputerChoice == "scissors" || ComputerChoice == "lizard") {
    endResult.textContent = "You lose";
    ComputerScore++;
    combinedScore++;
    CPUScore.textContent = `Computer Score: ${ComputerScore}`;
  } else {
    endResult.textContent = "You win!";
    UserScore++;
    combinedScore++;
    userScore.textContent = `Your Score: ${UserScore}`;
  }
};
const Rock = (ComputerChoice) => {
  if ("rock" == ComputerChoice) {
    endResult.textContent = "You tied";
  } else if (ComputerChoice == "paper" || ComputerChoice == "spock") {
    endResult.textContent = "You lose";
    ComputerScore++;
    combinedScore++;
    CPUScore.textContent = `Computer Score: ${ComputerScore}`;
  } else {
    endResult.textContent = "You win!";
    UserScore++;
    combinedScore++;
    userScore.textContent = `Your Score: ${UserScore}`;
  }
};
const Spock = (ComputerChoice) => {
  if ("scissors" == ComputerChoice) {
    endResult.textContent = "You tied";
  } else if (ComputerChoice == "paper" || ComputerChoice == "lizard") {
    endResult.textContent = "You lose";
    ComputerScore++;
    combinedScore++;
    CPUScore.textContent = `Computer Score: ${ComputerScore}`;
  } else {
    endResult.textContent = "You win!";
    UserScore++;
    combinedScore++;
    userScore.textContent = `Your Score: ${UserScore}`;
  }
};
const Lizard = (ComputerChoice) => {
  if ("scissors" == ComputerChoice) {
    endResult.textContent = "You tied";
  } else if (ComputerChoice == "rock" || ComputerChoice == "scissors") {
    endResult.textContent = "You lose";
    ComputerScore++;
    combinedScore++;
    CPUScore.textContent = `Computer Score: ${ComputerScore}`;
  } else {
    endResult.textContent = "You win!";
    UserScore++;
    combinedScore++;
    userScore.textContent = `Your Score: ${UserScore}`;
  }
};
