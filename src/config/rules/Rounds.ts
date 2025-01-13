import { player, computer } from "../Players";

/**
 *  Déterminer le gagnant du round
 */

function determineWinner(): void {
    if (player.choice === computer.choice) {
        player.draw = true;
        computer.draw = true;
    } else if (
        (player.choice === "rock" && computer.choice === "scissors") ||
        (player.choice === "scissors" && computer.choice === "paper") ||
        (player.choice === "paper" && computer.choice === "rock")
    ) {
        player.win = true;
        computer.lose = true;
        player.score++;
    } else {
        player.lose = true;
        computer.win = true;
        computer.score++;
    }
}

/**
 *  Réinitialiser des états après chaque round
 */

function resetRound(): void {
    player.choice = "";
    computer.choice = "";
    player.win = false;
    player.lose = false;
    player.draw = false;
    computer.win = false;
    computer.lose = false;
    computer.draw = false;
}

/**
 *  Vérifier si un joueur a gagné
 */

function checkGameWinner(): string | null {
    if (player.score === 5) return "Player is the winner !";
    if (computer.score === 5) return "Computer is the winner !";
    return null;
}

export { determineWinner, resetRound, checkGameWinner };