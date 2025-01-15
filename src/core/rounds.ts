import { resetGameData, resetPlayerData } from "./players";
import type { Choices } from "../shared/types/choices";
import { selectors } from "../shared/utils/selectors";

let playerManagement = resetPlayerData();
let gameManagement = resetGameData();

function resetData(): void {
    playerManagement = resetPlayerData();
    gameManagement = resetGameData();
    // console.log({ playerManagement, gameManagement });
    // console.log(playerManagement, "PLAYER MANAGEMENT");
    // console.log(gameManagement, "GAME MANAGEMENT");
    // console.log(resetPlayerData(), "RESET PLAYER DATA");
    // console.log(resetGameData(), "RESET GAME DATA");
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
        (selectors.userScoreNumber as HTMLElement).textContent =
            gameManagement.player.score.toString();
    } else {
        gameManagement.draw = false;
        playerManagement.player.lose = true;
        playerManagement.computer.win = true;
        gameManagement.computer.score++;
        (selectors.computerScoreNumber as HTMLElement).textContent =
            gameManagement.computer.score.toString();
    }
}
export function updateScore(
    choicePlayer: Choices,
    choiceComputer: Choices
): void {
    determineWinner(choicePlayer, choiceComputer);
    checkGameWinner();
}

function checkGameWinner(): void {
    const winner = gameManagement.player.score === 5 ? "Player" : "Computer";

    if (
        gameManagement.player.score === 5 ||
        gameManagement.computer.score === 5
    ) {
        (selectors.winnerName as HTMLElement).textContent = `${winner} is the winner!`;
        resetData();
    }
}

export { determineWinner, checkGameWinner };
