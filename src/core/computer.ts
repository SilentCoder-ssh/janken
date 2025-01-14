/**
 *  Choix aléatoire du Computer
 */
import { randomElement } from "../shared/utils/random";
const choices = ["rock", "paper", "scissors"];

const getComputerChoice = (): string => randomElement(choices);

export { getComputerChoice, choices };
