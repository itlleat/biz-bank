DROP DATABASE IF EXISTS departments_db;

CREATE DATABASE departments_db;

USE departments_db;

CREATE TABLE
    departments (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL
    );

CREATE TABLE
    role (
        id INT PRIMARY KEY,
        title VARCHAR(30),
        salary DECIMAL,
        department_id INT,
        FOREIGN KEY (department_id)
        REFERENCES departments(id)
    );

CREATE TABLE
    expenses (
        expensesID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        departmentsID INT,
        expensesType VARCHAR(45) NOT NULL,
        expensesAmount DECIMAL(10, 2),
        expensesDate DATE,
        FOREIGN KEY (departmentsID)
        REFERENCES departments(id)
    );

CREATE TABLE
    profit (
        profitID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        departmentsID INT,
        profitType VARCHAR(45),
        profitAmount DECIMAL(10, 2),
        FOREIGN KEY (departmentsID)
        REFERENCES departments(id)
    );
CREATE TABLE
    cashFlow (
        cashFlowID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        departmentsID INT,
        cashFlowType VARCHAR(45),
        cashFlowAmount DECIMAL(10, 2),
        FOREIGN KEY (departmentsID)
        REFERENCES departments(id)
    );

CREATE TABLE
    projections (
        projectionsID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        departmentsID INT,
        projectionsType VARCHAR(45),
        projectionsAmount DECIMAL(10, 2),
        FOREIGN KEY (departmentsID)
        REFERENCES departments(id)
    );
CREATE TABLE
    employees (
        id INT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT,
        manager_id INT,
        CONSTRAINT FK_employees_role FOREIGN KEY (role_id) 
        REFERENCES role(id) ON DELETE SET NULL,
        CONSTRAINT FK_employees_manager FOREIGN KEY (manager_id) 
        REFERENCES employees(id) ON DELETE SET NULL
    );
    CREATE TABLE salaries (
  salariesID INT PRIMARY KEY,
  salariesAmount DECIMAL(10, 2),
  role_id INT,
  employeeID INT,
  manager_id INT,
  CONSTRAINT FK_salaries_role FOREIGN KEY (role_id) REFERENCES role(id),
  CONSTRAINT FK_salaries_employee FOREIGN KEY (employeeID) REFERENCES employees(id),
  CONSTRAINT FK_salaries_manager FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);