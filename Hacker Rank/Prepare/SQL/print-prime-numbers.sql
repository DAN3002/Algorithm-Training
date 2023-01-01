WITH cte(num) AS (
    SELECT 2
    UNION ALL
    SELECT num + 1 FROM cte
    WHERE num + 1 < 1000
)

SELECT STRING_AGG(a.num, '&')
FROM cte a
WHERE NOT EXISTS (
    SELECT *
    FROM cte b
    WHERE a.num % b.num = 0 AND a.num != b.num
)
OPTION (MAXRECURSION 1000)
