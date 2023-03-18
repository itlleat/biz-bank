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
(7, 'David Kim', 7),
(8, 'John Doe', 1),
(9, 'Jane Smith', 2),
(10, 'Bob Johnson', 3),
(11, 'Emily Davis', 4),
(12, 'Mike Brown', 5),
(13, 'Karen Lee', 6),
(14, 'David Kim', 7),
(15, 'John Doe', 1),
(16, 'Jane Smith', 2),
(17, 'Bob Johnson', 3),
(18, 'Emily Davis', 4),
(19, 'Mike Brown', 5),
(20, 'Karen Lee', 6),
(21, 'David Kim', 7),
(22, 'John Doe', 1),
(23, 'Jane Smith', 2),
(24, 'Bob Johnson', 3),
(25, 'Emily Davis', 4),
(26, 'Mike Brown', 5),
(27, 'Karen Lee', 6),
(28, 'David Kim', 7),
(29, 'John Doe', 1),
(30, 'Jane Smith', 2),
(31, 'Bob Johnson', 3),
(32, 'Emily Davis', 4),
(33, 'Mike Brown', 5),
(34, 'Karen Lee', 6),
(35, 'David Kim', 7),
(36, 'John Doe', 1),
(37, 'Jane Smith', 2),
(38, 'Bob Johnson', 3),
(39, 'Emily Davis', 4),
(40, 'Mike Brown', 5),
(41, 'Karen Lee', 6),
(42, 'David Kim', 7),
(43, 'John Doe', 1),
(44, 'Jane Smith', 2),
(45, 'Bob Johnson', 3),
(46, 'Emily Davis', 4),
(47, 'Mike Brown', 5),
(48, 'Karen Lee', 6),
(49, '', 7),
(50, '', 1),
(51, '', 2),
(52, '', 3),
(53, '', 4),
(54, '', 5),
(55, '', 6),
(56, '', 7),
(57, '', 1),
(58, '', 2),
(59, '', 3),
(60, '', 7);

INSERT INTO managers (managersID, name, departmentID) VALUES
(1, '', 1),
(2, '', 2),
(3, '', 3),
(4, '', 4),
(5, '', 5),
(6, '', 6),
(7, '', 7),
(8, '', 1),
(9, '', 2),
(10, '', 3),
(11, '', 4),
(12, '', 5);

    