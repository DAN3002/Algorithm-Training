SELECT DISTINCT CITY
FROM STATION
WHERE RIGHT(CITY, 1) NOT IN ('a', 'e', 'i', 'o', 'u')
AND LEFT(CITY, 1) NOT IN ('a', 'e', 'i', 'o', 'u');
