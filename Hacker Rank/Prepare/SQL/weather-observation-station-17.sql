SELECT CAST(LONG_W AS DECIMAL(16, 4))
FROM STATION
WHERE LAT_N = (
    SELECT MIN(LAT_N)
    FROM STATION
    WHERE LAT_N > 38.7780
);
