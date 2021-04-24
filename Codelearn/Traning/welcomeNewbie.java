SELECT q.names
FROM
(
    (SELECT name AS names, 'A' AS count
    FROM pr_department
    ORDER BY date_joined DESC
    LIMIT 5)
    UNION ALL
    (SELECT name AS names, 'B' AS count
    FROM it_department
    ORDER BY date_joined DESC
    LIMIT 5)
    UNION ALL
    (SELECT name AS names, 'C' AS count
    FROM hr_department
    ORDER BY date_joined DESC
    LIMIT 5) 
) AS q
ORDER BY q.count, q.names;