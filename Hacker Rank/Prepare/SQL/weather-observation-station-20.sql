DECLARE @len INT
SET @len = (SELECT COUNT(*) FROM STATION)

SELECT CAST (
    AVG(LAT_N)
    AS DECIMAL(16, 4)
)
FROM (
    SELECT LAT_N, ROW_NUMBER() OVER (ORDER BY LAT_N) AS row_num
    FROM STATION
) tmp
WHERE
    (@len % 2 = 0  AND tmp.row_num IN (@len / 2, @len/2 + 1))
    OR
    (@len % 2 = 1 AND tmp.row_num = (@len + 1) / 2)
