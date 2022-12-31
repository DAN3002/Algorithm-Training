DECLARE @len  INT = 1;
WHILE @len <= 20
    BEGIN PRINT (REPLICATE('* ', @len));
    SET @len = @len + 1;
END
