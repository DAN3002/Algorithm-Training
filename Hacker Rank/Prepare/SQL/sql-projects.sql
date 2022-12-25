SELECT MIN(start_date), MAX(end_date)
FROM (
    SELECT start_date, end_date,
        SUM(flag) OVER(ORDER BY start_date) as grp
    FROM (
        SELECT task_id, start_date, end_date,
            CASE
                WHEN LAG(end_date) OVER(ORDER BY start_date) = start_date THEN 0
                ELSE 1
            END AS flag
        FROM Projects
    ) tmp1
) tmp2
GROUP BY grp
ORDER BY DATEDIFF(dd, MIN(start_date), MAX(end_date)), MIN(start_date);
