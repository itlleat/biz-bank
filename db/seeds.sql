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

INSERT INTO departments (name) VALUES
(1, 'Manufacturing'),
(2, 'Research and Development'),
(3, 'Genetic Engineering'),
(4, 'Mutational Research'),
(5, 'Data Security'),
(6, 'Physical Security'),
(7, 'Law Team');

INSERT INTO salaries (departmentID, employeesID, managersID, salaryType, salarymount, salaryDate) VALUES
(1, 1, 1, 'Salary', 95000, '2023-02-09'),
(2, 1, 2, 'Contract', 115000, '2022-08-14'),
(3, 2, 3, 'Salary', 160000, '2021-07-04'),
(4, 4, 1, 'Contract', 480000, '2023-03-14'),
(5, 7, 1, 'Salary', 210000, '2022-04-20'),
(6, 4, 2, 'Salary', 25000,'2022-09-10'),
(7, 1, 1, 'Retainer', 3000000, '2016-03-28');

INSERT INTO expenses (departmentID, employeesID, managersID, expensesType, expensesAmount, expensesDate) VALUES
 (1, 3, 2, 'Type 1', 500, '2023-03-01'),
 (2, 2, 1, 'Type 2', 1000, '2023-03-02'),
 (3, 5, 3, 'Type 3', 1500, '2023-03-03'),
 (4, 1, 3, 'Type 4', 2000, '2023-03-04'),
 (5, 6, 1, 'Type 5', 2500, '2023-03-05'),
 (6, 4, 1, 'Type 6', 3000, '2023-03-06'),
 (7, 7, 2, 'Type 7', 3500, '2023-03-07');

INSERT INTO profit (departmentID, profitType, profitAmount) VALUES
(1, 'profit type #', 1000),
(2, 'profit type #', 1000),
(3, 'profit type #', 1000),
(4, 'profit type #', 1000),
(5, 'profit type #', 1000),
(6, 'profit type #', 1000),
(7, 'profit type #', 1000);

INSERT INTO cashFlow (departmentID, cashFlowType, cashFlowAmount) VALUES
(1, 'cash flow type', 1000),
(2, 'cash flow type', 1000),
(3, 'cash flow type', 1000),
(4, 'cash flow type', 1000),
(5, 'cash flow type', 1000),
(6, 'cash flow type', 1000),
(7, 'cash flow type', 1000);

INSERT INTO revenue (revenueID, departmentID, revenueType, revenueAmount, revenueDate) VALUES
(1, 1, 'Sales', 2000000, '2023-03-16'),
(2, 2, 'Grants', 500000, '2023-03-15'),
(3, 3, 'Licensing', 750000, '2023-03-14'),
(4, 4, 'Research contracts', 1000000, '2023-03-13'),
(5, 5, 'Consulting', 1250000, '2023-03-12'),
(6, 6, 'Physical security services', 250000, '2023-03-11'),
(7, 7, 'Legal fees', 500000, '2023-03-10');


INSERT INTO projections (projectionsID, departmentID, employeesID, name, projectionsType, projectionsAmount) VALUES
(1, 1, 1, 'Production', 'Sales', 2250000),
(2, 2, 2, 'Innovation', 'Grants', 750000),
(3, 3, 3, 'Research', 'Licensing', 1000000),
(4, 4, 4, 'Development', 'Research contracts', 1500000),
(5, 5, 5, 'Data security', 'Consulting', 2000000),
(6, 6, 6, 'Security', 'Physical security services', 300000),
(7, 7, 7, 'Legal', 'Legal fees', 1000000);

INSERT INTO employees (employeesID, name, departmentID,) VALUES
(1, 'John Doe', 1),
(2, 'Jane Smith', 2),
(3, 'Bob Johnson', 3),
(4, 'Emily Davis', 4),
(5, 'Mike Brown', 5),
(6, 'Karen Lee', 6),
(7, 'David Kim', 7);

INSERT INTO managers (managersID, name, departmentID) VALUES
(1, 'Susan Chen', 1),
(2, 'Mark Patel', 2),
(3, 'Jessica Lee', 3),
(4, 'Kevin Singh', 4),
(5, 'Alex Park', 5),
(6, 'Michelle Wong', 6),
(7, 'Daniel Kim', 7);

    