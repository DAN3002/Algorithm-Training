SELECT 
    CAST(SUM(LAT_N) AS DECIMAL(16,2)), 
    CAST(SUM(LONG_W) AS DECIMAL(16,2)) 
FROM STATION;
