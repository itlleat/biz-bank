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
            .then ((answer) => {
              connection.query(
                `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary,
                CONCAT(m.first_name, '', m.last_name) AS manager
                FROM employee e JOIN role r ON e.role_id = r.id
                JOIN role r ON e.role_id = d.id
                JOIN department d ON r.department_id = d.id
                LEFT JOIN employee m ON e.manager_id = m.id
                WHERE d.name = ?`,
               [answer.department],
               (err, res) => {
                if (err) throw err;
                console.table(res);
                promptUser();
               } 
              );
            });
          });
          break;
        case "View all employees by manager":
          connection.query("SELECT * FROM employee WHERE manager_id IS NOT NULL", 
          (err, managers) => {
            if(err) throw err;
            const managerChoices = managers.map((manager) => `${manager.first_name} 
            ${manager.last_name}`);
            inquirer.prompt([
              {
                type: "list",
                name: "manager",
                message: "Please select a manager",
                choices: managerChoices,
              }
            ]).then((answer) => {
              const[firstName, lastName] = answer.manager.split(" ");
              connection.query(
                `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary,
                CONCAT(m.first_name, '',m.last_name) AS manager
                FROM employee e JOIN role r ON e.role_id = r.id
                JOIN department d ON r.department_id = d.id
                LEFT JOIN employee m ON e.manager_id = m.id
                WHERE m.first_name = ? AND m.last_name = ?`,
                [firstName, lastName],
                (err, res) => {
                  if (err) throw err;
                  console.table(res);
                  promptUser();
                }
              );
            });
          };
          });
          break;
        case "Add employee":
          connection.query("SELECT * FROM role", (err, roles) => {
            if (err) throw err;
            const roleChoices = roles.map((role) => role.title);
            inquirer
            .prompt([
              {
                type: "input",
                name: "first_name",
                message: "Please enter the employee's first name.",
              },
              {
                type: "input",
                name: "last_name",
                message: "Please enter the employee's last name.",
              },
              {
                type: "list",
                name: "role",
                message: "Please choose the employee's role."
                choices: roleChoices,
              },
            ])
            .then((answer) => {
              const role = roles.find((role) => role.title === answer.role);
              connection.query(
                "INSERT INTO employee SET ?",
                {
                  first_name: answer.first_name,
                  last_name: answer.last_name,
                  role_id: role.id,
                },
                (err) => {
                  if (err) throw err;
                  console.log("Employee added successfully!");
                }
              );
            });
          });
          break;
        case "Remove employee":
          connection.query("SELECT * FROM employee", (err, employees) => {
            if (err) throw err;
            const employeeChoices = employees.map((employee) => `${employee.first_name} ${employee.last_name}`
            );
            inquirer
            .prompt([
              {
                type: "list",
                name: "employee",
                message: "Please select the employee you would like to TERMINATE!"
                choices: employeeChoices,
              },
            ])
            .then((answer) => {
              const [firstName, lastName] = answer.employee.split(" ");
              connection.query(
                "DELETE FROM employee WHERE first_name = ? AND last_name = ?",
                [firstName, lastName],
                (err) =>{
                  if (err) throw err;
                  console.log("EMPLOYEE TERMINATED - BRUTAL!!💀");
                  promptUser();
                }
              );
            });
        break;
        case "Update employee role":
          connection.query("SELECT * FROM employee", (err, employees) => {
            if (err) throw err;
            const employeeChoices = employees.map((employee) => `${employee.first_name} ${employee.last_name}`
            );
            inquirer
            .prompt([
              {
                type: "list",
                name: "employee",
                message: "Please select the employee you would like to update!"
                choices: employeeChoices,
              },
            ])
            .then((answer) => {
              const [firstName, lastName] = answer.employee.split(" ");
              connection.query(
                "UPDATE FROM employee WHERE first_name = ? AND last_name = ?",
                [firstName, lastName],
                (err) =>{
                  if (err) throw err;
                  console.log("EMPLOYEE UPDATED - GREAT JOB!!🍎");
                  promptUser();
                }
              );
            });
          break;
        case "Update employee manager":
          connection.query("SELECT * FROM employee", (err, employees) => {
            if (err) throw err;
            const employeeChoices = employees.map((employee) => `${employee.first_name} ${employee.last_name}`
            );
            inquirer
            .prompt([
              {
                type: "list",
                name: "employee",
                message: "Please select the employee you would like to update!"
                choices: employeeChoices,
              },
            ])
            .then((answer) => {
              const [firstName, lastName] = answer.employee.split(" ");
              connection.query(
                "UPDATE FROM employee WHERE first_name = ? AND last_name = ?",
                [firstName, lastName],
                (err) =>{
                  if (err) throw err;
                  console.log("EMPLOYEE UPDATED - GREAT JOB!!🍎");
                  promptUser();
                }
              );
            });
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