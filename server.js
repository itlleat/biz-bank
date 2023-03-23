const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const table = require('console.table');
// const connection = require('./routes/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Connect to database
const connection = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: 'your_new_password',
    database: 'departments_db'
  },
  console.log(`Connected to the departments_db database.`)
);


async function start () {
  const connection = mysql.createConnection;

  // console.log('Initializing the app......')
  // await connection();
  // console.log('Connected to database');
  // try {
    const { choice } = await inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Terminate an employee',
          'View employee salaries',
          'View company expenses',
          'View company profits',
          'View company cashflow',
          'View company projections',
          'Exit'
        ]
      }
    ]);


    switch (choice) {
      case 'View all departments':
        try {
          const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'your_new_password',
            database: 'departments_db'
          });
          const [deptRows] = await connection.query('SELECT * FROM departments');
          console.table(deptRows);
        } catch (err) {
          console.error(`Error viewing departments: ${err}`);
          break;
        }
    };


    switch (choice) {
      case 'View all roles':
        try {
          const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'your_new_password',
            database: 'departments_db'
          });
          const [roleRows] = await connection.query('SELECT roles.id, roles.title, departments.name AS department, roles.salary FROM roles INNER JOIN departments ON roles.department_id = departments.id');
         console.table(roleRows);
        } catch (err) {
          console.error(`Error viewing departments: ${err}`);
          break;
        }
    };


    switch (choice) {
      case 'View all employees':
        try {
          const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'your_new_password',
            database: 'departments_db'
          });
          const [empRows] = await connection.query('SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, roles.salary, CONCAT(managers.first_name, " ", managers.last_name) AS manager FROM employees INNER JOIN roles ON employees.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id LEFT JOIN employees managers ON employees.manager_id = managers.id');
          console.table(empRows);
        } catch (err) {
          console.error(`Error viewing departments: ${err}`);
          break;
        }
    };


    switch (choice) {
      case 'Add a department':
        try {
          const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'your_new_password',
            database: 'departments_db'
          });
          const { deptName } = await inquirer.prompt([
            {
              type: 'input',
              name: 'deptName',
              message: 'Enter the name of the new department:'
            }
          ]);
          await connection.query('INSERT INTO departments SET ?', { name: deptName });
          console.log(`Added ${deptName} department`);
        } catch (err) {
          console.error(`Error viewing departments: ${err}`);
          break;
        }
    };


    switch (choice) {
      case 'Add a role':
        try {
          const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'your_new_password',
            database: 'departments_db'
          });
          const [deptRowsForRoles] = await connection.query('SELECT * FROM departments');
          const deptChoices = deptRowsForRoles.map(dept => ({ name: dept.name, value: dept.id }));
          const { roleTitle, roleSalary, roleDept } = await inquirer.prompt([
            {
              type: 'input',
              name: 'roleTitle',
              message: 'Enter the title of the new role:'
            },
            {
              type: 'input',
              name: 'roleSalary',
              message: 'Enter the salary for the new role:'
            },
            {
              type: 'list',
              name: 'roleDept',
              message: 'Choose the department for the new role:',
              choices: deptChoices
            }
          ]);
          await connection.query('INSERT INTO roles SET ?', { title: roleTitle, salary: roleSalary, department_id: roleDept });
          console.log(`Added ${roleTitle} role`);
        } catch (err) {
          console.error(`Error viewing departments: ${err}`);
          break;
        }
    };


    switch (choice) {
      case 'Add an employee':
        try {
          const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'your_new_password',
            database: 'departments_db'
          });
          const [roleRowsForEmps] = await connection.query('SELECT * FROM roles');
          const roleChoices = roleRowsForEmps.map(role => ({ name: role.title, value: role.id }));
          const [empRowsForMgrs] = await connection.query('SELECT * FROM employees WHERE manager_id IS NULL');
          const mgrChoices = empRowsForMgrs.map(mgr => ({ name: `${mgr.first_name} ${mgr.last_name}`, value: mgr.id }));
          const { roleTitle, roleSalary, roleDept, empFirstName, empLastName } = await inquirer.prompt([
            {
              type: 'list',
              name: 'roleTitle',
              message: 'Please select the title for the new employee',
              choices: roleChoices
            },
            {
              type: 'input',
              name: 'roleSalary',
              message: 'Please enter the salary for the new employee:'
            },
            {
              type: 'list',
              name: 'roleDept',
              message: 'Please choose a department for the new employee',
              choices: deptChoices
            },
            {
              type: 'input',
              name: 'empFirstName',
              message: 'Please enter the first name of the new employee:'
            },
            {
              type: 'input',
              name: 'empLastName',
              message: 'Please enter the last name of the new employee:'
            },
            {
              type: 'list',
              name: 'empMgr',
              message: 'Please select a manager for the new employee:',
              choices: mgrChoices
            }
          ]);
          await connection.query('INSERT INTO roles SET ?', { title: roleTitle, salary: roleSalary, department_id: roleDept });
          console.log(`Added ${roleTitle} role`);
        } catch (err) {
          console.error(`Error viewing departments: ${err}`);
          break;
        }
    };


    switch (choice) {
      case 'Update Employee Role':
        try {
          const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'your_new_password',
            database: 'departments_db'
          });
          const [empRows] = await connection.query('SELECT * FROM employees');
          const empChoices = empRows.map(emp => ({ name: `${emp.first_name} ${emp.last_name}`, value: emp.id }));
          const [roleRows] = await connection.query('SELECT * FROM roles');
          const roleChoices = roleRows.map(role => ({ name: role.title, value: role.id }));
          const { roleTitle, roleSalary, roleDept, empFirstName, empLastName } = await inquirer.prompt([
            {
              type: 'list',
              name: 'empToUpdate',
              message: 'Please select an employee to update:',
              choices: 'empChoices'
            },
            {
              type: 'list',
              name: 'newRole',
              message: 'Please select a new role for the employee:',
              choices: roleChoices
            }
          ]);
          await connection.query('UPDATE employees SET role_id = ? WHERE id = ?', [newRole, empToUpdate]);
          console.log(`Employee ID ${empToUpdate} has been transferred to new ID ${newRole}.`);
        } catch (err) {
          console.error(`Error viewing departments: ${err}`);
          break;
        }
    };


    switch (choice) {
      case 'Terminate an employee':
        try {
          const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'your_new_password',
            database: 'departments_db'
          });
          const [empRows] = await connection.query('SELECT * FROM employees');
          const empChoices = empRoles.map(emp => ({ name: emp.first_name + ' ' + emp.last_name, value: emp.id }));
          const { empId } = await inquirer.prompt([
            {
              type: 'list',
              name: 'empId',
              message: 'SELECT AN EMPLOYEE TO TERMINATE 🤯❌💀',
              choices: empChoices
            },
          ]);
          await connection.query('DELETE FROM employees WHERE id = ?', [empId]);
          console.log(`⚰️💀🀹!!!EMPLOYEE DESTROYED!!!🀹💀⚰️`);
        } catch (err) {
          console.error(`Error viewing departments: ${err}`);
          break;
        }
    };


    switch (choice) {
      case 'View employee salaries':
        try {
          const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'your_new_password',
            database: 'departments_db'
          });
          const [salaryRows] = await connection.query('SELECT CONCAT(first_name," ", last_name) AS name, salary FROM employees INNER JOIN roles ON employees.role_id = roles.id');
          console.table(salaryRows);
        } catch (err) {
          console.error(`Error viewing departments: ${err}`);
          break;
        }
    };


    switch (choice) {
      case 'View company expenses':
        try {
          const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'your_new_password',
            database: 'departments_db'
          });
          const [expenseRows] = await connection.query('SELECT SUM(salary) AS total_expenses FROM roles');
          console.log(`Total expenses: ${expenseRows[0].total_expenses}`);
        } catch (err) {
          console.error(`Error viewing departments: ${err}`);
          break;
        }
    };


    switch (choice) {
      case 'View company profits 💸🤑🧧':
        try {
          const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'your_new_password',
            database: 'departments_db'
          });
          const [revenueRows] = await connection.query('SELECT SUM(salary) AS total_revenue FROM roles');
          const [revenueRows2] = await connection.query('SELECT SUM(salary) AS total_expenses FROM roles');
          const profit = revenueRows[0].total_revenue - expenseRows2[0].total_expenses;
          console.log(`TOTAL PROFITS BABY ${profit}`);
        } catch (err) {
          console.error(`Error viewing departments: ${err}`);
          break;
        }
    };

    
      switch (choice) {
        case 'View company cashflow':
          try {
            const connection = await mysql.createConnection({
              host: '127.0.0.1',
              user: 'root',
              password: 'your_new_password',
              database: 'departments_db'
            });
            const [cashRows] = await connection.query('SELECT * FROM cashFlow');
            console.table(cashRows);
          } catch (err) {
            console.error(`Error viewing departments: ${err}`);
            break;
          }
      };

      {
        switch (choice) {
          case 'View company projections':
            try {
              const connection = await mysql.createConnection({
                host: '127.0.0.1',
                user: 'root',
                password: 'your_new_password',
                database: 'departments_db'
              });
              const [projRows] = await connection.query('SELECT * FROM projections');
              console.table(projRows);
            } catch (err) {
              console.error(`Error viewing departments: ${err}`);
              break;
            }
        };

        {
          switch (choice) {
            case 'Exit':
              try {
                const connection = await mysql.createConnection({
                  host: '127.0.0.1',
                  user: 'root',
                  password: 'your_new_password',
                  database: 'departments_db'
                });
                const [deptRows] = await connection.query('SELECT * FROM departments');
                console.table(deptRows);
              } catch (err) {
                console.error(`Error viewing departments: ${err}`);
                break;
              }
          }
        };
      
      };  
      // } catch (error) {
      //   console.log(`Error: ${error}`);
      };    


    start();