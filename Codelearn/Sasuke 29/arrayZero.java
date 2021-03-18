int arrayZero(String[] s)
{
    BigInteger ZERO = BigInteger.ZERO;

    BigInteger a = BigInteger.ZERO;
    BigInteger b = BigInteger.ZERO;
    BigInteger c = BigInteger.ZERO;
    BigInteger d = BigInteger.ZERO;

    BigInteger s0 = new BigInteger(s[0]);
    BigInteger s1 = new BigInteger(s[1]);
    BigInteger s2 = new BigInteger(s[2]);
    BigInteger s3 = new BigInteger(s[3]);

    int count = 0;
    while(true)
    {
        if(s0.equals(ZERO) && s1.equals(ZERO) && s2.equals(ZERO) && s3.equals(ZERO)) return count;

        a = s0.subtract(s1);
        b = s1.subtract(s2);
        c = s2.subtract(s3);
        d = s3.subtract(s0);

        s0 = a.abs();
        s1 = b.abs();
        s2 = c.abs();
        s3 = d.abs();

        count++;
    }
}

