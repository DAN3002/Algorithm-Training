SELECT COUNTRY.CONTINENT, ROUND(AVG(CITY.Population), 0)
FROM CITY
JOIN COUNTRY ON CITY.COUNTRYCODE = COUNTRY.CODE
GROUP BY COUNTRY.CONTINENT;
