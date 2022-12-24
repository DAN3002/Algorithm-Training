SELECT 
    CAST(
        SQRT(
            POWER(MIN(LAT_N) - MAX(LAT_N), 2) + POWER(MIN(LONG_W) - MAX(LONG_W), 2)
        ) AS DECIMAL(16,4))
FROM STATION;
