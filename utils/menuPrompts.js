// inquirer prompts to navigate the application
export const menuPrompts = [
  {
      type: "list",
      name: "prompts",
      message: "Please select an option:",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit",
      ],
  },
];