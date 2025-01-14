import { getComputerChoice } from "../core/computer";
import { determineWinner } from "../core/rounds";
import type { Choices } from "../shared/types/choices";


export default function central() {
    const buttons = document
      .querySelectorAll("button"); 

    if (buttons) {
      for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", event => {
            const dataSetValue = (buttons[i].getAttribute("data-choices") as Choices);
            console.log({dataSetValue})
            determineWinner(dataSetValue, getComputerChoice())
        })
      }
    }
}