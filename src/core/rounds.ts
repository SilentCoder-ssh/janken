import { resetGameData, resetPlayerData } from "./players";
import type { Choices } from "../shared/types/choices";
let playerManagement = { ...resetPlayerData };
let gameManagement = { ...resetGameData };

function reset(): void {
  playerManagement = resetPlayerData;
  gameManagement = resetGameData;
}

function determineWinner(choicePlayer: Choices, choiceComputer: Choices): void {
  if (choicePlayer === choiceComputer) {
    gameManagement.draw = true;
  } else if (
    (choicePlayer === "rock" && choiceComputer === "scissors") ||
    (choicePlayer === "scissors" && choiceComputer === "paper") ||
    (choicePlayer === "paper" && choiceComputer === "rock")
  ) {
    gameManagement.draw = false;
    playerManagement.player.win = true;
    playerManagement.computer.lose = true;
    gameManagement.player.score++;
  } else {
    gameManagement.draw = false;
    playerManagement.player.lose = true;
    playerManagement.computer.win = true;
    gameManagement.computer.score++;
  }
  console.log(gameManagement);
}

function checkGameWinner(): string | null {
  if (gameManagement.player.score === 5) {
    reset();
    return "Player is the winner !";
  }
  if (gameManagement.computer.score === 5) {
    reset();
    return "Computer is the winner !";
  }
  return null;
}

export { determineWinner, checkGameWinner };
