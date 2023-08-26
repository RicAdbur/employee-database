import inquirer from "inquirer"
import { prompts } from "./utils/prompts.js"

function init() {
  inquirer.prompt(prompts)
  .then((answers) => {
    console.log(answers)
  })
  .catch((err) => {
    console.log(err)
  })
}

init()