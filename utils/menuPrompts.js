// inquirer prompts to navigate the application
export const menuPrompts = [
  {
      type: "list",
      name: "prompts",
      message: "Please select an option:",
      choices: [
        "View all employees",
        "View all roles",
        "View all departments",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Delete an employee",
        "Delete a role",
        "Delete a department",
        "Exit",
      ],
  },
];