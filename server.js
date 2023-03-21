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
        const mgrChoices = empRowsForMgrs.map(mgr => ({ name: role.title, value: role.id });
        const { roleTitle, roleSalary, roleDept, empFirstName, empLastName } = await inquirer.prompt ([
          {
            type:'list',
            name:'empDep',
            message:'Please select which department you would like to add an employee to',
            choices: deptChoices
          },
          {
            type:
            name:
            message:
          },
          {
            type:
            name:
            message:
          },
          {
            type:
            name:
            message:
          },
          {
            type:
            name:
            message:            
          }
        ]);
        await connection.query('INSERT INTO roles SET ?', { title: roleTitle, salary: roleSalary, department_id: roleDept });
        console.log(`Added ${roleTitle} role`);
        break;
      case 'Update Employee Role':
        const [roleRowsForEmps] = await connection.query('SELECT * FROM roles');
        const roleChoices = roleRowsForEmps.map(role => ({ name: role.title, value: role.id }));
        const [empRowsForMgrs] = await connection.query('SELECT * FROM employees WHERE manager_id IS NULL');
        const mgrChoices = empRowsForMgrs.map(mgr => ({ name: role.title, value: role.id });
        const { roleTitle, roleSalary, roleDept, empFirstName, empLastName } = await inquirer.prompt ([
          {
            type:
            name:
            message:
          },
          {
            type:
            name:
            message:
          },
          {
            type:
            name:
            message:
          },
          {
            type:
            name:
            message:
          },
          {
            type:
            name:
            message:            
          }
        ]);
        await connection.query('INSERT INTO roles SET ?', { title: roleTitle, salary: roleSalary, department_id: roleDept });
        console.log(`Added ${roleTitle} role`);
        break;
        case 'Terminate an employee':
          const [empRows] = await connection.query('SELECT * FROM employees');
          const empChoices = empRoles.map(emp => ({ `${emp.first_name} ${emp.last_name}`, value:emp.id }));
          const { empId } = await inquirer.prompt ([
            {
              type:'list'
              name:'empId'
              message:'SELECT AN EMPLOYEE TO TERMINATE 🤯❌💀',
              choices: empChoices
            },
          ]);
          await connection.query('DELETE FROM employees WHERE id = ?', [empId]);
          console.log(`⚰️💀🀹!!!EMPLOYEE DESTROYED!!!🀹💀⚰️`);
          break;
          case 'View employee salaries':
          const [salaryRows] = await connection.query('SELECT CONCAT(first_name," ", last_name) AS name, salary FROM employees INNER JOIN roles ON employees.role_id = roles.id');
          table(salaryRows);
          break;
            case 'View company expenses':
              const [expenseRows] = await connection.query('SELECT SUM(salary) AS total_expenses FROM roles');
              console.log(`Total expenses: ${expenseRows[0].total_expenses}`);
              break;
              case 'View company profits 💸🤑🧧':
                const [revenueRows] = await connection.query('SELECT SUM(salary) AS total_revenue FROM roles');
                const [revenueRows2] = await connection.query('SELECT SUM(salary) AS total_expenses FROM roles');
                const profit = revenueRows[0].total_revenue - expenseRows2[0].total_expenses;
                console.log(`TOTAL PROFITS BABY ${profit}`);
                break;
                case 'View company cashflow':
                  const [cashRows] = await connection.query('SELECT * FROM cashFlow');
                  table(cashRows);
                  break;
                  case 'View company projections':
                    const [projRows] = await connection.query('SELECT * FROM projections');
                    table(projRows);
                    break;
                    case 'Exit':
                      const [deptRows] = await connection.query('SELECT * FROM departments');
                      table(deptRows);
                      break;