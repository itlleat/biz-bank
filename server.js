// -- GIVEN a command-line application that accepts user input
// -- WHEN I start the application
// -- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// -- WHEN I choose to view all departments
// -- THEN I am presented with a formatted table showing department names and department ids
// -- WHEN I choose to view all roles
// -- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// -- WHEN I choose to view all employees
// -- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// -- WHEN I choose to add a department
// -- THEN I am prompted to enter the name of the department and that department is added to the database
// -- WHEN I choose to add a role
// -- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// -- WHEN I choose to add an employee
// -- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// -- WHEN I choose to update an employee role
// -- THEN I am prompted to select an employee to update and their new role and this information is updated in the database

const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "yourdatabase",
  },
  console.log(`Connected to the database.`)
);

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected as ID" + connection.threadId);
});

function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View all employees",
          "View all employees by department",
          "View all employees by manager",
          "Add employee",
          "Remove employee",
          "Update employee role",
          "Update employee manager",
          "Exit",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.action) {
        case "View all employees":
          // Code to view here
          connection.query("SELECT * FROM employees", (err, res) => {
            if (err) throw err;
            console.table(res);
            promptUser();
          });
          break;
        case "View all employees by department":
          // Code to view here
          connection.query("SELECT * FROM department", (err,departments) => {
            if (err) throw err;
            const departmentChoices = departments.map((department) => department.name);
            inquirer
            .prompt ([
              {
              type: "list",
              name: "department",
              message: "Which department would you like to view?",
              choices: departmentChoices,
              },
            ])
            .thenjewu
            console.table(res);
            promptUser();
          });
          break;
        case "View all employees by manager":
          // Code to view
          connection.query("SELECT * FROM
          ", (err,res) => {
            if (err) throw err;
            console.table(res);
            promptUser();
          });
          break;
        case "Add employee":
          // Code to add
          connection.query("SELECT * FROM
          ", (err,res) => {
            if (err) throw err;
            console.table(res);
            promptUser();
          });
          break;
        case "Remove employee":
          // code to remove
          connection.query("SELECT * FROM
          ", (err,res) => {
            if (err) throw err;
            console.table(res);
            promptUser();
          });
          break;
        case "Update employee role":
          // code to update
          connection.query("SELECT * FROM
          ", (err,res) => {
            if (err) throw err;
            console.table(res);
            promptUser();
          });
          break;
        case "Update employee manager":
          // code to update manager
          connection.query("SELECT * FROM
          ", (err,res) => {
            if (err) throw err;
            console.table(res);
            promptUser();
          });
          break;
        case "Exit":
          // code to exit
          connection.query("SELECT * FROM
          ", (err,res) => {
            if (err) throw err;
            console.table(res);
            promptUser();
          }
          break;
        default:
          console.log("Invalid action, please try again");
      }
    });
}

function viewAllEmployees() {
  connection.query("SELECT * FROM employees", (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
}

function viewEmployeesByDepartment() {
  connection.query(
    "SELECT * FROM employees JOIN departments ON employees.department_id = departments.id ORDER BY departments.name",
    (err, res) => {
      if (err) throw err;
      console.table(res);
      promptUser();
    }
  );
}

function viewEmployeesByManager() {
  connection.query(
    "SELECT * FROM employees JOIN employees AS managers ON employees.manager_id = managers.id ORDER BY managers.first_name, managers.last_name",
    (err, res) => {
      if (err) throw err;
      console.table(res);
      promptUser();
    }
  );
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "Enter the employee's first name:",
      },
      {
        type: "input",
        name: "last_name",
        message: "Enter the employee's last name:",
      },
      {
        type: "input",
        name: "role_id",
        message: "Enter the employee's role ID:",
      },
      {
        type: "input",
        name: "manager_id",
        message: "Enter the employee's manager ID:",
      },
    ])
    .then((answer) => {
      connection.query("INSERT INTO employees SET ?", answer, (err, res) => {
        if (err) throw err;
        console.log("Employee added.");
        promptUser();
      });
    });
}

// fill in the details for each function, such as writing the SQL queries to retrieve or update data in the database.
// create the database schema and populate it with data for testing purposes. handle errors that may occur during the database operations and include validation to ensure that the user enters the correct data types and formats.

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });