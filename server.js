const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const { table } = require('console-table-printer');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'company_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function startApp() {
  try {
    await connection.connect();
    console.log('Connected to database');

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
          'Exit'
        ]
      }
    ]);

    switch (choice) {
      case 'View all departments':
        const [deptRows] = await connection.query('SELECT * FROM departments');
        table(deptRows);
        break;
      case 'View all roles':
        const [roleRows] = await connection.query('SELECT roles.id, roles.title, departments.name AS department, roles.salary FROM roles INNER JOIN departments ON roles.department_id = departments.id');
        table(roleRows);
        break;
      case 'View all employees':
        const [empRows] = await connection.query('SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, roles.salary, CONCAT(managers.first_name, " ", managers.last_name) AS manager FROM employees INNER JOIN roles ON employees.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id LEFT JOIN employees managers ON employees.manager_id = managers.id');
        table(empRows);
        break;
      case 'Add a department':
        const { deptName } = await inquirer.prompt([
          {
            type: 'input',
            name: 'deptName',
            message: 'Enter the name of the new department:'
          }
        ]);
        await connection.query('INSERT INTO departments SET ?', { name: deptName });
        console.log(`Added ${deptName} department`);
        break;
      case 'Add a role':
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
        break;
      case 'Add an employee':
        const [roleRowsForEmps] = await connection.query('SELECT * FROM roles');
        const roleChoices = roleRowsForEmps.map(role => ({ name: role.title, value: role.id }));
        const [empRowsForMgrs] = await connection.query('SELECT * FROM employees WHERE manager_id IS NULL');
        const mgrChoices = empRowsForMgrs.map(mgr