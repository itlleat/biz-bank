SELECT departments.name AS department,
       COALESCE(SUM(revenue.revenueAmount), 0) AS total_revenue,
       COALESCE(SUM(expenses.expensesAmount), 0) AS total_expenses,
       COALESCE(SUM(profit.profitAmount), 0) AS total_profit,
       COALESCE(SUM(cashFlow.cashFlowAmount), 0) AS total_cash_flow,
       COUNT(DISTINCT employees.id) AS total_employees,
       COUNT(DISTINCT managers.id) AS total_managers,
       COALESCE(SUM(employee_revenue.revenueAmount), 0) AS total_employee_revenue,
       COALESCE(SUM(manager_revenue.revenueAmount), 0) AS total_manager_revenue,
       COALESCE(SUM(salaries.salariesAmount), 0) AS total_salaries
FROM departments
LEFT JOIN revenue ON departments.id = revenue.department_id
LEFT JOIN expenses ON departments.id = expenses.department_id
LEFT JOIN profit ON departments.id = profit.department_id
LEFT JOIN cashFlow ON departments.id = cashFlow.department_id
LEFT JOIN roles ON roles.department_id = departments.id
LEFT JOIN employees ON employees.role_id = roles.id
LEFT JOIN salaries ON employees.id = salaries.employee_id
LEFT JOIN
    (SELECT role_id, SUM(salariesAmount) AS salariesAmount
     FROM salaries
     GROUP BY role_id) AS employee_salaries ON employees.role_id = employee_salaries.role_id
LEFT JOIN managers ON managers.department_id = departments.id
LEFT JOIN employee_revenue ON employee_revenue.employee_id = employees.id
LEFT JOIN manager_revenue ON manager_revenue.manager_id = managers.id
GROUP BY departments.id, departments.name
ORDER BY departments.id;





