import inquirer from "inquirer";
import { connection } from "../db/connection.js"
import { beginPrompts } from "./beginPrompts.js";

export const viewAllDepartments = () => {
  connection.query(`SELECT * FROM departments`,
    function (err, results, fields) {
      if (err) throw err
      console.table(results)
      beginPrompts()
    })
};

export const viewAllRoles = () => {
  connection.query(`SELECT roles.title, roles.id, roles.salary, departments.department_name FROM roles JOIN departments ON roles.department_id = departments.id`,
    function (err, results, fields) {
      if (err) throw err
      console.table(results)
      beginPrompts()
    })
};

export const viewAllEmployees = () => {
  connection.query(`SELECT employees.id, employees.first_name, employees.last_name, departments.department_name, roles.title, roles.salary, employees.manager_id FROM employees 
  INNER JOIN roles ON employees.role_id = roles.id
  INNER JOIN departments ON roles.department_id = departments.id`,
    function (err, results, fields) {
      if (err) throw err
      console.table(results)
      beginPrompts()
    })
};

export const addDepartment = () => {
  inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Name the department you want to add:"
    }
  ])
    .then(function (answer) {
      connection.query(`INSERT INTO departments (name) VALUES
    (?)`, [answer.name],
        function (err, results, fields) {
          if (err) throw err
          console.log("--> Department successfully added! <--")
          beginPrompts()
        })
    })
};

export const addRole = () => {
  connection.promise().query(`SELECT * FROM departments`)
  .then(function([departments]) {
    const choices = departments.map(function(department) {
      return {
        name: department.department_name,
        value: department.id,
      }
    })
    inquirer.prompt([
      {
        name: "title",
        type: "input",
        message: "Title of the role you want to add:"
      },
      {
        name: "salary",
        type: "input",
        message: "Salary for the role you want to add:"
      },
      {
        name: "departmentID",
        type: "list",
        message: "Choose the department this role is in:",
        choices
      },
    ])
      .then(function (answer) {
        connection.query(`INSERT INTO roles (title, salary, department_id) VALUES
      (?, ?, ?)`, [answer.title, answer.salary, answer.departmentID],
          function (err, results, fields) {
            if (err) throw err
            console.log("--> Role successfully added! <--")
            beginPrompts()
          })
      })
  })
};

export const addEmployee = () => {
  inquirer.prompt([
    {
      name: "firstName",
      type: "input",
      message: "First name:"
    },
    {
      name: "lastName",
      type: "input",
      message: "Last name:"
    },
    {
      name: "roleID",
      type: "input",
      message: "Role ID:"
    },
    {
      name: "managerID",
      type: "input",
      message: "Manager ID:"
    },
  ])
    .then(function (answer) {
      connection.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
    (?, ?, ?, ?)`, [answer.firstName, answer.lastName, answer.roleID, answer.managerID],
        function (err, results, fields) {
          if (err) throw err
          console.log("--> Employee successfully added! <--")
          beginPrompts()
        })
    })
};

export const updateEmployeeRole = () => {
  inquirer.prompt([
    {
      name: "employeeID",
      type: "input",
      message: "What is the ID of the employee you want to update?"
    },
    {
      name: "role",
      type: "input",
      message: "What is the new role ID for this employee?"
    },
  ])
  .then(function(answer) {
    connection.query(`UPDATE employees SET role_id = ? WHERE id = ?`, [answer.role, answer.employeeID],
      function (err, results, fields) {
        if (err) throw err
        console.log("--> Employee role successfully updated! <--")
        beginPrompts()
      })
  })
};

export const deleteDepartment = () => {
  inquirer.prompt([
    {
      name: "delete_department",
      type: "input",
      message: "What is the ID of the department do you want to delete?"
    }
  ])
    .then(function (answer) {
      connection.query(`DELETE FROM departments WHERE id = ?`, [answer.delete_department],
        function (err, results, fields) {
          if (err) throw err
          console.log("--> Department successfully deleted! <--")
          beginPrompts()
        })
    })
};

export const deleteRole = () => {
  inquirer.prompt([
    {
      name: "delete_role",
      type: "input",
      message: "What is the ID of the role you want to delete?"
    }
  ])
    .then(function (answer) {
      connection.query(`DELETE FROM roles WHERE id = ?`, [answer.delete_role],
        function (err, results, fields) {
          if (err) throw err
          console.log("--> Role successfully deleted! <--")
          beginPrompts()
        })
    })
};

export const deleteEmployee = () => {
  inquirer.prompt([
    {
      name: "delete_employee",
      type: "input",
      message: "What is the ID of the employee you want to delete?"
    }
  ])
    .then(function (answer) {
      connection.query(`DELETE FROM employees WHERE id = ?`, [answer.delete_employee],
        function (err, results, fields) {
          if (err) throw err
          console.log("--> Employee successfully deleted! <--")
          beginPrompts()
        })
    })
};

export const exit = () => {
  connection.end();
  console.log("Database connection terminated.  Have a nice day.");
};