SELECT DISTINCT CITY
FROM STATION
WHERE RIGHT(CITY, 1) IN ('a', 'e', 'i', 'o', 'u')
AND LEFT(CITY, 1) IN ('a', 'e', 'i', 'o', 'u');
