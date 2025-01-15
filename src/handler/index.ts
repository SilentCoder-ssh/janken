import { getComputerChoice } from "../core/computer";
import { updateScore } from "../core/rounds";
import type { Choices } from "../shared/types/choices";
import { selectors } from "../shared/utils/selectors";
import { checkGameWinner } from "../core/rounds";

export default function initializeGameEvents() {
    const buttons = document.querySelectorAll("button");
    const imgDivUser = document.createElement("img");
    const imgDivComputer = document.createElement("img");

    if (buttons) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", (_) => {
                 if (selectors.winnerName?.textContent) {
                     (selectors.userScoreNumber as HTMLElement).textContent =
                         "0";
                     (
                         selectors.computerScoreNumber as HTMLElement
                     ).textContent = "0";
                     selectors.winnerName.textContent = "";
                 }  
                 
                const dataSetValue = buttons[i].getAttribute(
                    "data-choices"
                ) as Choices;

                imgDivUser.src = `/src/assets/images/answer/${dataSetValue}.png`;
                imgDivUser.loading = "lazy";
                imgDivUser.alt = `${dataSetValue} choice`;
                selectors.userChoice?.appendChild(imgDivUser);

                const computerChoice = getComputerChoice();

                imgDivComputer.src = `/src/assets/images/answer/${computerChoice}.png`;
                imgDivComputer.loading = "lazy";
                imgDivComputer.alt = `${computerChoice} choice`;
                selectors.computerChoice?.appendChild(imgDivComputer);
                console.log({ dataSetValue });

                updateScore(dataSetValue, computerChoice);                        
            });
        }
    }
}
