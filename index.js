import inquirer from "inquirer"
import mysql2 from "mysql2"
import { prompts } from "./utils/prompts.js"

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "starfleet_officers_db",
})

function printHeader() {
  console.log(
  `                              
              -=              
             ++++             
            *=-+=+            
           *=--#-=+       
          ++--=%=-+=          
         -*---+%+--*-      STARFLEET EMPLOYEE DATABASE  
        .#=-=+%%%+==#.        
        ++----+=+---=*        
       .#=-----==++=-*-       
       +*---=+*+-..=*+#       
       %=-=**-      :#%:      
      :#=**:         .#+      
      +##-            .+      
      *+                                             
`)
}

async function init() {
  printHeader()
  await inquirer.prompt(prompts)
  .then((answers) => {
    console.log(answers)
  })
  .catch((err) => {
    console.log(err)
  })
}

init()