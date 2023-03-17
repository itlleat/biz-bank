-- GIVEN a command-line application that accepts user input
-- WHEN I start the application
-- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
-- WHEN I choose to view all departments
-- THEN I am presented with a formatted table showing department names and department ids
-- WHEN I choose to view all roles
-- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
-- WHEN I choose to view all employees
-- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
-- WHEN I choose to add a department
-- THEN I am prompted to enter the name of the department and that department is added to the database
-- WHEN I choose to add a role
-- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
-- WHEN I choose to add an employee
-- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
-- WHEN I choose to update an employee role
-- THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

INSERT INTO departments (departmentID, name) VALUES
(1, 'Manufacturing'),
(2, 'Research and Development'),
(3, 'Genetic Engineering'),
(4, 'Mutational Research'),
(5, 'Data Security'),
(6, 'Physical Security'),
(7, 'Law Team');

INSERT INTO salaries (salariesID, departmentID, employeesID, managersID, salaryType, salarymount, salaryDate) VALUES
(1, 1, 1, 1, 'Salary', 95000, '2023-02-09'),
(2, 2, 1, 2, 'Contract', 115000, '2022-08-14'),
(1, 3, 2, 3, 'Salary', 160000, '2021-07-04'),
(2, 4, 4, 1, 'Contract', 480000, '2023-03-14'),
(1, 5, 7, 1, 'Salary', 210000, '2022-04-20'),
(1, 6, 4, 2, 'Salary', 25000,'2022-09-10'),
(3, 7, 1, 1, 'Retainer', 3,000,000, '2016-03-28');

INSERT INTO expenses (expensesID, departmentID, employeesID, managersID, expensesType, expensesAmount, expensesDate) VALUES
(1, 1, 3, 2),
(2, 2, 2, 1),
(3, 3, 5, 3),
(4, 4, 1, 3),
(5, 5, 6, 1),
(6, 6, 4, 1),
(7, 7, 7, 2);

INSERT INTO profit (profitID, departmentID) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7);

INSERT INTO cashFlow (cashFlowID, departmentID) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7);

INSERT INTO revenue (revenueID, departmentID, revenueType, revenueAmount) VALUES
(1, ''),
(2, ''),
(3, ''),
(4, ''),
(5, ''),
(6, ''),
(7, '');

INSERT INTO projections (projectionsID, departmentID, employeesID, name, projectionsType, projectionsAmount) VALUES
(1, ''),
(2, ''),
(3, ''),
(4, ''),
(5, ''),
(6, ''),
(7, '');

INSERT INTO employees (employeesID, name, departmentID,) VALUES
(1, ''),
(2, ''),
(3, ''),
(4, ''),
(5, ''),
(6, ''),
(7, '');

INSERT INTO managers (managersID, name, departmentID) VALUES
(1, ''),
(2, ''),
(3, ''),
(4, ''),
(5, ''),
(6, ''),
(7, '');

    