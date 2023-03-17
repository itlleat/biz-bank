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


-- Fixed the typo in the revenue table (revenueDate column name).
-- Made the expensesType column NOT NULL.
-- Renamed the CONSTRAINT definitions in the salaries table to have unique names.
-- Removed the employees column from the employees table.
-- Added ON DELETE SET NULL to the department foreign key constraint in the employees table.
-- Removed the managersID column from the managers table.
-- Added ON DELETE SET NULL to the employee foreign key constraint in the managers table.


DROP DATABASE IF EXISTS departments_db;

CREATE DATABASE departments_db;

USE departments_db;

CREATE TABLE
    departments (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL
    );

CREATE TABLE
    revenue (
        revenueID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        revenueType VARCHAR(45) NOT NULL,
        revenueAmount DECIMAL (10, 2),
        revenueDate DATE,
        departmentsID INT,
        FOREIGN KEY (departmentsID),
        REFERENCES departments(id)
    );

CREATE TABLE
    expenses (
        expensesID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        departmentsID INT,
        expensesType VARCHAR(45) NOT NULL,
        expensesAmount DECIMAL(10, 2),
        expensesDate DATE,
        FOREIGN KEY (departmentsID),
        REFERENCES departments(id)
    );

CREATE TABLE
    profit (
        profitID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        departmentsID INT,
        profitType VARCHAR(45),
        profitAmount DECIMAL(10, 2),
        FOREIGN KEY (departmentsID),
        REFERENCES departments(id)
    ),
CREATE TABLE
    cashFlow (
        cashFlowID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        departmentsID INT,
        cashFlowType VARCHAR(45),
        cashFlowAmount DECIMAL(10, 2),
        FOREIGN KEY (departmentsID),
        REFERENCES departments(id)
    ),
CREATE TABLE
  salaries (
        salariesID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        salariesAmount DECIMAL(10, 2),
        departmentID INT,
        employeeID INT,
        managerID INT,
        CONSTRAINT FK_salaries_department FOREIGN KEY (departmentID)
        REFERENCES departments(id),
        CONSTRAINT FK_salaries_employee FOREIGN KEY (employeeID)
        REFERENCES employees(id),
        CONSTRAINT FK_salaries_manager FOREIGN KEY (managerID)
        REFERENCES managers(id)
  );

CREATE TABLE
    projections (
        projectionsID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        departmentsID INT,
        projectionsType VARCHAR(45),
        projectionsAmount DECIMAL(10, 2),
        FOREIGN KEY (departmentsID),
        REFERENCES departments(id)
    ),
CREATE TABLE
    employees (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL,
        departmentID INT,
        FOREIGN KEY (departmentID) 
        REFERENCES departments(id) ON DELETE SET NULL
    );

CREATE TABLE
    managers (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL,
        departmentID INT,
        employeeID INT,
        CONSTRAINT FK_managers_department FOREIGN KEY (departmentID),
        REFERENCES departments(id),
        CONSTRAINT FK_managers_employee FOREIGN KEY (employeeID) 
        REFERENCES employees(id) ON DELETE SET NULL
    );