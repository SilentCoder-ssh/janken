/**
*  Choix aléatoire du Computer
*/

const choices = ["rock", "paper", "scissors"];

function getComputerChoice(): string {
    return choices[Math.floor(Math.random() * choices.length)];
}

export { getComputerChoice, choices };