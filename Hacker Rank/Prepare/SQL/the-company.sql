SELECT 
    c.company_code, c.founder,
    COUNT(DISTINCT l.lead_manager_code),
    COUNT(DISTINCT s.senior_manager_code),
    COUNT(DISTINCT m.manager_code),
    COUNT(DISTINCT e.employee_code)
FROM Company c
JOIN Lead_Manager l ON l.company_code = c.company_code
JOIN Senior_Manager s ON s.lead_manager_code = l.lead_manager_code
JOIN Manager m ON m.senior_manager_code = s.senior_manager_code
JOIN Employee e ON e.manager_code = m.manager_code
GROUP BY c.company_code, c.founder
ORDER BY c.company_code;
