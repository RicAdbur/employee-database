import inquirer from "inquirer"
import { promptSwitch } from "./promptSwitch.js"
import { menuPrompts } from "./menuPrompts.js"

export const beginPrompts = () => {
  inquirer.prompt(menuPrompts)
    .then((answer) => {
      promptSwitch(answer.prompts)
    })
.catch((err) => {
  console.log(err)
})}