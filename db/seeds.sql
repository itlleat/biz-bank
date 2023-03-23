-- Departments
INSERT INTO departments (name) VALUES 
('Sales'), 
('Marketing'), 
('Human Resources'),
('IT');

-- Roles
INSERT INTO roles (title, salary, department_id) VALUES 
('Sales Manager', 70000.00, 1),
('Sales Representative', 50000.00, 1),
('Marketing Manager', 65000.00, 2),
('Marketing Coordinator', 40000.00, 2),
('HR Manager', 75000.00, 3),
('HR Coordinator', 45000.00, 3),
('IT Manager', 80000.00, 4),
('IT Specialist', 55000.00, 4);

-- Expenses
INSERT INTO expenses (department_id, expensesType, expensesAmount, expensesDate) VALUES 
(1, 'Travel', 1500.00, '2022-01-15'),
(1, 'Office Supplies', 500.00, '2022-02-05'),
(2, 'Advertising', 2500.00, '2022-03-10'),
(2, 'Market Research', 3000.00, '2022-04-25'),
(3, 'Training', 1000.00, '2022-05-30'),
(3, 'Employee Benefits', 3500.00, '2022-06-15'),
(4, 'Software Licenses', 2000.00, '2022-07-20'),
(4, 'Hardware Upgrades', 4500.00, '2022-08-05');

-- Profit
INSERT INTO profit (department_id, profitType, profitAmount) VALUES 
(1, 'Sales', 200000.00),
(1, 'Services', 50000.00),
(2, 'Product Sales', 75000.00),
(2, 'Consulting', 100000.00),
(3, 'HR Consulting', 10000.00),
(3, 'Training Services', 25000.00),
(4, 'IT Services', 125000.00),
(4, 'Product Development', 50000.00);

-- Cash Flow
INSERT INTO cashFlow (department_id, cashFlowType, cashFlowAmount) VALUES 
(1, 'Inflows', 300000.00),
(1, 'Outflows', 100000.00),
(2, 'Inflows', 200000.00),
(2, 'Outflows', 100000.00),
(3, 'Inflows', 150000.00),
(3, 'Outflows', 75000.00),
(4, 'Inflows', 250000.00),
(4, 'Outflows', 150000.00);

-- Projections
INSERT INTO projections (department_id, projectionsType, projectionsAmount) VALUES 
(1, 'Sales', 400000.00),
(1, 'Services', 100000.00),
(2, 'Product Sales', 125000.00),
(2, 'Consulting', 150000.00),
(3, 'HR Consulting', 20000.00),
(3, 'Training Services', 50000.00),
(4, 'IT Services', 200000.00),
(4, 'Product Development', 75000.00);

INSERT INTO managers (department_id, name, salary, hireDate) VALUES 
(1, 'John Smith', 90000.00, '2020-01-01'),
(2, 'Jane Doe', 95000.00, '2021-01-01');

INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES 
(1, 'Bob', 'Johnson', 2, 1),
(2, 'Sarah', 'Lee', 2, 1),
(3, 'Tom', 'Brown', 4, 2),
(4, 'Emily', 'Davis', 4, 2);

-- salaries table
INSERT INTO salaries (salariesAmount, role_id, employee_id, manager_id)
VALUES
(55000.00, 1, 1, NULL),
(65000.00, 2, 2, 1),
(75000.00, 3, 3, 1),
(60000.00, 2, 4, 2),
(80000.00, 3, 5, 2),
(70000.00, 3, 6, 2),
(60000.00, 2, 7, 3),
(85000.00, 3, 8, 3),
(75000.00, 3, 9, 3);

-- revenue table
INSERT INTO revenue (department_id, revenueType, revenueAmount)
VALUES
(1, 'Sales', 1000000.00),
(2, 'Marketing', 800000.00),
(3, 'Operations', 1200000.00),
(4, 'HR', 500000.00),
(5, 'Finance', 1500000.00);

-- employee_revenue table
INSERT INTO employee_revenue (employee_id, revenueAmount)
VALUES
(1, 50000.00),
(2, 65000.00),
(3, 75000.00),
(4, 60000.00),
(5, 80000.00),
(6, 70000.00),
(7, 60000.00),
(8, 85000.00),
(9, 75000.00);

-- manager_revenue table
INSERT INTO manager_revenue (manager_id, revenueType, revenueAmount)
VALUES
(1, 'Sales', 500000.00),
(1, 'Marketing', 300000.00),
(2, 'Operations', 600000.00),
(3, 'HR', 400000.00),
(3, 'Finance', 750000.00);






    