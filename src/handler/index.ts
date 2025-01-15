import { getComputerChoice } from "../core/computer";
import { updateScore } from "../core/rounds";
import type { Choices } from "../shared/types/choices";
import { selectors } from "../shared/utils/selectors";
import { getImagePath } from "../shared/utils/img-cache";

export default function initializeGameEvents() {
    const buttons = document.querySelectorAll("button");
    const imgDivUser: HTMLImageElement = document.createElement("img");
    const imgDivComputer: HTMLImageElement = document.createElement("img");

    if (buttons) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", (_) => {
                if (selectors.winnerName?.textContent) {
                    (selectors.userScoreNumber as HTMLElement).textContent =
                        "0";
                    (selectors.computerScoreNumber as HTMLElement).textContent =
                        "0";
                    selectors.winnerName.textContent = "";
                }

                const dataSetValue = buttons[i].getAttribute(
                    "data-choices"
                ) as Choices;
                
                imgDivUser.src = getImagePath(dataSetValue);
                imgDivUser.loading = "lazy";
                imgDivUser.alt = `${dataSetValue} choice`;
                selectors.userChoice?.appendChild(imgDivUser);

                const computerChoice = getComputerChoice();

                imgDivComputer.src = getImagePath(computerChoice);
                imgDivComputer.loading = "lazy";
                imgDivComputer.alt = `${computerChoice} choice`;
                selectors.computerChoice?.appendChild(imgDivComputer);
                console.log({ dataSetValue });

                updateScore(dataSetValue, computerChoice);
            });
        }
    }
}
