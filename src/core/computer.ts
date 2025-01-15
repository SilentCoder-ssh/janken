import { randomElement } from "../shared/utils/random";
import type { Choices } from "../shared/types/choices";

const choices: Choices[] = ["rock", "paper", "scissors"];

const getComputerChoice = (): Choices => randomElement(choices);



export { getComputerChoice, choices };
