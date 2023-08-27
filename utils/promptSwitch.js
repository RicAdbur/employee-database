import * as switchFunctions from "./switchFunctions.js"

export const promptSwitch = (answer) => {
  switch (answer) {
    case "View all departments":
      switchFunctions.viewAllDepartments();
    break;
  
    case "View all roles":
      switchFunctions.viewAllRoles();
    break;
  
    case "View all employees":
      switchFunctions.viewAllEmployees();
    break;
  
    case "Add a department":
      switchFunctions.addDepartment();
    break;
  
    case "Add a role":
      switchFunctions.addRole();
    break;
  
    case "Add an employee":
      switchFunctions.addEmployee();
    break;
  
    case "Update an employee role":
      switchFunctions.updateEmployeeRole();
    break;
  
    case "Exit":
      switchFunctions.exit();
    break;
  }
}