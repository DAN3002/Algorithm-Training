String remainFib(String number)
{
        long f1 = 1, f2 = 2, f3 = 3;
        long n = Long.parseLong(number);
        while (n > 0)
        {
            f1 = f2;
            f2 = f3;
            f3 = f1 + f2;
            n -= (f3 - f2 - 1);
        }
        n +=  (f3 - f2 - 1);
 
        return (f2 + n) + "";
}
 