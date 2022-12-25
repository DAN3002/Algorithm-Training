DECLARE @len  INT = 20;
WHILE @len <> 0
    BEGIN PRINT (REPLICATE('* ', @len));
    SET @len = @len - 1;
END
