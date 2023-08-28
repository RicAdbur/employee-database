import { beginPrompts } from "./utils/beginPrompts.js"

function printHeader() {
  console.log(
  `                              
              -=              
             ++++             
            *=-+=+            
           *=--#-=+       
          ++--=%=-+=          
         -*---+%+--*-     STARFLEET EMPLOYEE DATABASE  
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

function runDB() {
  printHeader()
  beginPrompts()
}

runDB()